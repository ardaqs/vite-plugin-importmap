export default function importmap() {
  return {
    name: "vite-plugin-importmap",
    transformIndexHtml(html: string): string {

      // return html.replace(
      //   /<title>(.*?)<\/title>/,
      //   `<title>Title replaced!</title>`,
      // )

      return html.replace('/importmap.dev.json', '/importmap.json');
    }    
  }
}
