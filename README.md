

 # CRUD-APP 


# Test Kütüphaneleri 

@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
jsdom
vitest

# Farklar 
 Dependencies üretimde ihtiyaç duyulan bağımlılıkları içerirken, DevDependencies sadece geliştirme sürecinde kullanılan bağımlılıkları içerir.

 Depenedencies uygulamayı hem geliştirirken hemde yayınlama aşamasında lazım olalardır.

 Ama devdependencyies ler gelişitirirken lazım olan ama yayınlarken ihtiyaç duymadıgımız kütüphanelerdir. Devdependencydeki test kütüphaneleri  silindiğinde pproje calısmaya devam eder.

# DevDependency

- Proje yayınlandıgında projeyi çalışması için gerekli olmayan ama proje gelşitşirilirken geliştirici için yararlı olan kütüphaneleri bu bölüme indiririz .
- Bir DevDependency silinmesi projenin çalışmasını etkilemez .

-  Test kütüphaneleri koddaki hatayı tespit eden / kodu düzenleyen kütüphaneler devdepency olarak indirilebilir. # CrudApp-Test
