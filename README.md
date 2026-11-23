# DeepTutor 站点（deeptutor 分支）

本分支托管 [DeepTutor](https://github.com/HKUDS/DeepTutor)（HKUDS 开源的终身个性化 AI 辅导系统）的**介绍站点**，通过 GitHub Pages 发布在：

> https://ykxdsn.github.io/freespace/deeptutor/

主分支（main）的知识图谱静态站点不受影响，继续通过 https://ykxdsn.github.io/freespace/ 访问。两个站点的共存由 main 分支的 `.github/workflows/deploy-pages.yml` 工作流完成：main 内容发布到站点根路径，本分支内容发布到 `/deeptutor/` 子路径。

## 为什么是介绍站

DeepTutor 是全栈应用：Next.js 前端（Node 服务器 + 服务端代理）+ Python 后端（FastAPI/uvicorn、知识库索引、LLM 调用等）。GitHub Pages 仅支持静态文件托管，无法运行其服务端，因此本分支部署静态介绍页，完整功能请按以下方式自部署：

```bash
# Docker（最快）
docker run --rm --name deeptutor -p 127.0.0.1:3782:3782 -v deeptutor-data:/app/data ghcr.io/hkuds/deeptutor:latest

# PyPI（Python 3.11–3.14 + Node.js 20.9+）
python -m pip install -U "deeptutor[full]"
deeptutor init
deeptutor start
```

更多安装方式（桌面版安装包、源码安装、CLI）见官方仓库 README 与 https://docs.deeptutor.info 。

## 目录结构

```
├── index.html    # 介绍站页面
├── assets/       # 页面截图与 Logo（来自 DeepTutor 官方仓库）
├── .nojekyll     # 禁用 Jekyll 处理
└── README.md
```

## 更新方式

同步上游更新时，替换 `assets/` 下的截图与 Logo，并更新 `index.html` 中的版本号与功能描述即可；重新推送本分支后 Pages 工作流会自动重新部署。
