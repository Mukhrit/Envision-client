import React from 'react';
import '../css/dashboardavatar.scss';
export default function Dashboardavatar(props) {
  let codecheflink = 'https://www.codechef.com';
  if (props.user.codechef_handle !== '')
    codecheflink =
      'https://www.codechef.com/users/' + props.user.codechef_handle;
  let codeforceslink = 'https://codeforces.com';
  if (props.user.codeforces_handle !== '')
    codeforceslink =
      'https://codeforces.com/profile/' + props.user.codeforces_handle;
  let atcoderlink = 'https://atcoder.jp';
  if (props.user.atcoder_handle !== '')
    atcoderlink = 'https://atcoder.jp/users/' + props.user.atcoder_handle;

  return (
    <div className='dashboard_avatar'>
      <div class='page-content page-container' id='page-content'>
        <div class='padding'>
          <div class='row container d-flex justify-content-center'>
            <div class='col-12'>
              <div class='card user-card-full'>
                <div class='row m-l-0 m-r-0'>
                  <div class='col-sm-3 bg-c-lite-green user-profile align-item-center '>
                    <div class='card-block text-center text-white '>
                      {/* <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div> */}
                      <h6 style={{}}>{props.user.displayname}</h6>{' '}
                      <h4 style={{}} class='f-w-600'>
                        {props.user.envision_handle}
                      </h4>
                      <i class=' mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16'></i>
                    </div>
                  </div>
                  <div class='col-sm-9'>
                    <div class='card-block'>
                      <h6 class='m-b-20 p-b-5 b-b-default f-w-600'>
                        Information
                      </h6>
                      <div class='row'>
                        <div class='col-sm-4'>
                          <p class='m-b-10 f-w-600'>Codechef</p>

                          <a
                            href={codecheflink}
                            class='text-muted f-w-400'
                            target='__blank'
                            style={{
                              whiteSpace: 'nowrap',
                              textDecoration: 'none',
                            }}
                          >
                            {props.user.codechef_handle}{' '}
                          </a>
                        </div>
                        <div class='col-sm-4'>
                          <p class='m-b-10 f-w-600'>Codeforces</p>
                          <a
                            href={codeforceslink}
                            class='text-muted f-w-400'
                            target='__blank'
                            style={{
                              whiteSpace: 'nowrap',
                              textDecoration: 'none',
                            }}
                          >
                            {props.user.codeforces_handle}{' '}
                          </a>
                        </div>
                        <div class='col-sm-4'>
                          <p class='m-b-10 f-w-600'>Atcoder</p>
                          <a
                            href={atcoderlink}
                            class='text-muted f-w-400'
                            target='__blank'
                            style={{
                              whiteSpace: 'nowrap',
                              textDecoration: 'none',
                            }}
                          >
                            {props.user.atcoder_handle}{' '}
                          </a>
                        </div>
                      </div>
                      {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Projects
                        </h6> */}
                      {/* <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Recent</p>
                            <h6 class="text-muted f-w-400">Sam Disuja</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Most Viewed</p>
                            <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                          </div>
                        </div> */}
                      {/* <ul class="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                class="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
