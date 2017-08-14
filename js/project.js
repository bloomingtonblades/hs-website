/* Sponsor images */

var bb_sponsors = [
    {
        s_img: "cas-2017.jpg",
        s_name: "Create-A-Smile, PC",
        s_web: "http://createasmilepc.com/"
    },
    {
        s_img: "mg-2017.jpg",
        s_name: "Mallor | Grodner Attorneys",
        s_web: "http://www.lawmg.com/"
    },
    {
        s_img: "ra-2017.jpg",
        s_name: "Root Advisors",
        s_web: "https://root.com"
    },
    {
        s_img: "ub-2017.jpg",
        s_name: "Upland Bloomington Brewpub",
        s_web: "https://www.uplandbeer.com/locations/bloomington-brew-pub/"
    },
    {
        s_img: "hw-2017.jpg",
        s_name: "Hurlow Wealth Management",
        s_web: "http://www.hurlowwealth.com/"
    },
    {
        s_img: "ow-2017.jpg",
        s_name: "Oliver Winery and Vineyards",
        s_web: "http://www.oliverwinery.com/"
    },
    {
        s_img: "tnw-2017.jpg",
        s_name: "TNW Automotive Service Center",
        s_web: "http://tnwautomotive.net/"
    },
    {
        s_img: "vd-2017.jpg",
        s_name: "The Village Deli",
        s_web: "http://www.villagedeli.biz/"
    }
];

function bb_shuffle(a) {
    var n = a.length, c, tmp;
    while (n) {
        c = Math.floor(Math.random() * n--);
        tmp = a[n];
        a[n] = a[c];
        a[c] = tmp;
    }
}
function bb_load_sponsors(id) {
    var s1=$('#' + id + '-s1');
    var s2=$('#' + id + '-s2');
    var a1=$('#' + id + '-a1');
    var a2=$('#' + id + '-a2');
    bb_shuffle(bb_sponsors);
    if (s1) {
        s1.attr('src', bb_sponsors[0].s_img);
        s1.attr('alt', bb_sponsors[0].s_name);
        s1.attr('title', bb_sponsors[0].s_name);
    }
    if (s2) {
        s2.attr('src', bb_sponsors[1].s_img);
        s2.attr('alt', bb_sponsors[1].s_name);
        s2.attr('title', bb_sponsors[1].s_name);
    }
    if (a1) {
        a1.attr('href', bb_sponsors[0].s_web);
    }
    if (a2) {
        a2.attr('href', bb_sponsors[1].s_web);
    }
}
