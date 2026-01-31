# HeatupNavi Docs（Docusaurus）

HeatupNaviのユーザーマニュアルサイトは、Docusaurusで構築しています。

## セットアップ

```bash
npm install
```

## ローカル開発（通常）

```bash
npm run start
```

## LANでスマホ/別PCから確認する（同一Wi‑Fi）

1) 開発サーバーをLAN公開で起動します。

```bash
npm run start -- --host 0.0.0.0 --port 3000
```

2) MacのIPアドレスを確認します。

```bash
ipconfig getifaddr en0
```

3) スマホ/別PCのブラウザでアクセスします。

```text
http://<IP>:3000/
```

### うまく表示できないとき（トラブルシューティング）

- 端末が**同じWi‑Fi**に接続されているか
- Macの**ファイアウォール**でポート3000がブロックされていないか
- **VPN**が有効になっていないか（同一LAN内通信が遮断される場合があります）

## ビルド

```bash
npm run build
```

生成物は `build/` に出力されます。
