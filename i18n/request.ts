import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    // console.log(`[i18n.ts] Locale yang diminta: ${requested}`);

    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;
    // console.log(`[i18n.ts] Locale yang digunakan: ${locale}`);

    // Mendefinisikan daftar "namespace" atau kategori pesan yang ingin Anda muat.
    const messageTypesToLoad = ['navigation', 'hero', 'about', 'skills', 'project', 'experiment', 'contact', 'footer', '404', 'projectspage', 'allexperiments']; // Tambahkan semua namespace di sini

    const allMessages: Record<string, any> = {};

    // --- START REFAKTORISASI ---
    // Fungsi pembantu untuk memuat namespace secara aman
    const loadNamespace = async (type: string) => {
        try {
            const messages = (await import(`@/messages/${type}/${locale}.json`)).default;
            // console.log(`[i18n.ts] Berhasil memuat namespace "${type}" untuk locale "${locale}"`);
            allMessages[type] = messages;
        } catch (error) {
            // Log error, tapi jangan menghentikan proses jika ada satu namespace yang gagal
            // console.warn(`[next-intl] Gagal memuat pesan untuk tipe "${type}" dan locale "${locale}". Pastikan file '@/messages/${type}/${locale}.json' ada.`, error);
            // console.error(`[i18n.ts] Detail Error Pemuatan ${type}:`, error);
            // Anda bisa memilih untuk menginisialisasi namespace yang gagal dengan objek kosong
            // agar aplikasi tidak crash saat diakses:
            allMessages[type] = {};
        }
    };

    // Muat semua namespace secara paralel untuk efisiensi
    const loadPromises = messageTypesToLoad.map(type => loadNamespace(type));
    await Promise.all(loadPromises); // Tunggu hingga semua namespace selesai dimuat
    // --- END REFAKTORISASI ---

    //console.log(`[i18n.ts] Semua pesan yang digabungkan:`, allMessages);

    return {
        locale,
        messages: allMessages
    };
});