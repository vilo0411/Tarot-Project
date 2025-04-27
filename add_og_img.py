import os
import re
import glob

def update_image_metadata(file_path, image_path):
    """
    Thêm hoặc cập nhật trường image trong frontmatter
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
        
        # Thêm hoặc cập nhật image
        if 'image:' in frontmatter:
            frontmatter = re.sub(r'image: .*?\n', f'image: "{image_path}"\n', frontmatter)
        else:
            # Thêm trường image vào cuối frontmatter
            frontmatter = frontmatter.rstrip() + f'\nimage: "{image_path}"\n'
        
        # Kết hợp lại
        updated_content = frontmatter + rest_of_content
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
            
        print(f"Đã cập nhật image cho {os.path.basename(file_path)}: {image_path}")
        return True
    except Exception as e:
        print(f"Lỗi với file {file_path}: {e}")
        return False

def get_major_arcana_image(file_name):
    """
    Tạo đường dẫn đến hình ảnh cho bộ Ẩn Chính dựa trên tên file
    """
    # Dictionary ánh xạ tên file sang số thứ tự
    major_arcana_mapping = {
        "the-fool.md": "00",
        "the-magician.md": "01",
        "the-high-priestess.md": "02",
        "the-empress.md": "03",
        "the-emperor.md": "04",
        "the-hierophant.md": "05",
        "the-lovers.md": "06",
        "the-chariot.md": "07",
        "strength.md": "08",
        "the-hermit.md": "09",
        "the-wheel-of-fortune.md": "10",
        "justice.md": "11",
        "the-hanged-man.md": "12",
        "death.md": "13",
        "temperance.md": "14",
        "the-devil.md": "15",
        "the-tower.md": "16",
        "the-star.md": "17",
        "the-moon.md": "18",
        "the-sun.md": "19",
        "judgement.md": "20",
        "the-world.md": "21"
    }
    
    if file_name in major_arcana_mapping:
        card_number = major_arcana_mapping[file_name]
        return f"/img/deck/m{card_number}.jpg"
    else:
        # Fallback nếu không tìm thấy trong mapping
        return f"/img/deck/default.jpg"

def get_minor_arcana_image(file_name, suit):
    """
    Tạo đường dẫn đến hình ảnh cho bộ Tiểu Ẩn dựa trên tên file và chất
    """
    # Chuyển đổi tên bộ sang ký tự đầu tiên viết thường
    suit_prefix = {
        "cups": "c",
        "wands": "w",
        "swords": "s",
        "pentacles": "p"
    }.get(suit, "")
    
    # Dictionary ánh xạ tên file sang số thứ tự
    card_number_mapping = {
        "ace": "01",
        "two": "02",
        "three": "03",
        "four": "04",
        "five": "05",
        "six": "06",
        "seven": "07",
        "eight": "08",
        "nine": "09",
        "ten": "10",
        "page": "11",
        "knight": "12",
        "queen": "13",
        "king": "14"
    }
    
    # Lấy tên bài không có phần đuôi
    base_name = os.path.splitext(file_name)[0]  # Loại bỏ .md
    
    # Tìm số thứ tự từ tên file
    for card_name, number in card_number_mapping.items():
        if card_name in base_name:
            return f"/img/deck/{suit_prefix}{number}.jpg"
    
    # Fallback nếu không tìm thấy
    return f"/img/deck/default.jpg"

def update_major_arcana_images(base_path):
    """
    Cập nhật trường image cho bộ bài Ẩn Chính
    """
    major_arcana_dir = os.path.join(base_path, "cards", "major-arcana")
    
    if not os.path.exists(major_arcana_dir):
        print(f"Thư mục không tồn tại: {major_arcana_dir}")
        return
    
    print(f"Đang xử lý thư mục: {major_arcana_dir}")
    md_files = glob.glob(os.path.join(major_arcana_dir, "*.md"))
    total_updated = 0
    
    for file_path in md_files:
        file_name = os.path.basename(file_path)
        image_path = get_major_arcana_image(file_name)
        if update_image_metadata(file_path, image_path):
            total_updated += 1
    
    print(f"Tổng số file đã cập nhật trường image trong bộ Ẩn Chính: {total_updated}")

def update_minor_arcana_images(base_path):
    """
    Cập nhật trường image cho bộ bài Tiểu Ẩn
    """
    suits = ["cups", "wands", "swords", "pentacles"]
    total_updated = 0
    
    for suit in suits:
        suit_dir = os.path.join(base_path, "cards", "minor-arcana", suit)
        
        if os.path.exists(suit_dir):
            print(f"Đang xử lý thư mục: {suit_dir}")
            md_files = glob.glob(os.path.join(suit_dir, "*.md"))
            
            for file_path in md_files:
                file_name = os.path.basename(file_path)
                image_path = get_minor_arcana_image(file_name, suit)
                if update_image_metadata(file_path, image_path):
                    total_updated += 1
        else:
            print(f"Thư mục không tồn tại: {suit_dir}")
    
    print(f"Tổng số file đã cập nhật trường image trong bộ Tiểu Ẩn: {total_updated}")

if __name__ == "__main__":
    # Đường dẫn đến thư mục gốc dự án
    project_directory = "/Users/hello/Documents/Project/Tarot-Project"
    
    if not os.path.exists(project_directory):
        print(f"Thư mục '{project_directory}' không tồn tại.")
    else:
        print("1. Cập nhật image cho bộ Ẩn Chính (Major Arcana)")
        print("2. Cập nhật image cho bộ Tiểu Ẩn (Minor Arcana)")
        print("3. Cập nhật cả hai bộ bài")
        
        choice = input("Chọn một tùy chọn (1/2/3): ")
        
        if choice == '1':
            update_major_arcana_images(project_directory)
        elif choice == '2':
            update_minor_arcana_images(project_directory)
        elif choice == '3':
            update_major_arcana_images(project_directory)
            update_minor_arcana_images(project_directory)
        else:
            print("Lựa chọn không hợp lệ")