# React19 + TypeScript + Vite + zod

フォームの検証用プロジェクト

## やったこと

- [x] React19 を導入する
- [x] form の action 属性を利用する
- [x] zod を使ったバリデーションを定義
- [x] エラーの表示を行う

## まとめ

- useActionState を使った submit 時のバリデーションは問題なく動作した
- formState は submit 時にのみ更新される
- 入力値が変化した時にリアルタイムでバリデーションメッセージを表示したい場合は工夫が入りそう(以下アイディア)
  - 項目ごとにスキーマと入力値、バリデーションを管理する state を用意する
  - useEffect で state を監視し、初期値じゃなければ safeParse で検証する
  - safeParse でエラーになった場合 state のエラーのフィールドを更新する

## 参考文献

- [React19 導入ガイド](https://ja.react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [useActionState ガイド](https://ja.react.dev/reference/react/useActionState)
- [form ガイド](https://ja.react.dev/reference/react-dom/components/form)
