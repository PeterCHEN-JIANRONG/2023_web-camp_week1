// DOM
const productListDom = document.querySelector('.product_list');

let products = []
const getProducts = () => {
  products = [
    { 
      imgUrl:'./assets/image/tool1.png',
      title: 'Chatbot Builder',
      description: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
      author: '卡卡',
      tag: '#聊天'
    },
    { 
      imgUrl:'./assets/image/tool2.png',
      title: 'Image Recognition Platform',
      description: '專業的圖像識別平台，識別圖像、分類、標記等。',
      author: '杰杰',
      tag: '#影像辨識'
    },
    { 
      imgUrl:'./assets/image/tool3.png',
      title: 'Language Translation API',
      description: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
      author: '琪琪',
      tag: '#翻譯'
    },
    { 
      imgUrl:'./assets/image/tool4.png',
      title: 'Sentiment Analysis API',
      description: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
      author: '昊昊',
      tag: '#行銷'
    },
    { 
      imgUrl:'./assets/image/tool5.png',
      title: 'Fraud Detection Platform',
      description: '預防詐騙活動，適用於銀行、金融、電商等。',
      author: '卡卡',
      tag: '#客服'
    },
    { 
      imgUrl:'./assets/image/tool6.png',
      title: 'Voice Assistant SDK',
      description: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
      author: '杰杰',
      tag: '#生產力'
    },
  ]
  renderProducts()
}

const renderProducts = () => {
  let str = ''
  products.forEach(item=>{
    str+=`
    <li class="product_item">
          <div class="product-card">
            <div class="product-card_img-wrap">
              <img class="product-card_img" src="${item.imgUrl}" alt="${item.title}">
            </div>
            <div class="product-card_header">
              <h3 class="title">${item.title}</h3>
              <p class="text">${item.description}</p>
            </div>
            <div class="product-card_body">
              <h4 class="title">AI 模型</h4>
              <p class="name">${item.author}</p>
            </div>
            <div class="product-card_footer">
              <h5 class="title">${item.tag}</h5>
              <a class="link" href="#">
                <img src="./assets/image/icons/share.png" alt="share-link">
              </a>
            </div>
          </div>
        </li>`
  })
  productListDom.innerHTML = str;
}

const init = () => {
  getProducts();
}

init();
