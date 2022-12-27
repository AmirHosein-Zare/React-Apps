import './About.css'

export default function About(){
    return(
        <div id='about'>
            <div id='about-top-box' className='ww'>
                <div>
                    <h1 id='about-title'>درباره ما</h1>
                    <div id='title-line'>
                        <div id='title-line-circle'></div>
                    </div>
                </div>
                <p id='about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            </div>
            <div id='about-box' className='ww'>
                <h3 id='about-box-title'>بیش از <span id='bist'>20 سال</span> سابقه</h3>
                <p className='about-box-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <p className='about-box-text'>تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است</p>
                <p className='about-box-text'>این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند</p>
            </div>
        </div>
    );
}
