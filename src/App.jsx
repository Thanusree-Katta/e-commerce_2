import { useEffect, useRef, useState } from "react";
import "./App.css";

const whatsappNumber = "919133919293";
const phoneDisplay = "+91 9133919293";

const instagramLink =
  "https://www.instagram.com/kammanivantillu/";

const whatsappChannelLink =
  "https://whatsapp.com/channel/0029VbEDnRpHAdNY8jfxKY24";

const IMG = {
  logo: "/images/logo.png",
  story: "/images/mom-making-snacks",
  catering: "/images/catering.png",
  podulu: "/images/podulu.jpg",
  floral: "/images/bapu-floral-bg",
};

const open = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const orderOnWhatsApp = (item = "") => {
  const message = item
    ? `Namaste! I would like to enquire about ${item} from Kammani Vantillu.`
    : "Namaste! I would like to enquire about Kammani Vantillu.";

  open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`
  );
};

const go = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth" });
};

const delay = (seconds) => ({
  "--d": `${seconds}s`,
});

const EXTS = ["jpg", "png", "jpeg", "webp", "avif", ""];

const SmartImg = ({ src = "", alt = "", ...rest }) => {
  const base = src.replace(
    /\.(jpe?g|png|webp|avif)$/i,
    ""
  );

  const [index, setIndex] = useState(-1);

  const currentSrc =
    index < 0
      ? src
      : `${base}${EXTS[index] ? "." + EXTS[index] : ""}`;

  return (
    <img
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (index < EXTS.length - 1) {
          setIndex(index + 1);
        }
      }}
    />
  );
};

const IgIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
    />
  </svg>
);

const WaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinejoin="round"
  >
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path
      d="M9 8.5c0 3 2.5 5.5 5.5 5.5l1.2-1.5-2-1-.8.8c-.9-.4-1.6-1.1-2-2l.8-.8-1-2z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const cateringItems = [
  {
    group: "Flavoured Rice",
    image: "/images/curd-rice.jpg",
    name: "Curd Rice",
    description: "Creamy, comforting and homemade.",
  },
  {
    group: "Flavoured Rice",
    image: "/images/pulihora.jpg",
    name: "Pulihora",
    description: "Traditional tangy tamarind rice.",
  },
  {
    group: "Flavoured Rice",
    image: "/images/kobbari-annam.jpg",
    name: "Kobbari Annam",
    description: "Fragrant coconut rice.",
  },
  {
    group: "Flavoured Rice",
    image: "/images/pudina-rice.jpg",
    name: "Pudina Rice",
    description: "Fresh, aromatic mint rice.",
  },
  {
    group: "Flavoured Rice",
    image: "/images/tomato-rice.jpg",
    name: "Tomato Rice",
    description: "Homestyle tomato rice.",
  },
  {
    group: "Flavoured Rice",
    image: "/images/sambar-rice.jpg",
    name: "Sambar Rice",
    description:
      "Hearty rice cooked with vegetables and sambar.",
  },
  {
    group: "Sweets",
    image: "/images/chekkera-pongal.jpg",
    name: "Chekkera Pongal",
    description: "Sweet, ghee-rich pongal.",
  },
  {
    group: "Sweets",
    image: "/images/poornalu.jpg",
    name: "Poornalu",
    description: "Festive sweet made with care.",
  },
  {
    group: "Savouries",
    image: "/images/gaarelu.jpg",
    name: "Gaarelu",
    description: "Crispy traditional vada.",
  },
];

const snackItems = [
  {
    group: "Snacks",
    image: "/images/murukku.jpg",
    name: "Murukku",
    description:
      "Crunchy, hand-pressed and fried fresh.",
    qty: "250 g",
    price: 140,
  },
  {
    group: "Snacks",
    image: "/images/chekkelu.jpg",
    name: "Chekkelu",
    description:
      "Crispy traditional rice crackers.",
    qty: "250 g",
    price: 150,
  },
  {
    group: "Laddus",
    image: "/images/kobbari-laddu.jpg",
    name: "Kobbari Laddu",
    description:
      "Coconut laddu, soft and sweet.",
    qty: "250 g",
    price: 170,
  },
  {
    group: "Laddus",
    image: "/images/dryfriut-laddu.jpg",
    name: "Dry Fruit Laddu",
    description:
      "Rich, nutty and energising.",
    qty: "250 g",
    price: 300,
  },
  {
    group: "Laddus",
    image: "/images/ravva laddu.jpg",
    name: "Ravva Laddu",
    description:
      "Classic semolina laddu.",
    qty: "250 g",
    price: 140,
  },
  {
    group: "Pickles",
    image: "/images/gongura.jpg",
    name: "Gongura Pickle",
    description:
      "Tangy, spicy, unmistakably Andhra.",
    qty: "250 g",
    price: 150,
  },
  {
    group: "Pickles",
    image: "/images/avakaya.jpg",
    name: "Avakaya Pickle",
    description:
      "The mango pickle every home waits for.",
    qty: "250 g",
    price: 160,
  },
  {
    group: "Pickles",
    image: "/images/tomato-pickle.jpg",
    name: "Tomato Pickle",
    description:
      "Spicy and tangy homemade tomato pickle.",
    qty: "250 g",
    price: 150,
  },
  {
    group: "Pickles",
    image: "/images/allam-chutney.jpg",
    name: "Allam Chutney",
    description:
      "Traditional ginger chutney with a spicy kick.",
    qty: "250 g",
    price: 150,
  },
];

const podis = [
  {
    name: "Nalla Karam Podi",
    price: 150,
  },
  {
    name: "Dry Fruits Podi",
    price: 200,
  },
  {
    name: "Palli Podi",
    price: 150,
  },
  {
    name: "Karivepaku Podi",
    price: 170,
  },
  {
    name: "Putnalu Podi",
    price: 150,
  },
  {
    name: "Munagaku Podi",
    price: 180,
  },
];

const values = [
  "Traditional Telugu recipes",
  "Homemade taste",
  "Quality ingredients",
  "Hygienic preparation",
  "Delivered to your home",
];

const steps = [
  {
    t: "Tell us the occasion",
    d: "Pooja, birthday or family gathering, and roughly how many guests.",
  },
  {
    t: "Choose your menu",
    d: "We suggest a traditional menu and adjust it to your taste.",
  },
  {
    t: "We cook it fresh",
    d: "Prepared in our home kitchen for your day.",
  },
  {
    t: "Pickup or delivery",
    d: "Delivery can be discussed based on your location.",
  },
];

const marquee = [
  "రుచి",
  "సంప్రదాయం",
  "ఆప్యాయత",
  "మా ఇంటి రుచులు",
  "కమ్మని వంటిల్లు",
];

const FoodCard = ({ item, index, onOrder }) => (
  <article
    className="food-card"
    style={delay(index * 0.06)}
  >
    <div className="food-image">
      <SmartImg
        src={item.image}
        alt={item.name}
        loading="lazy"
      />
    </div>

    <div className="food-body">
      <h3>{item.name}</h3>

      <p>{item.description}</p>

      {item.price && (
        <p className="price">
          <strong>₹{item.price}</strong>
          <span>{item.qty}</span>
        </p>
      )}

      {item.price && (
        <button
          onClick={() =>
            onOrder(
              `${item.name} (${item.qty})`
            )
          }
        >
          Order
        </button>
      )}
    </div>
  </article>
);

const FilterGrid = ({
  items,
  groups,
  onOrder,
}) => {
  const [filter, setFilter] = useState("All");

  const shown =
    filter === "All"
      ? items
      : items.filter(
          (item) => item.group === filter
        );

  return (
    <>
      <div className="filters" data-reveal>
        {["All", ...groups].map((group) => (
          <button
            key={group}
            className={
              filter === group ? "on" : ""
            }
            onClick={() => setFilter(group)}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="food-grid" key={filter}>
        {shown.map((item, index) => (
          <FoodCard
            key={item.name}
            item={item}
            index={index}
            onOrder={onOrder}
          />
        ))}
      </div>
    </>
  );
};

const Notice = () => (
  <p className="notice" data-reveal>
    <b>How to order:</b> for now, orders and
    enquiries are taken only through WhatsApp
    DM or Instagram.{" "}
    <a
      href={whatsappChannelLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Join our WhatsApp Channel
    </a>{" "}
    for updates.
  </p>
);

const OrderModal = ({ item, onClose }) => (
  <div
    className="modal-back"
    onClick={onClose}
  >
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      onClick={(event) =>
        event.stopPropagation()
      }
    >
      <button
        className="modal-x"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <h3>Order {item}</h3>

      <p>
        Choose how you'd like to place
        your order.
      </p>

      <div className="modal-actions">
        <button
          className="btn green"
          onClick={() => {
            orderOnWhatsApp(item);
            onClose();
          }}
        >
          Order on WhatsApp
        </button>

        <button
          className="btn maroon"
          onClick={() => {
            open(instagramLink);
            onClose();
          }}
        >
          Order on Instagram
        </button>
      </div>

      <small>
        On Instagram, send us a message
        with the item name and quantity.
      </small>
    </div>
  </div>
);

const Home = () => {
  const root = useRef(null);

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [active, setActive] =
    useState("home");

  const [orderItem, setOrderItem] =
    useState(null);

  useEffect(() => {
    let animationFrame = 0;

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame =
        requestAnimationFrame(() => {
          const y = window.scrollY;

          const max =
            document.documentElement
              .scrollHeight -
            window.innerHeight;

          root.current?.style.setProperty(
            "--progress",
            `${max > 0 ? y / max : 0}`
          );

          root.current?.style.setProperty(
            "--parallax",
            `${Math.min(y, 900)}px`
          );

          setScrolled(y > 60);
        });
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const elements =
      document.querySelectorAll(
        "[data-reveal]"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "catering",
      "podulu",
      "snacks",
    ];

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          rootMargin:
            "-45% 0px -50% 0px",
        }
      );

    ids.forEach((id) => {
      const element =
        document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const nav = (id) => {
    setMenuOpen(false);
    go(id);
  };

  const links = [
    ["home", "Home"],
    ["catering", "Catering"],
    ["podulu", "Podulu"],
    ["snacks", "Snacks & Pickles"],
  ];

  return (
    <div className="page" ref={root}>
      <div className="progress" />

      <header
        className={`navbar ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <button
          className="logo-btn"
          onClick={() => nav("home")}
          aria-label="Kammani Vantillu home"
        >
          <SmartImg
            src={IMG.logo}
            alt="కమ్మని వంటిల్లు - Kammani Vantillu"
          />
        </button>

        <nav
          className={`links ${
            menuOpen ? "open" : ""
          }`}
        >
          {links.map(([id, label]) => (
            <button
              key={id}
              className={
                active === id ? "on" : ""
              }
              onClick={() => nav(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => open(instagramLink)}
            aria-label="Instagram"
          >
            <IgIcon />
          </button>

          <button
            className="icon-btn wa"
            onClick={() => orderOnWhatsApp()}
            aria-label="WhatsApp"
          >
            <WaIcon />
          </button>

          <button
            className={`burger ${
              menuOpen ? "x" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Menu"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-glow" />

        {[
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
        ].map((letter) => (
          <span
            key={letter}
            className={`petal p-${letter}`}
          >
            ❀
          </span>
        ))}

        <div className="hero-content">
          <h1 className="mask">
            <span
              className="rise"
              style={delay(0.35)}
            >
              కమ్మని రుచులు
            </span>
          </h1>

          <h2 className="hero-line">
            <span className="mask">
              <span
                className="rise"
                style={delay(0.65)}
              >
                మా ఇంటి కమ్మటి రుచులు…
              </span>
            </span>

            <span className="mask">
              <span
                className="rise"
                style={delay(0.85)}
              >
                మీ ఇంటి వరకు
              </span>
            </span>
          </h2>

          <div
            className="gold-line rise-in"
            style={delay(1.1)}
          >
            <span>❖</span>
          </div>

          <p
            className="hero-english rise-in"
            style={delay(1.2)}
          >
            Authentic Telugu flavours
            made with traditional recipes,
            using quality ingredients and
            homemade goodness.
          </p>

          <p
            className="hero-desc rise-in"
            style={delay(1.3)}
          >
            From festive sweets to everyday
            snacks, pickles and podulu, we
            bring the true taste of home to
            your table.
          </p>

          <div
            className="hero-buttons rise-in"
            style={delay(1.45)}
          >
            <button
              className="btn gold"
              onClick={() =>
                orderOnWhatsApp()
              }
            >
              Order on WhatsApp
            </button>

            <button
              className="btn maroon"
              onClick={() =>
                open(instagramLink)
              }
            >
              Follow on Instagram
            </button>
          </div>
        </div>

        <button
          className="scroll-cue"
          onClick={() => go("story")}
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <i />
        </button>
      </section>

      <div
        className="marquee"
        aria-hidden="true"
      >
        <div className="track">
          {[
            ...marquee,
            ...marquee,
            ...marquee,
            ...marquee,
          ].map((word, index) => (
            <span key={index}>
              {word}
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      <section id="story" className="story">
        <div
          className="story-photo"
          data-reveal
        >
          <div className="arch">
            <SmartImg
              src={IMG.story}
              alt="Making traditional snacks at home"
              loading="lazy"
            />
          </div>

          <span className="stamp">
            Made at home
          </span>
        </div>

        <div className="story-text">
          <h2 data-reveal>
            From our kitchen
            <br />
            to your home
          </h2>

          <p
            className="telugu"
            data-reveal
            style={delay(0.1)}
          >
            మా ఇంటి కమ్మటి రుచులు… మీ
            ఇంటి వరకు ❤️
          </p>

          <p
            data-reveal
            style={delay(0.15)}
          >
            Every home deserves the warmth
            of Telugu cooking. Inspired by
            recipes passed down through
            generations, we prepare each
            sweet, snack, podi and pickle
            the way it is made in our own
            kitchen.
          </p>

          <p
            data-reveal
            style={delay(0.2)}
          >
            From everyday favourites to
            festive treats, we want to take
            these cherished flavours from
            our kitchen to every home.
          </p>

          <ul className="values">
            {values.map((value, index) => (
              <li
                key={value}
                data-reveal
                style={delay(
                  0.25 + index * 0.07
                )}
              >
                <i>❦</i>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="catering"
        className="catering-section"
      >
        <div className="catering">
          <div className="catering-text">
            <h2 data-reveal>
              Homemade catering
              <br />
              for small gatherings
            </h2>

            <p
              data-reveal
              style={delay(0.1)}
            >
              Planning a pooja, birthday,
              family gathering or small
              event? We prepare customized
              traditional menus for about
              30–40 people.
            </p>

            <ol className="steps">
              {steps.map((step, index) => (
                <li
                  key={step.t}
                  data-reveal
                  style={delay(
                    0.15 + index * 0.1
                  )}
                >
                  <span>{index + 1}</span>

                  <div>
                    <h3>{step.t}</h3>
                    <p>{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="contact">
              <button
                className="btn brown"
                onClick={() =>
                  orderOnWhatsApp(
                    "Catering enquiry"
                  )
                }
              >
                Enquire for catering
              </button>

              <button
                className="btn green"
                onClick={() =>
                  open(
                    whatsappChannelLink
                  )
                }
              >
                Join WhatsApp Channel
              </button>

              <a
                className="phone"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {phoneDisplay}
              </a>
            </div>
          </div>

          <div
            className="catering-photo"
            data-reveal
          >
            <SmartImg
              src={IMG.catering}
              alt="Kammani Vantillu catering"
              loading="lazy"
            />
          </div>
        </div>

        <div className="block">
          <div
            className="section-head"
            data-reveal
          >
            <h2>Catering menu</h2>

            <p>
              Flavoured rice, festive
              sweets and savouries,
              freshly prepared. Prices and
              availability on request.
            </p>
          </div>

          <Notice />

          <FilterGrid
            items={cateringItems}
            groups={[
              "Flavoured Rice",
              "Sweets",
              "Savouries",
            ]}
            onOrder={setOrderItem}
          />
        </div>
      </section>

      <section id="podulu" className="podi">
        <div
          className="podi-photo"
          data-reveal
        >
          <SmartImg
            src={IMG.podulu}
            alt="Traditional Telugu podulu"
            loading="lazy"
          />
        </div>

        <div className="podi-text">
          <h2 data-reveal>Podulu</h2>

          <p
            className="sub"
            data-reveal
            style={delay(0.05)}
          >
            A little spice, a lot of flavour.
          </p>

          <p
            data-reveal
            style={delay(0.1)}
          >
            The kind of podi that turns a
            simple plate of hot rice and
            ghee into a celebration.
          </p>

          <table
            className="podi-table"
            data-reveal
            style={delay(0.15)}
          >
            <thead>
              <tr>
                <th>Podi</th>
                <th>250 g price</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {podis.map((podi) => (
                <tr key={podi.name}>
                  <td>{podi.name}</td>

                  <td className="amt">
                    ₹{podi.price}
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        setOrderItem(
                          `${podi.name} (250 g)`
                        )
                      }
                    >
                      Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Notice />
        </div>
      </section>

      <section
        id="snacks"
        className="snacks block"
      >
        <div
          className="section-head"
          data-reveal
        >
          <h2>Snacks &amp; Pickles</h2>

          <p>
            Crunchy snacks, laddus and
            pickles made in small batches.
            Prices are per 250 g.
          </p>
        </div>

        <Notice />

        <FilterGrid
          items={snackItems}
          groups={[
            "Snacks",
            "Laddus",
            "Pickles",
          ]}
          onOrder={setOrderItem}
        />
      </section>

      <section className="order">
        <div
          className="order-inner"
          data-reveal
        >
          <h2>
            Bring a little homemade
            <br />
            goodness home
          </h2>

          <p>
            Tell us what you're looking for.
            We'll confirm availability and
            share the price and delivery
            details.
          </p>

          <div className="hero-buttons">
            <button
              className="btn gold"
              onClick={() =>
                orderOnWhatsApp()
              }
            >
              Order on WhatsApp
            </button>

            <button
              className="btn maroon"
              onClick={() =>
                open(instagramLink)
              }
            >
              Follow on Instagram
            </button>

            <button
              className="btn green"
              onClick={() =>
                open(
                  whatsappChannelLink
                )
              }
            >
              Join WhatsApp Channel
            </button>
          </div>
        </div>
      </section>

      <section className="final">
        <SmartImg
          src={IMG.floral}
          alt=""
          loading="lazy"
        />

        <div
          className="final-inner"
          data-reveal
        >
          <p className="telugu">
            రుచి • సంప్రదాయం • ఆప్యాయత
          </p>

          <h2>
            కమ్మని వంటిల్లు
            <br />
            మీ ఇంటి వరకు
          </h2>

          <p className="tag">
            Authentic flavours from our home
            to yours.
          </p>
        </div>
      </section>

      <footer className="footer">
        <h2>కమ్మని వంటిల్లు</h2>

        <p className="en">
          Kammani Vantillu
        </p>

        <div className="foot-links">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => nav(id)}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() =>
              open(instagramLink)
            }
          >
            Instagram
          </button>

          <button
            onClick={() =>
              open(whatsappChannelLink)
            }
          >
            WhatsApp Channel
          </button>
        </div>

        <p className="copy">
          © 2026 Kammani Vantillu.
          Traditional flavours, made with
          love.
        </p>
      </footer>

      {orderItem && (
        <OrderModal
          item={orderItem}
          onClose={() =>
            setOrderItem(null)
          }
        />
      )}

      <button
        className={`float-wa ${
          scrolled ? "show" : ""
        }`}
        onClick={() => orderOnWhatsApp()}
        aria-label="Order on WhatsApp"
      >
        <WaIcon />
      </button>
    </div>
  );
};

export default Home;