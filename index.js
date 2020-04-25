const json2HTML = (blocks) => {
  let articleHTML = '';

  blocks.map(obj => {
    switch (obj.type) {
      case 'paragraph':
        articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-paragraph cdx-block">
              <p>${obj.data.text}</p>
            </div>
          </div>
        </div>\n`;
        break;
      case 'image':
        articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-paragraph cdx-block">
              <img src="${obj.data.url}" alt="${obj.data.caption}" />
              <div class="text-center">
                <i>${obj.data.caption}</i>
              </div>
            </div>
          </div>
        </div>\n`;
        break;
      case 'header':
        articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-paragraph cdx-block">
              <h${obj.data.level}>${obj.data.text}</h${obj.data.level}>
            </div>
          </div>
        </div>\n`;
        break;
      case 'raw':
        articleHTML += `<div class="ce-block">
        <div class="ce-block__content">
          <div class="ce-code">
            <code>${obj.data.html}</code>
          </div>
        </div>
      </div>\n`;
        break;
      case 'code':
        articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-code">
              <code>${obj.data.code}</code>
            </div>
          </div>
        </div>\n`;
        break;
      case 'list':
        if (obj.data.style === 'unordered') {
          const list = obj.data.items.map(item => {
            return `<li class="cdx-list__item">${item}</li>`;
          });
          articleHTML += `<div class="ce-block">
            <div class="ce-block__content">
              <div class="ce-paragraph cdx-block">
                <ul class="cdx-list--unordered">${list.join('')}</ul>
              </div>
              </div>
            </div>\n`;
        } else {
          const list = obj.data.items.map(item => {
            return `<li class="cdx-list__item">${item}</li>`;
          });
          articleHTML += `<div class="ce-block">
            <div class="ce-block__content">
              <div class="ce-paragraph cdx-block">
                <ol class="cdx-list--ordered">${list}</ol>
              </div>
              </div>
            </div>\n`;
        }
        break;
      case 'delimeter':
        articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-delimiter cdx-block"></div>
          </div>
        </div>\n`;
        break;
      default:
        return '';
    }
  });

  articleHTML = articleHTML.replace(/&lt;/g, '<');
  articleHTML = articleHTML.replace(/&gt;/g, '>');

  return articleHTML;
}

module.exports = json2HTML;