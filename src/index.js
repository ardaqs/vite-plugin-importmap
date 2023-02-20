export default function importmap() {
  return {
    name: "vite-plugin-transform-index-html",
    transformIndexHtml(html) {

      // return html.replace(
      //   /<title>(.*?)<\/title>/,
      //   `<title>Title replaced!</title>`,
      // )

      return html.replace('/importmap.dev.json', '/importmap.json');
    }    
  }
}
