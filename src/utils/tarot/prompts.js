// src/utils/tarot/prompts.js

/**
 * Generate a concise Tarot reading analysis prompt
 * @param {string} question - The user's question
 * @param {string} cardsWithPositions - Selected cards and their positions
 * @param {string} spreadType - Type of spread (e.g., 'single-card', 'past-present-future', 'celtic-cross')
 * @returns {string} Concise prompt for AI analysis
 */
export const generateTarotAnalysisPrompt = (question, cardsWithPositions, spreadType) => {
  // Identify spread type for context
  let spreadDescription = '';
  
  switch (spreadType) {
    case 'single-card':
      spreadDescription = 'Trải bài một lá';
      break;
    case 'past-present-future':
      spreadDescription = 'Trải bài Quá khứ-Hiện tại-Tương lai';
      break;
    case 'cross-spread':
      spreadDescription = 'Trải bài Chữ thập';
      break;
    case 'celtic-cross':
      spreadDescription = 'Trải bài Celtic Cross';
      break;
    default:
      spreadDescription = `Trải bài ${spreadType}`;
  }

  return `Là một chuyên gia Tarot, hãy đưa ra câu trả lời ngắn gọn và trực tiếp cho câu hỏi dựa trên các lá bài.

Câu hỏi: ${question}
Các lá bài: ${cardsWithPositions}
Kiểu trải bài: ${spreadDescription}

# Hướng dẫn:
1. Trả lời NGẮN GỌN và TRỰC TIẾP cho câu hỏi (tối đa 150 từ)
2. KHÔNG đưa ra phân tích chi tiết cho từng lá bài
3. CHỈ tập trung vào việc trả lời câu hỏi dựa trên các lá bài đã rút

Viết câu trả lời bằng tiếng Việt dưới dạng đoạn văn ngắn, không có tiêu đề hay phần riêng biệt.`;
};

// Simplified template for single card reading
export const SINGLE_CARD_TEMPLATE = `Là một chuyên gia Tarot, hãy đưa ra câu trả lời ngắn gọn và trực tiếp cho câu hỏi dựa trên lá bài.

Câu hỏi: {{QUESTION}}
Lá bài: {{CARDS}}
Kiểu trải bài: {{SPREAD_TYPE}}

Đưa ra câu trả lời ngắn gọn và trực tiếp, chỉ tập trung vào việc trả lời câu hỏi (tối đa 150 từ). 

Viết câu trả lời bằng tiếng Việt dưới dạng đoạn văn ngắn, không có tiêu đề hay phần riêng biệt.`;

// Simplified template for three card reading
export const THREE_CARD_TEMPLATE = `Là một chuyên gia Tarot, hãy đưa ra câu trả lời ngắn gọn và trực tiếp cho câu hỏi dựa trên các lá bài Quá khứ-Hiện tại-Tương lai.

Câu hỏi: {{QUESTION}}
Các lá bài: {{CARDS}}
Kiểu trải bài: {{SPREAD_TYPE}}

Đưa ra câu trả lời ngắn gọn và trực tiếp, chỉ tập trung vào việc trả lời câu hỏi (tối đa 150 từ). 

Viết câu trả lời bằng tiếng Việt dưới dạng đoạn văn ngắn, không có tiêu đề hay phần riêng biệt.`;

// Simplified template for Celtic Cross reading
export const CELTIC_CROSS_TEMPLATE = `Là một chuyên gia Tarot, hãy đưa ra câu trả lời ngắn gọn và trực tiếp cho câu hỏi dựa trên trải bài Celtic Cross.

Câu hỏi: {{QUESTION}}
Các lá bài: {{CARDS}}
Kiểu trải bài: {{SPREAD_TYPE}}

Đưa ra câu trả lời ngắn gọn và trực tiếp, chỉ tập trung vào việc trả lời câu hỏi (tối đa 150 từ). 

Viết câu trả lời bằng tiếng Việt dưới dạng đoạn văn ngắn, không có tiêu đề hay phần riêng biệt.`;

// Simplified template for other spread types
export const GENERAL_TEMPLATE = `Là một chuyên gia Tarot, hãy đưa ra câu trả lời ngắn gọn và trực tiếp cho câu hỏi dựa trên các lá bài.

Câu hỏi: {{QUESTION}}
Các lá bài: {{CARDS}}
Kiểu trải bài: {{SPREAD_TYPE}}

Đưa ra câu trả lời ngắn gọn và trực tiếp, chỉ tập trung vào việc trả lời câu hỏi (tối đa 150 từ). 

Viết câu trả lời bằng tiếng Việt dưới dạng đoạn văn ngắn, không có tiêu đề hay phần riêng biệt.`;

// Export the templates as object
export const GEMINI_PROMPTS = {
  SINGLE_CARD: SINGLE_CARD_TEMPLATE,
  THREE_CARD: THREE_CARD_TEMPLATE,
  CELTIC_CROSS: CELTIC_CROSS_TEMPLATE,
  GENERAL: GENERAL_TEMPLATE
};

export default {
  generateTarotAnalysisPrompt,
  GEMINI_PROMPTS
};