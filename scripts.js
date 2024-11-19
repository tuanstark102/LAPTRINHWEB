// Xử lý chỉ cho nút "Thêm vào giỏ"
document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thêm vào giỏ');
  });
});

// Giữ chức năng cuộn đến phần
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
// Tìm kiếm sản phẩm
document.getElementById('search-button').addEventListener('click', handleSearch);

document.getElementById('search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') handleSearch(); // Tìm kiếm khi nhấn Enter
});

function handleSearch() {
  const query = document.getElementById('search-input').value.toLowerCase(); // Lấy từ khóa, không phân biệt chữ hoa/thường
  const products = document.querySelectorAll('.product'); // Lấy tất cả sản phẩm

  let found = false; // Biến để kiểm tra có tìm thấy sản phẩm không
  products.forEach(product => {
    const title = product.querySelector('h2').textContent.toLowerCase(); // Tiêu đề sản phẩm
    if (title.includes(query)) {
      product.style.display = 'block'; // Hiển thị sản phẩm phù hợp
      found = true;
    } else {
      product.style.display = 'none'; // Ẩn sản phẩm không phù hợp
    }
  });

  if (!found) {
    alert('Không tìm thấy sản phẩm nào phù hợp!'); // Thông báo nếu không có sản phẩm phù hợp
  }
}
