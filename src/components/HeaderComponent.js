import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';
import { auth, provider } from "../firebase";
import '../css/header.css';
import $ from 'jquery';
import LoginModal from './LoginModal';

export class Header extends Component {
  constructor(props){
    super(props);
    this.signin=this.signin.bind(this);
  }
  componentDidMount() {
    // Preloader
    // $(window).on('load', function() {
    //   if ($('#preloader').length) {
    //     $('#preloader').delay(100).fadeOut('slow', function() {
    //       $(this).remove();
    //     });
    //   }
    // });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    // var scrolltoOffset = $('#header').outerHeight() - 21;
    // $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (
    //   e
    // ) {
    //   if (
    //     window.location.pathname.replace(/^\//, '') ===
    //       this.pathname.replace(/^\//, '') &&
    //     window.location.hostname === this.hostname
    //   ) {
    //     var target = $(this.hash);
    //     if (target.length) {
    //       e.preventDefault();

    //       var scrollto = target.offset().top - scrolltoOffset;

    //       if ($(this).attr('href') === '#header') {
    //         scrollto = 0;
    //       }

    //       $('html, body').animate(
    //         {
    //           scrollTop: scrollto,
    //         },
    //         1500,
    //         'easeInOutExpo'
    //       );

    //       if ($(this).parents('.nav-menu, .mobile-nav').length) {
    //         $('.nav-menu .active, .mobile-nav .active').removeClass('active');
    //         $(this).closest('li').addClass('active');
    //       }

    //       if ($('body').hasClass('mobile-nav-active')) {
    //         $('body').removeClass('mobile-nav-active');
    //         $('.mobile-nav-toggle i').toggleClass(
    //           'icofont-navigation-menu icofont-close'
    //         );
    //         $('.mobile-nav-overly').fadeOut();
    //       }
    //       return false;
    //     }
    //   }
    // });

    // Activate smooth scroll on page load with hash links in the url

    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none',
      });
      $('body').append($mobile_nav);
      $('body').prepend(
        `<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>`
      );
      $('body').append('<div class="mobile-nav-overly"></div>');

      $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass(
          'icofont-navigation-menu icofont-close'
        );
        $('.mobile-nav-overly').toggle();
      });

      // $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      //   e.preventDefault();
      //   $(this).next().slideToggle(300);
      //   $(this).parent().toggleClass('active');
      // });

      $(document).click(function (e) {
        var container = $('.mobile-nav, .mobile-nav-toggle');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass(
              'icofont-navigation-menu icofont-close'
            );
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($('.mobile-nav, .mobile-nav-toggle').length) {
      $('.mobile-nav, .mobile-nav-toggle').hide();
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop() + 200;

      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav
            .find('a[href="#' + $(this).attr('id') + '"]')
            .parent('li')
            .addClass('active');
        }
        if (cur_pos < 300) {
          $(
            '.nav-menu ul:first li:first, .mobile-menu ul:first li:first'
          ).addClass('active');
        }
      });
    });

    // Toggle .header-scrolled Class to #header when page is scrolled
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });

    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    // $('.back-to-top').click(function () {
    //   $('html, body').animate(
    //     {
    //       scrollTop: 0,
    //     },
    //     1500,
    //     'easeInOutExpo'
    //   );
    //   return false;
    // });

    // Initiate the venobox plugin

    // jQuery counterUp
    // Initiate venobox lightbo
    // Init AOS
  }
  signin(){
     console.log("check");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  }
  render() {
    return (
      <div>
        <header
          id="header"
          className="fixed-top d-flex align-items-center header-transparent"
        >
          <div className="container d-flex align-items-center">
            <div className="logo mr-auto">
              <h1 className="text-light">
                <NavLink to="/home">
                  <span>Envision</span>
                </NavLink>
              </h1>
              {/* <!-- Uncomment below if you prefer to use an image logo --> */}
              {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                {this.props.auth.isAuthenticated ? (
                  <li>
                    <a href="#">{this.props.auth.user.displayname}</a>
                  </li>
                ) : null}
                <li>
                  {/* <LoginModal
                    buttonLabel="open modal"
                    loginUser={this.props.loginUser}
                    logoutUser={this.props.logoutUser}
                    auth={this.props.auth}
                  /> */}
                 
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
