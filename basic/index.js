console.log(mojs);


/* basic */
var shape = new mojs.Shape({
    shape:        'circle',
    isShowStart:  true
});


/* options */
var shape_options = new mojs.Shape({
    shape:        'circle',  // 기본값 circle
    radius:       25,        // 반지름
    fill:         'blue',    // 내부 색상
    stroke:       'yellow',  // 겉면 색상
    strokeWidth:  5,         // 겉면 너비
    isShowStart:  true,      // 모션 시작전 활성화
});


/* position */
var shape_position = new mojs.Shape({
    shape:        'circle',
    top:          '10%',     // 상단에서 10% 떨어진
    x:            '100',     // X축 100
    y:            '100',     // Y축 100
    isShowStart:  true,
});


/* radius */
var shape_radius = new mojs.Shape({
    shape:        'circle',
    top:          '90%',     // 상단에서 90% 떨어진
    left:         '30%',     // 좌측에서 30% 떨어진
    // radius:       25,
    radiusX:      100,       // 반지름의 너비
    radiusY:      50,        // 반지름의 높이
    isShowStart:  true,
});


/* shape type */
var circle = new mojs.Shape({
    shape:        'circle',  // circle
    radius:       10,
    top:          '10%',
    left:         '25%',
    fill:         'deeppink',
    isShowStart:  true,
});

var rect = new mojs.Shape({
    shape:        'rect',    // rect
    radius:       10,
    top:          '10%',
    left:         '50%',
    isShowStart:  true,
});

var polygon = new mojs.Shape({
    shape:        'polygon', // polygon
    radius:       10,
    top:          '10%',
    left:         '75%',
    isShowStart:  true,
});

var zigzag = new mojs.Shape({
    shape:        'zigzag',  // zigzag
    points:       4,
    radius:       20,
    top:          '17%',
    left:         '25%',
    fill:         'none',
    stroke:       'deeppink',
    isShowStart:   true,
});

var curve = new mojs.Shape({
    shape:        'curve',   // curve
    points:       11,
    radius:       20,
    top:          '17%',                
    left:         '50%',
    fill:         'none',
    stroke:       'deeppink',                                
    isShowStart:   true,
});

var cross = new mojs.Shape({
    shape:        'cross',   // cross
    radius:       20,
    top:          '17%',             
    left:         '75%',
    fill:         'none',
    stroke:       'deeppink',
    isShowStart:   true,
    y:            -20,
}); 