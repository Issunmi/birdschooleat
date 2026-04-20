# 设置页面重构规格

## 1. 概念与愿景

将现有的"关于"页面重构为"设置"页面，提供用户登录功能和更多个性化设置选项。原关于内容作为页面底部的"关于"区块保留。整体设计遵循 MD3 风格，简洁现代。

## 2. 设计语言

### 颜色 (沿用现有 MD3 Token)
- Primary: `#6750A4`
- On Primary: `#FFFFFF`
- Primary Container: `#EADDFF`
- Surface: `#FFFBFE`
- Surface Container Low: `#F7F2FA`
- Surface Container: `#F3EDF7`
- Surface Container High: `#ECE6F0`
- Outline: `#79747E`

### 字体
- Noto Sans SC (中文)
- Material Symbols Rounded (图标)

### 圆角
- Settings Card: `large` (16px)
- Button: `full` (9999px)
- Input: `medium` (12px)

## 3. 布局结构

### 页面布局
```
┌─────────────────────────┐
│      Top App Bar        │
│    [←返回] 设置         │
├─────────────────────────┤
│                         │
│  ┌─────────────────┐    │
│  │   👤 用户卡片    │    │  ← 登录状态
│  │   未登录/已登录  │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │   ⚙️ 设置列表    │    │  ← 设置项
│  │   - 深色模式     │    │
│  │   - 通知设置     │    │
│  │   - 清理缓存     │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │   ℹ️ 关于我们    │    │  ← 原关于页面内容
│  └─────────────────┘    │
│                         │
├─────────────────────────┤
│      Bottom Nav         │
└─────────────────────────┘
```

## 4. 功能模块

### 4.1 用户登录模块
- GitHub OAuth 登录 (使用 giscus 关联的 GitHub 账号)
- 显示用户头像和用户名
- 登录后可在评论区发言

### 4.2 设置项
| 设置项 | 图标 | 描述 |
|--------|------|------|
| 深色模式 | dark_mode | 跟随系统/始终开启/始终关闭 |
| 通知提醒 | notifications | 开启/关闭 |
| 清理缓存 | delete_sweep | 清除本地存储的缓存 |

### 4.3 关于区块
- 应用图标和名称
- 版本信息
- 开发者信息
- 构建时间

## 5. 技术实现

### 文件结构
- `settings.html` - 新设置页面
- `about.html` - 保留原文件或合并到 settings.html
- `styles.css` - 添加设置页样式
- `settings.js` - 设置页面逻辑 (可选)

### 登录方式
使用 GitHub OAuth 通过 giscus 实现评论登录，登录后自动同步。

### 数据存储
- 用户偏好设置使用 localStorage
- 键名: `user_settings`
