import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Accounting <span className="relative whitespace-nowrap text-blue-600"><svg aria-hidden="true"
                    viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                    preserveAspectRatio="none">
                    <path
                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                    </path>
                </svg><span className="relative">made simple</span></span> for small businesses.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">Most bookkeeping software is accurate,
            but hard to use. We make the opposite trade-off, and hope you don’t get audited.</p>
        <div className="mt-10 flex justify-center gap-x-6"><a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                href="/register">Get 6 months free</a><a
                className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg aria-hidden="true"
                    className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
                    <path
                        d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
                    </path>
                </svg><span className="ml-3">Watch video</span></a></div>
        <div className="mt-36 lg:mt-44">
            <p className="font-display text-base text-slate-900">Trusted by these six companies so far</p>
            <ul role="list"
                className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
                <li>
                    <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                        <li className="flex"><img alt="Transistor" src="/_next/static/media/transistor.7274e6c3.svg"
                                width="158" height="48" decoding="async" data-nimg="1" loading="lazy"
                                style="color: transparent;"></li>
                        <li className="flex"><img alt="Tuple" src="/_next/static/media/tuple.74eb0ae0.svg" width="105"
                                height="48" decoding="async" data-nimg="1" loading="lazy" style="color: transparent;">
                        </li>
                        <li className="flex"><img alt="StaticKit" src="/_next/static/media/statickit.d7937794.svg"
                                width="127" height="48" decoding="async" data-nimg="1" loading="lazy"
                                style="color: transparent;"></li>
                    </ul>
                </li>
                <li>
                    <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                        <li className="flex"><img alt="Mirage" src="/_next/static/media/mirage.18d2ec4e.svg" width="138"
                                height="48" decoding="async" data-nimg="1" loading="lazy" style="color: transparent;">
                        </li>
                        <li className="flex"><img alt="Laravel" src="/_next/static/media/laravel.7deed17e.svg" width="136"
                                height="48" decoding="async" data-nimg="1" loading="lazy" style="color: transparent;">
                        </li>
                        <li className="flex"><img alt="Statamic" src="/_next/static/media/statamic.6da5ebfb.svg" width="147"
                                height="48" decoding="async" data-nimg="1" loading="lazy" style="color: transparent;">
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <section id="features" aria-label="Features for running your books"
        className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"><img alt=""
            src="/_next/static/media/background-features.5f7a9ac9.jpg" width="2245" height="1636" decoding="async"
            data-nimg="1" className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
            loading="lazy" style="color: transparent;">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Everything you need
                    to run your books.</h2>
                <p className="mt-6 text-lg tracking-tight text-blue-100">Well everything you need if you aren’t that picky
                    about minor details like tax compliance.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
                <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                    <div className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                        role="tablist" aria-orientation="horizontal">
                        <div
                            className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                            <h3><button
                                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
                                    id="headlessui-tabs-tab-:r3:" role="tab" type="button" aria-selected="false"
                                    tabindex="-1" data-headlessui-state=""
                                    aria-controls="headlessui-tabs-panel-:r7:"><span
                                        className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>Payroll</button>
                            </h3>
                            <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">Keep track of
                                everyone's salaries and whether or not they've been paid. Direct deposit not supported.
                            </p>
                        </div>
                        <div
                            className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                            <h3><button
                                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
                                    id="headlessui-tabs-tab-:r4:" role="tab" type="button" aria-selected="false"
                                    tabindex="-1" data-headlessui-state=""
                                    aria-controls="headlessui-tabs-panel-:r8:"><span
                                        className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>Claim
                                    expenses</button></h3>
                            <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">All of your
                                receipts organized into one place, as long as you don't mind typing in the data by hand.
                            </p>
                        </div>
                        <div
                            className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10">
                            <h3><button
                                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-600 lg:text-white"
                                    id="headlessui-tabs-tab-:r5:" role="tab" type="button" aria-selected="true"
                                    tabindex="0" data-headlessui-state="selected"
                                    aria-controls="headlessui-tabs-panel-:r9:"><span
                                        className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>VAT
                                    handling</button></h3>
                            <p className="mt-2 hidden text-sm lg:block text-white">We only sell our software to companies
                                who don't deal with VAT at all, so technically we do all the VAT stuff they need.</p>
                        </div>
                        <div
                            className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                            <h3><button
                                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
                                    id="headlessui-tabs-tab-:r6:" role="tab" type="button" aria-selected="false"
                                    tabindex="-1" data-headlessui-state=""
                                    aria-controls="headlessui-tabs-panel-:ra:"><span
                                        className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>Reporting</button>
                            </h3>
                            <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">Easily export
                                your data into an Excel spreadsheet where you can do whatever the hell you want with it.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div id="headlessui-tabs-panel-:r7:" role="tabpanel" tabindex="-1" data-headlessui-state=""
                        aria-labelledby="headlessui-tabs-tab-:r3:" hidden="" style="display: none;">
                        <div className="relative sm:px-6 lg:hidden">
                            <div
                                className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl">
                            </div>
                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">Keep track of
                                everyone's salaries and whether or not they've been paid. Direct deposit not supported.
                            </p>
                        </div>
                        <div
                            className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                            <img alt="" sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&amp;w=3840&amp;q=75"
                                width="2174" height="1464" decoding="async" data-nimg="1" className="w-full"
                                style="color: transparent;"></div>
                    </div>
                    <div id="headlessui-tabs-panel-:r8:" role="tabpanel" tabindex="-1" data-headlessui-state=""
                        aria-labelledby="headlessui-tabs-tab-:r4:" style="display: none;" hidden="">
                        <div className="relative sm:px-6 lg:hidden">
                            <div
                                className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl">
                            </div>
                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">All of your
                                receipts organized into one place, as long as you don't mind typing in the data by hand.
                            </p>
                        </div>
                        <div
                            className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                            <img alt="" sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&amp;w=3840&amp;q=75"
                                width="2174" height="1464" decoding="async" data-nimg="1" className="w-full"
                                style="color: transparent;"></div>
                    </div>
                    <div id="headlessui-tabs-panel-:r9:" role="tabpanel" tabindex="0" data-headlessui-state="selected"
                        aria-labelledby="headlessui-tabs-tab-:r5:" style="">
                        <div className="relative sm:px-6 lg:hidden">
                            <div
                                className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl">
                            </div>
                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">We only sell our
                                software to companies who don't deal with VAT at all, so technically we do all the VAT
                                stuff they need.</p>
                        </div>
                        <div
                            className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                            <img alt="" sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&amp;w=3840&amp;q=75"
                                width="2174" height="1464" decoding="async" data-nimg="1" className="w-full"
                                style="color: transparent;"></div>
                    </div>
                    <div id="headlessui-tabs-panel-:ra:" role="tabpanel" tabindex="-1" hidden=""
                        data-headlessui-state="" aria-labelledby="headlessui-tabs-tab-:r6:" style="display: none;">
                        <div className="relative sm:px-6 lg:hidden">
                            <div
                                className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl">
                            </div>
                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">Easily export your
                                data into an Excel spreadsheet where you can do whatever the hell you want with it.</p>
                        </div>
                        <div
                            className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                            <img alt="" sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&amp;w=3840&amp;q=75"
                                width="2174" height="1464" decoding="async" data-nimg="1" className="w-full"
                                style="color: transparent;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="secondary-features" aria-label="Features for simplifying everyday business tasks"
        className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Simplify everyday business
                    tasks.</h2>
                <p className="mt-4 text-lg tracking-tight text-slate-700">Because you’d probably be a little confused if we
                    suggested you complicate your everyday business tasks instead.</p>
            </div>
            <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
                <div>
                    <div className="mx-auto max-w-2xl">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <defs>
                                    <linearGradient id=":rb:" x1="11.5" y1="18" x2="36" y2="15.5"
                                        gradientUnits="userSpaceOnUse">
                                        <stop offset=".194" stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#6692F1"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:rb:)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600">Reporting</h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Stay on top of things with always up-to-date
                            reporting features.</p>
                        <p className="mt-4 text-sm text-slate-600">We talked about reporting in the section above but we
                            needed three items here, so mentioning it one more time for posterity.</p>
                    </div>
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img alt="" sizes="52.75rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75"
                                width="1688" height="856" decoding="async" data-nimg="1" className="w-full" loading="lazy"
                                style="color: transparent;"></div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-2xl">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path opacity=".3"
                                    d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600">Inventory</h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Never lose track of what’s in stock with
                            accurate inventory tracking.</p>
                        <p className="mt-4 text-sm text-slate-600">We don’t offer this as part of our software but that
                            statement is inarguably true. Accurate inventory tracking would help you for sure.</p>
                    </div>
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img alt="" sizes="52.75rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75"
                                width="1688" height="856" decoding="async" data-nimg="1" className="w-full" loading="lazy"
                                style="color: transparent;"></div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-2xl">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                                    fill="#fff"></path>
                                <path
                                    d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600">Contacts</h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Organize all of your contacts, service
                            providers, and invoices in one place.</p>
                        <p className="mt-4 text-sm text-slate-600">This also isn’t actually a feature, it’s just some
                            friendly advice. We definitely recommend that you do this, you’ll feel really organized and
                            professional.</p>
                    </div>
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img alt="" sizes="52.75rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75"
                                width="1688" height="856" decoding="async" data-nimg="1" className="w-full" loading="lazy"
                                style="color: transparent;"></div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:mt-20 lg:block">
                <div className="grid grid-cols-3 gap-x-8" role="tablist" aria-orientation="horizontal">
                    <div className="relative">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <defs>
                                    <linearGradient id=":rc:" x1="11.5" y1="18" x2="36" y2="15.5"
                                        gradientUnits="userSpaceOnUse">
                                        <stop offset=".194" stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#6692F1"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:rc:)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600"><button
                                className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:rd:"
                                role="tab" type="button" aria-selected="true" tabindex="0"
                                data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:rg:"><span
                                    className="absolute inset-0"></span>Reporting</button></h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Stay on top of things with always up-to-date
                            reporting features.</p>
                        <p className="mt-4 text-sm text-slate-600">We talked about reporting in the section above but we
                            needed three items here, so mentioning it one more time for posterity.</p>
                    </div>
                    <div className="relative opacity-75 hover:opacity-100">
                        <div className="w-9 rounded-lg bg-slate-500"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path opacity=".3"
                                    d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-slate-600"><button
                                className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:re:"
                                role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state=""
                                aria-controls="headlessui-tabs-panel-:rh:"><span
                                    className="absolute inset-0"></span>Inventory</button></h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Never lose track of what’s in stock with
                            accurate inventory tracking.</p>
                        <p className="mt-4 text-sm text-slate-600">We don’t offer this as part of our software but that
                            statement is inarguably true. Accurate inventory tracking would help you for sure.</p>
                    </div>
                    <div className="relative opacity-75 hover:opacity-100">
                        <div className="w-9 rounded-lg bg-slate-500"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                                    fill="#fff"></path>
                                <path
                                    d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-slate-600"><button
                                className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:rf:"
                                role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state=""
                                aria-controls="headlessui-tabs-panel-:ri:"><span
                                    className="absolute inset-0"></span>Contacts</button></h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Organize all of your contacts, service
                            providers, and invoices in one place.</p>
                        <p className="mt-4 text-sm text-slate-600">This also isn’t actually a feature, it’s just some
                            friendly advice. We definitely recommend that you do this, you’ll feel really organized and
                            professional.</p>
                    </div>
                </div>
                <div className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
                    <div className="-mx-5 flex">
                        <div className="px-5 transition duration-500 ease-in-out [&amp;:not(:focus-visible)]:focus:outline-none"
                            aria-hidden="false" id="headlessui-tabs-panel-:rg:" role="tabpanel" tabindex="0"
                            data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:rd:"
                            style="transform: translateX(0%);">
                            <div
                                className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                <img alt="" sizes="52.75rem"
                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75"
                                    width="1688" height="856" decoding="async" data-nimg="1" className="w-full"
                                    loading="lazy" style="color: transparent;"></div>
                        </div>
                        <div className="px-5 transition duration-500 ease-in-out [&amp;:not(:focus-visible)]:focus:outline-none opacity-60"
                            aria-hidden="true" id="headlessui-tabs-panel-:rh:" role="tabpanel" tabindex="-1"
                            data-headlessui-state="" aria-labelledby="headlessui-tabs-tab-:re:"
                            style="transform: translateX(0%);">
                            <div
                                className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                <img alt="" sizes="52.75rem"
                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75"
                                    width="1688" height="856" decoding="async" data-nimg="1" className="w-full"
                                    loading="lazy" style="color: transparent;"></div>
                        </div>
                        <div className="px-5 transition duration-500 ease-in-out [&amp;:not(:focus-visible)]:focus:outline-none opacity-60"
                            aria-hidden="true" id="headlessui-tabs-panel-:ri:" role="tabpanel" tabindex="-1"
                            data-headlessui-state="" aria-labelledby="headlessui-tabs-tab-:rf:"
                            style="transform: translateX(0%);">
                            <div
                                className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                <img alt="" sizes="52.75rem"
                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75"
                                    width="1688" height="856" decoding="async" data-nimg="1" className="w-full"
                                    loading="lazy" style="color: transparent;"></div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32"><img alt=""
            src="/_next/static/media/background-call-to-action.6a5a5672.jpg" width="2347" height="1244" decoding="async"
            data-nimg="1" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" loading="lazy"
            style="color: transparent;">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">Get started today</h2>
                <p className="mt-4 text-lg tracking-tight text-white">It’s time to take control of your books. Buy our
                    software so you can feel like you’re doing something productive.</p><a
                    className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                    href="/register">Get 6 months free</a>
            </div>
        </div>
    </section>
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Loved by businesses
                    worldwide.</h2>
                <p className="mt-4 text-lg tracking-tight text-slate-700">Our software is so simple that people can’t help
                    but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.
                </p>
            </div>
            <ul role="list"
                className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                <li>
                    <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                        <li>
                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
                                    aria-hidden="true" width="105" height="78"
                                    className="absolute top-6 left-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="text-lg tracking-tight text-slate-900">TaxPal is so easy to use I can’t
                                        help but wonder if it’s really doing the things the government expects me to do.
                                    </p>
                                </blockquote>
                                <figcaption
                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                        <div className="mt-1 text-sm text-slate-500">CEO at Lynch LLC</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50"><img alt=""
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=128&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&amp;w=128&amp;q=75"
                                            width="56" height="56" decoding="async" data-nimg="1"
                                            className="h-14 w-14 object-cover" loading="lazy" style="color: transparent;">
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
                                    aria-hidden="true" width="105" height="78"
                                    className="absolute top-6 left-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="text-lg tracking-tight text-slate-900">I’m trying to get a hold of someone
                                        in support, I’m in a lot of trouble right now and they are saying it has
                                        something to do with my books. Please get back to me right away.</p>
                                </blockquote>
                                <figcaption
                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <div className="font-display text-base text-slate-900">Amy Hahn</div>
                                        <div className="mt-1 text-sm text-slate-500">Director at Velocity Industries</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50"><img alt=""
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75"
                                            width="56" height="56" decoding="async" data-nimg="1"
                                            className="h-14 w-14 object-cover" loading="lazy" style="color: transparent;">
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                        <li>
                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
                                    aria-hidden="true" width="105" height="78"
                                    className="absolute top-6 left-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="text-lg tracking-tight text-slate-900">The best part about TaxPal is every
                                        time I pay my employees, my bank balance doesn’t go down like it used to.
                                        Looking forward to spending this extra cash when I figure out why my card is
                                        being declined.</p>
                                </blockquote>
                                <figcaption
                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <div className="font-display text-base text-slate-900">Leland Kiehn</div>
                                        <div className="mt-1 text-sm text-slate-500">Founder of Kiehn and Sons</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50"><img alt=""
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&amp;w=128&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&amp;w=128&amp;q=75"
                                            width="56" height="56" decoding="async" data-nimg="1"
                                            className="h-14 w-14 object-cover" loading="lazy" style="color: transparent;">
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
                                    aria-hidden="true" width="105" height="78"
                                    className="absolute top-6 left-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="text-lg tracking-tight text-slate-900">There are so many things I had to
                                        do with my old software that I just don’t do at all with TaxPal. Suspicious but
                                        I can’t say I don’t love it.</p>
                                </blockquote>
                                <figcaption
                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <div className="font-display text-base text-slate-900">Erin Powlowski</div>
                                        <div className="mt-1 text-sm text-slate-500">COO at Armstrong Inc</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50"><img alt=""
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&amp;w=128&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&amp;w=128&amp;q=75"
                                            width="56" height="56" decoding="async" data-nimg="1"
                                            className="h-14 w-14 object-cover" loading="lazy" style="color: transparent;">
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                        <li>
                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
                                    aria-hidden="true" width="105" height="78"
                                    className="absolute top-6 left-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="text-lg tracking-tight text-slate-900">I used to have to remit tax to the
                                        EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel
                                        there now though.</p>
                                </blockquote>
                                <figcaption
                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <div className="font-display text-base text-slate-900">Peter Renolds</div>
                                        <div className="mt-1 text-sm text-slate-500">Founder of West Inc</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50"><img alt=""
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&amp;w=128&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&amp;w=128&amp;q=75"
                                            width="56" height="56" decoding="async" data-nimg="1"
                                            className="h-14 w-14 object-cover" loading="lazy" style="color: transparent;">
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg
                                    aria-hidden="true" width="105" height="78"
                                    className="absolute top-6 left-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="text-lg tracking-tight text-slate-900">This is the fourth email I’ve sent
                                        to your support team. I am literally being held in jail for tax fraud. Please
                                        answer your damn emails, this is important.</p>
                                </blockquote>
                                <figcaption
                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                        <div className="font-display text-base text-slate-900">Amy Hahn</div>
                                        <div className="mt-1 text-sm text-slate-500">Director at Velocity Industries</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50"><img alt=""
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&amp;w=128&amp;q=75"
                                            width="56" height="56" decoding="async" data-nimg="1"
                                            className="h-14 w-14 object-cover" loading="lazy" style="color: transparent;">
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
    <section id="pricing" aria-label="Pricing" className="bg-slate-900 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="md:text-center">
                <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl"><span
                        className="relative whitespace-nowrap"><svg aria-hidden="true" viewBox="0 0 281 40"
                            className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" preserveAspectRatio="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z">
                            </path>
                        </svg><span className="relative">Simple pricing,</span></span> for everyone.</h2>
                <p className="mt-4 text-lg text-slate-400">It doesn’t matter what size your business is, our software won’t
                    work well for you.</p>
            </div>
            <div
                className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
                <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                    <h3 className="mt-5 font-display text-lg text-white">Starter</h3>
                    <p className="mt-2 text-base text-slate-400">Good for anyone who is self-employed and just getting
                        started.</p>
                    <p className="order-first font-display text-5xl font-light tracking-tight text-white">$9</p>
                    <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Send 10 quotes and invoices</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Connect up to 2 bank accounts</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Track up to 15 expenses per month</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Manual payroll support</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Export up to 3 reports</span></li>
                    </ul><a
                        className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
                        aria-label="Get started with the Starter plan for $9" href="/register">Get started</a>
                </section>
                <section className="flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-blue-600 py-8 lg:order-none">
                    <h3 className="mt-5 font-display text-lg text-white">Small business</h3>
                    <p className="mt-2 text-base text-white">Perfect for small / medium sized businesses.</p>
                    <p className="order-first font-display text-5xl font-light tracking-tight text-white">$15</p>
                    <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white">
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Send 25 quotes and invoices</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Connect up to 5 bank accounts</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Track up to 50 expenses per month</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Automated payroll support</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Export up to 12 reports</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Bulk reconcile transactions</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-white">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Track in multiple currencies</span></li>
                    </ul><a
                        className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"
                        aria-label="Get started with the Small business plan for $15" href="/register">Get started</a>
                </section>
                <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                    <h3 className="mt-5 font-display text-lg text-white">Enterprise</h3>
                    <p className="mt-2 text-base text-slate-400">For even the biggest enterprise companies.</p>
                    <p className="order-first font-display text-5xl font-light tracking-tight text-white">$39</p>
                    <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Send unlimited quotes and invoices</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Connect up to 15 bank accounts</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Track up to 200 expenses per month</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Automated payroll support</span></li>
                        <li className="flex"><svg aria-hidden="true"
                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400">
                                <path
                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                    stroke-width="0"></path>
                                <circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                            </svg><span className="ml-4">Export up to 25 reports, including TPS</span></li>
                    </ul><a
                        className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
                        aria-label="Get started with the Enterprise plan for $39" href="/register">Get started</a>
                </section>
            </div>
        </div>
    </section>
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"><img
            alt="" src="/_next/static/media/background-faqs.55d2e36a.jpg" width="1558" height="946" decoding="async"
            data-nimg="1" className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4" loading="lazy"
            style="color: transparent;">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Frequently
                    asked questions</h2>
                <p className="mt-4 text-lg tracking-tight text-slate-700">If you can’t find what you’re looking for, email
                    our support team and if you’re lucky someone will get back to you.</p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                <li>
                    <ul role="list" className="flex flex-col gap-y-8">
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">Does TaxPal handle VAT?</h3>
                            <p className="mt-4 text-sm text-slate-700">Well no, but if you move your company offshore you
                                can probably ignore it.</p>
                        </li>
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">Can I pay for my subscription via
                                purchase order?</h3>
                            <p className="mt-4 text-sm text-slate-700">Absolutely, we are happy to take your money in all
                                forms.</p>
                        </li>
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">How do I apply for a job at
                                TaxPal?</h3>
                            <p className="mt-4 text-sm text-slate-700">We only hire our customers, so subscribe for a
                                minimum of 6 months and then let’s talk.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul role="list" className="flex flex-col gap-y-8">
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">What was that testimonial about
                                tax fraud all about?</h3>
                            <p className="mt-4 text-sm text-slate-700">TaxPal is just a software application, ultimately
                                your books are your responsibility.</p>
                        </li>
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">TaxPal sounds horrible but why do
                                I still feel compelled to purchase?</h3>
                            <p className="mt-4 text-sm text-slate-700">This is the power of excellent visual design. You
                                just can’t resist it, no matter how poorly it actually functions.</p>
                        </li>
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">I found other companies called
                                TaxPal, are you sure you can use this name?</h3>
                            <p className="mt-4 text-sm text-slate-700">Honestly not sure at all. We haven’t actually
                                incorporated or anything, we just thought it sounded cool and made this website.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul role="list" className="flex flex-col gap-y-8">
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">How do you generate reports?</h3>
                            <p className="mt-4 text-sm text-slate-700">You just tell us what data you need a report for, and
                                we get our kids to create beautiful charts for you using only the finest crayons.</p>
                        </li>
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">Can we expect more inventory
                                features?</h3>
                            <p className="mt-4 text-sm text-slate-700">In life it’s really better to never expect anything
                                at all.</p>
                        </li>
                        <li>
                            <h3 className="font-display text-lg leading-7 text-slate-900">I lost my password, how do I get
                                into my account?</h3>
                            <p className="mt-4 text-sm text-slate-700">Send us an email and we will send you a copy of our
                                latest password spreadsheet so you can find your information.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</main>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <section>
  <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/get-started"
        >
          <span className="text-sm font-medium"> Get Started </span>

          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
