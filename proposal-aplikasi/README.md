# Proposal Aplikasi Berbasis Web

## :office_worker: Author
- Nama : Shabiq Ghazi Arkaan
- NIM : 1207050118
- Mata Kuliah : Pengembangan Aplikasi Web
- Kelas : F

## :warning: Permasalahan
- Banyaknya mahasiswa yang lupa dengan tugas yang akan datang
- Keterbatasan whatsapp untuk <i>managing</i> setiap tugas kelompok
- Tidak adanya ruang diskusi yang lebih terkhusus kepada permasalahan akademik
- Kosma kesulitan memonitor permasalahan setiap mahasiswa
- Tidak adanya ruang yang nyaman bagi kosma ataupun mahasiswa lain untuk menyampaikan pengumuman karena terlalu banyak hal random yang dibahas di grup whatsapp

## :unlock: Rancangan Solusi
- Membuat aplikasi yang mendukung kegiatan akademik mahasiswa kelas F
- Membuat fitur kalender tugas
- Membuat ruang kerja kelompok yang memudahkan setiap kelompok
- Membuat fitur diskusi yang dipisahkan berdasarkan topik
- Membuat fitur yang membantu menyampaikan masalah mahasiswa
- Membuat fitur pengumuman dari siapa saja untuk seluruh mahasiswa di kelas

## :gear: Use Case
- Mahasiswa melakukan registrasi dengan token yang disediakan oleh kosma
- Mahasiswa bisa menambahkan tugas dan melihat tugas yang akan datang
- Mahasiswa bisa melakukan manajemen kerja kelompok yang memiliki fitur chat, file upload, notes, schedule management, role management
- Mahasiswa bisa menggunakan fitur diskusi dengan menambahkan topik baru ataupun topik yang sudah ada
- Mahasiswa bisa melaporkan permasalahan akademik kepada kosma, kemudian kosma menanggapi
- Mahasiswa bisa membuat pengumuman baru

## :file_folder: Struktur Data
###  User
	{
		id: integer,
		nama: string,
		nim: string,
		password: string,
		isVerified: boolean,
		title: string
	}

### Tugas
	{
		id: integer,
		title: string,
		desc: integer,
		dueDate: integer,
		statusIndex: {
			index: integer,
			status: string
		}
		typeIndex: {
			index: integer,
			type: string
		}
	}
###  Kelompok
	{
		id: integer,
		namaKelompok: string,
		roleKelompok: [
			{
				id: integer,
				namaRole: string,
				mahasiswaId: [integer]
			}
		],
		chat: [
			{
				id: integer,
				mahasiswaId: integer,
				type: string,
				file: string (url),
				message: string
			}
		],
		notes: [
			{
				id: integer,
				title: string,
				text: string
			}
		],
	}
### Diskusi
	{
		id: integer,
		topik: {
			title: string,
			desc: string,
		},
		chat: [
			{
				id: integer,
				mahasiswaId: integer,
				type: string,
				file: string (url),
				message: string
			}
		],
		notes: [
			{
				id: integer,
				title: string,
				text: string
			}
		],
	}
### Monitoring
	{
		id: integer,
		mahasiswaId: integer,
		title: string,
		text: string,
		urgentionIndex: {
			index: integer,
			urgention: string
		},
		KosmaResponse: {
			isResponsed: boolean,
			responseMessage: string
		}
	}
## :paperclips: UX Wireframe
![ux-wireframe](https://user-images.githubusercontent.com/76445601/189538093-e71cdee2-b3d6-4834-9c89-d72489e633ad.jpeg)
