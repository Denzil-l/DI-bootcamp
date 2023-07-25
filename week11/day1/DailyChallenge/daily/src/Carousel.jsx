import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=b2b5d1887a70f7e9f0cd2c5a9285da682a14ae89-8449287-images-thumbs&n=13" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=4cc9b9b2c995dbe2d5434834e2ed978c31bf9ada-4143805-images-thumbs&n=13" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=91f6708ba894282068984d159de020ceb4160a4a-9182360-images-thumbs&n=13" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=91f6708ba894282068984d159de020ceb4160a4a-9182360-images-thumbs&n=13" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=91f6708ba894282068984d159de020ceb4160a4a-9182360-images-thumbs&n=13" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel