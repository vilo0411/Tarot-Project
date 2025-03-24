// src/api/tarot/mockAnalysis.js

/**
 * Generate mock analysis for tarot readings
 * This is useful for development, testing, or when the API is unavailable
 * 
 * @param {string} question User's question
 * @param {Array} selectedCards Array of selected cards
 * @param {string} spreadType Type of spread (e.g., 'single-card', 'past-present-future')
 * @returns {Promise<Object>} Mock analysis result
 */
export function getMockAnalysis(question, selectedCards, spreadType) {
    return new Promise((resolve) => {
      // Add a small delay to simulate API call
      setTimeout(() => {
        const analysis = generateMockAnalysisText(question, selectedCards, spreadType);
        resolve({
          text: analysis,
          sentiment: generateMockSentiment(),
          timestamp: new Date().toISOString()
        });
      }, 1500);
    });
  }
  
  /**
   * Generate mock analysis text based on cards and spread type
   * 
   * @param {string} question User's question
   * @param {Array} selectedCards Array of card objects
   * @param {string} spreadType Type of spread
   * @returns {string} Mock analysis text
   */
  function generateMockAnalysisText(question, selectedCards, spreadType) {
    let text = `# Phân tích bài Tarot\n\n`;
    text += `## Câu hỏi\n"${question}"\n\n`;
    
    text += `## Các lá bài được chọn\n`;
    selectedCards.forEach((card, index) => {
      text += `${index + 1}. ${card.name} (${card.isReversed ? 'Ngược' : 'Thuận'})\n`;
    });
    text += '\n';
    
    // Generate spread-specific analysis
    switch (spreadType) {
      case 'single-card':
        text += generateSingleCardAnalysis(selectedCards[0]);
        break;
      case 'past-present-future':
        text += generateThreeCardAnalysis(selectedCards);
        break;
      case 'celtic-cross':
        text += generateCelticCrossAnalysis(selectedCards);
        break;
      default:
        text += generateGenericAnalysis(selectedCards);
    }
    
    // Add conclusion
    text += `\n## Kết luận\n\n`;
    text += `Dựa trên những lá bài xuất hiện trong bài đọc này, `;
    
    // Custom conclusion based on question keywords
    if (question.toLowerCase().includes('tình yêu') || question.toLowerCase().includes('tình cảm')) {
      text += `mối quan hệ của bạn đang trong giai đoạn chuyển tiếp quan trọng. Hãy chú ý đến cảm xúc của bản thân và đối phương, đồng thời tạo không gian cho sự phát triển cá nhân.`;
    } else if (question.toLowerCase().includes('công việc') || question.toLowerCase().includes('sự nghiệp')) {
      text += `con đường sự nghiệp của bạn đang đòi hỏi sự kiên nhẫn và quyết tâm. Những thử thách hiện tại sẽ giúp bạn phát triển những kỹ năng cần thiết cho thành công trong tương lai.`;
    } else if (question.toLowerCase().includes('tiền') || question.toLowerCase().includes('tài chính')) {
      text += `tình hình tài chính của bạn có thể cải thiện nếu bạn chủ động lập kế hoạch và có những quyết định sáng suốt. Hãy cân nhắc cẩn thận trước khi đầu tư hoặc chi tiêu lớn.`;
    } else {
      text += `hãy tin tưởng vào trực giác của bản thân và cho phép các sự kiện diễn ra một cách tự nhiên. Bạn đang trên đúng hướng, mặc dù con đường có thể không luôn rõ ràng.`;
    }
    
    return text;
  }
  
  /**
   * Generate analysis for a single card reading
   * 
   * @param {Object} card The selected card
   * @returns {string} Analysis text
   */
  function generateSingleCardAnalysis(card) {
    let text = `## Phân tích lá bài: ${card.name}\n\n`;
    
    // Analysis based on card type
    if (card.code.startsWith('m')) {
      text += `Lá bài ${card.name} thuộc bộ Ẩn Chính (Major Arcana), biểu thị cho những năng lượng mạnh mẽ và các bài học quan trọng trong cuộc sống. `;
      
      // Add specific analysis based on card code
      if (card.code === 'm00') {
        text += `The Fool tượng trưng cho sự khởi đầu mới, tinh thần phiêu lưu, và niềm tin vào cuộc sống. ${card.isReversed ? 'Khi xuất hiện ở vị trí ngược, lá bài gợi ý rằng bạn đang thiếu sự chuẩn bị hoặc có thể đang hành động thiếu suy nghĩ.' : 'Lá bài khuyến khích bạn nắm bắt cơ hội mới và tin tưởng vào hành trình của mình.'}`;
      } else if (card.code === 'm01') {
        text += `The Magician tượng trưng cho khả năng biến ý tưởng thành hiện thực, sự sáng tạo và tiềm năng. ${card.isReversed ? 'Khi xuất hiện ở vị trí ngược, lá bài cảnh báo về việc lãng phí tiềm năng hoặc sử dụng sức mạnh của bạn một cách tiêu cực.' : 'Lá bài cho thấy bạn có tất cả những công cụ cần thiết để thành công, chỉ cần tập trung và hành động.'}`;
      } else {
        text += `${card.isReversed ? 'Khi xuất hiện ở vị trí ngược, lá bài này thường biểu thị những thách thức hoặc năng lượng bị chặn liên quan đến các chủ đề mà nó đại diện.' : 'Lá bài mang đến những thông điệp quan trọng về sự phát triển cá nhân và tinh thần của bạn.'}`;
      }
    } else {
      // Minor Arcana analysis
      text += `Lá bài ${card.name} thuộc bộ Ẩn Phụ (Minor Arcana), `;
      
      if (card.code.startsWith('c')) {
        text += `chất Cups liên quan đến cảm xúc, mối quan hệ, tình yêu và sự sáng tạo. ${card.isReversed ? 'Ở vị trí ngược, lá bài gợi ý về những thách thức trong đời sống cảm xúc hoặc các mối quan hệ.' : 'Lá bài khuyến khích bạn kết nối với cảm xúc và nuôi dưỡng các mối quan hệ quan trọng.'}`;
      } else if (card.code.startsWith('w')) {
        text += `chất Wands liên quan đến năng lượng, sáng tạo, hành động và tinh thần. ${card.isReversed ? 'Ở vị trí ngược, lá bài gợi ý về sự trì trệ hoặc mất cân bằng trong sự sáng tạo và động lực.' : 'Lá bài khuyến khích bạn hành động với đam mê và tạo ra những cơ hội mới.'}`;
      } else if (card.code.startsWith('s')) {
        text += `chất Swords liên quan đến trí tuệ, suy nghĩ, thách thức và giao tiếp. ${card.isReversed ? 'Ở vị trí ngược, lá bài cảnh báo về những khó khăn trong suy nghĩ rõ ràng hoặc giao tiếp hiệu quả.' : 'Lá bài khuyến khích bạn sử dụng sức mạnh của tâm trí và giao tiếp một cách chân thật.'}`;
      } else if (card.code.startsWith('p')) {
        text += `chất Pentacles liên quan đến vật chất, sự nghiệp, tài chính và sức khỏe. ${card.isReversed ? 'Ở vị trí ngược, lá bài gợi ý về những thách thức trong vấn đề tài chính hoặc vật chất.' : 'Lá bài khuyến khích bạn tập trung vào sự ổn định và phát triển trong cuộc sống vật chất.'}`;
      }
    }
    
    return text;
  }
  
  /**
   * Generate analysis for a three-card reading (Past-Present-Future)
   * 
   * @param {Array} cards Array of three selected cards
   * @returns {string} Analysis text
   */
  function generateThreeCardAnalysis(cards) {
    if (cards.length !== 3) {
      return generateGenericAnalysis(cards);
    }
    
    let text = `## Phân tích trải bài Quá Khứ - Hiện Tại - Tương Lai\n\n`;
    
    // Past
    text += `### Quá Khứ: ${cards[0].name} (${cards[0].isReversed ? 'Ngược' : 'Thuận'})\n`;
    text += `Lá bài này đại diện cho những ảnh hưởng từ quá khứ đã định hình nên tình huống hiện tại của bạn. `;
    text += cards[0].isReversed
      ? `Vị trí ngược của lá bài gợi ý rằng có những bài học từ quá khứ mà bạn có thể chưa hoàn toàn tiếp thu, hoặc những trải nghiệm quá khứ vẫn đang ảnh hưởng tiêu cực đến hiện tại của bạn.`
      : `Năng lượng của lá bài này cho thấy những trải nghiệm quá khứ đã cung cấp cho bạn nền tảng vững chắc và các bài học quan trọng.`;
    text += `\n\n`;
    
    // Present
    text += `### Hiện Tại: ${cards[1].name} (${cards[1].isReversed ? 'Ngược' : 'Thuận'})\n`;
    text += `Lá bài này phản ánh năng lượng đang bao quanh bạn ở thời điểm hiện tại và những ảnh hưởng trực tiếp đến tình huống của bạn. `;
    text += cards[1].isReversed
      ? `Vị trí ngược của lá bài gợi ý rằng bạn đang gặp phải một số thách thức hoặc cản trở, có thể bạn đang cảm thấy khó khăn trong việc thể hiện đầy đủ tiềm năng của mình.`
      : `Năng lượng tích cực của lá bài này gợi ý rằng bạn đang ở vị trí thuận lợi để đối mặt với các tình huống hiện tại.`;
    text += `\n\n`;
    
    // Future
    text += `### Tương Lai: ${cards[2].name} (${cards[2].isReversed ? 'Ngược' : 'Thuận'})\n`;
    text += `Lá bài này cho thấy những năng lượng đang phát triển và tiềm năng kết quả nếu bạn tiếp tục con đường hiện tại. `;
    text += cards[2].isReversed
      ? `Vị trí ngược của lá bài gợi ý rằng có thể có một số thách thức hoặc trở ngại trong tương lai, hoặc bạn cần phải thay đổi hướng đi hiện tại để đạt được kết quả tốt hơn.`
      : `Năng lượng tích cực của lá bài này cho thấy tiềm năng tích cực trong tương lai nếu bạn tiếp tục con đường hiện tại và tận dụng cơ hội sắp tới.`;
    text += `\n\n`;
    
    return text;
  }
  
  /**
   * Generate analysis for Celtic Cross spread
   * 
   * @param {Array} cards Array of cards for Celtic Cross spread
   * @returns {string} Analysis text
   */
  function generateCelticCrossAnalysis(cards) {
    if (cards.length !== 10) {
      return generateGenericAnalysis(cards);
    }
    
    let text = `## Phân tích trải bài Thập Tự Celtic\n\n`;
    text += `Trải bài Thập Tự Celtic là một trong những cách trải bài Tarot chi tiết và toàn diện nhất, cung cấp cái nhìn sâu sắc về nhiều khía cạnh của tình huống.\n\n`;
    
    const positions = [
      'Tình huống hiện tại',
      'Thách thức',
      'Quá khứ gần',
      'Quá khứ xa',
      'Mục tiêu hoặc kết quả tốt nhất',
      'Tương lai gần',
      'Yếu tố ảnh hưởng',
      'Môi trường xung quanh',
      'Hy vọng hoặc nỗi sợ',
      'Kết quả cuối cùng'
    ];
    
    // Generate brief analysis for each card
    cards.forEach((card, index) => {
      if (index < positions.length) {
        text += `### ${positions[index]}: ${card.name} (${card.isReversed ? 'Ngược' : 'Thuận'})\n`;
        text += `Lá bài này ${card.isReversed ? 'ở vị trí ngược ' : ''}đại diện cho ${positions[index].toLowerCase()} của bạn. `;
        
        // Add a brief generic interpretation based on position
        if (index === 0) {
          text += 'Đây là năng lượng trung tâm của tình huống hiện tại.';
        } else if (index === 1) {
          text += 'Đây là những trở ngại hoặc thách thức bạn đang đối mặt.';
        } else if (index === 9) {
          text += 'Đây là tiềm năng kết quả cuối cùng của tình huống.';
        }
        
        text += `\n\n`;
      }
    });
    
    return text;
  }
  
  /**
   * Generate generic analysis for any spread not specifically handled
   * 
   * @param {Array} cards Array of selected cards
   * @returns {string} Analysis text
   */
  function generateGenericAnalysis(cards) {
    let text = `## Phân tích trải bài\n\n`;
    
    // Generate analysis for each card
    cards.forEach((card, index) => {
      text += `### Lá ${index + 1}: ${card.name} (${card.isReversed ? 'Ngược' : 'Thuận'})\n`;
      
      // Brief analysis based on card type
      if (card.code.startsWith('m')) {
        text += `Lá bài Ẩn Chính này đại diện cho một năng lượng mạnh mẽ trong tình huống của bạn. `;
      } else if (card.code.startsWith('c')) {
        text += `Lá bài chất Cups này liên quan đến các khía cạnh cảm xúc và mối quan hệ trong tình huống của bạn. `;
      } else if (card.code.startsWith('w')) {
        text += `Lá bài chất Wands này liên quan đến năng lượng, đam mê và sự sáng tạo trong tình huống của bạn. `;
      } else if (card.code.startsWith('s')) {
        text += `Lá bài chất Swords này liên quan đến trí tuệ, giao tiếp và thách thức trong tình huống của bạn. `;
      } else if (card.code.startsWith('p')) {
        text += `Lá bài chất Pentacles này liên quan đến khía cạnh vật chất, tài chính và sự nghiệp trong tình huống của bạn. `;
      }
      
      // Add reversed/upright context
      text += card.isReversed
        ? `Vị trí ngược của lá bài gợi ý về những thách thức hoặc năng lượng bị chặn liên quan đến đặc tính của lá bài này.`
        : `Vị trí thuận của lá bài gợi ý về dòng chảy tự nhiên của năng lượng và ảnh hưởng tích cực liên quan đến đặc tính của lá bài này.`;
        
      text += `\n\n`;
    });
    
    return text;
  }
  
  /**
   * Generate mock sentiment data for the analysis
   * 
   * @returns {Object} Sentiment object with score and magnitude
   */
  function generateMockSentiment() {
    // Generate random sentiment score between -1 and 1
    const score = (Math.random() * 2 - 1).toFixed(2) * 1;
    
    // Generate random magnitude between 0 and 1
    const magnitude = (Math.random()).toFixed(2) * 1;
    
    return {
      score,
      magnitude
    };
  }
  
  export default {
    getMockAnalysis
  };