/**
 * 実行するクラス
 */
class CountExpansion {

   displayedDiv = false
   documentBody = document.body

    /**
     * 選択範囲の要素を取得するロジック
     * @returns void
     */
    countString()
    {
        const selectedText = window.getSelection().toString();
        if (!selectedText.length) return

        if (this.displayedDiv && this.displayedDiv.parentNode === this.documentBody) {
            this.documentBody.removeChild(this.displayedDiv)
            this.displayedDiv = false
        }
        this.displayTextInFooter(selectedText.length)
    }

    /**
     * ブラウザ下部にテキストを表示する
     * @returns void
     */
    displayTextInFooter(text)
    {
        const div = document.createElement('div');
        div.innerText = text 

        div.style.backgroundColor = "rgba(0,0,0,0.8)";
        div.style.color = "#fff"
        div.style.minWidth = "150px"
        div.style.fontSize = "40px"
        div.style.borderRadius = '10px'
        div.style.padding = '30px 60px'
        div.style.textAlign = 'center'

        div.style.position = 'fixed'
        div.style.bottom = '0'
        div.style.right = '0'
        div.style.zIndex = '999'

        this.documentBody.appendChild(div)
        this.displayedDiv = div;
        setTimeout(() => {
            if (this.displayedDiv && this.displayedDiv.parentNode === this.documentBody) {
                this.documentBody.removeChild(this.displayedDiv)
                this.displayedDiv = false
            }
        }, 3000)
    }

    execute()
    {
        document.addEventListener('selectionchange', this.countString.bind(this));
    }
}

console.log("Start, Counter Expansion");
const counter = new CountExpansion()
counter.execute()