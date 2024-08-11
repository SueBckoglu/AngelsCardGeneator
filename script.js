const cardName = document.querySelector(".card_name .name"),
cardDetails = document.querySelector(".card_details .quote"),
quoteBtn = document.querySelector("button");

const angelCards = [
    {
        name: "Evet",
        message: "Bu soruya cevabınız kesinlikle evet!"
    },
    {
        name: "Hayır",
        message: "Bu soruya cevabınız hayır."
    },
    {
        name: "Bekle",
        message: "Şu an doğru zaman değil, bekleyin."
    },
    {
        name: "Affet",
        message: "Bu durumla ilgili affetmeyi düşünün."
    },
    {
        name: "Bol Şans",
        message: "Karşınıza güzel fırsatlar çıkacak."
    },
    {
        name: "Araştır",
        message: "Farklı seçenekleri dene, bir yavru kedi edasıyla yeni yolları araştır."
    },
    {
        name: "Kabuğunu Kır",
        message: "Olduğun kişi ol. Hem kendine, hem dünyaya karşı... Artık kendin olma vaktin geldi."
    },
    {
        name: "Sabır",
        message: "Sabır gösterin, sonuçları yakında göreceksiniz."
    },
    {
        name: "Yeni Başlangıç",
        message: "Yeni bir başlangıç sizi bekliyor, fırsatları değerlendirin."
    },
    {
        name: "Güçlü Ol",
        message: "Gücünüzü toplayın, bu süreçte güçlü olmanız gerekecek."
    },
    {
        name: "Başarı",
        message: "Emeğinizin karşılığını alacaksınız, başarı yakında sizin olacak."
    },
    {
        name: "İyileşme",
        message: "Bu süreç iyileşme zamanı, kendinize zaman tanıyın."
    },
    {
        name: "Değişim",
        message: "Hayatınızdaki değişimlere açık olun, yenilikler size iyi gelecek."
    },
    {
        name: "Şükret",
        message: "Şu an sahip olduklarınız için şükredin, bu sizi daha ileriye taşıyacak."
    },
    {
        name: "Güven",
        message: "Güvenin, her şey yoluna girecek."
    },
    {
        name: "Cesaret",
        message: "Korkularınızı yenin, cesaretinizle büyük adımlar atabilirsiniz."
    },
    {
        name: "Denge",
        message: "Hayatınızda denge kurmaya çalışın, hem içsel hem de dışsal denge önemlidir."
    },
    {
        name: "Huzur",
        message: "Huzur, sizi bekleyen bir kapıdan geçiyor. İçsel huzuru bulmak için zaman ayırın."
    },
    {
        name: "Mucizeler",
        message: "Mucizeler her an gerçekleşebilir, inancınızı koruyun."
    },
    {
        name: "Fırsatlar",
        message: "Karşınıza çıkan fırsatları değerlendirin, bunlar sizin için."
    },
    {
        name: "İyi Şanslar",
        message: "Şans yanınızda olacak, karşınıza çıkan fırsatları değerlendirin."
    },
    {
        name: "Bırak Gitsin",
        message: "Geçmişte takılı kalmayın, bırakın gitsin ve geleceğe odaklanın."
    },
    {
        name: "Bağlantılar",
        message: "Sosyal çevrenizden gelen desteklere açık olun, yeni bağlantılar kurabilirsiniz."
    },
    {
        name: "Kader",
        message: "Kaderin size sunduğu yola güvenin, her şey olması gerektiği gibi ilerliyor."
    },
    {
        name: "Bilgelik",
        message: "İçsel bilgelik ve sezgilerinize kulak verin, doğru kararlar alacaksınız."
    },
    {
        name: "Yenilenme",
        message: "Kendinizi yenilemek için mükemmel bir zaman, enerjinizi tazeleyin."
    },
    {
        name: "Sadakat",
        message: "Sadakatiniz ve bağlılığınız, ilişkilerinizi güçlendirecek."
    },
    {
        name: "Güvenlik",
        message: "Güvenlik duygunuzu güçlendirin, kendinizi ve sevdiklerinizi koruyun."
    },
    {
        name: "Yaratıcılık",
        message: "Yaratıcı enerjinizi kullanın, bu dönemde yeni fikirler size yol gösterecek."
    },
    {
        name: "Arınma",
        message: "Olumsuz enerjilerden arının, temiz bir başlangıç yapın."
    },
    {
        name: "Hedef Belirle",
        message: "Hedeflerinizi netleştirin ve onlara doğru emin adımlarla ilerleyin."
    },
    {
        name: "Tutku",
        message: "Tutkularınıza sarılın, onlar sizi doğru yola götürecek."
    },
    {
        name: "Kararlılık",
        message: "Kararlılığınızı koruyun, başarıya ulaşmak için odaklanın."
    },
    {
        name: "Sevgiyle Bırak",
        message: "Sevgiyle bırakın, sevdiğiniz şeyler size geri dönecektir."
    },
    {
        name: "Sabır ve Zamanlama",
        message: "Sabır gösterin, her şeyin bir zamanı var."
    },
    {
        name: "İçsel Güç",
        message: "İçsel gücünüzü kullanın, engelleri aşacak kapasiteniz var."
    },
    {
        name: "Şifa",
        message: "Fiziksel ve ruhsal şifalanma sürecindesiniz, bu zamanı iyileşmeye ayırın."
    },
    {
        name: "Anlayış",
        message: "Başkalarını anlamaya çalışın, empati ilişkilerinizi güçlendirecek."
    },
    {
        name: "Yeni Ufuklar",
        message: "Yeni ufuklara yelken açın, önünüzdeki engeller kalkıyor."
    },
    {
        name: "Anılar",
        message: "Anılarınızı hatırlayın, geçmişten ders alarak ileriye bakın."
    }
];

function randomAngelCard() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Answer...";
    
    const randomIndex = Math.floor(Math.random() * angelCards.length);
    const selectedCard = angelCards[randomIndex];

    cardDetails.innerText = selectedCard.message;
    cardName.innerText = selectedCard.name;
    
    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "Yeni mesaj";
}

quoteBtn.addEventListener("click", randomAngelCard);
