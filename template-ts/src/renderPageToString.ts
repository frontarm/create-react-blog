import renderReactPageToString from 'react-navi/create-react-app'
import renderRSSFeedToString from './renderRSSFeedToString'
import renderSitemapToString from "./renderSitemapToString";

/**
 * navi-scripts will call this function for each of your site's pages
 * to produce its statically rendered HTML.
 */
async function renderPageToString(props) {
  if (props.url.pathname === '/rss') {
    return await renderRSSFeedToString(props)
  }
  if (props.url.pathname === '/xml') {
    return await renderSitemapToString(props)
  }
  return renderReactPageToString(props)
}

export default renderPageToString
