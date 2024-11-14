// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 設置靜態文件資料夾
app.use(express.static(path.join(__dirname, 'public')));

// 啟動伺服器
app.listen(port, () => {
    console.log(`伺服器正在運行於 http://localhost:${port}`);
});

// 取得計數器的數據
app.get('/api/counters', (req, res) => {
    // 返回一個範例數據
    res.json({ counters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
});

// 更新計數器的數據
app.post('/api/counters', express.json(), (req, res) => {
    const { counters } = req.body;
    // 儲存 counters 到資料庫（這裡只是示範）
    res.json({ success: true, counters });
});
