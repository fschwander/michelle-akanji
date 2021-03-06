import * as React from "react";
import { Image } from "react-bootstrap";
import img from '../res/imgs/negritude.jpg'
import {Helmet} from "react-helmet/es/Helmet";


export default class Negritude extends React.Component {
  //todo: remove me after fixing scroll to wrong position
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='Works'>
        <Helmet>
          <title>Michelle Akanji ∆ N wie Négritude</title>
          <meta name='description' content='Veröffentlicht in ZOLLFREILAGER'/>
          <meta property="og:image" content={img}/>
        </Helmet>

        <h1>N wie Négritude</h1>

        <p className='no-text-intent'>Veröffentlicht in&nbsp;
          <a href={ 'http://www.zollfreilager.net/dictionaries/n-wie-negritude/' }
             target='_blank' rel='noreferrer noopener'>ZOLLFREILAGER</a>
          , 04.07.16
        </p>

        <Image src={ img }/>

        <p>Rund zehn Jahre nach dem «Kongress von Paris» 1922, der als Auflösungsmoment der Dada-Bewegung gilt, wurde
          in derselben Stadt im Zuge der dekolonialistischen Bewegungen die Négritude entwickelt. Hinter dem
          Kampfbegriff stand eine philosophisch- politische Strömung, angeführt von Intellektuellen der schwarzen
          Diaspora, ausgehend von einer Auseinandersetzung mit europäischen Schriften aus der Kolonialzeit über Afrika
          und die Karibik. Es war eine der ersten modernen schwarzen Bewegungen, deren Credo eine spirituelle und
          kulturelle Wiedergutmachung mit dem afrikanischen Kontinent vorantrieb. Die Studienkollegen Léopold Sédar
          Senghor aus Senegal, Léon-Gontran Damas aus Guyana und Aimé Césaire aus Martinique, welche die Erfahrung
          der kolonialistischen Unterdrückung und Diskriminierung in ihrer Heimat teilten, gründeten 1935 die
          kulturell-literarische Zeitschrift L’Etudiant Noir. </p>
        <p>Der Artikel «Conscience raciale et révolution sociale» von Césaire bildete den Ursprung und Kern der
          oppositionellen Négritude- Bewegung. Sie richtete sich gegen die Francité – den integrationspolitischen
          Ansatz der Kolonialmacht, die Kolonisierten zu Franzosen zu machen. Der Gruppe um Césaire ging es darum, sich
          der Assimilation zu verweigern und das eigene Sein zu bejahen.</p>
        <p>Die Négritude setzte der aus heutiger Sicht eurozentristischen Exotisierung und Verfremdung der Geschichten
          und Kulturen Afrikas die schwarze Kultur als gleichberechtigte auf Augenhöhe entgegen. Entstehen sollte ein
          neues kulturelles Selbstverständnis – befreit von Fremdbestimmung und Stereotypen.</p>

        <h3>«Antirassistischer Rassismus»</h3>
        <p>Das Kernanliegen der Négritude, die Kolonialzeit gedanklich zu überwinden, war nicht frei von Widersprüchen
          und bot Angriffsflächen für Kritik. Jean-Paul Sartre plädierte 1948 in seinem Vorwort mit dem Titel
          «L’Orphée Noir» (Der Schwarze Orpheus) zu Senghors «Anthologie de la nouvelle poésie nègre et malgache de
          langue française» für einen antirassistischen Rassismus: «Der Neger kann nicht leugnen, dass er Neger ist,
          noch jenes farblose abstrakte Menschsein für sich beanspruchen: er ist schwarz. So ist er zur Authentizität
          verdammt: beschimpft, unterjocht, richtet er sich wieder auf, hebt das Wort ‘Neger‘, dass man ihm wie einen
          Stein hinterhergeworfen hat, auf und behauptet sich gegenüber den Weissen stolz als Schwarzer. Der
          schliesslichen Einheit, die alle Unterdrückten in ein und demselben Kampf zusammenführen wird, muss in den
          Kolonien vorausgehen, was ich den Moment der Separation in der Negativität nennen möchte: dieser
          antirassistische Rassismus ist der einzige Weg, der zur Beseitigung der Rassenunterschiede führen
          kann»[1].</p>
        <p>Dieses Vorwort verhalf dem Buch zu grosser Bekanntheit, doch paradoxerweise enthielt es bereits viele
          Positionen, die später von den Kritikern der Négritude aufgenommen wurden: Man warf den Gründern und Sartre
          unter anderem vor, sie würden einen unbegründeten Essentialismus fördern, der die Vorstellung enthielt,
          dass schwarze Menschen eine gemeinsame Identität teilen. Eine Identität, die über historische Entwicklungen
          hinausging. Senghor ging noch weiter, indem er die umstrittene These aufstellte, dass sich «Afrikaner» die
          Welt nicht wie Europäer über die Vernunft aneigneten, sondern über Emotionen.</p>

        <h3>Afro Dada</h3>
        <p>Gleichzeitig handelte es sich bei der Négritude in erster Linie um eine literarische Bewegung. Damas,
          Senghor und Césaire erlebten Politik durch Literatur. Sie waren inspiriert von der Harlem Renaissance, einer
          radikalen Bewegung afroamerikanischer Schriftsteller und Maler in den 20er Jahren – und von Tristan Tzara. So
          berief sich Senghor auf Tzaras Strategie einer Zertrümmerung der bürgerlichen Sprachstruktur. Bemerkenswert
          ist diese künstlerische Wechselwirkung insofern, als die Négritude-Aktivisten ja genau die durch die
          Kolonisatoren betriebene – und von den Dadaisten adaptierte Verfremdung und Dekontextualisierung ihrer eigenen
          Kultur kritisierten. Von der Imitation des Fremden zur intellektuellen Methode des postkolonialen Widerstands.
          Von Dada Afrika zu Afro Dada.</p>
        <p>Als «Afro Dada» bezeichnet denn auch die zeitgenössische transnationale Künstlerin Senam Okudzeto, deren
          Werk Portes Oranges in der Ausstellung Dada Afrika des Museum Rietberg zu sehen ist, ihre Arbeitsmethode. Es
          war auch Okudzeto, welche den Zusammenhang zwischen Tristan Tzara und Léopold Sédar Senghor im Rahmen eines
          Referats im Museum Rietberg aufzeigte, und so die mündliche Quelle für diesen Text darstellt. Die
          Verflechtungen zwischen Dadaismus und Négritude zu recherchieren, gestaltet sich schwierig, da sie laut
          Okudzeto «forgotten narratives» sind: Vergessene Erzählungen.</p>

        <h3>Vergessene Erzählungen</h3>
        <p>So drängt sich die Frage auf, wie wir mit diesen vergessenen Erzählungen umgehen – wie Kolonialgeschichte
          anhand fragmentarischer Erinnerungen geschrieben oder gesprochen werden kann. Geschichte und Geschichten
          wurden und werden in den meisten Regionen des afrikanischen Kontinents mündlich überliefert. Die mündliche
          Tradition umfasst jegliche ungeschriebene «Geschichtssagung». Während die Mündlichkeit nach wie vor
          praktiziert wird, hat die afrikanische – und globale – Moderne der Schriftlichkeit einen neuen Stellenwert
          eingeräumt.</p>
        <p>Auch für die Négritude-Literaten war das geschriebene Wort bedeutend. Léon Damas, der, unterstützt vom
          Trocadero Museum Paris, als kolonialer Ethnograf zurück in seine Heimat reiste und an Chroniken der
          französischen Assimilation in Guyana arbeitete, lieferte dazu ein relevantes Werk: Veillées noires, Contes
          Nègres de Guyane sind Kurzgeschichten, die auf Volkssagen basieren, die Damas während seiner Reise gesammelt
          hatte. Er hatte diese mündlich überlieferten Erzählungen transkribiert, damit sie nicht vergessen gingen,
          aber im selben Zug wurden sie Teil der Literaturgeschichte.</p>
        <p>Walter Ong schrieb in Orality and Literacy: The Technologizing of the Word, dass Menschen, die schreiben und
          lesen können, nicht vollumfänglich verstehen, was das Wort für jene bedeutet, welche in einer rein oralen
          Kultur leben. Demnach ist es unmöglich, mündliche Tradition und Darstellung in die Literatur zu übernehmen,
          ohne nicht behebbare Übersetzungsfehler zu machen. [2] Das Paradox, Volkssagen zu verschriftlichen, stellte
          ein nicht zu vernachlässigendes Problem dar, war aber gleichzeitig ein wichtiger Teil des literarischen
          Engagements der Négritude-Autoren.</p>
        <p>So schrieb Damas in der Geschichte Aux Premiers Âges darüber, wie Mütter ihre Kinder während der Arbeit
          betreuen: Das Tier-Junge spielt im Nest, das schwarze Kind arbeitet und der weisse Sprössling braucht Monate,
          um überhaupt auf seinen eigenen Füssen zu stehen. Diese ungerechte soziale Ordnung wird mit einem
          zufälligen Ereignis erklärt: Eine Gottheit empfahl der schwarzen und der weissen Mutter nämlich, die Kinder
          auf den Boden zu setzen. Beide Frauen fanden ihre Kinder aber viel zu schön und nahmen diesen Vorschlag nicht
          entgegen. Also sagte die Gottheit: «pose-le donc dans tes bras» (Dann nimm es in die Arme). Die schwarze
          Mutter war mit diesem Vorschlag noch immer nicht zufrieden, da er für die Arbeit unpraktisch war. Deshalb
          durfte sie schlussendlich das Kind auf den Rücken binden – es also mitarbeiten lassen. Mit dieser und vielen
          ähnlichen Geschichten verlieh die Négritude-Bewegung auf unterhaltsame, fast zynische Weise der Ungleichheit
          einen Sinn.</p>

        <h3>Gespaltene Strömung</h3>
        <p>Damas und seine Verbündeten waren Guerilla-Intellektuelle und griffen zu allen Mitteln, die ihnen im Kampf
          gegen den Rassismus, Kolonialismus und Kapitalismus dienlich waren. Alles, was von den Kolonisatoren als
          negativ oder minderwertig angesehen wurde, zelebrierten sie. Doch dies reichte bald nicht mehr aus: James
          Clifford[3] bemerkte rückwirkend, dass es zu einer Spaltung der Strömung kam: Während Sartre als weisser
          privilegierter Marxist seinen intellektuellen Freunden die Négritude zu erklären versuchte, drifteten die
          Gründerväter Césaire und Senghor mit ihren Vorstellungen immer weiter auseinander: Césaire propagierte
          eine vermischte kulturelle Identität und stand mit einem Fuss in der kontinentalen Vergangenheit, mit dem
          anderen in der gegenwärtigen Realität der Diaspora.</p>
        <p>Senghor, ab 1960 der erste Präsident Senegals nach der Unabhängigkeit und in seiner Art zu regieren nicht
          wirklich zu unterscheiden von den Kolonialherren, verfocht diese rein afrikanische Essenz, die Quelle der
          alten afrikanischen Bräuche, Mythen und Werte. «Of the African thinkers of this century, (Senghor) will
          probably have been the most honored and the most complimented, yet probably also the most disparaged and the
          most insulted, particularly by the present generation of African intellectuals», schrieb der kongolesische
          Philosoph Valentin-Yves Mudimbe.[4] Die nächste Autoren- und Philosophen-Generation, die nach der
          Unabhängigkeitswelle der afrikanischen Staaten aufblühte, kritisierte die Négritude und insbesondere
          Senghor massiv. Bezeichnend war der Ausspruch des Dramatikers und Dichters Wole Soyinka an der
          Kampala-Konferenz von 1962: «I don’t think a tiger has to go around proclaiming his tigritude».</p>

        <h3>Das Vermächtnis</h3>
        <p>Es gibt kein definitives Ende der Négritude. Manche sagen, sie sei als panafrikanische Bewegung nach der
          Erlangung der Unabhängigkeit der afrikanischen Kolonien irrelevant geworden. Andere sagen, sie bestehe heute
          in jedem künstlerischen Werk, dass die schwarze Identität geltend macht. Zweifelsohne kann aber gesagt
          werden, dass die neue afrikanische Literatur und Kunst auf dem Nährboden des anti-kolonialistischen und
          anti-rassistischen Radikalismus im Sinne der Négritude gewachsen ist.</p>
        <p>Obwohl die postkoloniale, nationale Erfahrung in den einzelnen afrikanischen Ländern heute ganz verschieden
          ist, hat sich «The New African Poetry» herausgebildet, eine Strömung von intrakontinentaler Bedeutung und
          Wirkung. Der nigerianische Dichter und Schriftsteller Tanure Ojaide nennt in seinem kürzlich publizierten
          Buch «Indigeneity, Globalization, and African Literature»[5] zukunftsweisende «Second Generation Poets» wie
          Kofi Anyidoho, Abena Busia, Odia Ofeimun, Niyi Osundare, Chimalum Nwankwo, Jack Mapanje, Frank Chipasula und
          Lupenga Mphande. Für sie alle ist zeitgenössische afrikanische Literatur untrennbar mit der Geschichte des
          Kontinents verbunden. Die vergessenen Geschichten sollen in ihren postkolonialen Gegenwarten neu erzählt
          werden. Gepaart mit den Folgen der Globalisierung, der veränderten Vorstellung darüber, was «Afrika» und
          «afrikanisch» bedeutet und der Bewahrung (oder Erfindung) einer Indigenität ist die neue afrikanische
          Literatur zu einem Spannungsfeld geworden, das Négritude und Dada weit hinter sich gelassen hat. </p>

        <p className='no-text-intent'>[1] Sartre (1984): L’Orphée Noir</p>
        <p className='no-text-intent'>[2] Ong, Walter, Orality and Literacy: The Technologizing of the Word (London; New
          York: Methuen, 1982)</p>
        <p className='no-text-intent'>[3] James Clifford (1989): The Predicament of Culture: Twentieth- Century
          Ethnography, Literature, and Art</p>
        <p className='no-text-intent'>[4] Valentin-Yves Mudimbe (1994): The Invention of Africa</p>
        <p className='no-text-intent'>[5] Tanure Ojaide (2015): Indigeneity, Globalization, and African Literature:
          Personally Speaking (African Histories and Modernities)</p>
      </div>
    )
  }
}
