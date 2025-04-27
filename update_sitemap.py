import os
import re
import glob

def update_sitemap_metadata(file_path, priority, changefreq):
    """
    Thêm hoặc cập nhật thông tin sitemap trong frontmatter
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Kiểm tra xem file có phần frontmatter không
        if not content.startswith('---'):
            print(f"File {file_path} không có frontmatter")
            return False
        
        # Tìm vị trí kết thúc frontmatter
        second_dash = content.find('---', 3)
        if second_dash == -1:
            print(f"Không tìm thấy kết thúc frontmatter trong {file_path}")
            return False
        
        frontmatter = content[:second_dash]
        rest_of_content = content[second_dash:]
        
        # Kiểm tra xem đã có phần sitemap chưa
        if 'sitemap:' in frontmatter:
            # Cập nhật sitemap hiện có
            sitemap_pattern = r'sitemap:(\s*priority: [^\n]*\n\s*changefreq: [^\n]*\n)'
            sitemap_replacement = f'sitemap:\n  priority: {priority}\n  changefreq: \'{changefreq}\'\n'
            
            if re.search(sitemap_pattern, frontmatter):
                frontmatter = re.sub(sitemap_pattern, sitemap_replacement, frontmatter)
            else:
                # Có thẻ sitemap nhưng không có đầy đủ thuộc tính
                frontmatter = re.sub(r'sitemap:([^\n]*)', sitemap_replacement, frontmatter)
        else:
            # Thêm sitemap mới vào cuối frontmatter
            frontmatter = frontmatter.rstrip() + f'\nsitemap:\n  priority: {priority}\n  changefreq: \'{changefreq}\'\n'
        
        # Kết hợp lại
        updated_content = frontmatter + rest_of_content
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
            
        print(f"Đã cập nhật sitemap cho {os.path.basename(file_path)}: priority={priority}, changefreq={changefreq}")
        return True
    except Exception as e:
        print(f"Lỗi với file {file_path}: {e}")
        return False

def update_tarot_card_sitemap(base_path, priority, changefreq):
    """
    Cập nhật thông tin sitemap cho tất cả các bài viết về card
    """
    # Xử lý bộ Ẩn Chính
    major_arcana_dir = os.path.join(base_path, "cards", "major-arcana")
    if os.path.exists(major_arcana_dir):
        print(f"Đang xử lý thư mục: {major_arcana_dir}")
        md_files = glob.glob(os.path.join(major_arcana_dir, "*.md"))
        for file_path in md_files:
            update_sitemap_metadata(file_path, priority, changefreq)
    
    # Xử lý bộ Tiểu Ẩn
    suits = ["cups", "wands", "swords", "pentacles"]
    for suit in suits:
        suit_dir = os.path.join(base_path, "cards", "minor-arcana", suit)
        if os.path.exists(suit_dir):
            print(f"Đang xử lý thư mục: {suit_dir}")
            md_files = glob.glob(os.path.join(suit_dir, "*.md"))
            for file_path in md_files:
                update_sitemap_metadata(file_path, priority, changefreq)

if __name__ == "__main__":
    # Đường dẫn đến thư mục gốc dự án
    project_directory = "/Users/hello/Documents/Project/Tarot-Project"
    
    if not os.path.exists(project_directory):
        print(f"Thư mục '{project_directory}' không tồn tại.")
    else:
        print("Cập nhật sitemap cho tất cả các bài viết về card")
        priority = input("Nhập priority (0.0-1.0, mặc định 0.8): ") or "0.8"
        changefreq = input("Nhập changefreq (always, hourly, daily, weekly, monthly, yearly, never, mặc định daily): ") or "daily"
        
        update_tarot_card_sitemap(project_directory, priority, changefreq)