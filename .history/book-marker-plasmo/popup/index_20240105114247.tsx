import { useEffect, useState } from "react"

import { addBookmark, deleteBookmark, getBookmarks } from "./api"
import styles from "./index.module.css"

function IndexPopup() {
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  })

  return (
    <div className={styles.container}>
      <div>
        <h1>現在のページを保存しますか</h1>
        <form action="送信先" method="送信メソッド">
          <label htmlFor="name">現在のurl </label>
          <input type="text" id="test" name="url" value={url}></input>
        </form>
        <button onClick={() => addBookmark(url)}>保存</button>
      </div>
    </div>
  )
}

export default IndexPopup
