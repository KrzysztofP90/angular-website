import { RecordFromDB } from '../model/record';

export class FakeRecordsGenerator {

    private mainContentArr: string[] = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit:\n \n -Donec orci augue, cursus vel quam non\n \n-placerat aliquet felis. Curabitur massa libero, volutpat sit amet leo eget, convallis venenatis ipsum. Maecenas massa augue, condimentum a nisi sit amet, consectetur varius leo. Sed accumsan, felis at porta hendrerit, nulla orci tincidunt velit, sit amet blandit metus eros id eros. \n \n - Duis efficitur tempor eleifend. In viverra non nisi a luctus. Vivamus tempus eleifend leo at fringilla. Aenean sit amet massa orci. Nulla at urna efficitur, aliquam ligula a, maximus metus. Nunc sollicitudin odio nec tortor pellentesque congue eget ac massa. Donec velit massa, luctus sed molestie in, venenatis at ante. Duis quis elit pharetra, euismod urna nec, auctor justo. Etiam fringilla semper justo vitae varius. Proin at mauris tincidunt, placerat magna sit amet, vehicula mi.'+
    +'\n \n-Nullam blandit turpis nisi, id aliquam lectus elementum sed. Vivamus placerat ligula id luctus ornare. In in finibus orci. Aliquam metus dolor, lobortis eu fermentum vel, vulputate sit amet velit. Nulla eleifend, est vel lobortis porta, erat dui varius nulla, at viverra nibh massa a mauris. In a ipsum sit amet ligula aliquet suscipit at nec mi. Vestibulum vitae pulvinar ipsum. Vestibulum maximus eros gravida tempus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla hendrerit semper auctor. Etiam odio diam, tincidunt at mi rutrum, laoreet euismod risus. Nam nunc elit, pharetra porta lobortis id, condimentum non dolor. Suspendisse iaculis justo ac mollis aliquam. Nunc ultricies pharetra efficitur. Morbi finibus nunc et blandit sagittis. Quisque sollicitudin orci sit amet metus tincidunt commodo.'
    , 
    "Etiam iaculis felis non dolor volutpat, vel cursus metus convallis: \n \nQuisque viverra consectetur lobortis. Nulla facilisi. Aliquam dui leo, iaculis vel fringilla nec, fringilla in lorem. Vivamus consectetur tortor ut libero posuere pharetra. Donec euismod sapien et maximus consectetur. Ut at diam vel purus pulvinar molestie quis et dui."+
    +"\n \nIn consequat, enim et pellentesque tempor, sapien justo hendrerit metus, in luctus dolor est vitae mauris. Ut mollis at est sed ullamcorper. Vestibulum iaculis venenatis vulputate. Ut ultrices dui vel venenatis luctus. Quisque enim nibh, consequat quis mattis sed, laoreet et velit. Vivamus laoreet, lectus eget blandit imperdiet, elit mauris pretium orci, et sagittis dui nulla nec purus. Etiam scelerisque tortor lacus, et venenatis urna pulvinar eu. Phasellus vestibulum turpis vel felis ultricies, et bibendum dolor ullamcorper. Proin fringilla dolor vel elit scelerisque, in placerat urna tincidunt. Donec non elit id ligula imperdiet sollicitudin. Fusce imperdiet condimentum semper. Praesent imperdiet leo tortor, id vestibulum nisi convallis vel. Sed rutrum est in felis hendrerit, at feugiat dolor mattis."+
    "Nam vitae placerat sem. \n\nPhasellus mattis sollicitudin ultrices. Nulla nec diam ac leo vulputate tincidunt. Phasellus fermentum hendrerit odio eu ultrices. Sed a euismod leo. Etiam magna lorem, bibendum ut massa sit amet, posuere tristique purus. In augue enim, maximus et posuere nec, convallis in metus."
    ,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac viverra diam. Donec porttitor aliquam convallis. Suspendisse in sollicitudin tellus. Donec sed aliquet augue. Quisque in velit et turpis aliquam varius. Suspendisse tristique, lectus sollicitudin porta rutrum, arcu eros consectetur dolor, ac venenatis risus velit non ante. Nunc eget nisl posuere, blandit quam a, tristique sem. Nunc sed arcu ac ipsum sagittis tempus quis ac dolor. Nulla porttitor ipsum quam, ac sodales lectus feugiat vitae. Donec a nisi ultrices, eleifend nunc vel, porta risus. Quisque in fermentum ipsum.'+
    +'\n\nVivamus consequat, dolor nec pulvinar consectetur, ex nisi sollicitudin neque, sed laoreet est nisl non turpis. Nulla vestibulum ornare finibus. Nam ultrices tellus in congue elementum. Mauris sed lorem eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet eros a euismod. Phasellus ultricies sit amet sem id facilisis. Etiam mollis elit vel est tincidunt mollis. Sed in metus maximus, rutrum justo vel, posuere dolor. Cras a leo in est cursus tincidunt.'
    +'\n\nDuis sed ligula porttitor odio efficitur luctus sed sit amet nisl. Donec vulputate fermentum pulvinar. Sed suscipit tellus in enim hendrerit pellentesque. Aliquam aliquam felis id magna auctor facilisis. Duis scelerisque est vitae orci suscipit, eu iaculis diam molestie. Integer aliquam mauris sit amet mauris ultrices sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tincidunt felis nec mi condimentum, id aliquet ligula dictum. Nullam quis turpis sed ante pulvinar fringilla a ac metus. Fusce lorem nunc, sodales eget lobortis vitae, ornare non velit. Integer tincidunt tempus tempus. Nulla sed tincidunt quam. Quisque quis ipsum ultrices, porta quam eu, sollicitudin ipsum. Suspendisse et metus at ante imperdiet blandit.'
    ,
    'Quisque eros elit, ultricies vel mauris quis, scelerisque euismod leo. Ut ultrices hendrerit libero. Vestibulum sollicitudin nisi sapien, in porttitor enim ultricies sed. Maecenas nulla quam, gravida et porta et, elementum eget turpis. Curabitur dictum tellus vel consectetur pulvinar. Morbi et mauris purus. Pellentesque tincidunt, lectus eu bibendum auctor, nulla quam blandit libero, at dignissim massa ligula et sem. Aenean fermentum nisl leo, nec tincidunt urna consectetur id. Proin quis ex a odio lacinia euismod. Nam placerat aliquet massa sit amet laoreet. Suspendisse potenti. Sed aliquam rhoncus dolor in finibus. Fusce vestibulum lobortis dolor non placerat. '
    +'\n\nFusce placerat, dolor non facilisis pretium, dui sapien ultricies risus, ut laoreet augue felis id metus. Fusce laoreet felis ut velit vulputate, vel consectetur risus efficitur. Proin sit amet risus magna. Mauris sagittis, eros a accumsan rhoncus, felis erat porta dui, ac tristique ante odio at magna. Nam vel eleifend nisl, id accumsan felis. Sed ut rutrum massa. Etiam feugiat semper quam, vitae eleifend lorem porta ultrices. Proin at leo velit. Duis sit amet lacus eu ex venenatis efficitur vitae in ante. Proin rhoncus mattis viverra. Quisque bibendum felis sed arcu fermentum ultricies. Vestibulum ac massa eu ante volutpat varius. Morbi dignissim, nulla in tempor malesuada, dui sem hendrerit magna, sed viverra arcu diam eget magna.'
    ];

    private polishMainContent: string = 'Książka "Opowieść Wigilijna" opowiada o samotnym skąpcu Scroogu, który jak każde święta Bożego Narodzenia miał zamiar spędzić w swym kantorze gdyż uważał to za święto wymyślone przez szaleńców i głupców, którzy nie potrafią do niczego w życiu dojść. Święta Bożego Narodzenia szczególnie nie traktował zbyt poważnie. '

    +'\nJak każdego dnia Scrooger siedziała w swym kantorze, lecz ten dzień nie był tak zwykły, był to dzień przed Bożym Narodzeniem. Co roku jego siostrzeniec próbował zaprosić go na święta lecz nie udawało mu się przekonać Scroogera że święta to najpiękniejsze dni w naszym życiu i że nie powinniśmy ich traktować obojętnie. Tego dnia zawitało w jego kantorze dwóch mężczyzn, którzy zbierali fundusze na zakup żywności dla biednych, lecz zawiedli się i nic nie otrzymali od naszego bogatego bohatera.';

    private descriptionArr: string[] = [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem sem, interdum sit amet auctor eget, malesuada ut risus! \n\n Cras nec dolor eu enim dignissim blandit. Fusce nec tempus diam. Nunc leo justo, interdum vitae venenatis vitae, tempus in lectus.\n \nCurabitur vehicula dolor a viverra mattis. Sed at erat eu ipsum porttitor volutpat. Aliquam vehicula ligula non placerat semper. Fusce eu vestibulum nisi, sit amet efficitur odio. Nullam mi ipsum, blandit at velit id, suscipit porta metus. Quisque ultricies non turpis a rutrum. Donec vestibulum ex interdum erat aliquam finibus. Nam congue gravida leo at fringilla. Aliquam pharetra imperdiet est vel consequat. Sed vestibulum sem sit amet pulvinar pellentesque. Ut nec libero eget elit aliquet venenatis. Ut varius risus in leo laoreet sagittis.'
    , 'Maecenas interdum nunc eu ligula posuere, ac condimentum libero dapibus. Nulla placerat nunc a dignissim ornare. Vivamus efficitur auctor pretium. Aenean eu lacus sit amet augue sodales tincidunt. Nunc commodo dui arcu, sed porta nisi semper at. In hac habitasse platea dictumst. \n\nPraesent pulvinar, arcu a venenatis efficitur, urna diam scelerisque enim, et posuere quam dui at dui. In scelerisque justo et rhoncus facilisis. In tempor quam at ligula iaculis ultrices. Nam eget aliquet diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas nec eros mauris. Vivamus eget pretium ante, et congue tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nunc felis, feugiat non tristique accumsan, fermentum vel tellus.'
    , 'Phasellus finibus cursus est, sit amet accumsan arcu aliquet nec. Morbi et dapibus ipsum. Pellentesque porttitor condimentum justo eget scelerisque. \n\nSuspendisse egestas vel tortor at eleifend. Integer orci neque, fermentum eu vulputate non, semper facilisis elit. Donec luctus molestie ipsum a facilisis. Etiam metus turpis, malesuada vel odio ac, mattis molestie est. Cras aliquam bibendum ex, eget tempor augue eleifend eu. In sed hendrerit risus. Ut elementum nec ante at ornare.\n\n Morbi dapibus pretium sollicitudin. In molestie ante lorem, ac tempus est pellentesque non. Aenean eget urna non augue gravida finibus. Phasellus tristique consequat orci, a semper ipsum pharetra eu 3.'
    ,   'Mauris ac tristique metus! \n\n Sed semper sapien elit, ut accumsan lectus auctor sed. Fusce nulla neque, iaculis vitae urna ut, lobortis luctus turpis. Nunc venenatis volutpat fermentum. Sed cursus mi ut turpis vehicula, bibendum elementum felis venenatis. Suspendisse odio purus, mollis nec nulla faucibus, maximus ultricies lectus. Nam auctor pharetra leo ut venenatis. Nam velit nibh, eleifend et suscipit et, ullamcorper aliquam ligula. \n\nVestibulum massa justo, malesuada id pharetra vel, ornare vestibulum nibh. Ut gravida in metus sit amet pretium. Praesent dapibus porta metus eu porta. Fusce imperdiet ac enim nec facilisis. Ut finibus tempus metus, nec posuere enim pretium sit amet. Duis vel dui id quam varius rutrum. Nam id mattis orci, a pulvinar velit.'
    ];

    private polishDescription: string = 'Stary kupiec, Ebenezer Scrooge, znany ze swego skąpstwa, powraca w Wigilię Bożego Narodzenia do domu po pracy w swoim kantorze. Tam zjawia mu się duch jego wspólnika, Jakuba Marleya, który ostrzega: jeśli Scrooge się nie zmieni, po śmierci czeka go wieczna męka. Zjawa zapowiada także odwiedziny trzech innych duchów, dzięki którym los starego skąpca może się odmienić. Duchy rzeczywiście przybywają i ukazują Ebenezerowi przeszłość, teraźniejszość i przyszłość (jeśli jego życie się nie zmieni)';

    constructor() {}

    createExampleRecordsArray() {
        const rec1 = new RecordFromDB("keyID",'First title', this.descriptionArr[0],
        'option/0', 'Read more', this.mainContentArr[0], 'assets/builder.jpg',
        'assets/builder2.jpg',0);
        const rec2 = new RecordFromDB("keyID",'Second title',this.descriptionArr[1],
        'option/1', 'Read more', this.mainContentArr[1],'assets/builder3.jpg',
        'assets/builder4.jpg', 1);
        const rec3 = new RecordFromDB("keyID",'Third title',this.polishDescription,
        'option/2', 'Read more', this.polishMainContent,'assets/builder7.jpg',
        'assets/builder5.jpg',2);
        const rec4 = new RecordFromDB("keyID",'About us',this.descriptionArr[3],
        'option/3',  'Read more', this.mainContentArr[3],'assets/cat-4151445_960_720.jpg',
        'assets/roof.jpeg', 3);
        const records: Array<RecordFromDB> = [rec1, rec2, rec3, rec4];
        return records;
      }

      createExampleContactRecord() {
        return new RecordFromDB("keyID","Contact", "We invite to cooperation!\n \n "+
        "Phone: 888999000 \nEmail: example@gmail.com","/contact","Quick contact",
        "Phone: 888999000 \nEmail: example@gmail.com", "assets/minicontact.jpg",
        "assets/contact.jpeg");
      }

      createExampleGalleryRecord() {
        return new RecordFromDB("keyID","Our Realizations", "Amoung our customers are Chevron,"+
        "Marathon Oil, BrukBet and Gaspol","/gallery","Watch gallery",
        "", "assets/gallery.jpg",
        "");
      }

      /// on future
      convertTextArrNewLineToHTMLTag(textArr: string[]) {
          for (let i = 0; i < textArr.length; i++) {
            textArr[i] = this.convertNewLineToBrHTMLtag(textArr[i]);
          }
          return textArr;
      }
      /// on future
      convertNewLineToBrHTMLtag(text: string) {
        return text.split("\n").join("<br/>");
      }
}