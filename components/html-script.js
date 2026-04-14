import NextScript from 'next/script'
import { useId } from 'react'

const extractBlockContent = (html, tagName) => {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i')
  const match = html.match(regex)

  return match ? match[1] : null
}

const Script = ({ html }) => {
  const scriptId = useId()
  const markup = html || ''
  const styleContent = extractBlockContent(markup, 'style')
  if (styleContent !== null) {
    return <style dangerouslySetInnerHTML={{ __html: styleContent }} />
  }

  const scriptContent = extractBlockContent(markup, 'script')
  if (scriptContent !== null) {
    return (
      <NextScript
        id={`inline-script-${scriptId}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: scriptContent }}
      />
    )
  }

  return null
}

export default Script
