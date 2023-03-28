<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Westo - Responsive HTML 5 Template</title>

    <!-- responsive meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- For IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Google Fonts -->

    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet">



    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/animate.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/aos.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/custom-animate.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/fancybox.min.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/flaticon.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/icomoon.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/imp.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/jquery.bootstrap-touchspin.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/nice-select.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/owl.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/rtl.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/scrollbar.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/swiper.min.css') }}">

    <!-- Module css -->
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/header-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/banner-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/about-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/blog-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/fact-counter-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/faq-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/contact-page.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/breadcrumb-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/team-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/partner-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/testimonial-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/services-section.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/module-css/footer-section.css') }}">

    <link href="{{ Vite::asset('resources/welcome/css/color/theme-color.css') }}" id="jssDefault" rel="stylesheet">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/style.css') }}">
    <link rel="stylesheet" href="{{ Vite::asset('resources/welcome/css/responsive.css') }}">
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('images/favicon/favicon-32x32.png') }}" sizes="32x32">
    <link rel="icon" type="image/png" href="{{ asset('images/favicon/favicon-16x16.png') }}" sizes="16x16">

    <!-- Fixing Internet Explorer-->
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="{{ Vite::asset('resources/welcome/js/html5shiv.js') }}"></script>
    <![endif]-->

</head>


<body>

<div class="boxed_wrapper ltr">

    <!-- Preloader -->
    <div class="loader-wrap">
        <div class="preloader">
            <div class="preloader-close">Preloader Close</div>
        </div>
        <div class="layer layer-one"><span class="overlay"></span></div>
        <div class="layer layer-two"><span class="overlay"></span></div>
        <div class="layer layer-three"><span class="overlay"></span></div>
    </div>

    <!-- page-direction -->
    <div class="page_direction">
        <div class="demo-rtl direction_switch"><button class="rtl">RTL</button></div>
        <div class="demo-ltr direction_switch"><button class="ltr">LTR</button></div>
    </div>
    <!-- page-direction end -->

    <!-- switcher menu -->
    <div class="switcher">
        <div class="switch_btn">
            <button><img src="{{ asset('images/icon/color-palette.png') }}" alt="Color Palette"> </button>
        </div>
        <div class="switch_menu">
            <!-- color changer -->
            <div class="switcher_container">
                <ul id="styleOptions" title="switch styling">
                    <li>
                        <a href="javascript: void(0)" data-theme="blue" class="blue-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="pink" class="pink-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="violet" class="violet-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="crimson" class="crimson-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="orange" class="orange-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="green" class="green-color"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- end switcher menu -->


    <!-- Main header-->
    <header class="main-header header-style-one">

        <!--Start Header Top-->
        <div class="header-top">
            <div class="auto-container">
                <div class="outer-box">
                    <div class="header-top__left">
                        <div class="header-contact-info-style1">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <span class="icon-pin"></span>
                                    </div>
                                    <div class="text">
                                        <p>88 broklyn golden street. New York</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-email"></span>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:yourmail@email.com">needhelp@company.com</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-time"></span>
                                    </div>
                                    <div class="text">
                                        <p>Mon - Sat 9:00 am to 6:00 pm</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="header-top__right">
                        <div class="header-button-style1">
                            <a class="btn-one" href="contact.html">
                                    <span class="txt">
                                        Request for a pickup<i class="icon-refresh arrow"></i>
                                    </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--End Header Top-->

        <!--Start Header-->
        <div class="header">
            <div class="auto-container">
                <div class="outer-box">

                    <!--Start Header Left-->
                    <div class="header-left">
                        <div class="main-logo-box">
                            <a href="index.html">
                                <img src="{{asset('images/resources/logo.png')}}" alt="Awesome Logo" title="">
                            </a>
                        </div>
                        <div class="header-social-link">
                            <ul class="clearfix">
                                <li>
                                    <a href="#"><i class="icon-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="icon-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="icon-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="icon-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--End Header Left-->

                    <!--Start Header Middle-->
                    <div class="header-middle">
                        <div class="nav-outer style1 clearfix">
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <div class="inner">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </div>
                            </div>
                            <!-- Main Menu -->
                            <nav class="main-menu style1 navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li class="dropdown current"><a href="#"><span>Home</span></a>
                                            <ul>
                                                <li><a href="index.html">Home Page 01</a></li>
                                                <li><a href="index-2.html">Home Page 02</a></li>
                                                <li><a href="index-onepage.html">Home OnePage</a></li>
                                                <li><a href="index-rtl.html">RTL Home</a></li>
                                                <li class="dropdown"><a href="#">Header Styles</a>
                                                    <ul>
                                                        <li><a href="index.html">Header Style One</a></li>
                                                        <li><a href="index-2.html">Header Style Two</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="#"><span>Elements</span></a>
                                            <div class="megamenu">
                                                <div class="row clearfix">
                                                    <div class="col-xl-6 column">
                                                        <ul>
                                                            <li>
                                                                <a href="about-element-1.html">About Block 01</a>
                                                            </li>
                                                            <li>
                                                                <a href="about-element-2.html">About Block 02</a>
                                                            </li>
                                                            <li>
                                                                <a href="service-element-1.html">
                                                                    Service Block 01
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="service-element-2.html">
                                                                    Service Block 02
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="service-element-3.html">
                                                                    Service Block 03
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="news-element-1.html">
                                                                    News Block 01
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="news-element-2.html">
                                                                    News Block 02
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="news-element-3.html">
                                                                    News Block 03
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xl-6 column">
                                                        <ul>
                                                            <li>
                                                                <a href="team-element-1.html">
                                                                    Team Block 01
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="team-element-2.html">
                                                                    Team Block 02
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="team-element-3.html">
                                                                    Team Block 03
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="testimonial-element-1.html">
                                                                    Testimonials Block 01
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="testimonial-element-2.html">
                                                                    Testimonials Block 02
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="partner-element-1.html">
                                                                    Partner Block 01
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="faq-element-1.html">
                                                                    FAQ'S Block 01
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="contact-element-1.html">
                                                                    Contact Block
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li class="dropdown"><a href="#"><span>Services</span></a>
                                            <ul>
                                                <li><a href="services.html">View All Services</a></li>
                                                <li><a href="services-single-1.html">Garbage Pickup</a></li>
                                                <li><a href="services-single-2.html">Dumpster Rental</a></li>
                                                <li><a href="services-single-3.html">Portable Toilets</a></li>
                                                <li><a href="services-single-4.html">Residential Recycling</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="#"><span>Pages</span></a>
                                            <ul>
                                                <li><a href="about.html">About Our Company</a></li>
                                                <li><a href="industries.html">Our Industries</a></li>
                                                <li><a href="industries-details.html">Industries Details</a></li>
                                                <li><a href="testimonials.html">Testimonials</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="faq.html">FAQ’s</a></li>
                                                <li><a href="error.html">404 Error page</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="#"><span>Blog</span></a>
                                            <ul>
                                                <li><a href="blog.html">Blog Style 01</a></li>
                                                <li><a href="blog-2.html">Blog Style 02</a></li>
                                                <li><a href="blog-3.html">Blog Style 03</a></li>
                                                <li><a href="blog-single.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html"><span>Contact</span></a></li>
                                    </ul>
                                </div>
                            </nav>
                            <!-- Main Menu End-->
                        </div>
                    </div>
                    <!--End Header Middle-->

                    <!--Start Header Right-->
                    <div class="header-right">
                        <div class="phone-number-box1">
                            <div class="icon">
                                <span class="icon-phone-ringing"></span>
                            </div>
                            <div class="phone">
                                <p>Have any questions?</p>
                                <a href="tel:123456789">+92 666 888 0000</a>
                            </div>
                        </div>

                        <div class="serach-button-style1">
                            <button type="button" class="search-toggler">
                                <i class="icon-magnifying-glass"></i>
                            </button>
                        </div>

                    </div>
                    <!--End Header Right-->

                </div>
            </div>
        </div>
        <!--End header-->

        <!--Sticky Header-->
        <div class="sticky-header">
            <div class="container">
                <div class="clearfix">
                    <!--Logo-->
                    <div class="logo float-left">
                        <a href="index.html" class="img-responsive">
                            <img src="{{asset('images/resources/sticky-logo.png')}}" alt="" title="">
                        </a>
                    </div>
                    <!--Right Col-->
                    <div class="right-col float-right">
                        <!-- Main Menu -->
                        <nav class="main-menu clearfix">
                            <!--Keep This Empty / Menu will come through Javascript-->
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!--End Sticky Header-->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon fa fa-times-circle"></span></div>
            <nav class="menu-box">
                <div class="nav-logo"><a href="index.html"><img src="{{asset('images/resources/mobilemenu-logo.png')}}"
                                                                alt="" title=""></a></div>
                <div class="menu-outer">
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
                <!--Social Links-->
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="#"><span class="fab fa fa-facebook-square"></span></a></li>
                        <li><a href="#"><span class="fab fa fa-twitter-square"></span></a></li>
                        <li><a href="#"><span class="fab fa fa-pinterest-square"></span></a></li>
                        <li><a href="#"><span class="fab fa fa-google-plus-square"></span></a></li>
                        <li><a href="#"><span class="fab fa fa-youtube-square"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- End Mobile Menu -->

    </header>


    <!-- Start Main Slider -->
    <section class="main-slider style1">
        <div class="slider-box">
            <!-- Banner Carousel -->
            <div class="banner-carousel owl-theme owl-carousel">
                <!-- Slide -->
                <div class="slide">
                    <div class="image-layer" style="background-image:url({{ asset('images/slides/slide-v1-1.jpg')}})">
                    </div>
                    <div class="auto-container">
                        <div class="content">
                            <div class="sub-title">
                                <h3>Find Sustainable Waste Services</h3>
                            </div>
                            <div class="big-title">
                                <h2>
                                    Home Trash &<br> Recycling <span>Pickup</span><br> Company
                                </h2>
                            </div>
                            <div class="btns-box">
                                <a class="btn-one" href="about.html">
                                        <span class="txt">
                                            discover more<i class="icon-refresh arrow"></i>
                                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide -->
                <div class="slide">
                    <div class="image-layer" style="background-image:url({{asset('images/slides/slide-v1-2.jpg')}})">
                    </div>
                    <div class="auto-container">
                        <div class="content">
                            <div class="sub-title">
                                <h3>Find Sustainable Waste Services</h3>
                            </div>
                            <div class="big-title">
                                <h2>
                                    Waste Management.<br> Dumpster Rentals.<br> Garbage Pickup.
                                </h2>
                            </div>
                            <div class="btns-box">
                                <a class="btn-one" href="about.html">
                                        <span class="txt">
                                            discover more<i class="icon-refresh arrow"></i>
                                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide -->
                <div class="slide">
                    <div class="image-layer" style="background-image:url({{asset('images/slides/slide-v1-3.jpg')}})">
                    </div>
                    <div class="auto-container">
                        <div class="content">
                            <div class="sub-title">
                                <h3>Find Sustainable Waste Services</h3>
                            </div>
                            <div class="big-title">
                                <h2>
                                    Home Trash &<br> Recycling <span>Pickup</span><br> Company
                                </h2>
                            </div>
                            <div class="btns-box">
                                <a class="btn-one" href="about.html">
                                        <span class="txt">
                                            discover more<i class="icon-refresh arrow"></i>
                                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- End Main Slider -->

    <!--Start Features Style1 Area-->
    <section class="features-style1-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="features-style1__content">
                        <ul>
                            <li>
                                <div class="single-features-style1">
                                    <div class="icon-holder">
                                        <div class="box"></div>
                                        <span class="icon-dustbin"></span>
                                    </div>
                                    <div class="text-holder">
                                        <h3><a href="services-single-1.html">Dumpster Sizes</a></h3>
                                        <p>There are many of passages of lorem Ipsum, but the majori have suffered
                                            in some form.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="single-features-style1">
                                    <div class="icon-holder">
                                        <div class="box"></div>
                                        <span class="icon-garbage-can"></span>
                                    </div>
                                    <div class="text-holder">
                                        <h3><a href="services-single-2.html">Waste Collection</a></h3>
                                        <p>There are many of passages of lorem Ipsum, but the majori have suffered
                                            in some form.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="single-features-style1">
                                    <div class="icon-holder">
                                        <div class="box"></div>
                                        <span class="icon-calendar"></span>
                                    </div>
                                    <div class="text-holder">
                                        <h3><a href="services-single-3.html">Pickup Schedule</a></h3>
                                        <p>There are many of passages of lorem Ipsum, but the majori have suffered
                                            in some form.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End Features Style1 Area-->


    <!--Start About Style1 Area-->
    <section class="about-style1-area">
        <div class="shape1"></div>
        <div class="container">
            <div class="row text-right-rtl">
                <div class="col-xl-6">
                    <div class="about-style1__image clearfix">
                        <div class="text-outer" data-aos="fade-left" data-aos-easing="linear"
                             data-aos-duration="1500">
                            westo
                        </div>
                        <div class="border-top"></div>
                        <div class="border-left"></div>
                        <div class="border-bottom"></div>
                        <div class="border-right"></div>
                        <ul>
                            <li>
                                <div class="img-box">
                                    <img src="{{asset('images/about/about-style1__image-1.jpg')}}" alt="">
                                </div>
                            </li>
                            <li>
                                <div class="img-box">
                                    <img src="{{asset('images/about/about-style1__image-2.jpg')}}" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="about-style1__content">
                        <div class="sec-title">
                            <div class="sub-title">
                                <h3>Get to Know About Us</h3>
                            </div>
                            <h2>We’re Leader in Waste<br> Management Services</h2>
                        </div>
                        <div class="inner-content">
                            <div class="text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation.</p>
                            </div>

                            <div class="progress-levels">
                                <!--Start Progress Box-->
                                <div class="progress-box wow">
                                    <div class="inner count-box">
                                        <div class="top">
                                            <div class="text">Recycling</div>
                                            <div class="skill-percent">
                                                <span class="count-text" data-speed="3000" data-stop="77">0</span>
                                                <span class="percent">%</span>
                                            </div>
                                        </div>
                                        <div class="bar">
                                            <div class="bar-innner">
                                                <div class="bar-fill" data-percent="77"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Progress Box-->
                                <!--Start Progress Box-->
                                <div class="progress-box wow">
                                    <div class="inner count-box">
                                        <div class="top">
                                            <div class="text">Waste Services</div>
                                            <div class="skill-percent">
                                                <span class="count-text" data-speed="3000" data-stop="90">0</span>
                                                <span class="percent">%</span>
                                            </div>
                                        </div>
                                        <div class="bar">
                                            <div class="bar-innner">
                                                <div class="bar-fill" data-percent="90"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--End Progress Box-->
                            </div>

                            <div class="about-style1__bottom-content">
                                <div class="row">

                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="text-box">
                                            <ul>
                                                <li>Nsectetur cing elit.</li>
                                                <li>Suspe ndisse suscipit sagittis leo.</li>
                                                <li>Entum estibulum digni posuere.</li>
                                                <li>Donec tristique ante rhoncus.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="video-gallery-style1">
                                            <div class="video-gallery-style1__bg"
                                                 style="background-image: url({{asset('images/resources/video-gallery-style1-bg.jpg')}});">
                                            </div>
                                            <div class="icon wow zoomIn animated" data-wow-delay="300ms"
                                                 data-wow-duration="1500ms">
                                                <a class="video-popup" title="Video Gallery"
                                                   href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                                                    <span class="icon-play-buttton"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!--End About Style1 Area-->

    <!--Start Service Style1 Area-->
    <section class="service-style1-area">
        <div class="service-style1__bg"
             style="background-image: url({{asset('images/parallax-background/service-style1.jpg')}});"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">

                    <div class="service-style1__top">
                        <div class="service-style1__top-title">
                            <div class="sec-title sec-title--style2">
                                <div class="sub-title">
                                    <h3>Our Services</h3>
                                </div>
                                <h2>Waste Services</h2>
                            </div>
                            <div class="text">
                                <p>There are many variations of passages of lorem Ipsum available, but the majority
                                    simply free text now have suffered alteration.</p>
                            </div>
                        </div>
                        <div class="service-style1__top-button">
                            <a class="btn-one" href="contact.html">
                                    <span class="txt">
                                        book now<i class="icon-refresh arrow"></i>
                                    </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row text-right-rtl">
                <!--Start Single Service Style1-->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                    <div class="single-service-style1">
                        <div class="inner">
                            <div class="round-box"></div>
                            <div class="icon">
                                <span class="icon-garbage-bin"></span>
                            </div>
                            <div class="text">
                                <h3>Garbage<br> Pickup</h3>
                                <p>Sed quia magni doles eos volupta tem qui ration volupta tem sequi nesciunt eque
                                    porro.</p>
                            </div>
                        </div>
                        <div class="btn-box">
                            <a href="services-single-1.html"><span class="icon-right-arrow"></span></a>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->
                <!--Start Single Service Style1-->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                    <div class="single-service-style1">
                        <div class="inner">
                            <div class="round-box"></div>
                            <div class="icon">
                                <span class="icon-dustbin-1"></span>
                            </div>
                            <div class="text">
                                <h3>Dumpster<br> Rental</h3>
                                <p>Sed quia magni doles eos volupta tem qui ration volupta tem sequi nesciunt eque
                                    porro.</p>
                            </div>
                        </div>
                        <div class="btn-box">
                            <a href="services-single-2.html"><span class="icon-right-arrow"></span></a>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->
                <!--Start Single Service Style1-->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                    <div class="single-service-style1">
                        <div class="inner">
                            <div class="round-box"></div>
                            <div class="icon">
                                <span class="icon-portable-toilet"></span>
                            </div>
                            <div class="text">
                                <h3>Portable<br> Toilets</h3>
                                <p>Sed quia magni doles eos volupta tem qui ration volupta tem sequi nesciunt eque
                                    porro.</p>
                            </div>
                        </div>
                        <div class="btn-box">
                            <a href="services-single-3.html"><span class="icon-right-arrow"></span></a>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->
                <!--Start Single Service Style1-->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                    <div class="single-service-style1">
                        <div class="inner">
                            <div class="round-box"></div>
                            <div class="icon">
                                <span class="icon-recycle"></span>
                            </div>
                            <div class="text">
                                <h3>Residential<br> Recycling</h3>
                                <p>Sed quia magni doles eos volupta tem qui ration volupta tem sequi nesciunt eque
                                    porro.</p>
                            </div>
                        </div>
                        <div class="btn-box">
                            <a href="services-single-4.html"><span class="icon-right-arrow"></span></a>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->

            </div>
        </div>
    </section>
    <!--End Service Style1 Area-->


    <!--Start Testimonial Style1 Area-->
    <section class="testimonial-style1-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="testimonial-style1__content">

                        <div class="testimonials-style1__main-content">
                            <div class="swiper-container" id="testimonials-style1__carousel">
                                <div class="swiper-wrapper rtl-carousel">

                                    <!--Start Swiper Slide-->
                                    <div class="swiper-slide">
                                        <div class="testimonial-style1__conent-box">
                                            <div class="row">
                                                <div class="col-xl-3 order-22">
                                                    <div class="img-box">
                                                        <div class="inner">
                                                            <img src="{{asset('images/testimonial/testimonial-v1-1-big.jpg')}}"
                                                                 alt="">
                                                        </div>
                                                        <div class="quote-icon">
                                                            <span class="icon-left-quote"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-9 order-11">
                                                    <div class="text-box">
                                                        <h2>This is due to their excellent service, competitive
                                                            pricing and customer support. It’s throughly refresing
                                                            to get such a personal touch. Duis aute lorem ipsum is
                                                            simply free text irure dolor in reprehenderit in esse
                                                            nulla pariatur.
                                                        </h2>
                                                        <div class="client-info">
                                                            <h3>Aleesha Brown</h3>
                                                            <span>Customers</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End Swiper Slide-->

                                    <!--Start Swiper Slide-->
                                    <div class="swiper-slide">
                                        <div class="testimonial-style1__conent-box">
                                            <div class="row">
                                                <div class="col-xl-3 order-22">
                                                    <div class="img-box">
                                                        <div class="inner">
                                                            <img src="{{asset('images/testimonial/testimonial-v1-2-big.jpg')}}"
                                                                 alt="">
                                                        </div>
                                                        <div class="quote-icon">
                                                            <span class="icon-left-quote"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-9 order-11">
                                                    <div class="text-box">
                                                        <h2>This is due to their excellent service, competitive
                                                            pricing and customer support. It’s throughly refresing
                                                            to get such a personal touch. Duis aute lorem ipsum is
                                                            simply free text irure dolor in reprehenderit in esse
                                                            nulla pariatur.
                                                        </h2>
                                                        <div class="client-info">
                                                            <h3>Aleesha Brown</h3>
                                                            <span>Customers</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End Swiper Slide-->

                                    <!--Start Swiper Slide-->
                                    <div class="swiper-slide">
                                        <div class="testimonial-style1__conent-box">
                                            <div class="row">
                                                <div class="col-xl-3 order-22">
                                                    <div class="img-box">
                                                        <div class="inner">
                                                            <img src="{{asset('images/testimonial/testimonial-v1-3-big.jpg')}}"
                                                                 alt="">
                                                        </div>
                                                        <div class="quote-icon">
                                                            <span class="icon-left-quote"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-9 order-11">
                                                    <div class="text-box">
                                                        <h2>This is due to their excellent service, competitive
                                                            pricing and customer support. It’s throughly refresing
                                                            to get such a personal touch. Duis aute lorem ipsum is
                                                            simply free text irure dolor in reprehenderit in esse
                                                            nulla pariatur.
                                                        </h2>
                                                        <div class="client-info">
                                                            <h3>Aleesha Brown</h3>
                                                            <span>Customers</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End Swiper Slide-->

                                </div>
                            </div>
                        </div>

                        <div class="swiper-container" id="testimonials-style1__thumb">
                            <div class="swiper-wrapper rtl-carousel">
                                <div class="swiper-slide">
                                    <div class="testimonial-style1__img-holder">
                                        <img src="{{asset('images/testimonial/testimonial-v1-1-thumb.jpg')}}" alt="">
                                    </div>
                                </div><!-- /.swiper-slide -->
                                <div class="swiper-slide">
                                    <div class="testimonial-style1__img-holder">
                                        <img src="{{asset('images/testimonial/testimonial-v1-2-thumb.jpg')}}" alt="">
                                    </div>
                                </div><!-- /.swiper-slide -->
                                <div class="swiper-slide">
                                    <div class="testimonial-style1__img-holder">
                                        <img src="{{asset('images/testimonial/testimonial-v1-3-thumb.jpg')}}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonials-style1__carousel-pagination"></div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End Testimonial Style1 Area-->

    <!--Start Partner Area-->
    <section class="partner-area">
        <div class="container">
            <div class="brand-content">
                <div class="inner">
                    <ul class="partner-box partner-carousel owl-carousel owl-theme owl-dot-style1 rtl-carousel">
                        <!--Start Single Partner Logo Box-->
                        <li class="single-partner-logo-box">
                            <a href="#"><img src="{{asset('images/brand/brand-logo-1.png')}}" alt="Awesome Image"></a>
                        </li>
                        <!--End Single Partner Logo Box-->
                        <!--Start Single Partner Logo Box-->
                        <li class="single-partner-logo-box">
                            <a href="#"><img src="{{asset('images/brand/brand-logo-2.png')}}" alt="Awesome Image"></a>
                        </li>
                        <!--End Single Partner Logo Box-->
                        <!--Start Single Partner Logo Box-->
                        <li class="single-partner-logo-box">
                            <a href="#"><img src="{{asset('images/brand/brand-logo-3.png')}}" alt="Awesome Image"></a>
                        </li>
                        <!--End Single Partner Logo Box-->
                        <!--Start Single Partner Logo Box-->
                        <li class="single-partner-logo-box">
                            <a href="#"><img src="{{asset('images/brand/brand-logo-4.png')}}" alt="Awesome Image"></a>
                        </li>
                        <!--End Single Partner Logo Box-->
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--End Partner Area-->

    <!--Start Features Style2 Area-->
    <section class="features-style2-area">
        <div class="auto-container">
            <div class="row">

                <div class="col-xl-6 col-lg-6">
                    <div class="single-features-style2-box">
                        <div class="inner-content">
                            <div class="icon">
                                <div class="box"></div>
                                <span class="icon-garbage-can"></span>
                            </div>
                            <div class="title">
                                <h3>Lorem ipsum is free text</h3>
                                <h2>Landfill and Transfer<br> Station Services</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                    <div class="single-features-style2-box">
                        <div class="img-bg"
                             style="background-image: url({{asset('images/resources/features-style2-1.jpg')}});"></div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                    <div class="single-features-style2-box">
                        <div class="img-bg"
                             style="background-image: url({{asset('images/resources/features-style2-2.jpg')}});"></div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6">
                    <div class="single-features-style2-box left">
                        <div class="inner-content">
                            <div class="icon">
                                <div class="box"></div>
                                <span class="icon-toxic-waste"></span>
                            </div>
                            <div class="title">
                                <h3>Lorem ipsum is free text</h3>
                                <h2>Accepts Special Waste<br> at Many Locations</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!--End Features Style2 Area-->

    <!--Start Service Style2 Area-->
    <section class="service-style2-area">
        <div class="gray-bg"></div>
        <div class="container">
            <div class="sec-title text-center">
                <div class="sub-title">
                    <h3>Industries We Serve</h3>
                </div>
                <h2>Solutions by Industry</h2>
            </div>
            <div class="row">

                <!--Start Single Service Style1-->
                <div class="col-xl-4 col-lg-4">
                    <div class="single-service-style2">
                        <div class="img-holder">
                            <img src="{{asset('images/services/service-v1-1.jpg')}}" alt="">
                            <div class="icon-box">
                                <span class="icon-store"></span>
                            </div>
                        </div>
                        <div class="text-holder text-center">
                            <h3><a href="industries-details.html">Grocery Stores</a></h3>
                            <p>Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.</p>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->

                <!--Start Single Service Style1-->
                <div class="col-xl-4 col-lg-4">
                    <div class="single-service-style2">
                        <div class="img-holder">
                            <img src="{{asset('images/services/service-v1-2.jpg')}}" alt="">
                            <div class="icon-box">
                                <span class="icon-restaurant"></span>
                            </div>
                        </div>
                        <div class="text-holder text-center">
                            <h3><a href="industries-details.html">Hotel & Restaurant</a></h3>
                            <p>Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.</p>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->

                <!--Start Single Service Style1-->
                <div class="col-xl-4 col-lg-4">
                    <div class="single-service-style2">
                        <div class="img-holder">
                            <img src="{{asset('images/services/service-v1-3.jpg')}}" alt="">
                            <div class="icon-box">
                                <span class="icon-stethoscope"></span>
                            </div>
                        </div>
                        <div class="text-holder text-center">
                            <h3><a href="industries-details.html">Medical & Hospital</a></h3>
                            <p>Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.</p>
                        </div>
                    </div>
                </div>
                <!--End Single Service Style1-->

            </div>
        </div>
    </section>
    <!--End Service Style2 Area-->


    <!--Start Choose Style1 Area-->
    <section class="choose-style1-area">
        <div class="container">
            <div class="row">

                <div class="col-xl-4">
                    <div class="choose-style1__title-box">
                        <div class="sec-title sec-title--style2">
                            <div class="sub-title">
                                <h3>Why Choose us</h3>
                            </div>
                            <h2>We only Provide<br> Quality Waste<br> Services</h2>
                        </div>
                        <div class="btn-box">
                            <a class="btn-one" href="contact.html">
                                    <span class="txt">
                                        book now<i class="icon-refresh arrow"></i>
                                    </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8">
                    <div class="video-gallery-style2">
                        <div class="video-gallery-style2__bg"
                             style="background-image: url({{asset('images/resources/video-gallery-style2-bg.jpg')}});">
                        </div>
                        <div class="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <a class="video-popup" title="Video Gallery"
                               href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                                <span class="icon-play-buttton"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!--End Choose Style1 Area-->


    <!--Start Fact Counter Area-->
    <section class="fact-counter-area">
        <div class="fact-counter-area-bg"
             style="background-image: url({{asset('images/parallax-background/service-style1.jpg')}});"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <ul class="fact-counter-box">
                        <!--Start Single Fact Counter-->
                        <li class="single-fact-counter">
                            <div class="inner">
                                <div class="count-outer count-box">
                                    <span class="count-text" data-speed="3000" data-stop="30">0</span>
                                    <span class="icon-plus-sign plus"></span>
                                </div>
                            </div>
                            <div class="title">
                                <h3>Industries Served</h3>
                                <p>Lorem Ipsum is simply dummy text of the new des dummy text of the printng and
                                    type.</p>
                            </div>
                        </li>
                        <!--End Single Fact Counter-->
                        <!--Start Single Fact Counter-->
                        <li class="single-fact-counter">
                            <div class="inner">
                                <div class="count-outer count-box">
                                    <span class="count-text" data-speed="3000" data-stop="120">0</span>
                                </div>
                            </div>
                            <div class="title">
                                <h3>Professional Workers</h3>
                                <p>Lorem Ipsum is simply dummy text of the new des printng and type.</p>
                            </div>
                        </li>
                        <!--End Single Fact Counter-->
                        <!--Start Single Fact Counter-->
                        <li class="single-fact-counter">
                            <div class="inner">
                                <div class="count-outer count-box">
                                    <span class="count-text" data-speed="3000" data-stop="40">0</span>
                                    <span class="icon-plus-sign plus"></span>
                                </div>
                            </div>
                            <div class="title">
                                <h3>Waste Mangements</h3>
                                <p>Lorem Ipsum is simply dummy text of the new des printng and type.</p>
                            </div>
                        </li>
                        <!--End Single Fact Counter-->
                        <!--Start Single Fact Counter-->
                        <li class="single-fact-counter">
                            <div class="inner">
                                <div class="count-outer count-box">
                                    <span class="count-text" data-speed="3000" data-stop="68">0</span>
                                    <span class="k">k</span>
                                </div>
                            </div>
                            <div class="title">
                                <h3>Customers are Happy</h3>
                                <p>Lorem Ipsum text of the new is simply dummy text of the new des printng and type.
                                </p>
                            </div>
                        </li>
                        <!--End Single Fact Counter-->
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--End Fact Counter Area-->

    <!--Start Blog Style1 Area-->
    <section class="blog-style1-area">
        <div class="container">
            <div class="sec-title text-center">
                <div class="sub-title">
                    <h3>From the blog</h3>
                </div>
                <h2>News & Articles</h2>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="blog-style1__content">
                        <div class="theme_carousel blog-style1-carousel owl-dot-style1 owl-theme owl-carousel rtl-carousel"
                             data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": false, "dots": true, "autoplay": true, "autoplayTimeout": 5000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "1" } , "992":{ "items" : "1" }, "1200":{ "items" : "2" }}}'>

                            <!--Start Single Blog Style1-->
                            <div class="single-blog-style1">
                                <div class="single-blog-style1__inner">
                                    <div class="img-holder">
                                        <div class="inner">
                                            <img src="{{asset('images/blog/blog-v1-1.jpg')}}" alt="" />
                                        </div>
                                        <div class="date-box">
                                            <h6>16<br> <span>Nov</span></h6>
                                        </div>
                                    </div>
                                    <div class="text-holder">
                                        <ul class="meta-info">
                                            <li>
                                                <i class="fa fa-user" aria-hidden="true"></i> <a href="#">by
                                                    Admin</a>
                                            </li>
                                            <li>
                                                <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#">02
                                                    Comments</a>
                                            </li>
                                        </ul>
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a href="blog-single.html">The Largest Solid Waste Management
                                                    Company</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is simply dummy text of the new design printng and type
                                                setting
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style1-->
                            <!--Start Single Blog Style1-->
                            <div class="single-blog-style1">
                                <div class="single-blog-style1__inner">
                                    <div class="img-holder">
                                        <div class="inner">
                                            <img src="{{asset('images/blog/blog-v1-2.jpg')}}" alt="" />
                                        </div>
                                        <div class="date-box">
                                            <h6>11<br> <span>Nov</span></h6>
                                        </div>
                                    </div>
                                    <div class="text-holder">
                                        <ul class="meta-info">
                                            <li>
                                                <i class="fa fa-user" aria-hidden="true"></i> <a href="#">by
                                                    Admin</a>
                                            </li>
                                            <li>
                                                <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#">02
                                                    Comments</a>
                                            </li>
                                        </ul>
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a href="blog-single.html">The Largest Solid Waste Management
                                                    Company</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is simply dummy text of the new design printng and type
                                                setting
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style1-->

                            <!--Start Single Blog Style1-->
                            <div class="single-blog-style1">
                                <div class="single-blog-style1__inner">
                                    <div class="img-holder">
                                        <div class="inner">
                                            <img src="{{asset('blog/blog-v1-1.jpg')}}" alt="" />
                                        </div>
                                        <div class="date-box">
                                            <h6>16<br> <span>Nov</span></h6>
                                        </div>
                                    </div>
                                    <div class="text-holder">
                                        <ul class="meta-info">
                                            <li>
                                                <i class="fa fa-user" aria-hidden="true"></i> <a href="#">by
                                                    Admin</a>
                                            </li>
                                            <li>
                                                <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#">02
                                                    Comments</a>
                                            </li>
                                        </ul>
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a href="blog-single.html">The Largest Solid Waste Management
                                                    Company</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is simply dummy text of the new design printng and type
                                                setting
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style1-->
                            <!--Start Single Blog Style1-->
                            <div class="single-blog-style1">
                                <div class="single-blog-style1__inner">
                                    <div class="img-holder">
                                        <div class="inner">
                                            <img src="{{asset('images/blog/blog-v1-2.jpg')}}" alt="" />
                                        </div>
                                        <div class="date-box">
                                            <h6>11<br> <span>Nov</span></h6>
                                        </div>
                                    </div>
                                    <div class="text-holder">
                                        <ul class="meta-info">
                                            <li>
                                                <i class="fa fa-user" aria-hidden="true"></i> <a href="#">by
                                                    Admin</a>
                                            </li>
                                            <li>
                                                <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#">02
                                                    Comments</a>
                                            </li>
                                        </ul>
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a href="blog-single.html">The Largest Solid Waste Management
                                                    Company</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is simply dummy text of the new design printng and type
                                                setting
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style1-->

                            <!--Start Single Blog Style1-->
                            <div class="single-blog-style1">
                                <div class="single-blog-style1__inner">
                                    <div class="img-holder">
                                        <div class="inner">
                                            <img src="{{asset('images/blog/blog-v1-1.jpg')}}" alt="" />
                                        </div>
                                        <div class="date-box">
                                            <h6>16<br> <span>Nov</span></h6>
                                        </div>
                                    </div>
                                    <div class="text-holder">
                                        <ul class="meta-info">
                                            <li>
                                                <i class="fa fa-user" aria-hidden="true"></i> <a href="#">by
                                                    Admin</a>
                                            </li>
                                            <li>
                                                <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#">02
                                                    Comments</a>
                                            </li>
                                        </ul>
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a href="blog-single.html">The Largest Solid Waste Management
                                                    Company</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is simply dummy text of the new design printng and type
                                                setting
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style1-->

                            <!--Start Single Blog Style1-->
                            <div class="single-blog-style1">
                                <div class="single-blog-style1__inner">
                                    <div class="img-holder">
                                        <div class="inner">
                                            <img src="{{asset('images/blog/blog-v1-2.jpg')}}" alt="" />
                                        </div>
                                        <div class="date-box">
                                            <h6>11<br> <span>Nov</span></h6>
                                        </div>
                                    </div>
                                    <div class="text-holder">
                                        <ul class="meta-info">
                                            <li>
                                                <i class="fa fa-user" aria-hidden="true"></i> <a href="#">by
                                                    Admin</a>
                                            </li>
                                            <li>
                                                <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#">02
                                                    Comments</a>
                                            </li>
                                        </ul>
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a href="blog-single.html">The Largest Solid Waste Management
                                                    Company</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p>Lorem Ipsum is simply dummy text of the new design printng and type
                                                setting
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style1-->


                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!--End Blog Style1 Area-->

    <!--Start slogan area-->
    <section class="slogan-area">
        <div class="container">
            <div class="row">

                <div class="col-xl-5 col-lg-12">
                    <div class="phone-number-box2">
                        <div class="icon">
                            <span class="icon-phone-ringing"></span>
                        </div>
                        <div class="phone">
                            <p>Have any questions?</p>
                            <a href="tel:123456789">+1-(246) 333-0089</a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-12">
                    <div class="slogan-text-box">
                        <p>Lorem ipsum dolor sit amet nsectetur
                            cing elituspe ndisse suscipit sagitis
                            leo sit.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-12">
                    <div class="slogan-btn-box">
                        <a class="btn-one" href="about.html">
                                <span class="txt">
                                    discover more<i class="icon-refresh arrow"></i>
                                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End slogan area-->


    <!--Start Google Map Style1 Area-->
    <section class="google-map-style1-area">
        <div class="auto-container">
            <div class="home1-page-map-outer">
                <!--Map Canvas-->
                <div class="map-canvas" data-zoom="12" data-lat="-37.817085" data-lng="144.955631"
                     data-type="roadmap" data-hue="#ffc400" data-title="Envato"
                     data-icon-path="{{asset('images/icon/map-marker.png')}}"
                     data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                </div>
            </div>
        </div>
    </section>
    <!--End Google Map Style1 Area-->


    <div class="bottom-parallax">
        <!--Start footer area -->
        <footer class="footer-area">
            <div class="footer-area-bg" style="background-image: url({{asset('images/resources/footer-bg-1.png')}});">
            </div>

            <div class="footer-top">
                <div class="container">
                    <div class="subscribe-content-box">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="subscribe-title">
                                    <div class="icon">
                                        <span class="icon-open-envelope"></span>
                                    </div>
                                    <div class="inner-title">
                                        <h3>Subscribe Now to Get<br> Latest Updates</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="subscribe-box">
                                    <form class="subscribe-form" action="#">
                                        <input type="email" name="email" placeholder="Email address">
                                        <button class="btn-one" type="submit">
                                            <span class="txt"><i class="icon-send"></i></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Start Footer-->
            <div class="footer">
                <div class="container">
                    <div class="row text-right-rtl">

                        <!--Start single footer widget-->
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-footer-widget marbtm50">
                                <div class="title">
                                    <h3>About</h3>
                                </div>
                                <div class="our-company-info">
                                    <div class="text-box">
                                        <p>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod
                                            tempor incididunt ut labore.</p>
                                    </div>
                                    <div class="footer-social-link">
                                        <ul class="clearfix">
                                            <li>
                                                <a href="#"><i class="icon-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-pinterest"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--End single footer widget-->

                        <!--Start single footer widget-->
                        <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-footer-widget marbtm50">
                                <div class="title">
                                    <h3>Links</h3>
                                </div>
                                <div class="footer-widget-links">
                                    <ul>
                                        <li><a href="contact.html">Request Pickup</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="about.html">Management</a></li>
                                        <li><a href="services.html">Start Service</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--End single footer widget-->

                        <!--Start single footer widget-->
                        <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-footer-widget margin-left40">
                                <div class="title">
                                    <h3>Services</h3>
                                </div>
                                <div class="footer-widget-links">
                                    <ul>
                                        <li><a href="services-single-1.html">Grocery Store</a></li>
                                        <li><a href="services-single-2.html">Hotel & Restaurant</a></li>
                                        <li><a href="services-single-3.html">Medical & Hospital</a></li>
                                        <li><a href="services-single-4.html">Waste Removal</a></li>
                                        <li><a href="services-single-1.html">Zero Waste</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--End single footer widget-->

                        <!--Start single footer widget-->
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="single-footer-widget single-footer-widget--contact-info-box pdtop50">
                                <div class="title">
                                    <h3>Contact</h3>
                                </div>
                                <div class="footer-widget-contact-info">
                                    <ul>
                                        <li>
                                            <div class="inner">
                                                <div class="icon phone">
                                                    <span class="icon-telephone"></span>
                                                </div>
                                                <div class="text">
                                                    <p>
                                                        <a href="tel:123456789">+1-(246) 333-0089</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner">
                                                <div class="icon">
                                                    <span class="icon-email-1"></span>
                                                </div>
                                                <div class="text">
                                                    <p>
                                                        <a href="mailto:yourmail@email.com">needhelp@company.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner">
                                                <div class="icon mapmarker">
                                                    <span class="icon-pin-1"></span>
                                                </div>
                                                <div class="text">
                                                    <p>88 broklyn golden street line<br> New York, USA</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--End single footer widget-->

                    </div>
                </div>
            </div>
            <!--End Footer-->
            <div class="footer-bottom">
                <div class="container">
                    <div class="bottom-inner">
                        <div class="copyright">
                            <p>Copyright &copy; 2022 <a href="index.html">Westo</a> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        <!--End footer area-->
    </div>


    <button class="scroll-top scroll-to-target" data-target="html">
        <span class="flaticon-up-arrow"></span>
    </button>

    <!-- search-popup -->
    <div id="search-popup" class="search-popup">
        <div class="close-search"><i class="icon-close"></i></div>
        <div class="popup-inner">
            <div class="overlay-layer"></div>
            <div class="search-form">
                <form method="post" action="index.html">
                    <div class="form-group">
                        <fieldset>
                            <input type="search" class="form-control" name="search-input" value=""
                                   placeholder="Search Here" required>
                            <input type="submit" value="Search Now!" class="theme-btn style-four">
                        </fieldset>
                    </div>
                </form>
                <h3>Recent Search Keywords</h3>
                <ul class="recent-searches">
                    <li><a href="index.html">waste</a></li>
                    <li><a href="index.html">Dumpster</a></li>
                    <li><a href="index.html">Zerowaste</a></li>
                    <li><a href="index.html">Garbage</a></li>
                    <li><a href="index.html">trash</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- search-popup end -->
</div>



<script src="{{ Vite::asset('resources/welcome/js/jquery.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/aos.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/appear.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/isotope.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.bootstrap-touchspin.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.countTo.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.easing.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.event.move.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.fancybox.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.nice-select.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery.paroller.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/jquery-sidebar-content.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/knob.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/map-script.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/owl.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/pagenav.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/scrollbar.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/swiper.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/tilt.jquery.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/TweenMax.min.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/validation.js') }}"></script>
<script src="{{ Vite::asset('resources/welcome/js/wow.js') }}"></script>

<script src="{{ Vite::asset('resources/welcome/js/jquery-1color-switcher.min.js') }}"></script>

<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM&callback=initMap">
</script>

<!-- thm custom script -->
<script src="{{ Vite::asset('resources/welcome/js/custom.js') }}"></script>



</body>

</html>
