// inisialisasi modul http
const http = require('http');

// buat server
const server = http.createServer( (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('Selamat pagiii');

    res.writeHead(200, {'Content-Type': 'application/json'});

    if(req.url === '/dosen'){
        message = 'List data dosen';
        data = ['Ahmad', 'Dimas', 'Widi']
    } else if (req.url === '/mahasiswa'){
        message = 'List data mahasiswa';
        data = ['Bryan', 'Niko', 'Tepen']
    }else if (req.url === '/fakultas'){
        message = 'List data fakultas';
        data = ['FEB', 'FIKR']
    }else if (req.url === '/Prodi'){
        message = 'List data Prodi';
        data = ['Sistem Informasi', 'Teknologi Informasi', 'Akuntansi', 'Manajemen']
    }else{
        message = 'Tidak ditemukan';
        data = []
    }
    res.write(JSON.stringify({
        'message'   : message,
        'data'      : data,
        'status'    : 'succes'
    }));
    res.end();
});

const port = 3000;
const host ='localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}` );
});