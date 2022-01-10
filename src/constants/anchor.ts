/**
 * @file Anchor constant
 * @module constant.anchor
 * @author Surmon <https://github.com/surmon-china>
 */

export const HEADER_ELEMENT_ID = 'A_header'
export const NAV_ELEMENT_ID = 'A_nav'
export const MAIN_ELEMENT_ID = 'A_main'
export const MAIN_CONTENT_ELEMENT_ID = 'A_main'
export const ASIDE_ELEMENT_ID = 'A_aside'
export const FOOTER_ELEMENT_ID = 'A_footer'

export const ARTICLE_CONTENT_ELEMENT_ID = 'A_article_content'
export const ARTICLE_META_ELEMENT_ID = 'A_article_meta'
export const ARTICLE_SHARE_ELEMENT_ID = 'A_article_share'
export const ARTICLE_RELETED_ELEMENT_ID = 'A_article_releted'

export const ARTICLE_CONTENT_HEADING_ELEMENT_ID_PREFIX = 'A_article_content_heading'
export const getArticleContentHeadingElementID = (level: number, heading: string) => {
  return `${ARTICLE_CONTENT_HEADING_ELEMENT_ID_PREFIX}_${level}_${heading}`
}

export const COMMENT_ELEMENT_ID = 'A_comment_warpper'
export const COMMENT_PUBLISHER_ELEMENT_ID = 'A_comment_publisher'
export const COMMENT_FOOTER_ELEMENT_ID = 'A_comment_footer'
export const COMMENT_ITEM_ELEMENT_ID_PREFIX = 'A_comment_content_item'
export const getCommentItemElementID = (commentID: string | number) => {
  return `${COMMENT_ITEM_ELEMENT_ID_PREFIX}_${commentID}`
}
