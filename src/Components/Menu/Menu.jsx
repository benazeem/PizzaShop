import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menucard from './Menucard'

function Menu() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const menucollection = {
        0: {Name: "Corn Pizza",
          Price: "89",
          Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/de4b07ce8553b124141feebdf1263495",
          Star: "3.9(78)"
        },
        1: {Name: "Onion Pizza",
          Price: "89",  
          Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/32cc0bafd26f1696601e533f72c0f343",
          Star: "4.1(74)"
        },
        2: {Name: "Capsicum Pizza",
        Price: "89",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/71597bbe9b99d09ca587ea5b3c48b7d1",
        Star: "4.1(21)"
        },
        3: {Name: "Tomato Pizza",
        Price: "89",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/8dd81c8d731f6dd5d856683df86ac9cc",
        Star: "4.3(23)"
        },
        4: {Name: "Cheese Corn & Paneer Pizza",
        Price: "139",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/a85549eaa7cd1edde6b4f66b4e6a4afe",
        Star: "4.4(6)"
        },
        5: {Name: "Cheese Pizza",
        Price: "139",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b02fb9f4786086241939f3c6a9e18e23",
        Star: "3.9(4)"
        },
        6: {Name: "Cheese Capsicum & Paneer Pizza",
        Price: "139",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d4f10cee4c681e533a7e6a646bb99b2d",
        Star: "4.2(16)"
        },
        7: {Name: "Cheese Onion & Paneer Pizza",
        Price: "139",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/8f74cf1cc7a94e01f59501c2bce168e3",
        Star: "4.0(13)"
        },
        8: {Name: "Cheese & Paneer Pizza",
        Price: "139",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/293a9e744c75970a2c84de9f33762349",
        Star: "1.8(4)"
        }, 
        9: {Name: "Onion & Paneer Pizza",
        Price: "119",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/7e9494908072b4b270cb44209fd69c71",
        Star: "3.7(32)"
        },
        10: {Name: "Onion & Capsicum Pizza",
        Price: "110",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f61b1ba773d276faaad3304fc1472c1d",
        Star: "0(0)"
        },
        11: {Name: "Capsicum Corn Pizza",
        Price: "110",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/1b48f5b5625d918ceab058ca2e1ddb98",
        Star: "2.5(3)"
        },
        12: {Name: "Tomato & Corn Pizza",
        Price: "110",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/46f66d579d407d5cfb94052468791394",
        Star: "0(0)"
        },
        13: {Name: "Farmfresh Pizza",
        Price: "199",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/91a5e6d0f0aea57cd7b8afd097ee61aa",
        Star: "0(0)"
        },
        14: {Name: "Maxican Green Veg Pizza",
        Price: "199",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/547bf8836e7b8856ad248ef547655db6",
        Star: "0(0)" 
        },
        15: {Name: "Veg Paradise Pizza",
        Price: "199",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/9c521665aad916caacf536de273216d1",
        Star: "0(0)"
        },  
        16: {Name: "Spicy Paneer Pizza",
        Price: "199",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/5a7d6bc7b7725cf128b714d2d77223f3",
        Star: "0(0)"
        },
        17: {Name: "Paneer Burger",
        Price: "89",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f43ca5efb800458518ca9d462a3a4386",
        Star: "0(0)"
        },
        18: {Name: "Plain Burger",
        Price: "59",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/95acba6a155d1ae04542033d7cd36266",
        Star: "3.3(4)"
        },
        19: {Name: "Plain Cheese Slice Burger",
        Price: "79",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/6b08b6a1ddd80d315674f6f1e9c857c5",
        Star: "0(0)"
        },
        20: {Name: "Spicy Paneer Burger",
        Price: "89",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/49199995fda3b489a5f8bff1a3a137f8",
        Star: "0(0)"
        },
        21: {Name: "Paneer Cheese Slice Burger",
        Price: "79",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/1d474fb00fc910f9c870a02089806264",
        Star: "0(0)"
        },
        22: {Name: "Spicy Paneer Cheese Slice Burger",
        Price: "99",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/6b3553dc49f6e2c88a29e2b62eea2ef3",
        Star: "0(0)"
        },
        23: {Name: "Spicy Tango Pizza",
        Price: "169",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/67a0f9a3a03712e0cbf0543831733020",
        Star: "0(0)"
        },
        24: {Name: "Country Feast Pizza",
        Price: "169",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/e1835f367e9fa74a1c9b087858513fe9",
        Star: "0(0)"
        },
        25: {Name: "Double Cheese Pizza",
        Price: "169",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/4d552c239b3af42faec2af88fa13b6aa",
        Star: "0(0)"
        },
        26: {Name: "Paneer Makhni Veg Pizza",
        Price: "239",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/ed42e60909417c9eefad37d6855b7095",
        Star: "0(0)"
        },
        27: {Name: "Eat & Greet Veggie Deluxe Pizza",
        Price: "239",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/003aad83471ad67b595facbc6058de2e",
        Star: "0(0)"
        },
        28: {Name: "Eat & Greet Veg Feast Pizza",
        Price: "239",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/805419b868c0a5fce781977316fb184d",
        Star: "0(0)"
        },
        29: {Name: "Greet Special Pizza",
        Price: "239",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/84735a3da7b64b69fe58c926a1a8d2ec",
        Star: "0(0)"
        },
        30: {Name: "Stuffed Garlic Bread",
        Price: "129",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/a543ccb1616e12fff2b4c7f419b797e1",
        Star: "2.9(5)"
        },
        31: {Name: "Paneer Parcel",
        Price: "45",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/a22eaae0bfcd8ca2ef7ba3c31377db90",
        Star: "3.4(11)"
        },
        32: {Name: "Peri-peri French Fries",
        Price: "79", 
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/7fc861b1e136df3cdac0708330dbda94",
        Star: "3.9(6)"
        }, 
        33: {Name: "Red Pasta",
        Price: "110",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/16af1e531dd98ca5a2adcd15ce0a74a8",
        Star: "4.9(7)"
        },
        34: {Name: "White Pasta",
        Price: "110",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/42e6ae2f748416fe12adf8e3f804d8fb",
        Star: "2.4(9)"
        },
        35: {Name: "Garlic Bread",
        Price: "99",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/2bd8c15313d48bbb5b0cc333922e8c63",
        Star: "2.6(7)"
        },
        36: {Name: "Chocolava Cake",
        Price: "79",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b1667d13a242c080810ee3f2320a6da1",
        Star: "3.8(5)"
        },
        37: {Name: "Veg Loaded Pizza",
        Price: "139",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/eb8fb7170bf547142a9179c87ad1d22d",
        Star: "0(0)"
        },
        38: {Name: "Mix Sauce Pasta",
        Price: "119",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/a191f4ffa42897732252f66bc7e7420e",
        Star: "1.7(5)"
        },
        39: {Name: "Lemon French Fries",
        Price: "79",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/3e75bc7cb8dd2ce3d31e8b66288a7bfa",
        Star: "3.8(4)"
        },
        40: {Name: "Calzone",
        Price: "119",
        Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b790f8df85295c336ea4aacf5454cd16",
        Star: "2.4(3)"
        },

      }

  return (
    <>
    <div className='mx-4 pt-8'>
    <h2 className='text-2xl text-center font-medium text-green-500 dark:text-yellow-400 pb-6'>Menu</h2>
    <div >
    <Slider {...settings} >
    {Object.keys(menucollection).map((key) => (
                    <Menucard
                        key={key}
                        Name={menucollection[key].Name}
                        Price={menucollection[key].Price}
                        Image={menucollection[key].Image}
                        Vegornot={menucollection[key].Vegornot}
                        Star={menucollection[key].Star}
                    />
                ))}
         </Slider>
    </div></div>
    </>
  );
}

export default Menu;
