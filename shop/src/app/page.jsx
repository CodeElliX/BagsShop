import styles from './main-page-styles/main.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer/page';
import CategoriesSlider from './categoriesSlider/page'

export default function Home() {

  return (
    <div className={styles.main_page}>
      <div className={styles.main_page__head}>
        <Image src={'./logo_2.png'} alt="logo" className={styles.main_page__logo} width={260} height={220} priority />
        <Image src={'./lozung_2.png'} alt="lozung" className={styles.main_page__lozung} width={200} height={200} priority />
      </div>
      <section className={styles.main_page__section2}>
        <div className={styles.main_page__box}>
          <div className={styles.main_page__item}>
            <svg viewBox="0 0 64 64">
              <g>
                <path d="M53.874,12.2065a3.4864,3.4864,0,0,0-.4844-1.268l-4.1821-6.565a3.2867,3.2867,0,0,0-2.772-1.5208H38.0234l5.697,9.3538Z" />
                <path d="M25.772,2.8527H18.8911a3.2862,3.2862,0,0,0-2.772,1.5208l-4.1821,6.565a3.4886,3.4886,0,0,0-.4846,1.268h9.9761Z" />
                <path d="M33.76,12.2065a1.25,1.25,0,0,1,0,2.5H24.009l7.177,20.8086a1.5207,1.5207,0,0,0,2.8748.001l7.5781-21.9214L35.0964,2.8527H28.5283l-4.3437,9.3538Z" />
                <path d="M53.1619,15.0273a3.4177,3.4177,0,0,0,.2192-.3208H43.894L36.9609,33.819Z" />
                <path d="M11.9453,14.7065a3.5365,3.5365,0,0,0,.2192.3208L28.2722,33.79,21.35,14.7065Z" />
                <path d="M16.8157,40.4125H10.9712a.93.93,0,0,0-.93.93V61.2885a.93.93,0,0,0,.93.93h5.8445a2.0268,2.0268,0,0,0,2.0268-2.0269V42.4394A2.0269,2.0269,0,0,0,16.8157,40.4125Z" />
                <path d="M53.7527,42.6957a3.4963,3.4963,0,0,0-2.93-1.5791h-2.29a5.0557,5.0557,0,0,0-4.6865,3.1358,5.0141,5.0141,0,0,1-.8645,1.3813,7.6849,7.6849,0,0,1-6.2063,3.6353H29.9885a1.35,1.35,0,0,1,0-2.6992h6.752A4.4938,4.4938,0,0,0,39.5447,45.48a4.7153,4.7153,0,0,0-4.7207-4.3638H29.8454a7.0006,7.0006,0,0,0-4.9765,2.0567l-.126.125a6.3514,6.3514,0,0,1-3.2012,1.7287v13.54h17.97a13.8591,13.8591,0,0,0,12.7461-8.3955l1.788-4.1621A3.4965,3.4965,0,0,0,53.7527,42.6957Z" />
              </g>
            </svg>
            <h3>найкраща якість</h3>
          </div>
        </div>
        <div className={styles.main_page__box}>
          <div className={styles.main_page__item}>
            <svg viewBox="0 0 64 64">
              <g>
                <path d="M28.8581,16.83a4.4509,4.4509,0,0,1-4.3532-3.53,22.0106,22.0106,0,1,0,22.3611,4.472,4.4067,4.4067,0,0,1-.5523-5.917,26.2856,26.2856,0,0,0-9.3459-3.74,4.4238,4.4238,0,0,1-.8479,2.0607l-3.7161,4.8946A4.4741,4.4741,0,0,1,28.8581,16.83ZM15.6511,35.6547a1.35,1.35,0,0,1,0-2.6992h2.5381a1.35,1.35,0,0,1,0,2.6992Zm6.9326,9.8194L20.7888,47.268a1.35,1.35,0,1,1-1.9082-1.91l1.7949-1.794a1.35,1.35,0,0,1,1.9082,1.91Zm.5674-20.1358a1.3508,1.3508,0,0,1-1.9092-.001L19.448,23.5424a1.35,1.35,0,1,1,1.91-1.9082l1.794,1.7949A1.3506,1.3506,0,0,1,23.1511,25.3383ZM33.3747,51.4829a1.35,1.35,0,1,1-2.6992,0V48.9448a1.35,1.35,0,1,1,2.6992,0ZM48.7165,32.9555a1.35,1.35,0,0,1,0,2.6992h-2.538a1.35,1.35,0,1,1,0-2.6992Zm-7.2236-10.21,1.7949-1.7939a1.35,1.35,0,1,1,1.9082,1.91l-1.7949,1.7939a1.35,1.35,0,1,1-1.9082-1.91Zm-.459,20.4737a1.3545,1.3545,0,0,1,1.91,0l1.7949,1.7949a1.3507,1.3507,0,0,1-1.91,1.91l-1.7949-1.795A1.3527,1.3527,0,0,1,41.0339,43.2192ZM33.3747,21.9067V32.1518l3.0782-2.9531a1.35,1.35,0,1,1,1.8691,1.9472L32.96,36.2924a1.3492,1.3492,0,0,1-2.2842-.9736V21.9067a1.35,1.35,0,0,1,2.6992,0Z" />
                <path d="M51.0554,13.2016a1.75,1.75,0,0,0-2.3652,2.58A24.7,24.7,0,1,1,28.8586,9.487l-1.393,1.8347a1.75,1.75,0,0,0,2.7871,2.1172L33.97,8.5434a1.7508,1.7508,0,0,0-.1807-2.32L29.3572,1.9643a1.75,1.75,0,0,0-2.4258,2.5234l1.5762,1.5149a28.2113,28.2113,0,1,0,22.5478,7.199Z" />
              </g>
            </svg>
            <h3>10 років на ринку</h3>
          </div>
        </div>
        <div className={styles.main_page__box}>
          <div className={styles.main_page__item}>
            <svg viewBox="7 7 50 50">
              <g>
                <path d="M44.0156,45.197l-.0071.02c-.7031,2.0046-1.5782,4.4995-3.9845,5.2809a4.2663,4.2663,0,0,1-1.32.2062c-1.7457,0-3.2378-.9764-4.675-1.9628l3.5859,12.0972a1.3021,1.3021,0,0,0,2.3555.3154L42.5434,57A1.3018,1.3018,0,0,1,43.9,56.4078l4.7954.9372a1.302,1.302,0,0,0,1.37-1.9417Z" />
                <path d="M24.5873,50.704a4.2677,4.2677,0,0,1-1.32-.2061c-2.2195-.7209-3.1333-2.8957-3.8139-4.8026l-5.7546,9.708a1.302,1.302,0,0,0,1.37,1.9417l4.7955-.9372A1.302,1.302,0,0,1,21.2209,57l2.5728,4.1539a1.3019,1.3019,0,0,0,2.3552-.3154L29.855,48.3362c-.143.097-.2808.1912-.4012.2741C27.9575,49.64,26.41,50.704,24.5873,50.704Z" />
                <path d="M56.2544,24.71c0-2.4131-4.7523-4.0453-5.4594-6.2227-.7328-2.2565,2.1271-6.3656.76-8.2439-1.3807-1.8971-6.1814-.44-8.0784-1.82-1.8784-1.3672-1.9678-6.39-4.2244-7.123-2.1775-.7071-5.1933,3.281-7.6064,3.281S26.2173.5934,24.04,1.3005c-2.2566.7326-2.3461,5.7557-4.2244,7.1228-1.897,1.3805-6.6977-.0769-8.0784,1.82-1.367,1.8782,1.4927,5.9874.76,8.244-.707,2.1775-5.4595,3.81-5.4595,6.2229s4.7525,4.0453,5.46,6.2226c.7327,2.2565-2.1269,6.3656-.76,8.2439,1.3806,1.8971,6.1812.44,8.0783,1.82,1.8782,1.3671,1.9677,6.39,4.2244,7.123,2.1775.707,5.1932-3.281,7.6065-3.281s5.4287,3.988,7.6061,3.2811c2.2564-.7328,2.346-5.7559,4.2243-7.1228,1.8971-1.3806,6.6977.0768,8.0784-1.82,1.3671-1.8783-1.4926-5.9874-.76-8.244C51.5019,28.7557,56.2544,27.1235,56.2544,24.71ZM31.6521,37.8315A13.1212,13.1212,0,1,1,44.7733,24.71,13.1213,13.1213,0,0,1,31.6521,37.8315Z" />
                <path d="M37.4145,21.5491H34.9513a1.3375,1.3375,0,0,1-1.2721-.9242l-.7612-2.3427a1.3376,1.3376,0,0,0-2.5442,0l-.7611,2.3427a1.3376,1.3376,0,0,1-1.2721.9242H25.8774a1.3375,1.3375,0,0,0-.7862,2.42l1.9928,1.448a1.3376,1.3376,0,0,1,.4858,1.4954l-.7612,2.3426A1.3376,1.3376,0,0,0,28.8669,30.75L30.86,29.3023a1.3373,1.3373,0,0,1,1.5724,0L34.4249,30.75a1.3376,1.3376,0,0,0,2.0582-1.4955l-.7612-2.3426a1.3378,1.3378,0,0,1,.486-1.4954l1.9928-1.448A1.3375,1.3375,0,0,0,37.4145,21.5491Z" />
              </g>
            </svg>
            <h3>перевірені постачальники</h3>
          </div>
        </div>
        <div className={styles.main_page__box}>
          <div className={styles.main_page__item}>
            <svg viewBox="4 4 56 56">
              <g>
                <path d="M12.1719,3.9982,6.0476,12.57a.6819.6819,0,0,0,.5542,1.0781l17.312.0166L31.1692,3.433H13.27A1.35,1.35,0,0,0,12.1719,3.9982Z" />
                <path d="M57.7119,12.6264,51.5476,3.9982A1.3506,1.3506,0,0,0,50.449,3.433H32.56l7.2334,10.2549,17.3628.0166A.6818.6818,0,0,0,57.7119,12.6264Z" />
                <path d="M37.99,15.8154,33.21,9.039V29.9077H50.449a1.75,1.75,0,0,0,1.75-1.75V16.4l-13.1075-.0126A1.3519,1.3519,0,0,1,37.99,15.8154Z" />
                <path d="M24.6111,16.3657h-.002L11.52,16.3764V28.1577a1.75,1.75,0,0,0,1.75,1.75h17.24V9.03l-4.7979,6.7661A1.3519,1.3519,0,0,1,24.6111,16.3657Z" />
                <path d="M15.1052,37.15H8.5471a1.0432,1.0432,0,0,0-1.0432,1.0434V60.5751a1.0434,1.0434,0,0,0,1.0432,1.0435h6.5581A2.2744,2.2744,0,0,0,17.38,59.3442v-19.92A2.2744,2.2744,0,0,0,15.1052,37.15Z" />
                <path d="M56.3279,39.7783a3.8042,3.8042,0,0,0-3.1846-1.7159h-2.57a5.5493,5.5493,0,0,0-5.1455,3.4429,5.75,5.75,0,0,1-1.0239,1.6192A8.3784,8.3784,0,0,1,37.72,46.9233l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0458A5.219,5.219,0,0,0,35.19,38.0624h-5.586a7.7366,7.7366,0,0,0-5.497,2.2706l-.1426.142a7.2457,7.2457,0,0,1-3.8858,2.0127V57.3989H40.45A15.4305,15.4305,0,0,0,54.64,48.0522l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.7783Z" />
              </g>
            </svg>
            <h3>великий ассортимент</h3>
          </div>
        </div>
      </section>
      <section className={styles.main_page__section3}>
        <div className={styles.main_page__stiker}>
          <Image src={'./green_stiker.png'} alt="green_stiker" className={styles.main_page__stiker} width={200} height={200} />
          <Link href="/bags">
            <Image src={'./bag2.png'} alt="yellow_stiker" className={styles.main_page__stiker_bag} width={120} height={150} />
          </Link>
        </div>
        <div className={styles.main_page__stiker}>
          <Image src={'./lilac_stiker.png'} alt="lilac_stiker" className={styles.main_page__stiker} width={200} height={200} />
          <Link href="/backpacks">
            <Image src={'./backpack2.png'} alt="yellow_stiker" className={styles.main_page__stiker_bag} width={120} height={150} />
          </Link>
        </div>
        <div className={styles.main_page__stiker}>
          <Image src={'./pink_stiker.png'} alt="pink_stiker" className={styles.main_page__stiker} width={200} height={200} />
          <Link href="/bags">
            <Image src={'./bag1.png'} alt="yellow_stiker" className={styles.main_page__stiker_bag} width={120} height={150} />
          </Link>
        </div>
        <div className={styles.main_page__stiker}>
          <Image src={'./yellow_stiker.png'} alt="yellow_stiker" width={200} height={200} priority />
          <Link href="/backpacks">
            <Image src={'./backpack1.png'} alt="yellow_stiker" className={styles.main_page__stiker_bag} width={120} height={150} />
          </Link>
        </div>
        <div className={styles.main_page__stiker}>
          <Image src={'./light_green_stiker.png'} alt="light_green" className={styles.main_page__stiker} width={200} height={200} />
          <Link href="/wallets">
            <Image src={'./wallet1.png'} alt="yellow_stiker" className={styles.main_page__stiker_bag} width={120} height={150} />
          </Link>
        </div>
        <section className={styles.main_page__view}>
          <h4>Переглянути усі товари</h4>
          <Link href="/all-products">
            <svg viewBox="0 0 512 512">
              <title />
              <g>
                <path d="M72.86,407.49H69.13a15,15,0,0,1-15-15V282.25C54.13,201.62,119.74,136,200.37,136h50.21V70.75a15,15,0,0,1,25-11.14L451.18,217.88a15,15,0,0,1,0,22.28L275.63,398.44a15,15,0,0,1-25-11.15V322H183.65a99.52,99.52,0,0,0-96.28,74.25A15,15,0,0,1,72.86,407.49ZM183.65,292h81.93a15,15,0,0,1,15,15v46.54L418.73,229,280.58,104.47V151a15,15,0,0,1-15,15H200.37A116.37,116.37,0,0,0,84.13,282.25v56.36A129.6,129.6,0,0,1,183.65,292Z" />
              </g>
            </svg>
          </Link>
        </section>
      </section>
      <section className={styles.main_page__section4}>
        <span className={styles.main_page__section4_message}>
          <h4><i>Рюкзаки</i> <br /> для школи <br /> та дошкільнят</h4>
        </span>
      </section>
      <section className={styles.main_page__section5}>
        <div className={styles.main_page__section5_photo}>
          <Image src={'/BagsShop/woomen4.jpg'} alt="woomen4" className={styles.section5_photo1} width={200} height={250} priority />
          <Image src={'/BagsShop/woomen3.jpg'} alt="woomen3" className={styles.section5_photo2} width={200} height={250} priority />
          <Image src={'/BagsShop/men1.jpg'} alt="men1" className={styles.section5_photo3} width={300} height={250} priority />
          <Image src={'/BagsShop/men3.jpg'} alt="men2" className={styles.section5_photo4} width={250} height={300} priority />
        </div>
        <div className={styles.main_page__section5_description}>
          <h1>Bags Shops – магазин рюкзаків, сумок та аксесуарів</h1>
          <p>З <b>Bags Shops</b> кожен день стає зручним, стильним і натхненним! У нашому інтернет-магазині ви знайдете широкий вибір рюкзаків для дітей і дорослих, сумок, гаманців та аксесуарів, які підкреслять вашу індивідуальність і зроблять щоденне життя комфортнішим.</p>

          <p>Ми зібрали для вас найкращі моделі від різних брендів – як популярні, так і унікальні, щоб кожен міг знайти ідеальний варіант для навчання, роботи, подорожей або прогулянок.</p>

          <p><b>Bags Shops</b> – це про якість, стиль і зручність. Ми допомагаємо вам обирати аксесуари, які доповнюють образ, роблять життя впорядкованішим та додають впевненості.</p>

          <p>Обирайте комфорт і стиль разом з <b>Bags Shops</b> – і вперед до нових звершень! 🚀</p>
          <Link href="/all-products">
            <button>Переглянути усі товари</button>
          </Link>
        </div>
        <div className={styles.main_page__section5_photo}>
          <Image src={'/BagsShop/woomen5.jpg'} alt="woomen_bag" className={styles.section5_photo5} width={200} height={250} priority />
        </div>
      </section>
      <section className={styles.main_page__section6}>
        {/* <div className={styles.section6_photos}>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/bunanka.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/bags_school.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/cross_body.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/wallets.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/bags_old.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/shopers.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
          <div className={styles.section6_photo1}>
            <Image src={'/BagsShop/bags_kids.png'} alt="card_sections1" width={200} height={150} priority />
          </div>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrow_left}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-8 7 8 7" />
            </svg>
          </div>
          <div className={styles.arrow_right}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 5l8 7-8 7" />
            </svg>
          </div>
        </div> */}
        <CategoriesSlider />
      </section>
      <Footer />
    </div>
  );
}

//бананки,  рюкзаки для школи, крос-боді, гаманці, рюкзаки для дорослих, сумки-шопери, рюкзки для дошкільнят
