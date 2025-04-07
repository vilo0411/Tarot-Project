import React from 'react';
import Layout from '@theme/Layout';
import styles from './privacy.module.css';
import Head from '@docusaurus/Head'; 

export default function Privacy() {
  const description = "";

  return (
    <Layout
      title="Chính sách Bảo mật"
      description="Các chính sách bảo mật thông tin của Tarot Guide Online."
    >
      <div className="container margin-vert--lg">
        <div className={styles.privacyContainer}>
          <h1 className={styles.title}>Chính Sách Bảo Mật</h1>
          
          <div className={styles.lastUpdated}>
            Cập nhật lần cuối: {new Date().toLocaleDateString()}
          </div>

          <div className={styles.content}>
            <h2>1. Giới Thiệu</h2>
            <p>
              Chào mừng đến với Chính Sách Bảo Mật của chúng tôi. Tài liệu này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi sử dụng dịch vụ đọc bài tarot của chúng tôi.
            </p>

            <h2>2. Thông Tin Chúng Tôi Thu Thập</h2>
            <p>
              Chúng tôi có thể thu thập các loại thông tin sau:
            </p>
            <ul>
              <li><strong>Thông Tin Cá Nhân:</strong> Tên, địa chỉ email và các chi tiết liên hệ khác do bạn cung cấp.</li>
              <li><strong>Dữ Liệu Sử Dụng:</strong> Thông tin về cách bạn tương tác với trang web của chúng tôi, bao gồm lịch sử đọc bài.</li>
              <li><strong>Thông Tin Thiết Bị:</strong> Thông tin về thiết bị bạn sử dụng để truy cập dịch vụ của chúng tôi.</li>
            </ul>

            <h2>3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn</h2>
            <p>
              Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:
            </p>
            <ul>
              <li>Cung cấp và duy trì dịch vụ đọc bài tarot</li>
              <li>Thông báo cho bạn về những thay đổi trong dịch vụ của chúng tôi</li>
              <li>Cung cấp hỗ trợ khách hàng</li>
              <li>Thu thập phân tích hoặc thông tin có giá trị để cải thiện dịch vụ</li>
              <li>Giám sát việc sử dụng dịch vụ của chúng tôi</li>
            </ul>

            <h2>4. Bảo Mật Dữ Liệu</h2>
            <p>
              Chúng tôi áp dụng các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn. Tuy nhiên, không có phương thức truyền tải qua Internet hay lưu trữ điện tử nào là 100% an toàn.
            </p>

            <h2>5. Thay Đổi Chính Sách Bảo Mật Này</h2>
            <p>
              Chúng tôi có thể cập nhật Chính Sách Bảo Mật của mình theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính Sách Bảo Mật mới trên trang này.
            </p>

            <h2>6. Liên Hệ Với Chúng Tôi</h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi nào về Chính Sách Bảo Mật này, vui lòng liên hệ với chúng tôi tại:
            </p>
            <p>
              Email: privacy@tarotguideonline.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}