import os
import re
import glob

def update_title_and_sidebar_label(file_path, new_title, sidebar_label):
    """
    Cập nhật title và thêm sidebar_label trong file markdown
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Cập nhật title trong frontmatter
        if 'title:' in content:
            pattern = r'(title: )([^\n]*)'
            content = re.sub(pattern, r'\1"' + new_title + '"', content)
            
            # Kiểm tra và thêm/cập nhật sidebar_label
            if 'sidebar_label:' in content:
                sidebar_pattern = r'(sidebar_label: )([^\n]*)'
                content = re.sub(sidebar_pattern, r'\1"' + sidebar_label + '"', content)
            else:
                # Thêm sidebar_label sau title
                title_pattern = r'(title: [^\n]*\n)'
                content = re.sub(title_pattern, r'\1sidebar_label: "' + sidebar_label + '"\n', content)
            
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)
                
            print(f"Đã cập nhật {os.path.basename(file_path)}: title='{new_title}', sidebar_label='{sidebar_label}'")
            return True
        else:
            print(f"Không tìm thấy trường title trong {file_path}")
            return False
    except Exception as e:
        print(f"Lỗi với file {file_path}: {e}")
        return False

def create_major_arcana_mapping():
    """
    Tạo mapping từ tên file đến tiêu đề mới và nhãn sidebar cho bộ Ẩn Chính
    """
    major_arcana_mapping = {
        "the-fool.md": {"title": "0 - Ý Nghĩa Lá Bài The Fool", "sidebar": "0 - The Fool"},
        "the-magician.md": {"title": "1 - Ý Nghĩa Lá Bài The Magician", "sidebar": "1 - The Magician"},
        "the-high-priestess.md": {"title": "2 - Ý Nghĩa Lá Bài The High Priestess", "sidebar": "2 - The High Priestess"},
        "the-empress.md": {"title": "3 - Ý Nghĩa Lá Bài The Empress", "sidebar": "3 - The Empress"},
        "the-emperor.md": {"title": "4 - Ý Nghĩa Lá Bài The Emperor", "sidebar": "4 - The Emperor"},
        "the-hierophant.md": {"title": "5 - Ý Nghĩa Lá Bài The Hierophant", "sidebar": "5 - The Hierophant"},
        "the-lovers.md": {"title": "6 - Ý Nghĩa Lá Bài The Lovers", "sidebar": "6 - The Lovers"},
        "the-chariot.md": {"title": "7 - Ý Nghĩa Lá Bài The Chariot", "sidebar": "7 - The Chariot"},
        "strength.md": {"title": "8 - Ý Nghĩa Lá Bài Strength", "sidebar": "8 - Strength"},
        "the-hermit.md": {"title": "9 - Ý Nghĩa Lá Bài The Hermit", "sidebar": "9 - The Hermit"},
        "the-wheel-of-fortune.md": {"title": "10 - Ý Nghĩa Lá Bài The Wheel of Fortune", "sidebar": "10 - Wheel of Fortune"},
        "justice.md": {"title": "11 - Ý Nghĩa Lá Bài Justice", "sidebar": "11 - Justice"},
        "the-hanged-man.md": {"title": "12 - Ý Nghĩa Lá Bài The Hanged Man", "sidebar": "12 - The Hanged Man"},
        "death.md": {"title": "13 - Ý Nghĩa Lá Bài Death", "sidebar": "13 - Death"},
        "temperance.md": {"title": "14 - Ý Nghĩa Lá Bài Temperance", "sidebar": "14 - Temperance"},
        "the-devil.md": {"title": "15 - Ý Nghĩa Lá Bài The Devil", "sidebar": "15 - The Devil"},
        "the-tower.md": {"title": "16 - Ý Nghĩa Lá Bài The Tower", "sidebar": "16 - The Tower"},
        "the-star.md": {"title": "17 - Ý Nghĩa Lá Bài The Star", "sidebar": "17 - The Star"},
        "the-moon.md": {"title": "18 - Ý Nghĩa Lá Bài The Moon", "sidebar": "18 - The Moon"},
        "the-sun.md": {"title": "19 - Ý Nghĩa Lá Bài The Sun", "sidebar": "19 - The Sun"},
        "judgement.md": {"title": "20 - Ý Nghĩa Lá Bài Judgement", "sidebar": "20 - Judgement"},
        "the-world.md": {"title": "21 - Ý Nghĩa Lá Bài The World", "sidebar": "21 - The World"}
    }
    return major_arcana_mapping

def update_major_arcana_titles(base_path):
    """
    Cập nhật tiêu đề và nhãn sidebar cho bộ bài Ẩn Chính
    """
    major_arcana_dir = os.path.join(base_path, "cards", "major-arcana")
    
    if not os.path.exists(major_arcana_dir):
        print(f"Thư mục không tồn tại: {major_arcana_dir}")
        return
    
    print(f"Đang xử lý thư mục: {major_arcana_dir}")
    md_files = glob.glob(os.path.join(major_arcana_dir, "*.md"))
    title_mapping = create_major_arcana_mapping()
    total_updated = 0
    
    for file_path in md_files:
        file_name = os.path.basename(file_path)
        if file_name in title_mapping:
            mapping = title_mapping[file_name]
            if update_title_and_sidebar_label(file_path, mapping["title"], mapping["sidebar"]):
                total_updated += 1
    
    print(f"Tổng số file đã cập nhật trong bộ Ẩn Chính: {total_updated}")

def create_minor_arcana_mapping():
    """
    Tạo mapping cho bộ Tiểu Ẩn
    """
    # Dictionary cho Cups
    cups_mapping = {
        'ace-of-cups.md': {"title": "Ý Nghĩa Lá Bài Ace of Cups", "sidebar": "Ace of Cups"},
        'two-of-cups.md': {"title": "Ý Nghĩa Lá Bài 2 of Cups", "sidebar": "2 of Cups"},
        'three-of-cups.md': {"title": "Ý Nghĩa Lá Bài 3 of Cups", "sidebar": "3 of Cups"},
        'four-of-cups.md': {"title": "Ý Nghĩa Lá Bài 4 of Cups", "sidebar": "4 of Cups"},
        'five-of-cups.md': {"title": "Ý Nghĩa Lá Bài 5 of Cups", "sidebar": "5 of Cups"},
        'six-of-cups.md': {"title": "Ý Nghĩa Lá Bài 6 of Cups", "sidebar": "6 of Cups"},
        'seven-of-cups.md': {"title": "Ý Nghĩa Lá Bài 7 of Cups", "sidebar": "7 of Cups"},
        'eight-of-cups.md': {"title": "Ý Nghĩa Lá Bài 8 of Cups", "sidebar": "8 of Cups"},
        'nine-of-cups.md': {"title": "Ý Nghĩa Lá Bài 9 of Cups", "sidebar": "9 of Cups"},
        'ten-of-cups.md': {"title": "Ý Nghĩa Lá Bài 10 of Cups", "sidebar": "10 of Cups"},
        'page-of-cups.md': {"title": "Ý Nghĩa Lá Bài Page of Cups", "sidebar": "Page of Cups"},
        'knight-of-cups.md': {"title": "Ý Nghĩa Lá Bài Knight of Cups", "sidebar": "Knight of Cups"},
        'queen-of-cups.md': {"title": "Ý Nghĩa Lá Bài Queen of Cups", "sidebar": "Queen of Cups"},
        'king-of-cups.md': {"title": "Ý Nghĩa Lá Bài King of Cups", "sidebar": "King of Cups"}
    }
    
    # Tương tự cho Wands, Swords, Pentacles
    # Ví dụ cho Wands
    wands_mapping = {name.replace("cups", "wands"): {"title": data["title"].replace("Cups", "Wands"), 
                                                    "sidebar": data["sidebar"].replace("Cups", "Wands")} 
                    for name, data in cups_mapping.items()}
    
    # Tương tự cho Swords
    swords_mapping = {name.replace("cups", "swords"): {"title": data["title"].replace("Cups", "Swords"), 
                                                      "sidebar": data["sidebar"].replace("Cups", "Swords")} 
                     for name, data in cups_mapping.items()}
    
    # Tương tự cho Pentacles
    pentacles_mapping = {name.replace("cups", "pentacles"): {"title": data["title"].replace("Cups", "Pentacles"), 
                                                           "sidebar": data["sidebar"].replace("Cups", "Pentacles")} 
                        for name, data in cups_mapping.items()}
    
    # Kết hợp tất cả
    all_mappings = {}
    all_mappings.update(cups_mapping)
    all_mappings.update(wands_mapping)
    all_mappings.update(swords_mapping)
    all_mappings.update(pentacles_mapping)
    
    return all_mappings

def update_minor_arcana_titles(base_path):
    """
    Cập nhật tiêu đề và nhãn sidebar cho bộ bài Tiểu Ẩn
    """
    suits = ["cups", "wands", "swords", "pentacles"]
    title_mapping = create_minor_arcana_mapping()
    total_updated = 0
    
    for suit in suits:
        suit_dir = os.path.join(base_path, "cards", "minor-arcana", suit)
        
        if os.path.exists(suit_dir):
            print(f"Đang xử lý thư mục: {suit_dir}")
            md_files = glob.glob(os.path.join(suit_dir, "*.md"))
            
            for file_path in md_files:
                file_name = os.path.basename(file_path)
                if file_name in title_mapping:
                    mapping = title_mapping[file_name]
                    if update_title_and_sidebar_label(file_path, mapping["title"], mapping["sidebar"]):
                        total_updated += 1
        else:
            print(f"Thư mục không tồn tại: {suit_dir}")
    
    print(f"Tổng số file đã cập nhật trong bộ Tiểu Ẩn: {total_updated}")

if __name__ == "__main__":
    # Đường dẫn đến thư mục gốc dự án
    project_directory = "/Users/hello/Documents/Project/Tarot-Project"
    
    if not os.path.exists(project_directory):
        print(f"Thư mục '{project_directory}' không tồn tại.")
    else:
        print("1. Cập nhật chỉ bộ Ẩn Chính (Major Arcana)")
        print("2. Cập nhật chỉ bộ Tiểu Ẩn (Minor Arcana)")
        print("3. Cập nhật cả hai bộ bài")
        
        choice = input("Chọn một tùy chọn (1/2/3): ")
        
        if choice == '1':
            update_major_arcana_titles(project_directory)
        elif choice == '2':
            update_minor_arcana_titles(project_directory)
        elif choice == '3':
            update_major_arcana_titles(project_directory)
            update_minor_arcana_titles(project_directory)
        else:
            print("Lựa chọn không hợp lệ")