/* @ds-bundle: {"format": 4, "namespace": "RVS", "components": [{"name": "Button"}, {"name": "Link"}, {"name": "Tag"}, {"name": "Header"}, {"name": "Footer"}, {"name": "Breadcrumbs"}, {"name": "Hero"}, {"name": "Grid"}, {"name": "Card"}, {"name": "Signpost"}, {"name": "Panel"}, {"name": "ContactPanel"}, {"name": "Prose"}, {"name": "AudienceSelector"}, {"name": "QuickLinks"}, {"name": "OnThisPage"}, {"name": "SearchInput"}, {"name": "SearchResults"}, {"name": "FilterPanel"}, {"name": "Pagination"}, {"name": "BackToTop"}, {"name": "AzIndex"}, {"name": "Quote"}, {"name": "StatsPanel"}, {"name": "Timeline"}, {"name": "KeyFacts"}, {"name": "Table"}, {"name": "ContentMeta"}, {"name": "VideoEmbed"}, {"name": "Accordion"}, {"name": "Details"}, {"name": "EditorialFeature"}, {"name": "DocumentLink"}, {"name": "Steps"}, {"name": "Checklist"}, {"name": "KeyDates"}, {"name": "EventCard"}, {"name": "Tabs"}, {"name": "TextInput"}, {"name": "Select"}, {"name": "ChoiceGroup"}, {"name": "SelectableCard"}, {"name": "ErrorSummary"}, {"name": "ProgressIndicator"}, {"name": "Dialog"}, {"name": "PageActions"}, {"name": "NotificationBanner"}, {"name": "ConfirmationPanel"}, {"name": "StateMessage"}, {"name": "Logo"}, {"name": "Icon"}, {"name": "IconBadge"}, {"name": "BrandPattern"}, {"name": "SectionDivider"}, {"name": "Illustration"}, {"name": "CtaBanner"}, {"name": "SkipLink"}, {"name": "CookieBanner"}, {"name": "SectionNav"}, {"name": "MapEmbed"}, {"name": "PasswordInput"}, {"name": "Term"}, {"name": "Glossary"}, {"name": "Explainer"}, {"name": "TeamProfile"}, {"name": "PageFeedback"}, {"name": "PupilCard"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var Frag = React.Fragment;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useCallback = React.useCallback;
  var idc = 0;
  function useUid(prefix) { var r = useRef(null); if (r.current === null) { idc += 1; r.current = (prefix || 'rvs') + '-' + idc; } return r.current; }
  function cx() { var o = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) o.push(arguments[i]); } return o.join(' '); }
  function H(level, props, children) { var l = Math.min(6, Math.max(1, level || 2)); return h('h' + l, props, children); }
  function vh(text) { return h('span', { className: 'rvs-visually-hidden' }, text); }

  /* ---------- Assets (uploads in this design system; override with assetBase or src) ---------- */
  var ASSETS = {
    'stacked-reversed': '/assets/rvs/rvs-logo-stacked-reversed.svg',
    'stacked': '/assets/rvs/rvs-logo-stacked.svg',
    'primary': '/assets/rvs/rvs-logo-primary.svg',
    'primary-reversed': '/assets/rvs/rvs-logo-primary-reversed.svg',
    'horizontal': '/assets/rvs/rvs-logo-horizontal.svg',
    'horizontal-reversed': '/assets/rvs/rvs-logo-horizontal-reversed.svg',
    'one-colour': '/assets/rvs/rvs-logo-one-colour.svg',
    'one-colour-reversed': '/assets/rvs/rvs-logo-one-colour-reversed.svg',
    'mark': '/assets/rvs/rvs-mark.svg',
    'mark-reversed': '/assets/rvs/rvs-mark-reversed.svg',
    'app-icon': '/assets/rvs/rvs-app-icon.svg',
    'illustration-home': '/assets/rvs/illustration-home.svg',
    'illustration-children': '/assets/rvs/illustration-children.svg',
    'illustration-carers': '/assets/rvs/illustration-carers.svg',
    'illustration-schools': '/assets/rvs/illustration-schools.svg',
    'pattern': '/assets/rvs/brand-pattern.svg'
  };
  var RATIO = { stacked: 3.12, primary: 3.12, horizontal: 4.1, 'one-colour': 3.03, mark: 0.98, 'app-icon': 1 };

  /* ---------- Icon ---------- */
  var P = {
    'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
    'arrow-left': ['M19 12H5', 'M11 6l-6 6 6 6'],
    'arrow-up': ['M12 19V5', 'M6 11l6-6 6 6'],
    'chevron-down': ['M6 9l6 6 6-6'], 'chevron-up': ['M6 15l6-6 6 6'],
    'chevron-right': ['M9 6l6 6-6 6'], 'chevron-left': ['M15 6l-6 6 6 6'],
    'search': ['M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z', 'M20 20l-4-4'],
    'menu': ['M4 7h16', 'M4 12h16', 'M4 17h16'],
    'close': ['M6 6l12 12', 'M18 6L6 18'],
    'plus': ['M12 5v14', 'M5 12h14'], 'minus': ['M5 12h14'],
    'phone': ['M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z'],
    'mail': ['M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'M3 7l9 6 9-6'],
    'document': ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6', 'M9 17h6'],
    'clipboard': ['M9 4h6v3H9z', 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2', 'M9 12h6', 'M9 16h4'],
    'calendar': ['M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'M3 10h18', 'M8 3v4', 'M16 3v4'],
    'clock': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7v5l3 2'],
    'map-pin': ['M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z', 'M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'],
    'user': ['M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M4 21a8 8 0 0 1 16 0'],
    'users': ['M9 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z', 'M2 20a7 7 0 0 1 14 0', 'M17 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z', 'M16.5 14.6A5.5 5.5 0 0 1 22 20'],
    'star': ['M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z'],
    'heart': ['M12 20s-8-4.7-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.3 12 20 12 20z'],
    'book': ['M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z', 'M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z'],
    'school': ['M3 21h18', 'M5 21V10l7-5 7 5v11', 'M10 21v-5h4v5', 'M12 9.5v2.5l1.5 1'],
    'graduation': ['M2 9l10-5 10 5-10 5z', 'M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5', 'M22 9v6'],
    'transition': ['M4 8h14', 'M14 4l4 4-4 4', 'M20 16H6', 'M10 12l-4 4 4 4'],
    'alert': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7v6', 'M12 16.5v.5'],
    'warning': ['M12 3l10 18H2z', 'M12 10v5', 'M12 18v.5'],
    'info': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 11v6', 'M12 7.5v.5'],
    'check': ['M5 12l5 5 9-10'],
    'check-circle': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M8 12l3 3 5-6'],
    'external': ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
    'download': ['M12 4v11', 'M7 10l5 5 5-5', 'M5 20h14'],
    'print': ['M7 8V3h10v5', 'M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M7 14h10v7H7z'],
    'share': ['M18 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z', 'M6 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z', 'M18 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z', 'M8.3 10.8l7.4-4.4', 'M8.3 13.2l7.4 4.4'],
    'copy': ['M10 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z', 'M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2'],
    'filter': ['M3 5h18l-7 8v6l-4 2v-8z'],
    'play': ['M8 5v14l11-7z'],
    'quote': ['M10 7H5v6h4v1a3 3 0 0 1-3 3', 'M20 7h-5v6h4v1a3 3 0 0 1-3 3'],
    'compass': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M15.5 8.5l-2 5-5 2 2-5z'],
    'sun': ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M12 2v2', 'M12 20v2', 'M4.9 4.9l1.4 1.4', 'M17.7 17.7l1.4 1.4', 'M2 12h2', 'M20 12h2', 'M4.9 19.1l1.4-1.4', 'M17.7 6.3l1.4-1.4'],
    'sprout': ['M12 21v-9', 'M12 12c0-4-3-7-8-7 0 4 3 7 8 7z', 'M12 10c0-3 2.5-6 7-6 0 3.5-2.5 6-7 6z'],
    'lock': ['M7 11h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z', 'M8 11V7a4 4 0 0 1 8 0v4'],
    'home': ['M3 11l9-7 9 7', 'M5 10v10h14V10'],
    'message': ['M4 5h16v11H9l-5 4z'],
    'briefcase': ['M4 8h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z', 'M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3', 'M3 13h18'],
    'eye': ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z', 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'],
    'eye-off': ['M3 3l18 18', 'M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2', 'M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6', 'M9.9 9.9a3 3 0 0 0 4.2 4.2'],
    'palette': ['M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A4.7 4.7 0 0 0 21 9.7C21 5.9 17 3 12 3z', 'M7.5 11.5h.01', 'M10 7.5h.01', 'M14.5 7.5h.01', 'M17 11h.01'],
    'speech': ['M4 5h16v11H11l-5 4v-4H4z', 'M8 9.5h8', 'M8 12.5h5'],
    'map': ['M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z', 'M9 3v15', 'M15 6v15'],
    'key': ['M8 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M11 13l9-9', 'M17 7l3 3', 'M15 9l2 2'],
    'baby': ['M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M6 21v-3a6 6 0 0 1 12 0v3', 'M10 7h.01', 'M14 7h.01']
  };
  var ICON_NAMES = Object.keys(P);
  function Icon(props) {
    var name = props.name, size = props.size || 24, title = props.title;
    var paths = P[name] || P.info;
    return h('svg', {
      className: cx('rvs-icon', props.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: props.strokeWidth || 2, strokeLinecap: 'round', strokeLinejoin: 'round',
      'aria-hidden': title ? undefined : 'true', role: title ? 'img' : undefined, focusable: 'false'
    }, title ? h('title', null, title) : null, paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }

  /* ---------- IconBadge ---------- */
  function IconBadge(props) {
    var tone = props.tone || 'teal', size = props.size || 'md', shape = props.shape || 'circle';
    var px = { sm: 32, md: 48, lg: 64 }[size] || 48;
    return h('span', { className: cx('rvs-icon-badge', 'rvs-tone-' + tone, 'rvs-icon-badge--' + size, 'rvs-icon-badge--' + shape, props.className), 'aria-hidden': props.label ? undefined : 'true', role: props.label ? 'img' : undefined, 'aria-label': props.label },
      h(Icon, { name: props.icon || 'star', size: Math.round(px * 0.5) }));
  }

  /* ---------- Logo ---------- */
  function Logo(props) {
    var variant = props.variant || 'stacked';
    var key = variant + (props.reversed && variant !== 'app-icon' ? '-reversed' : '');
    var height = props.height || 48;
    var src = props.src || ((props.assetBase || '') + ASSETS[key]);
    var img = h('img', { className: 'rvs-logo__img', src: src, alt: props.alt === undefined ? 'Rotherham Virtual School' : props.alt, height: height, width: Math.round(height * (RATIO[variant] || 3)), style: { height: height + 'px', width: 'auto' } });
    if (props.href) return h('a', { className: cx('rvs-logo', props.className), href: props.href }, img, props.homeLabel ? vh(props.homeLabel) : null);
    return h('span', { className: cx('rvs-logo', props.className) }, img);
  }

  /* ---------- BrandPattern ---------- */
  function rng(seed) { var s = seed || 7; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  function BrandPattern(props) {
    var cols = props.cols || 8, rows = props.rows || 3, u = props.unit || 48, gap = props.gap === undefined ? 4 : props.gap;
    var tones = props.tones || ['teal', 'yellow', 'coral', 'pale', 'teal', 'yellow'];
    var r = rng(props.seed || 11), cells = [];
    var W = cols * u + (cols - 1) * gap, Hh = rows * u + (rows - 1) * gap;
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
      var tone = tones[Math.floor(r() * tones.length)], kind = Math.floor(r() * 4), rot = Math.floor(r() * 4) * 90;
      var ox = x * (u + gap), oy = y * (u + gap), d;
      if (kind === 0) d = 'M0 ' + u + 'V0A' + u + ' ' + u + ' 0 0 1 ' + u + ' ' + u + 'Z'; // quarter
      else if (kind === 1) d = 'M0 ' + u + 'A' + u + ' ' + u + ' 0 0 1 ' + u + ' 0A' + u + ' ' + u + ' 0 0 1 0 ' + u + 'Z'; // leaf
      else if (kind === 2) d = 'M0 ' + u + 'A' + (u / 2) + ' ' + (u / 2) + ' 0 0 1 ' + u + ' ' + u + 'Z'; // half-round
      else d = 'M0 0H' + u + 'A' + u + ' ' + u + ' 0 0 1 0 ' + u + 'Z'; // quarter, flipped
      cells.push(h('path', { key: x + '-' + y, className: 'rvs-fill-' + tone, d: d, transform: 'translate(' + ox + ' ' + oy + ') rotate(' + rot + ' ' + (u / 2) + ' ' + (u / 2) + ')' }));
    }
    return h('svg', { className: cx('rvs-pattern', props.className), viewBox: '0 0 ' + W + ' ' + Hh, width: props.width || '100%', preserveAspectRatio: 'xMidYMid slice', 'aria-hidden': 'true', focusable: 'false', style: props.height ? { height: props.height } : undefined }, cells);
  }

  /* ---------- SectionDivider ---------- */
  function SectionDivider(props) {
    var v = props.variant || 'hills';
    if (v === 'rule') return h('hr', { className: cx('rvs-divider-rule', props.className) });
    if (v === 'pattern') return h('div', { className: cx('rvs-divider rvs-divider--pattern', props.className), 'aria-hidden': 'true' }, h(BrandPattern, { rows: 1, cols: 24, unit: 24, gap: 2, seed: props.seed || 5 }));
    return h('div', { className: cx('rvs-divider rvs-divider--hills', props.flip && 'rvs-divider--flip', props.className), 'aria-hidden': 'true' },
      h('svg', { viewBox: '0 0 1200 80', preserveAspectRatio: 'none', width: '100%', height: props.height || 64, focusable: 'false' },
        h('path', { className: 'rvs-fill-pale', d: 'M0 44C220 8 420 8 620 34s420 34 580 6V80H0z' }),
        h('path', { className: 'rvs-fill-teal', d: 'M0 60c180-26 360-30 560-10s400 20 640-12V80H0z' }),
        h('path', { className: 'rvs-fill-coral', d: 'M640 80c140-28 330-44 560-30V80z' }),
        h('path', { className: 'rvs-fill-yellow', d: 'M0 80c110-20 250-26 380-14-60 6-120 10-160 14z' })));
  }

  /* ---------- Illustration ---------- */
  function Illustration(props) {
    var v = props.variant || 'frame', src = props.src || ASSETS['illustration-' + (props.name || 'home')];
    return h('figure', { className: cx('rvs-illustration', 'rvs-illustration--' + v, props.className), 'data-audience': props.audience },
      h('div', { className: 'rvs-illustration__frame' }, h('img', { src: src, alt: props.alt || '', loading: 'lazy' })),
      props.caption ? h('figcaption', { className: 'rvs-illustration__caption' }, props.caption) : null);
  }

  /* ---------- Link ---------- */
  function Link(props) {
    var ext = props.external;
    var cls = cx('rvs-link', props.variant && 'rvs-link--' + props.variant, props.className);
    return h('a', { className: cls, href: props.href, target: ext ? '_blank' : undefined, rel: ext ? 'noopener noreferrer' : undefined, onClick: props.onClick, 'aria-current': props.current ? 'page' : undefined },
      props.children,
      props.variant === 'arrow' ? h(Icon, { name: 'arrow-right', size: 18, className: 'rvs-link__arrow' }) : null,
      ext ? h(Frag, null, h(Icon, { name: 'external', size: 16, className: 'rvs-link__ext' }), vh(' (opens in new tab)')) : null);
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || 'primary', size = props.size || 'md';
    var icon = props.icon, pos = props.iconPosition || 'end';
    var cls = cx('rvs-btn', 'rvs-btn--' + variant, 'rvs-btn--' + size, props.fullWidth && 'rvs-btn--full', props.loading && 'rvs-btn--loading', props.className);
    var content = h(Frag, null,
      props.loading ? h('span', { className: 'rvs-spinner rvs-spinner--sm', 'aria-hidden': 'true' }) : null,
      icon && pos === 'start' && !props.loading ? h(Icon, { name: icon, size: 20 }) : null,
      h('span', { className: 'rvs-btn__label' }, props.children),
      icon && pos === 'end' ? h(Icon, { name: icon, size: 20 }) : null,
      props.loading ? vh(props.loadingLabel || ' Loading') : null);
    if (props.href && !props.disabled) return h('a', { className: cls, href: props.href, role: 'button', draggable: 'false', onClick: props.onClick }, content);
    return h('button', { className: cls, type: props.type || 'button', disabled: props.disabled || undefined, 'aria-disabled': props.loading ? 'true' : undefined, onClick: props.loading ? undefined : props.onClick, 'aria-controls': props['aria-controls'], 'aria-expanded': props['aria-expanded'], 'data-autofocus': props['data-autofocus'], name: props.name, value: props.value, form: props.form }, content);
  }
  function ButtonGroup(props) { return h('div', { className: cx('rvs-btn-group', props.className) }, props.children); }

  /* ---------- Tag ---------- */
  function Tag(props) { return h('strong', { className: cx('rvs-tag', 'rvs-tag--' + (props.tone || 'neutral'), props.className) }, props.children); }

  /* ---------- SkipLink ---------- */
  function SkipLink(props) { return h('a', { className: 'rvs-skip-link', href: props.href || '#main-content' }, props.children || 'Skip to main content'); }

  /* ---------- Header ---------- */
  function Header(props) {
    var nav = props.navigation || [];
    var s1 = useState(false), menuOpen = s1[0], setMenu = s1[1];
    var s2 = useState(!!props.searchOpen), searchOpen = s2[0], setSearch = s2[1];
    var navId = useUid('rvs-nav'), searchId = useUid('rvs-hsearch');
    return h('header', { className: cx('rvs-header', props.className) },
      h('div', { className: 'rvs-header__inner' },
        h(Logo, { variant: 'stacked', reversed: true, height: props.logoHeight || 44, href: props.logoHref || '/', alt: 'Rotherham Virtual School', homeLabel: ' homepage' }),
        h('div', { className: 'rvs-header__tools' },
          nav.length ? h('button', { type: 'button', className: 'rvs-header__toggle', 'aria-controls': navId, 'aria-expanded': menuOpen ? 'true' : 'false', onClick: function () { setMenu(!menuOpen); } },
            h(Icon, { name: menuOpen ? 'close' : 'menu', size: 22 }), h('span', null, 'Menu')) : null,
          nav.length ? h('nav', { id: navId, className: cx('rvs-header__nav', menuOpen && 'is-open'), 'aria-label': 'Menu' },
            h('ul', { className: 'rvs-header__list' }, nav.map(function (n, i) {
              return h('li', { key: i, className: cx('rvs-header__item', n.active && 'is-active') }, h('a', { className: 'rvs-header__link', href: n.href, 'aria-current': n.active ? 'page' : undefined }, n.label));
            }))) : null,
          props.search !== false ? h('button', { type: 'button', className: 'rvs-header__search-toggle', 'aria-controls': searchId, 'aria-expanded': searchOpen ? 'true' : 'false', onClick: function () { setSearch(!searchOpen); } },
            h(Icon, { name: searchOpen ? 'close' : 'search', size: 22 }), vh(searchOpen ? 'Close search' : 'Search this site')) : null)),
      props.search !== false ? h('div', { id: searchId, className: 'rvs-header__search', hidden: !searchOpen },
        h('div', { className: 'rvs-header__search-inner' }, h(SearchInput, { label: 'Search Rotherham Virtual School', hideLabel: true, onSubmit: props.onSearch, action: props.searchAction, inverse: true }))) : null);
  }

  /* ---------- Footer ---------- */
  function Footer(props) {
    var links = props.links || [];
    return h('footer', { className: cx('rvs-footer', props.className) },
      h('div', { className: 'rvs-footer__inner' },
        h('div', { className: 'rvs-footer__top' },
          h(Logo, { variant: 'stacked', reversed: true, height: 40, href: props.logoHref || '/' }),
          links.length ? h('nav', { 'aria-label': 'Support links' }, h('ul', { className: 'rvs-footer__links' }, links.map(function (l, i) { return h('li', { key: i }, h('a', { className: 'rvs-footer__link', href: l.href }, l.label)); }))) : null,
          props.partner ? h('div', { className: 'rvs-footer__partner' }, props.partner) : null),
        props.children ? h('div', { className: 'rvs-footer__extra' }, props.children) : null,
        h('p', { className: 'rvs-footer__meta' }, props.copyright || ('© ' + new Date().getFullYear() + ' Rotherham Virtual School. All rights reserved.'))));
  }

  /* ---------- Breadcrumbs ---------- */
  function Breadcrumbs(props) {
    var items = props.items || [];
    return h('nav', { className: cx('rvs-breadcrumbs', props.inverse && 'rvs-breadcrumbs--inverse', props.className), 'aria-label': 'Breadcrumb' },
      h('ol', { className: 'rvs-breadcrumbs__list' }, items.map(function (it, i) {
        var last = i === items.length - 1;
        return h('li', { key: i, className: 'rvs-breadcrumbs__item' }, last && !it.href ? h('span', { 'aria-current': 'page' }, it.label) : h('a', { className: 'rvs-breadcrumbs__link', href: it.href }, it.label));
      })));
  }

  /* ---------- AudienceSelector ---------- */
  var AUD_ICON = { 'young-people': 'user', 'parents-carers': 'users', schools: 'school', 'social-workers': 'clipboard', professionals: 'briefcase' };
  var AUD_TONE = { 'young-people': 'teal', 'parents-carers': 'coral', schools: 'yellow', 'social-workers': 'purple', professionals: 'navy' };
  function AudienceSelector(props) {
    var items = props.audiences || [], v = props.variant || 'cards';
    return h('nav', { className: cx('rvs-audiences', 'rvs-audiences--' + v, props.className), 'aria-label': props.label || 'Who is this for?' },
      props.heading ? H(props.headingLevel || 2, { className: 'rvs-section-title' }, props.heading) : null,
      h('ul', { className: 'rvs-audiences__list' }, items.map(function (a, i) {
        var cur = props.current === a.id;
        return h('li', { key: i, className: 'rvs-audiences__item', 'data-audience': a.id },
          h('a', { className: cx('rvs-audiences__link', cur && 'is-current'), href: a.href, 'aria-current': cur ? 'page' : undefined },
            v === 'cards' ? h(IconBadge, { icon: a.icon || AUD_ICON[a.id] || 'user', tone: AUD_TONE[a.id] || 'teal', size: 'md' }) : null,
            h('span', { className: 'rvs-audiences__text' }, h('span', { className: 'rvs-audiences__label' }, a.label),
              v === 'cards' && a.description ? h('span', { className: 'rvs-audiences__desc' }, a.description) : null),
            h(Icon, { name: 'arrow-right', size: 20, className: 'rvs-audiences__arrow' })));
      })));
  }

  /* ---------- QuickLinks ---------- */
  function QuickLinks(props) {
    var links = props.links || [];
    return h('nav', { className: cx('rvs-quicklinks', props.variant && 'rvs-quicklinks--' + props.variant, props.className), 'aria-label': props.label || props.heading || 'Quick links' },
      props.heading ? H(props.headingLevel || 2, { className: 'rvs-quicklinks__title' }, props.heading) : null,
      links.length ? h('ul', { className: 'rvs-quicklinks__list', style: props.columns ? { columnCount: props.columns } : undefined }, links.map(function (l, i) {
        return h('li', { key: i, className: 'rvs-quicklinks__item' },
          h('a', { className: 'rvs-quicklinks__link', href: l.href, target: l.external ? '_blank' : undefined, rel: l.external ? 'noopener noreferrer' : undefined },
            l.icon ? h(Icon, { name: l.icon, size: 20, className: 'rvs-quicklinks__icon' }) : h(Icon, { name: l.external ? 'external' : 'chevron-right', size: 18, className: 'rvs-quicklinks__icon' }),
            h('span', null, l.label, l.external ? vh(' (opens in new tab)') : null)),
          l.meta ? h('span', { className: 'rvs-quicklinks__meta' }, l.meta) : null);
      })) : h('p', { className: 'rvs-muted' }, props.emptyText || 'Nothing to show yet.'));
  }

  /* ---------- SectionNav ---------- */
  function SectionNav(props) {
    var items = props.items || [];
    function list(its, depth) {
      return h('ul', { className: cx('rvs-sectionnav__list', depth && 'rvs-sectionnav__list--sub') }, its.map(function (it, i) {
        return h('li', { key: i, className: cx('rvs-sectionnav__item', it.current && 'is-current') },
          h('a', { className: 'rvs-sectionnav__link', href: it.href, 'aria-current': it.current ? 'page' : undefined }, it.label),
          it.children && it.children.length ? list(it.children, depth + 1) : null);
      }));
    }
    return h('nav', { className: cx('rvs-sectionnav', props.className), 'data-audience': props.audience, 'aria-label': props.label || ('Pages in ' + (props.title || 'this section')) },
      props.title ? h('p', { className: 'rvs-sectionnav__title' }, props.titleHref ? h('a', { href: props.titleHref }, props.title) : props.title) : null,
      list(items, 0));
  }

  /* ---------- OnThisPage ---------- */
  function OnThisPage(props) {
    var items = props.items || [];
    var s = useState(props.activeId || null), active = s[0], setActive = s[1];
    useEffect(function () {
      if (!props.trackActive || typeof IntersectionObserver === 'undefined') return;
      var obs = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: '0px 0px -70% 0px' });
      items.forEach(function (it) { var el = document.getElementById(it.id); if (el) obs.observe(el); });
      return function () { obs.disconnect(); };
    }, [props.trackActive, items.length]);
    return h('nav', { className: cx('rvs-toc', props.sticky && 'rvs-toc--sticky', props.className), 'aria-labelledby': 'rvs-toc-h' },
      h('h2', { id: 'rvs-toc-h', className: 'rvs-toc__title' }, props.heading || 'On this page'),
      h('ol', { className: 'rvs-toc__list' }, items.map(function (it, i) {
        return h('li', { key: i, className: cx('rvs-toc__item', active === it.id && 'is-active') }, h('a', { href: '#' + it.id, 'aria-current': active === it.id ? 'location' : undefined }, it.label));
      })));
  }

  /* ---------- Pagination ---------- */
  function pageList(cur, total) {
    var out = [], i;
    if (total <= 7) { for (i = 1; i <= total; i++) out.push(i); return out; }
    out.push(1); if (cur > 3) out.push('…');
    for (i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) out.push(i);
    if (cur < total - 2) out.push('…'); out.push(total); return out;
  }
  function Pagination(props) {
    var cur = props.page || 1, total = props.total || 1;
    var href = props.hrefFor || function (p) { return '?page=' + p; };
    function go(p) { return function (e) { if (props.onChange) { e.preventDefault(); props.onChange(p); } }; }
    if (props.variant === 'prev-next') {
      return h('nav', { className: 'rvs-pagination rvs-pagination--block', 'aria-label': props.label || 'Results pages' },
        props.prev ? h('a', { className: 'rvs-pagination__block', href: props.prev.href, rel: 'prev' }, h('span', { className: 'rvs-pagination__dir' }, h(Icon, { name: 'arrow-left', size: 20 }), 'Previous'), h('span', { className: 'rvs-pagination__label' }, props.prev.label)) : h('span'),
        props.next ? h('a', { className: 'rvs-pagination__block rvs-pagination__block--next', href: props.next.href, rel: 'next' }, h('span', { className: 'rvs-pagination__dir' }, 'Next', h(Icon, { name: 'arrow-right', size: 20 })), h('span', { className: 'rvs-pagination__label' }, props.next.label)) : null);
    }
    if (total <= 1) return null;
    return h('nav', { className: cx('rvs-pagination', props.className), 'aria-label': props.label || 'Results pages' },
      cur > 1 ? h('a', { className: 'rvs-pagination__prev', href: href(cur - 1), rel: 'prev', onClick: go(cur - 1) }, h(Icon, { name: 'arrow-left', size: 18 }), h('span', null, 'Previous', vh(' page'))) : null,
      h('ul', { className: 'rvs-pagination__list' }, pageList(cur, total).map(function (p, i) {
        if (p === '…') return h('li', { key: 'e' + i, className: 'rvs-pagination__ellipsis', 'aria-hidden': 'true' }, '…');
        return h('li', { key: p }, h('a', { className: cx('rvs-pagination__num', p === cur && 'is-current'), href: href(p), 'aria-current': p === cur ? 'page' : undefined, 'aria-label': 'Page ' + p, onClick: go(p) }, p));
      })),
      cur < total ? h('a', { className: 'rvs-pagination__next', href: href(cur + 1), rel: 'next', onClick: go(cur + 1) }, h('span', null, 'Next', vh(' page')), h(Icon, { name: 'arrow-right', size: 18 })) : null);
  }

  /* ---------- BackToTop ---------- */
  function BackToTop(props) {
    var s = useState(!!props.alwaysVisible), vis = s[0], setVis = s[1];
    useEffect(function () {
      if (props.alwaysVisible) return;
      var t = props.threshold || 600;
      function on() { setVis(window.scrollY > t); }
      window.addEventListener('scroll', on, { passive: true }); on();
      return function () { window.removeEventListener('scroll', on); };
    }, [props.alwaysVisible, props.threshold]);
    return h('div', { className: cx('rvs-back-to-top', vis && 'is-visible', props.fixed && 'rvs-back-to-top--fixed') },
      h('a', { className: 'rvs-back-to-top__link', href: props.href || '#top' }, h(Icon, { name: 'arrow-up', size: 20 }), props.children || 'Back to top'));
  }

  /* ---------- AzIndex ---------- */
  function AzIndex(props) {
    var groups = props.groups || [];
    var have = {}; groups.forEach(function (g) { if (g.items && g.items.length) have[g.letter.toUpperCase()] = true; });
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var pre = props.idPrefix || 'az-';
    return h('div', { className: cx('rvs-az', props.className) },
      h('nav', { className: 'rvs-az__nav', 'aria-label': props.label || 'A to Z' }, h('ul', { className: 'rvs-az__letters' }, letters.map(function (l) {
        return h('li', { key: l }, have[l] ? h('a', { className: 'rvs-az__letter', href: '#' + pre + l }, l) : h('span', { className: 'rvs-az__letter is-empty', 'aria-hidden': 'true' }, l));
      }))),
      groups.filter(function (g) { return g.items && g.items.length; }).map(function (g) {
        return h('section', { key: g.letter, className: 'rvs-az__group', 'aria-labelledby': pre + g.letter.toUpperCase() },
          h('h2', { id: pre + g.letter.toUpperCase(), className: 'rvs-az__heading', tabIndex: -1 }, g.letter.toUpperCase()),
          h('ul', { className: 'rvs-az__items' }, g.items.map(function (it, i) { return h('li', { key: i }, h('a', { className: 'rvs-link', href: it.href }, it.label), it.description ? h('span', { className: 'rvs-az__desc' }, ' — ' + it.description) : null); })));
      }));
  }

  /* ---------- SearchInput ---------- */
  function SearchInput(props) {
    var id = useUid('rvs-search');
    var s = useState(props.defaultValue || ''), val = s[0], setVal = s[1];
    function submit(e) { if (props.onSubmit) { e.preventDefault(); props.onSubmit(val); } }
    return h('form', { className: cx('rvs-search', props.size === 'large' && 'rvs-search--large', props.inverse && 'rvs-search--inverse', props.className), role: 'search', action: props.action || '/search', method: 'get', onSubmit: submit },
      h('label', { className: cx('rvs-label', props.hideLabel && 'rvs-visually-hidden'), htmlFor: id }, props.label || 'Search'),
      h('div', { className: 'rvs-search__row' },
        h('input', { id: id, className: 'rvs-search__input', type: 'search', name: props.name || 'q', value: val, placeholder: props.placeholder, autoComplete: 'off', onChange: function (e) { setVal(e.target.value); } }),
        h('button', { className: 'rvs-search__submit', type: 'submit' }, h(Icon, { name: 'search', size: 22 }), vh('Search'))));
  }

  /* ---------- StateMessage (empty / error / loading / success) ---------- */
  var STATE_ICON = { empty: 'search', error: 'alert', success: 'check-circle', offline: 'info', info: 'info' };
  function StateMessage(props) {
    var st = props.state || 'empty';
    if (st === 'loading' && props.skeleton) {
      return h('div', { className: 'rvs-skeleton', role: 'status', 'aria-live': 'polite' }, vh(props.title || 'Loading'),
        Array.apply(null, Array(props.skeleton)).map(function (_, i) { return h('div', { key: i, className: 'rvs-skeleton__row', 'aria-hidden': 'true' }, h('span', { className: 'rvs-skeleton__line rvs-skeleton__line--title' }), h('span', { className: 'rvs-skeleton__line' }), h('span', { className: 'rvs-skeleton__line rvs-skeleton__line--short' })); }));
    }
    return h('div', { className: cx('rvs-state', 'rvs-state--' + st, props.compact && 'rvs-state--compact', props.className), role: st === 'error' ? 'alert' : 'status', 'aria-live': st === 'error' ? 'assertive' : 'polite' },
      st === 'loading' ? h('span', { className: 'rvs-spinner', 'aria-hidden': 'true' }) : h(IconBadge, { icon: props.icon || STATE_ICON[st], tone: st === 'error' ? 'error' : st === 'success' ? 'success' : 'pale', size: 'lg' }),
      h('div', { className: 'rvs-state__body' },
        props.title ? h('h2', { className: 'rvs-state__title' }, props.title) : null,
        props.children ? h('div', { className: 'rvs-state__text' }, props.children) : null,
        props.action ? h('div', { className: 'rvs-state__action' }, props.action) : null));
  }

  /* ---------- SearchResults ---------- */
  function SearchResults(props) {
    var res = props.results || [];
    if (props.loading) return h(StateMessage, { state: 'loading', skeleton: 3, title: 'Loading results' });
    if (props.error) return h(StateMessage, { state: 'error', title: 'Search is not working right now', action: props.onRetry ? h(Button, { variant: 'secondary', onClick: props.onRetry }, 'Try again') : null }, 'Try again in a few minutes. If you need help now, call 01709 334610.');
    return h('section', { className: cx('rvs-results', props.className), 'aria-labelledby': 'rvs-results-h' },
      h('h2', { id: 'rvs-results-h', className: 'rvs-results__count', 'aria-live': 'polite' }, (props.total !== undefined ? props.total : res.length) + ' result' + ((props.total !== undefined ? props.total : res.length) === 1 ? '' : 's'), props.query ? h(Frag, null, ' for ‘', h('mark', null, props.query), '’') : null),
      res.length === 0 ? h(StateMessage, { state: 'empty', title: 'No results found', compact: true }, props.emptyText || h('ul', { className: 'rvs-list' }, h('li', null, 'check your spelling'), h('li', null, 'use fewer or more general words'), h('li', null, 'remove some filters'))) :
        h('ol', { className: 'rvs-results__list' }, res.map(function (r, i) {
          return h('li', { key: i, className: 'rvs-results__item' },
            r.type ? h('span', { className: 'rvs-results__type' }, r.type) : null,
            h('h3', { className: 'rvs-results__title' }, h('a', { className: 'rvs-link', href: r.href }, r.title)),
            r.summary ? h('p', { className: 'rvs-results__summary' }, r.summary) : null,
            r.updated ? h('p', { className: 'rvs-results__meta' }, 'Updated ', h('time', { dateTime: r.updated }, fmtDate(r.updated))) : null);
        })));
  }

  /* ---------- FilterPanel ---------- */
  function FilterPanel(props) {
    var groups = props.groups || [];
    var controlled = props.selected !== undefined;
    var s = useState(props.defaultSelected || {}), inner = s[0], setInner = s[1];
    var sel = controlled ? props.selected : inner;
    var s2 = useState(props.sort || (props.sortOptions && props.sortOptions[0] && props.sortOptions[0].value) || ''), sort = s2[0], setSort = s2[1];
    var sortId = useUid('rvs-sort');
    function toggle(g, v) {
      var cur = (sel[g] || []).slice(), i = cur.indexOf(v);
      if (i >= 0) cur.splice(i, 1); else cur.push(v);
      var next = Object.assign({}, sel); next[g] = cur;
      if (!controlled) setInner(next); if (props.onChange) props.onChange(next);
    }
    var count = Object.keys(sel).reduce(function (a, k) { return a + (sel[k] || []).length; }, 0);
    return h('div', { className: cx('rvs-filters', props.className) },
      props.sortOptions ? h('div', { className: 'rvs-filters__sort' },
        h('label', { className: 'rvs-label rvs-label--s', htmlFor: sortId }, 'Sort by'),
        h('select', { id: sortId, className: 'rvs-select', value: sort, onChange: function (e) { setSort(e.target.value); if (props.onSortChange) props.onSortChange(e.target.value); } },
          props.sortOptions.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); }))) : null,
      h('div', { className: 'rvs-filters__head' }, h('h2', { className: 'rvs-filters__title' }, props.heading || 'Filter'),
        count ? h('button', { type: 'button', className: 'rvs-linkbtn', onClick: function () { if (!controlled) setInner({}); if (props.onChange) props.onChange({}); } }, 'Clear filters', vh(' (' + count + ' selected)')) : null),
      groups.map(function (g) {
        return h('details', { key: g.id, className: 'rvs-filters__group', open: g.open !== false },
          h('summary', { className: 'rvs-filters__summary' }, g.legend, (sel[g.id] || []).length ? h('span', { className: 'rvs-filters__badge' }, (sel[g.id] || []).length, vh(' selected')) : null, h(Icon, { name: 'chevron-down', size: 18, className: 'rvs-filters__chev' })),
          h('fieldset', { className: 'rvs-fieldset rvs-filters__fs' }, h('legend', { className: 'rvs-visually-hidden' }, g.legend),
            (g.options || []).map(function (o) {
              var cid = 'f-' + g.id + '-' + o.value, on = (sel[g.id] || []).indexOf(o.value) >= 0;
              return h('div', { key: o.value, className: 'rvs-choice rvs-choice--checkbox rvs-choice--small' },
                h('input', { className: 'rvs-choice__input', type: 'checkbox', id: cid, checked: on, onChange: function () { toggle(g.id, o.value); } }),
                h('label', { className: 'rvs-choice__label', htmlFor: cid }, o.label, o.count !== undefined ? h('span', { className: 'rvs-muted' }, ' (' + o.count + ')') : null));
            })));
      }));
  }

  /* ---------- dates ---------- */
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function fmtDate(iso, short) { if (!iso) return ''; var d = new Date(iso + (iso.length === 10 ? 'T12:00:00' : '')); if (isNaN(d)) return iso; var m = MONTHS[d.getMonth()]; return d.getDate() + ' ' + (short ? m.slice(0, 3) : m) + ' ' + d.getFullYear(); }

  /* ---------- Hero ---------- */
  function Hero(props) {
    var v = props.variant || 'default';
    var ill = props.illustration;
    return h('section', { className: cx('rvs-hero', 'rvs-hero--' + v, props.className), 'data-audience': props.audience, 'aria-labelledby': 'rvs-hero-title' },
      h('div', { className: 'rvs-hero__inner' },
        h('div', { className: 'rvs-hero__text' },
          props.breadcrumbs ? h(Breadcrumbs, { items: props.breadcrumbs }) : null,
          props.eyebrow ? h('p', { className: 'rvs-eyebrow' }, props.eyebrow) : null,
          h('h1', { id: 'rvs-hero-title', className: 'rvs-hero__title' }, props.title),
          props.lead ? h('p', { className: 'rvs-hero__lead' }, props.lead) : null,
          props.actions ? h('div', { className: 'rvs-hero__actions' }, props.actions) : null),
        ill ? h('div', { className: 'rvs-hero__art' }, h('img', { src: ill.src || ASSETS['illustration-' + (ill.name || 'home')], alt: ill.alt || '', width: ill.width, height: ill.height })) : (v !== 'compact' ? h('div', { className: 'rvs-hero__art rvs-hero__art--pattern', 'aria-hidden': 'true' }, h(BrandPattern, { rows: 3, cols: 4, unit: 56, seed: props.patternSeed || 3 })) : null)),
      v === 'home' ? h(SectionDivider, { variant: 'hills', height: 40 }) : null);
  }

  /* ---------- Grid ---------- */
  function Grid(props) {
    return h(props.as || 'div', { className: cx('rvs-grid', props.className), style: { '--rvs-grid-min': props.min || '240px', '--rvs-grid-gap': props.gap || 'var(--space-5)' } }, props.children);
  }

  /* ---------- Card ---------- */
  function Card(props) {
    var v = props.variant || 'outlined';
    var title = props.href ? h('a', { className: 'rvs-card__link', href: props.href, target: props.external ? '_blank' : undefined, rel: props.external ? 'noopener noreferrer' : undefined }, props.title, props.external ? h(Frag, null, h(Icon, { name: 'external', size: 16, className: 'rvs-link__ext' }), vh(' (opens in new tab)')) : null) : props.title;
    return h(props.as || 'div', { className: cx('rvs-card', 'rvs-card--' + v, props.href && 'rvs-card--clickable', props.className), 'data-audience': props.audience },
      props.image ? h('div', { className: 'rvs-card__media' }, h('img', { src: props.image.src, alt: props.image.alt || '', loading: 'lazy' })) : null,
      h('div', { className: 'rvs-card__body' },
        props.icon ? h('span', { className: 'rvs-card__icon' }, v === 'tinted' || props.iconStyle === 'plain' ? h(Icon, { name: props.icon, size: 32, className: 'rvs-tone-text-' + (props.iconTone || 'teal') }) : h(IconBadge, { icon: props.icon, tone: props.iconTone || 'teal', size: 'md' })) : null,
        props.tag ? h('div', { className: 'rvs-card__tag' }, props.tag) : null,
        H(props.headingLevel || 3, { className: 'rvs-card__title' }, title),
        props.text ? h('p', { className: 'rvs-card__text' }, props.text) : null,
        props.children,
        props.meta ? h('p', { className: 'rvs-card__meta' }, props.meta) : null,
        props.href && props.linkLabel !== false ? h('span', { className: 'rvs-card__more', 'aria-hidden': 'true' }, props.linkLabel || (props.external ? 'Visit website' : 'Find out more'), h(Icon, { name: props.external ? 'external' : 'arrow-right', size: 18 })) : null));
  }

  /* ---------- Signpost ---------- */
  function Signpost(props) {
    return h('div', { className: cx('rvs-signpost', props.className) },
      h(Icon, { name: props.icon || 'document', size: props.iconSize || 40, className: 'rvs-signpost__icon rvs-tone-text-' + (props.iconTone || 'teal') }),
      h('div', { className: 'rvs-signpost__body' },
        H(props.headingLevel || 2, { className: 'rvs-signpost__title' }, props.title),
        props.text ? h('p', { className: 'rvs-signpost__text' }, props.text) : null,
        props.children,
        props.href ? h(Link, { href: props.href, variant: 'arrow' }, props.linkLabel || 'Find out more') : null));
  }

  /* ---------- Panel ---------- */
  var PANEL_ICON = { info: 'info', help: 'alert', advice: 'message', warning: 'warning', neutral: null, pep: 'document' };
  function Panel(props) {
    var tone = props.tone || 'info';
    var icon = props.icon === undefined ? PANEL_ICON[tone] : props.icon;
    var badgeTone = { info: 'teal', help: 'coral', advice: 'yellow', warning: 'navy', pep: 'teal' }[tone] || 'teal';
    return h(props.as || 'section', { className: cx('rvs-panel', 'rvs-panel--' + tone, props.className), 'aria-label': props.title ? undefined : props.label },
      icon ? (tone === 'help' || tone === 'warning' ? h(IconBadge, { icon: icon, tone: tone === 'help' ? 'coral' : 'navy', size: 'md' }) : h(Icon, { name: icon, size: 40, className: 'rvs-panel__icon rvs-tone-text-' + badgeTone })) : null,
      h('div', { className: 'rvs-panel__body' },
        props.title ? H(props.headingLevel || 2, { className: 'rvs-panel__title' }, props.title) : null,
        tone === 'warning' ? vh('Warning: ') : null,
        h('div', { className: 'rvs-panel__content' }, props.children),
        props.actions ? h('div', { className: 'rvs-panel__actions' }, props.actions) : null));
  }

  /* ---------- ContactPanel ---------- */
  function ContactPanel(props) {
    var v = props.variant || 'stacked';
    var tel = (props.phone || '').replace(/\s/g, '');
    return h('section', { className: cx('rvs-contact', 'rvs-contact--' + v, props.className), 'aria-labelledby': 'rvs-contact-h' },
      H(props.headingLevel || 2, { id: 'rvs-contact-h', className: 'rvs-contact__title' }, props.title || 'Need to get in touch?'),
      h('ul', { className: 'rvs-contact__list' },
        props.address ? h('li', { className: 'rvs-contact__item' }, h(Icon, { name: 'map-pin', size: 22 }), h('address', { className: 'rvs-contact__address' }, [].concat(props.address).map(function (l, i) { return h(Frag, { key: i }, i ? h('br') : null, l); }))) : null,
        props.phone ? h('li', { className: 'rvs-contact__item' }, h(Icon, { name: 'phone', size: 22 }), h('span', null, h('a', { className: 'rvs-contact__value', href: 'tel:' + tel }, props.phone), props.phoneHours ? h('span', { className: 'rvs-contact__hint' }, props.phoneHours) : null)) : null,
        props.email ? h('li', { className: 'rvs-contact__item' }, h(Icon, { name: 'mail', size: 22 }), h('a', { className: 'rvs-contact__value', href: 'mailto:' + props.email }, props.email)) : null),
      props.contactHref ? h('div', { className: 'rvs-contact__action' }, v === 'inline' ? h(Button, { href: props.contactHref, variant: 'secondary-dark', size: 'sm', icon: 'arrow-right' }, 'Contact us') : h(Link, { href: props.contactHref, variant: 'arrow' }, 'Contact us')) : null);
  }

  /* ---------- Quote ---------- */
  function Quote(props) {
    var v = props.variant || 'testimonial';
    return h('figure', { className: cx('rvs-quote', 'rvs-quote--' + v, props.className) },
      v === 'student-voice' ? h('p', { className: 'rvs-eyebrow rvs-quote__label' }, props.label || 'In their words') : null,
      h(Icon, { name: 'quote', size: 36, className: 'rvs-quote__mark' }),
      h('blockquote', { className: 'rvs-quote__text' }, typeof props.children === 'string' ? h('p', null, props.children) : props.children),
      props.cite ? h('figcaption', { className: 'rvs-quote__cite' }, props.image ? h('img', { className: 'rvs-quote__avatar', src: props.image.src, alt: '' }) : null,
        h('span', null, h('span', { className: 'rvs-quote__name' }, props.cite), props.role ? h('span', { className: 'rvs-quote__role' }, props.role) : null)) : null);
  }

  /* ---------- StatsPanel ---------- */
  function StatsPanel(props) {
    var stats = props.stats || [];
    return h('section', { className: cx('rvs-stats', props.variant === 'navy' && 'rvs-stats--navy', props.className), 'aria-labelledby': props.heading ? 'rvs-stats-h' : undefined },
      props.heading ? h('h2', { id: 'rvs-stats-h', className: 'rvs-stats__title' }, props.heading) : null,
      h('dl', { className: 'rvs-stats__list' }, stats.map(function (s, i) {
        return h('div', { key: i, className: 'rvs-stats__item' }, h('dt', { className: 'rvs-stats__label' }, s.label), h('dd', { className: 'rvs-stats__value' }, s.value), s.description ? h('dd', { className: 'rvs-stats__desc' }, s.description) : null);
      })),
      props.source ? h('p', { className: 'rvs-stats__source' }, 'Source: ', props.source) : null);
  }

  /* ---------- Timeline ---------- */
  function Timeline(props) {
    var items = props.items || [];
    return h('ol', { className: cx('rvs-timeline', props.className), 'aria-label': props.label },
      items.map(function (it, i) {
        var st = it.status || 'upcoming';
        return h('li', { key: i, className: cx('rvs-timeline__item', 'is-' + st), 'aria-current': st === 'current' ? 'step' : undefined },
          h('span', { className: 'rvs-timeline__dot', 'aria-hidden': 'true' }, st === 'done' ? h(Icon, { name: 'check', size: 14, strokeWidth: 3 }) : null),
          h('div', { className: 'rvs-timeline__body' },
            it.date ? h('p', { className: 'rvs-timeline__date' }, it.date) : null,
            h('h3', { className: 'rvs-timeline__title' }, it.title, st === 'done' ? vh(' (completed)') : st === 'current' ? vh(' (current)') : null),
            it.text ? h('p', { className: 'rvs-timeline__text' }, it.text) : null));
      }));
  }

  /* ---------- KeyFacts ---------- */
  function KeyFacts(props) {
    var items = props.items || [];
    return h('section', { className: cx('rvs-facts', 'rvs-facts--' + (props.variant || 'panel'), props.className), 'aria-labelledby': props.title ? 'rvs-facts-h' : undefined },
      props.title ? h('h2', { id: 'rvs-facts-h', className: 'rvs-facts__title' }, props.icon ? h(Icon, { name: props.icon, size: 24 }) : null, props.title) : null,
      h('dl', { className: 'rvs-facts__list' }, items.map(function (it, i) {
        return h('div', { key: i, className: 'rvs-facts__row' }, h('dt', { className: 'rvs-facts__term' }, it.term), h('dd', { className: 'rvs-facts__value' }, it.value));
      })));
  }

  /* ---------- Table ---------- */
  function Table(props) {
    var cols = props.columns || [], rows = props.rows || [];
    return h('div', { className: cx('rvs-table-wrap', props.className), role: 'region', 'aria-label': props.caption, tabIndex: 0 },
      h('table', { className: cx('rvs-table', props.variant === 'comparison' && 'rvs-table--comparison', props.striped && 'rvs-table--striped') },
        props.caption ? h('caption', { className: 'rvs-table__caption' }, props.caption) : null,
        h('thead', null, h('tr', null, cols.map(function (c) { return h('th', { key: c.key, scope: 'col', className: c.numeric ? 'is-num' : undefined }, c.label); }))),
        h('tbody', null, rows.map(function (r, i) {
          return h('tr', { key: i }, cols.map(function (c, j) {
            var v = r[c.key];
            if (v === true) v = h(Frag, null, h(Icon, { name: 'check', size: 20, className: 'rvs-tone-text-success' }), vh('Yes'));
            else if (v === false) v = h(Frag, null, h('span', { 'aria-hidden': 'true', className: 'rvs-muted' }, '—'), vh('No'));
            return j === 0 && props.firstColumnHeader !== false ? h('th', { key: c.key, scope: 'row' }, v) : h('td', { key: c.key, className: c.numeric ? 'is-num' : undefined }, v);
          }));
        }))));
  }

  /* ---------- ContentMeta ---------- */
  function ContentMeta(props) {
    var rows = [];
    if (props.published) rows.push(['Published', h('time', { dateTime: props.published }, fmtDate(props.published))]);
    if (props.updated) rows.push(['Last updated', h('time', { dateTime: props.updated }, fmtDate(props.updated))]);
    if (props.reviewed) rows.push(['Last reviewed', h('time', { dateTime: props.reviewed }, fmtDate(props.reviewed))]);
    if (props.nextReview) rows.push(['Next review', h('time', { dateTime: props.nextReview }, fmtDate(props.nextReview))]);
    if (props.owner) rows.push(['Owner', props.owner]);
    if (props.format) rows.push(['Format', props.format]);
    return h('div', { className: cx('rvs-meta', props.className) },
      props.updateNotice ? h('div', { className: 'rvs-meta__notice', role: 'note' }, h(Icon, { name: 'info', size: 20 }), h('p', null, h('strong', null, 'Updated ', fmtDate(props.updateNotice.date), ': '), props.updateNotice.text)) : null,
      h('dl', { className: 'rvs-meta__list' }, rows.map(function (r, i) { return h('div', { key: i, className: 'rvs-meta__row' }, h('dt', null, r[0]), h('dd', null, r[1])); })));
  }

  /* ---------- VideoEmbed ---------- */
  function VideoEmbed(props) {
    var s = useState(false), on = s[0], setOn = s[1];
    var src = props.src || ('https://www.youtube-nocookie.com/embed/' + props.videoId + '?autoplay=1&rel=0');
    return h('figure', { className: cx('rvs-video', props.className) },
      h('div', { className: 'rvs-video__frame' },
        on ? h('iframe', { src: src, title: props.title, allow: 'autoplay; encrypted-media; picture-in-picture', allowFullScreen: true, loading: 'lazy' }) :
          h('div', { className: 'rvs-video__consent' },
            props.thumbnail ? h('img', { className: 'rvs-video__thumb', src: props.thumbnail, alt: '' }) : h(BrandPattern, { rows: 3, cols: 6, unit: 60, seed: 9 }),
            h('div', { className: 'rvs-video__overlay' },
              h('button', { type: 'button', className: 'rvs-video__play', onClick: function () { setOn(true); } }, h(Icon, { name: 'play', size: 28 }), h('span', null, 'Play video', vh(': ' + props.title))),
              h('p', { className: 'rvs-video__note' }, props.consentText || 'Playing this video loads content from YouTube, which may set cookies.')))),
      h('figcaption', { className: 'rvs-video__caption' }, h('span', { className: 'rvs-video__title' }, props.title), props.duration ? h('span', { className: 'rvs-muted' }, ' (' + props.duration + ')') : null,
        props.transcriptHref ? h(Frag, null, ' · ', h('a', { className: 'rvs-link', href: props.transcriptHref }, 'Read the transcript')) : null));
  }

  /* ---------- MapEmbed ---------- */
  function MapEmbed(props) {
    var s = useState(false), on = s[0], setOn = s[1];
    var q = encodeURIComponent(props.query || [].concat(props.address || []).join(', '));
    var lat = props.lat, lng = props.lng, d = 0.006;
    var src = props.src || (lat !== undefined ? 'https://www.openstreetmap.org/export/embed.html?bbox=' + (lng - d) + '%2C' + (lat - d / 2) + '%2C' + (lng + d) + '%2C' + (lat + d / 2) + '&layer=mapnik&marker=' + lat + '%2C' + lng : 'https://maps.google.com/maps?q=' + q + '&output=embed');
    var dir = props.directionsHref || ('https://www.google.com/maps/dir/?api=1&destination=' + q);
    return h('figure', { className: cx('rvs-map', props.className) },
      h('div', { className: 'rvs-map__frame' },
        on && src ? h('iframe', { src: src, title: 'Map: ' + (props.title || 'our location'), loading: 'lazy' }) :
          h('div', { className: 'rvs-map__placeholder' },
            h('svg', { className: 'rvs-map__grid', viewBox: '0 0 400 225', preserveAspectRatio: 'xMidYMid slice', 'aria-hidden': 'true', focusable: 'false' },
              h('path', { className: 'rvs-map__road', d: 'M-10 170C80 150 140 90 230 100s130 40 190 10' }),
              h('path', { className: 'rvs-map__road rvs-map__road--minor', d: 'M120 -10C130 60 150 140 140 240' }),
              h('path', { className: 'rvs-map__road rvs-map__road--minor', d: 'M260 -10c-10 80 20 150 60 240' })),
            h('div', { className: 'rvs-map__overlay' },
              h(IconBadge, { icon: 'map-pin', tone: 'coral', size: 'lg' }),
              src ? h('button', { type: 'button', className: 'rvs-video__play', onClick: function () { setOn(true); } }, h(Icon, { name: 'map', size: 22 }), h('span', null, 'Show map', vh(': ' + (props.title || '')))) : null,
              h('p', { className: 'rvs-map__note' }, props.consentText || (lat !== undefined ? 'The map loads from OpenStreetMap.' : 'The map loads from Google Maps, which may set cookies.'))))),
      h('figcaption', { className: 'rvs-map__caption' },
        props.title ? h('span', { className: 'rvs-video__title' }, props.title) : null,
        props.address ? h('span', null, ' \u2014 ' + [].concat(props.address).join(', ')) : null,
        h('span', { className: 'rvs-map__dir' }, h(Link, { href: dir, external: true }, 'Get directions'))));
  }

  /* ---------- Accordion ---------- */
  function Accordion(props) {
    var items = props.items || [];
    var init = {}; items.forEach(function (it, i) { if (it.open) init[i] = true; });
    var s = useState(init), open = s[0], setOpen = s[1];
    var base = useUid('rvs-acc');
    var all = items.length > 0 && items.every(function (_, i) { return open[i]; });
    function setAll(v) { var n = {}; items.forEach(function (_, i) { n[i] = v; }); setOpen(n); }
    return h('div', { className: cx('rvs-accordion', props.className) },
      props.showAll !== false && items.length > 1 ? h('button', { type: 'button', className: 'rvs-accordion__all', 'aria-expanded': all ? 'true' : 'false', onClick: function () { setAll(!all); } }, h(Icon, { name: all ? 'chevron-up' : 'chevron-down', size: 18 }), all ? 'Hide all sections' : 'Show all sections') : null,
      items.map(function (it, i) {
        var isOpen = !!open[i], bid = base + '-b' + i;
        return h('div', { key: i, className: cx('rvs-accordion__section', isOpen && 'is-open') },
          H(props.headingLevel || 2, { className: 'rvs-accordion__heading' },
            h('button', { type: 'button', className: 'rvs-accordion__button', 'aria-expanded': isOpen ? 'true' : 'false', 'aria-controls': bid, onClick: function () { var n = Object.assign({}, open); n[i] = !isOpen; setOpen(n); } },
              h('span', { className: 'rvs-accordion__text' }, it.heading, it.summary ? h('span', { className: 'rvs-accordion__summary' }, it.summary) : null),
              h('span', { className: 'rvs-accordion__toggle' }, h(Icon, { name: isOpen ? 'chevron-up' : 'chevron-down', size: 18 }), h('span', null, isOpen ? 'Hide' : 'Show'), vh(' this section')))),
          h('div', { id: bid, className: 'rvs-accordion__content', hidden: !isOpen }, it.content));
      }));
  }

  /* ---------- Details ---------- */
  function Details(props) {
    return h('details', { className: cx('rvs-details', props.className), open: props.open },
      h('summary', { className: 'rvs-details__summary' }, h('span', { className: 'rvs-details__text' }, props.summary)),
      h('div', { className: 'rvs-details__content' }, props.children));
  }

  /* ---------- EditorialFeature ---------- */
  function EditorialFeature(props) {
    var v = props.variant || 'feature';
    return h('article', { className: cx('rvs-feature', 'rvs-feature--' + v, props.reverse && 'rvs-feature--reverse', props.className), 'data-audience': props.audience },
      h('div', { className: 'rvs-feature__media' }, props.image ? h('img', { src: props.image.src, alt: props.image.alt || '' }) : h(BrandPattern, { rows: 4, cols: 4, unit: 60, seed: props.patternSeed || 21 })),
      h('div', { className: 'rvs-feature__body' },
        props.eyebrow ? h('p', { className: 'rvs-eyebrow' }, props.eyebrow) : null,
        H(props.headingLevel || 2, { className: 'rvs-feature__title' }, props.title),
        props.text ? h('p', { className: 'rvs-feature__text' }, props.text) : null,
        props.facts ? h('dl', { className: 'rvs-feature__facts' }, props.facts.map(function (f, i) { return h('div', { key: i }, h('dt', null, f.term), h('dd', null, f.value)); })) : null,
        props.quote ? h('blockquote', { className: 'rvs-feature__quote' }, h('p', null, props.quote)) : null,
        props.href ? h(Link, { href: props.href, variant: 'arrow' }, props.linkLabel || (v === 'case-study' ? 'Read the case study' : 'Read more')) : null));
  }

  /* ---------- Prose ---------- */
  function Prose(props) { return h('div', { className: cx('rvs-prose', props.className), dangerouslySetInnerHTML: props.html ? { __html: props.html } : undefined }, props.html ? undefined : props.children); }

  /* ---------- CtaBanner ---------- */
  function CtaBanner(props) {
    var v = props.variant || 'brand';
    return h('section', { className: cx('rvs-cta', 'rvs-cta--' + v, props.className), 'aria-labelledby': props.id || 'rvs-cta-h' },
      props.icon ? h(Icon, { name: props.icon, size: 56, className: 'rvs-cta__icon' }) : null,
      h('div', { className: 'rvs-cta__body' },
        H(props.headingLevel || 2, { id: props.id || 'rvs-cta-h', className: 'rvs-cta__title' }, props.title),
        props.text ? h('p', { className: 'rvs-cta__text' }, props.text) : null,
        props.action ? h('div', { className: 'rvs-cta__action' }, h(Button, { href: props.action.href, variant: v === 'navy' ? 'inverse' : 'primary', icon: 'arrow-right' }, props.action.label)) : null),
      props.decoration !== false ? h('svg', { className: 'rvs-cta__deco', viewBox: '0 0 160 160', 'aria-hidden': 'true', focusable: 'false' },
        h('path', { className: 'rvs-fill-yellow', d: 'M160 160H40A120 120 0 0 1 160 40z' }),
        h('path', { className: 'rvs-fill-teal', d: 'M160 160H90A70 70 0 0 1 160 90z' }),
        h('path', { className: 'rvs-fill-coral', d: 'M160 20v14A126 126 0 0 0 34 160H20A140 140 0 0 1 160 20z' })) : null);
  }

  /* ---------- Steps (PEP process, learning journey, support pathway) ---------- */
  function Steps(props) {
    var steps = props.steps || [], v = props.variant || 'vertical';
    var cur = props.current;
    return h('div', { className: cx('rvs-steps', 'rvs-steps--' + v, props.className) },
      props.heading ? H(props.headingLevel || 2, { className: 'rvs-steps__heading' }, props.heading) : null,
      props.intro ? h('p', { className: 'rvs-steps__intro' }, props.intro) : null,
      h('ol', { className: 'rvs-steps__list' }, steps.map(function (s, i) {
        var n = i + 1, state = cur === undefined ? '' : n < cur ? 'is-done' : n === cur ? 'is-current' : 'is-upcoming';
        return h('li', { key: i, className: cx('rvs-steps__step', state), 'aria-current': n === cur ? 'step' : undefined },
          h('span', { className: 'rvs-steps__marker', 'aria-hidden': 'true' }, s.icon ? h(Icon, { name: s.icon, size: 22 }) : (state === 'is-done' ? h(Icon, { name: 'check', size: 18, strokeWidth: 3 }) : n)),
          h('div', { className: 'rvs-steps__body' },
            s.label ? h('p', { className: 'rvs-steps__label' }, s.label) : null,
            h('h3', { className: 'rvs-steps__title' }, vh('Step ' + n + ': '), s.title),
            s.text ? h('p', { className: 'rvs-steps__text' }, s.text) : null,
            s.items ? h('ul', { className: 'rvs-steps__items' }, s.items.map(function (t, j) { return h('li', { key: j }, t); })) : null,
            s.href ? h(Link, { href: s.href, variant: 'arrow' }, s.linkLabel || 'Find out more') : null));
      })));
  }

  /* ---------- Checklist ---------- */
  function Checklist(props) {
    var items = props.items || [];
    var init = {}; items.forEach(function (it) { if (it.done) init[it.id] = true; });
    var s = useState(init), done = s[0], setDone = s[1];
    var n = items.filter(function (it) { return done[it.id]; }).length;
    var base = useUid('rvs-chk');
    return h('section', { className: cx('rvs-checklist', props.className), 'aria-labelledby': base + '-h' },
      h('div', { className: 'rvs-checklist__head' },
        H(props.headingLevel || 2, { id: base + '-h', className: 'rvs-checklist__title' }, props.heading || 'Checklist'),
        props.interactive !== false ? h('p', { className: 'rvs-checklist__progress', 'aria-live': 'polite' }, n + ' of ' + items.length + ' done') : null),
      props.interactive !== false ? h('div', { className: 'rvs-progress-bar', 'aria-hidden': 'true' }, h('span', { style: { width: (items.length ? (100 * n / items.length) : 0) + '%' } })) : null,
      h('ul', { className: 'rvs-checklist__list' }, items.map(function (it) {
        var id = base + '-' + it.id;
        if (props.interactive === false) return h('li', { key: it.id, className: 'rvs-checklist__static' }, h(Icon, { name: 'check-circle', size: 24, className: 'rvs-tone-text-teal' }), h('span', null, h('span', { className: 'rvs-checklist__label' }, it.label), it.hint ? h('span', { className: 'rvs-hint' }, it.hint) : null));
        return h('li', { key: it.id, className: 'rvs-choice rvs-choice--checkbox' },
          h('input', { className: 'rvs-choice__input', type: 'checkbox', id: id, checked: !!done[it.id], onChange: function () { var x = Object.assign({}, done); x[it.id] = !done[it.id]; setDone(x); if (props.onChange) props.onChange(x); } }),
          h('label', { className: 'rvs-choice__label', htmlFor: id }, it.label),
          it.hint ? h('div', { className: 'rvs-hint rvs-choice__hint' }, it.hint) : null);
      })));
  }

  /* ---------- KeyDates ---------- */
  function KeyDates(props) {
    var dates = props.dates || [];
    var today = props.today ? new Date(props.today) : new Date();
    var nextIdx = -1; dates.forEach(function (d, i) { if (nextIdx < 0 && new Date(d.date) >= today) nextIdx = i; });
    return h('section', { className: cx('rvs-dates', props.className), 'aria-labelledby': 'rvs-dates-h' },
      h('h2', { id: 'rvs-dates-h', className: 'rvs-dates__title' }, props.heading || 'Key dates'),
      dates.length === 0 ? h('p', { className: 'rvs-muted' }, 'No upcoming dates.') :
      h('ol', { className: 'rvs-dates__list' }, dates.map(function (d, i) {
        var dt = new Date(d.date), past = dt < today;
        return h('li', { key: i, className: cx('rvs-dates__item', past && 'is-past', props.highlightNext !== false && i === nextIdx && 'is-next') },
          h('time', { className: 'rvs-dates__tile', dateTime: d.date }, h('span', { className: 'rvs-dates__day' }, dt.getDate()), h('span', { className: 'rvs-dates__month' }, MONTHS[dt.getMonth()].slice(0, 3)), vh(' ' + dt.getFullYear())),
          h('div', { className: 'rvs-dates__body' },
            i === nextIdx && props.highlightNext !== false ? h(Tag, { tone: 'yellow' }, 'Next') : null,
            h('p', { className: 'rvs-dates__label' }, d.href ? h('a', { className: 'rvs-link', href: d.href }, d.label) : d.label),
            d.detail ? h('p', { className: 'rvs-dates__detail' }, d.detail) : null));
      })));
  }

  /* ---------- EventCard ---------- */
  function EventCard(props) {
    var dt = new Date(props.date);
    var st = props.status || 'open';
    var tag = { open: h(Tag, { tone: 'teal' }, 'Booking open'), few: h(Tag, { tone: 'yellow' }, 'Few places left'), full: h(Tag, { tone: 'coral' }, 'Fully booked'), closed: h(Tag, { tone: 'neutral' }, 'Booking closed'), recording: h(Tag, { tone: 'purple' }, 'Recording available') }[st];
    return h('article', { className: cx('rvs-event', 'rvs-card', 'rvs-card--outlined', props.href && 'rvs-card--clickable', props.className) },
      h('time', { className: 'rvs-dates__tile rvs-event__tile', dateTime: props.date }, h('span', { className: 'rvs-dates__day' }, dt.getDate()), h('span', { className: 'rvs-dates__month' }, MONTHS[dt.getMonth()].slice(0, 3)), vh(' ' + dt.getFullYear())),
      h('div', { className: 'rvs-event__body' },
        h('div', { className: 'rvs-event__tags' }, tag, props.format ? h(Tag, { tone: 'neutral' }, props.format === 'online' ? 'Online' : 'In person') : null),
        H(props.headingLevel || 3, { className: 'rvs-card__title' }, props.href ? h('a', { className: 'rvs-card__link', href: props.href }, props.title) : props.title),
        props.text ? h('p', { className: 'rvs-card__text' }, props.text) : null,
        h('ul', { className: 'rvs-event__meta' },
          props.time ? h('li', null, h(Icon, { name: 'clock', size: 18 }), props.time) : null,
          props.location ? h('li', null, h(Icon, { name: 'map-pin', size: 18 }), props.location) : null,
          props.audience ? h('li', null, h(Icon, { name: 'users', size: 18 }), props.audience) : null)));
  }

  /* ---------- DocumentLink ---------- */
  function DocumentLink(props) {
    var ft = (props.fileType || 'PDF').toUpperCase();
    var meta = [ft, props.fileSize, props.pages ? props.pages + ' pages' : null].filter(Boolean).join(', ');
    return h('div', { className: cx('rvs-doc', 'rvs-doc--' + (props.variant || 'card'), props.className) },
      h('span', { className: 'rvs-doc__thumb', 'aria-hidden': 'true' }, h(Icon, { name: 'document', size: 28 }), h('span', { className: 'rvs-doc__type' }, ft)),
      h('div', { className: 'rvs-doc__body' },
        h('h3', { className: 'rvs-doc__title' }, h('a', { className: 'rvs-link', href: props.href, download: props.download ? '' : undefined }, props.title, vh(' (' + meta + ')'))),
        h('p', { className: 'rvs-doc__meta', 'aria-hidden': 'true' }, meta),
        props.description ? h('p', { className: 'rvs-doc__desc' }, props.description) : null,
        props.updated ? h('p', { className: 'rvs-doc__meta' }, 'Updated ', h('time', { dateTime: props.updated }, fmtDate(props.updated))) : null,
        props.accessibleHref ? h('p', { className: 'rvs-doc__alt' }, 'This file may not be suitable for users of assistive technology. ', h('a', { className: 'rvs-link', href: props.accessibleHref }, 'Request an accessible format')) : null));
  }

  /* ---------- Tabs ---------- */
  function Tabs(props) {
    var tabs = props.tabs || [];
    var s = useState(props.defaultTab || (tabs[0] && tabs[0].id)), sel = s[0], setSel = s[1];
    var refs = useRef({});
    var base = useUid('rvs-tabs');
    function onKey(e, i) {
      var n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length; else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); setSel(tabs[n].id); var el = refs.current[tabs[n].id]; if (el) el.focus(); }
    }
    return h('div', { className: cx('rvs-tabs', props.className) },
      props.title ? h('h2', { className: 'rvs-tabs__title' }, props.title) : null,
      h('div', { className: 'rvs-tabs__list', role: 'tablist', 'aria-label': props.label || props.title }, tabs.map(function (t, i) {
        var on = t.id === sel;
        return h('button', { key: t.id, ref: function (el) { refs.current[t.id] = el; }, type: 'button', role: 'tab', id: base + '-t-' + t.id, 'aria-selected': on ? 'true' : 'false', 'aria-controls': base + '-p-' + t.id, tabIndex: on ? 0 : -1, className: cx('rvs-tabs__tab', on && 'is-selected'), onClick: function () { setSel(t.id); }, onKeyDown: function (e) { onKey(e, i); } }, t.label);
      })),
      tabs.map(function (t) {
        return h('div', { key: t.id, role: 'tabpanel', id: base + '-p-' + t.id, 'aria-labelledby': base + '-t-' + t.id, hidden: t.id !== sel, tabIndex: 0, className: 'rvs-tabs__panel' }, t.content);
      }));
  }

  /* ---------- Form field wrapper ---------- */
  function Field(p, id, control) {
    var hintId = p.hint ? id + '-hint' : null, errId = p.error ? id + '-error' : null;
    return h('div', { className: cx('rvs-field', p.error && 'rvs-field--error', p.className) },
      h('label', { className: cx('rvs-label', p.labelSize && 'rvs-label--' + p.labelSize), htmlFor: id }, p.label, p.optional ? h('span', { className: 'rvs-muted' }, ' (optional)') : null),
      p.hint ? h('div', { id: hintId, className: 'rvs-hint' }, p.hint) : null,
      p.error ? h('p', { id: errId, className: 'rvs-error-message' }, vh('Error: '), p.error) : null,
      control([hintId, errId].filter(Boolean).join(' ') || undefined));
  }

  /* ---------- TextInput ---------- */
  function TextInput(props) {
    var gen = useUid('rvs-input'), id = props.id || gen;
    return Field(props, id, function (desc) {
      var common = { id: id, name: props.name || id, className: cx('rvs-input', props.multiline && 'rvs-textarea', props.error && 'rvs-input--error', props.width && 'rvs-input--w' + props.width), 'aria-describedby': desc, 'aria-invalid': props.error ? 'true' : undefined, disabled: props.disabled, required: props.required, defaultValue: props.defaultValue, value: props.value, onChange: props.onChange, placeholder: props.placeholder, autoComplete: props.autoComplete, spellCheck: props.spellCheck };
      if (props.multiline) return h('textarea', Object.assign(common, { rows: props.rows || 5 }));
      var input = h('input', Object.assign(common, { type: props.type || 'text', inputMode: props.inputMode }));
      if (props.prefix || props.suffix) return h('div', { className: 'rvs-input-wrap' }, props.prefix ? h('span', { className: 'rvs-input-affix', 'aria-hidden': 'true' }, props.prefix) : null, input, props.suffix ? h('span', { className: 'rvs-input-affix', 'aria-hidden': 'true' }, props.suffix) : null);
      return input;
    });
  }

  /* ---------- PasswordInput ---------- */
  function PasswordInput(props) {
    var gen = useUid('rvs-pw'), id = props.id || gen;
    var s = useState(false), show = s[0], setShow = s[1];
    var s2 = useState(''), msg = s2[0], setMsg = s2[1];
    return Field(props, id, function (desc) {
      return h('div', { className: 'rvs-password' },
        h('input', { id: id, name: props.name || id, type: show ? 'text' : 'password', className: cx('rvs-input', 'rvs-password__input', props.error && 'rvs-input--error'), autoComplete: props.autoComplete || 'current-password', spellCheck: false, autoCapitalize: 'none', 'aria-describedby': desc, 'aria-invalid': props.error ? 'true' : undefined, value: props.value, defaultValue: props.defaultValue, onChange: props.onChange, disabled: props.disabled }),
        h('button', { type: 'button', className: 'rvs-btn rvs-btn--secondary rvs-password__toggle', 'aria-controls': id, onClick: function () { var n = !show; setShow(n); setMsg(n ? 'Your password is visible' : 'Your password is hidden'); } },
          h(Icon, { name: show ? 'eye-off' : 'eye', size: 20 }), h('span', null, show ? 'Hide' : 'Show'), vh(' password')),
        h('span', { className: 'rvs-visually-hidden', 'aria-live': 'polite' }, msg));
    });
  }

  /* ---------- Select ---------- */
  function Select(props) {
    var gen = useUid('rvs-select'), id = props.id || gen;
    return Field(props, id, function (desc) {
      return h('select', { id: id, name: props.name || id, className: cx('rvs-select', props.error && 'rvs-input--error'), 'aria-describedby': desc, 'aria-invalid': props.error ? 'true' : undefined, disabled: props.disabled, defaultValue: props.defaultValue, value: props.value, onChange: props.onChange },
        (props.options || []).map(function (o) { return h('option', { key: o.value, value: o.value, disabled: o.disabled }, o.label); }));
    });
  }

  /* ---------- ChoiceGroup (radios / checkboxes) ---------- */
  function ChoiceGroup(props) {
    var gen = useUid('rvs-choice'), type = props.type || 'radio', name = props.name || gen;
    var multi = type === 'checkbox';
    var controlled = props.value !== undefined;
    var s = useState(props.defaultValue !== undefined ? props.defaultValue : (multi ? [] : '')), inner = s[0], setInner = s[1];
    var val = controlled ? props.value : inner;
    var hintId = props.hint ? name + '-hint' : null, errId = props.error ? name + '-error' : null;
    function change(v) {
      var next = v;
      if (multi) { next = (val || []).slice(); var i = next.indexOf(v); if (i >= 0) next.splice(i, 1); else next.push(v); }
      if (!controlled) setInner(next); if (props.onChange) props.onChange(next);
    }
    return h('div', { className: cx('rvs-field', props.error && 'rvs-field--error', props.className) },
      h('fieldset', { className: 'rvs-fieldset', 'aria-describedby': [hintId, errId].filter(Boolean).join(' ') || undefined },
        h('legend', { className: cx('rvs-legend', props.legendSize && 'rvs-legend--' + props.legendSize) }, props.legendSize === 'l' ? h('h1', { className: 'rvs-legend__heading' }, props.legend) : props.legend),
        props.hint ? h('div', { id: hintId, className: 'rvs-hint' }, props.hint) : null,
        props.error ? h('p', { id: errId, className: 'rvs-error-message' }, vh('Error: '), props.error) : null,
        h('div', { className: cx('rvs-choices', props.inline && 'rvs-choices--inline') }, (props.options || []).map(function (o, i) {
          if (o.divider) return h('div', { key: 'd' + i, className: 'rvs-choices__divider' }, o.divider);
          var id = name + '-' + i, on = multi ? (val || []).indexOf(o.value) >= 0 : val === o.value;
          return h('div', { key: o.value, className: cx('rvs-choice', 'rvs-choice--' + type, props.size === 'small' && 'rvs-choice--small') },
            h('input', { className: 'rvs-choice__input', type: type, id: id, name: name, value: o.value, checked: on, disabled: o.disabled, onChange: function () { change(o.value); }, 'aria-describedby': o.hint ? id + '-hint' : undefined }),
            h('label', { className: 'rvs-choice__label', htmlFor: id }, o.label),
            o.hint ? h('div', { id: id + '-hint', className: 'rvs-hint rvs-choice__hint' }, o.hint) : null);
        }))));
  }

  /* ---------- SelectableCard ---------- */
  function SelectableCard(props) {
    var gen = useUid('rvs-sc'), type = props.type || 'radio', name = props.name || gen, multi = type === 'checkbox';
    var s = useState(props.defaultValue !== undefined ? props.defaultValue : (multi ? [] : '')), inner = s[0], setInner = s[1];
    var val = props.value !== undefined ? props.value : inner;
    function change(v) { var next = v; if (multi) { next = (val || []).slice(); var i = next.indexOf(v); if (i >= 0) next.splice(i, 1); else next.push(v); } if (props.value === undefined) setInner(next); if (props.onChange) props.onChange(next); }
    return h('fieldset', { className: cx('rvs-fieldset rvs-scards', props.error && 'rvs-field--error', props.className) },
      h('legend', { className: 'rvs-legend' }, props.legend),
      props.hint ? h('div', { className: 'rvs-hint' }, props.hint) : null,
      props.error ? h('p', { className: 'rvs-error-message' }, vh('Error: '), props.error) : null,
      h('div', { className: 'rvs-scards__grid', style: { '--rvs-grid-min': props.min || '200px' } }, (props.options || []).map(function (o, i) {
        var id = name + '-' + i, on = multi ? (val || []).indexOf(o.value) >= 0 : val === o.value;
        return h('div', { key: o.value, className: cx('rvs-scard', on && 'is-selected', o.disabled && 'is-disabled'), 'data-audience': o.audience },
          h('input', { className: 'rvs-scard__input', type: type, id: id, name: name, value: o.value, checked: on, disabled: o.disabled, onChange: function () { change(o.value); } }),
          h('label', { className: 'rvs-scard__label', htmlFor: id },
            o.icon ? h(IconBadge, { icon: o.icon, tone: o.tone || 'teal', size: 'sm' }) : null,
            h('span', { className: 'rvs-scard__title' }, o.title),
            o.description ? h('span', { className: 'rvs-scard__desc' }, o.description) : null,
            h('span', { className: 'rvs-scard__check', 'aria-hidden': 'true' }, h(Icon, { name: 'check', size: 16, strokeWidth: 3 }))));
      })));
  }

  /* ---------- ErrorSummary ---------- */
  function ErrorSummary(props) {
    var ref = useRef(null);
    useEffect(function () { if (ref.current && props.autoFocus !== false) ref.current.focus(); }, []);
    var errs = props.errors || [];
    if (!errs.length) return null;
    return h('div', { ref: ref, className: 'rvs-error-summary', tabIndex: -1, role: 'alert', 'aria-labelledby': 'rvs-es-h' },
      h('h2', { id: 'rvs-es-h', className: 'rvs-error-summary__title' }, props.title || 'There is a problem'),
      h('ul', { className: 'rvs-error-summary__list' }, errs.map(function (e, i) { return h('li', { key: i }, h('a', { href: e.href }, e.text)); })));
  }

  /* ---------- ProgressIndicator ---------- */
  function ProgressIndicator(props) {
    var steps = props.steps || [], cur = props.current || 1, total = props.total || steps.length;
    if (props.variant === 'bar' || !steps.length) {
      return h('div', { className: 'rvs-progress' }, h('p', { className: 'rvs-progress__label' }, 'Step ' + cur + ' of ' + total, props.stepLabel ? h('span', { className: 'rvs-muted' }, ' — ' + props.stepLabel) : null),
        h('div', { className: 'rvs-progress-bar', role: 'progressbar', 'aria-valuemin': 1, 'aria-valuemax': total, 'aria-valuenow': cur, 'aria-label': 'Progress' }, h('span', { style: { width: (100 * cur / total) + '%' } })));
    }
    return h('nav', { className: 'rvs-progress rvs-progress--steps', 'aria-label': 'Progress' },
      h('p', { className: 'rvs-progress__label' }, 'Step ' + cur + ' of ' + total),
      h('ol', { className: 'rvs-progress__list' }, steps.map(function (s, i) {
        var n = i + 1, st = n < cur ? 'is-done' : n === cur ? 'is-current' : '';
        return h('li', { key: i, className: cx('rvs-progress__step', st), 'aria-current': n === cur ? 'step' : undefined },
          h('span', { className: 'rvs-progress__num', 'aria-hidden': 'true' }, n < cur ? h(Icon, { name: 'check', size: 14, strokeWidth: 3 }) : n),
          h('span', { className: 'rvs-progress__text' }, s, n < cur ? vh(' (completed)') : null));
      })));
  }

  /* ---------- Dialog ---------- */
  function Dialog(props) {
    var ref = useRef(null), prev = useRef(null);
    var tid = useUid('rvs-dlg');
    useEffect(function () {
      if (!props.open) return;
      prev.current = document.activeElement;
      var el = ref.current; if (el) { var f = el.querySelector('[data-autofocus]') || el; f.focus(); }
      function key(e) {
        if (e.key === 'Escape' && props.onClose) { e.preventDefault(); props.onClose(); }
        if (e.key === 'Tab' && el) {
          var fs = el.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])');
          if (!fs.length) return; var first = fs[0], last = fs[fs.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
      document.addEventListener('keydown', key);
      return function () { document.removeEventListener('keydown', key); if (prev.current && prev.current.focus) prev.current.focus(); };
    }, [props.open]);
    if (!props.open) return null;
    return h('div', { className: cx('rvs-dialog-backdrop', props.inline && 'rvs-dialog-backdrop--inline'), onMouseDown: function (e) { if (e.target === e.currentTarget && props.onClose && props.dismissible !== false) props.onClose(); } },
      h('div', { ref: ref, className: cx('rvs-dialog', 'rvs-dialog--' + (props.size || 'md')), role: props.alert ? 'alertdialog' : 'dialog', 'aria-modal': 'true', 'aria-labelledby': tid, tabIndex: -1 },
        h('div', { className: 'rvs-dialog__head' }, h('h2', { id: tid, className: 'rvs-dialog__title' }, props.title),
          props.onClose ? h('button', { type: 'button', className: 'rvs-dialog__close', onClick: props.onClose }, h(Icon, { name: 'close', size: 22 }), vh('Close')) : null),
        h('div', { className: 'rvs-dialog__body' }, props.children),
        props.actions ? h('div', { className: 'rvs-dialog__actions' }, props.actions) : null));
  }

  /* ---------- PageActions (copy / share / print) ---------- */
  function PageActions(props) {
    var acts = props.actions || ['copy', 'share', 'print'];
    var s = useState(''), msg = s[0], setMsg = s[1];
    function url() { return props.url || (typeof location !== 'undefined' ? location.href : ''); }
    function copy(text, done) {
      var ok = function () { setMsg(done || 'Link copied'); setTimeout(function () { setMsg(''); }, 3000); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, function () { setMsg('Could not copy. Select the address bar and copy it instead.'); });
      else setMsg('Could not copy. Select the address bar and copy it instead.');
    }
    var map = {
      copy: h(Button, { key: 'copy', variant: 'tertiary', size: 'sm', icon: 'copy', iconPosition: 'start', onClick: function () { copy(props.copyText || url(), props.copyText ? 'Copied' : 'Link copied'); } }, props.copyLabel || 'Copy link'),
      share: h(Button, { key: 'share', variant: 'tertiary', size: 'sm', icon: 'share', iconPosition: 'start', onClick: function () { if (navigator.share) navigator.share({ title: props.title || document.title, url: url() }).catch(function () {}); else copy(url()); } }, 'Share'),
      print: h(Button, { key: 'print', variant: 'tertiary', size: 'sm', icon: 'print', iconPosition: 'start', onClick: function () { window.print(); } }, 'Print this page')
    };
    return h('div', { className: cx('rvs-page-actions', props.className) }, acts.map(function (a) { return map[a]; }),
      h('span', { className: 'rvs-page-actions__msg', role: 'status', 'aria-live': 'polite' }, msg ? h(Frag, null, h(Icon, { name: 'check', size: 18 }), msg) : null));
  }

  /* ---------- NotificationBanner ---------- */
  var NB = { info: ['info', 'Important'], success: ['check-circle', 'Success'], important: ['alert', 'Important'], emergency: ['warning', 'Emergency'], maintenance: ['clock', 'Planned maintenance'], status: ['info', 'Service status'] };
  function NotificationBanner(props) {
    var tone = props.tone || 'info';
    var s = useState(false), gone = s[0], setGone = s[1];
    if (gone) return null;
    var live = tone === 'success' || tone === 'emergency';
    return h('div', { className: cx('rvs-banner', 'rvs-banner--' + tone, props.className), role: live ? 'alert' : 'region', 'aria-labelledby': 'rvs-nb-' + tone },
      h('div', { className: 'rvs-banner__head' }, h(Icon, { name: NB[tone][0], size: 20 }), h('h2', { id: 'rvs-nb-' + tone, className: 'rvs-banner__label' }, props.label || NB[tone][1]),
        props.dismissible ? h('button', { type: 'button', className: 'rvs-banner__dismiss', onClick: function () { setGone(true); if (props.onDismiss) props.onDismiss(); } }, h(Icon, { name: 'close', size: 18 }), vh('Dismiss')) : null),
      h('div', { className: 'rvs-banner__body' },
        props.title ? h('p', { className: 'rvs-banner__title' }, props.title) : null,
        props.children ? h('div', { className: 'rvs-banner__text' }, props.children) : null));
  }

  /* ---------- ConfirmationPanel ---------- */
  function ConfirmationPanel(props) {
    return h('div', { className: cx('rvs-confirm', props.className) },
      h(Icon, { name: 'check-circle', size: 48, className: 'rvs-confirm__icon' }),
      h('h1', { className: 'rvs-confirm__title' }, props.title || 'Form submitted'),
      props.reference ? h('div', { className: 'rvs-confirm__body' }, props.referenceLabel || 'Your reference number', h('br'), h('strong', null, props.reference)) : null,
      props.children ? h('div', { className: 'rvs-confirm__body' }, props.children) : null);
  }

  /* ---------- CookieBanner ---------- */
  function CookieBanner(props) {
    var s = useState(props.state || 'ask'), st = s[0], setSt = s[1];
    if (st === 'hidden') return null;
    var svc = props.serviceName || 'Rotherham Virtual School';
    function pick(v) { setSt(v); if (v === 'accepted' && props.onAccept) props.onAccept(); if (v === 'rejected' && props.onReject) props.onReject(); }
    return h('div', { className: cx('rvs-cookie', props.sticky && 'rvs-cookie--sticky', props.className), role: 'region', 'aria-label': 'Cookies on ' + svc },
      h('div', { className: 'rvs-cookie__inner' },
        st === 'ask' ? h(Frag, null,
          h('h2', { className: 'rvs-cookie__title' }, 'Cookies on ' + svc),
          h('p', null, 'We use some essential cookies to make this website work.'),
          h('p', null, 'We’d like to set additional cookies to understand how you use the site, so we can improve it.'),
          h(ButtonGroup, null, h(Button, { onClick: function () { pick('accepted'); } }, 'Accept analytics cookies'), h(Button, { onClick: function () { pick('rejected'); } }, 'Reject analytics cookies'), h(Link, { href: props.settingsHref || '/cookies' }, 'View cookies'))) :
          h(Frag, null,
            h('p', { role: 'status' }, 'You’ve ', st === 'accepted' ? 'accepted' : 'rejected', ' analytics cookies. You can ', h(Link, { href: props.settingsHref || '/cookies' }, 'change your cookie settings'), ' at any time.'),
            h(ButtonGroup, null, h(Button, { variant: 'secondary', onClick: function () { setSt('hidden'); } }, 'Hide cookie message')))));
  }


  /* ---------- Term (inline glossary definition) ---------- */
  function Term(props) {
    var s = useState(false), open = s[0], setOpen = s[1];
    var id = useUid('rvs-term');
    return h('span', { className: 'rvs-term' },
      h('button', { type: 'button', className: 'rvs-term__btn', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': id, onClick: function () { setOpen(!open); } },
        props.children, vh(open ? ' (hide meaning)' : ' (what does this mean?)')),
      h('span', { id: id, className: 'rvs-term__def', role: 'note', hidden: !open },
        props.expansion ? h('strong', null, props.expansion + '. ') : null, props.definition));
  }

  /* ---------- Glossary ---------- */
  function Glossary(props) {
    var terms = (props.terms || []).slice().sort(function (a, b) { return a.term.localeCompare(b.term); });
    var s = useState(''), q = s[0], setQ = s[1];
    var id = useUid('rvs-gloss');
    var shown = terms.filter(function (t) { var x = q.trim().toLowerCase(); return !x || (t.term + ' ' + (t.expansion || '') + ' ' + t.definition).toLowerCase().indexOf(x) >= 0; });
    return h('section', { className: cx('rvs-glossary', props.className), 'aria-labelledby': id + '-h' },
      props.heading ? H(props.headingLevel || 2, { id: id + '-h', className: 'rvs-section-title' }, props.heading) : null,
      props.searchable !== false ? h('div', { className: 'rvs-glossary__search' },
        h('label', { className: 'rvs-label rvs-label--s', htmlFor: id + '-q' }, props.searchLabel || 'Find a word'),
        h('input', { id: id + '-q', className: 'rvs-input', type: 'search', value: q, onChange: function (e) { setQ(e.target.value); }, autoComplete: 'off' }),
        h('p', { className: 'rvs-glossary__count', 'aria-live': 'polite' }, shown.length + ' of ' + terms.length + ' words')) : null,
      shown.length ? h('dl', { className: 'rvs-glossary__list' }, shown.map(function (t) {
        return h('div', { key: t.term, className: 'rvs-glossary__row' },
          h('dt', { className: 'rvs-glossary__term' }, t.term, t.expansion ? h('span', { className: 'rvs-glossary__exp' }, t.expansion) : null),
          h('dd', { className: 'rvs-glossary__def' }, t.definition, t.href ? h(Frag, null, ' ', h(Link, { href: t.href, variant: 'arrow' }, t.linkLabel || 'Find out more')) : null));
      })) : h(StateMessage, { state: 'empty', compact: true, title: 'No words match ‘' + q + '’' }, h('p', null, 'Try a shorter word, or ', h('a', { className: 'rvs-link', href: props.askHref || '/contact/' }, 'ask us what it means'), '.')));
  }

  /* ---------- Explainer ("What is a PEP?") ---------- */
  function Explainer(props) {
    var points = props.points || [];
    return h('section', { className: cx('rvs-explainer', props.className), 'data-audience': props.audience, 'aria-labelledby': props.id || 'rvs-expl-h' },
      h('div', { className: 'rvs-explainer__head' },
        props.icon ? h(IconBadge, { icon: props.icon, tone: props.tone || 'teal', size: 'lg' }) : null,
        h('div', null,
          H(props.headingLevel || 2, { id: props.id || 'rvs-expl-h', className: 'rvs-explainer__q' }, props.question),
          h('p', { className: 'rvs-explainer__a' }, props.answer))),
      points.length ? h('ol', { className: 'rvs-explainer__points' }, points.map(function (p, i) {
        return h('li', { key: i, className: 'rvs-explainer__point' },
          h('span', { className: 'rvs-explainer__icon', 'aria-hidden': 'true' }, h(Icon, { name: p.icon || 'check', size: 28 })),
          h('span', { className: 'rvs-explainer__text' }, p.text));
      })) : null,
      props.video ? h('div', { className: 'rvs-explainer__video' }, h(VideoEmbed, props.video)) : null,
      props.href ? h('p', { className: 'rvs-explainer__more' }, h(Link, { href: props.href, variant: 'arrow' }, props.linkLabel || 'Find out more')) : null);
  }

  /* ---------- TeamProfile ---------- */
  function TeamProfile(props) {
    var initials = (props.name || props.role || '').split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
    return h('article', { className: cx('rvs-profile', props.variant === 'compact' && 'rvs-profile--compact', props.className), 'data-audience': props.audience },
      h('div', { className: 'rvs-profile__photo' }, props.photo ? h('img', { src: props.photo, alt: '', width: 120, height: 120 }) : h('span', { className: 'rvs-profile__initials', 'aria-hidden': 'true' }, initials)),
      h('div', { className: 'rvs-profile__body' },
        H(props.headingLevel || 2, { className: 'rvs-profile__role' }, props.role),
        props.name ? h('p', { className: 'rvs-profile__name' }, props.name, props.pronouns ? h('span', { className: 'rvs-muted' }, ' (' + props.pronouns + ')') : null) : null,
        props.remit ? h('p', { className: 'rvs-profile__remit' }, props.remit) : null,
        props.covers && props.covers.length ? h('ul', { className: 'rvs-profile__tags', 'aria-label': 'Covers' }, props.covers.map(function (c) { return h('li', { key: c }, h(Tag, { tone: 'neutral' }, c)); })) : null,
        props.bio ? h(Details, { summary: 'About ' + (props.name ? props.name.split(' ')[0] : 'this role') }, props.bio) : null,
        h('p', { className: 'rvs-profile__contact' }, h(Icon, { name: 'mail', size: 18 }), h('a', { className: 'rvs-link', href: 'mailto:' + (props.email || 'virtualschool@rotherham.gov.uk') }, props.email || 'virtualschool@rotherham.gov.uk'))));
  }

  /* ---------- PageFeedback ("Is this page useful?") ---------- */
  function PageFeedback(props) {
    var s = useState(props.state || 'ask'), st = s[0], setSt = s[1];
    var id = useUid('rvs-fb');
    return h('section', { className: cx('rvs-feedback', props.className), 'aria-label': 'Page feedback' },
      st === 'ask' ? h('div', { className: 'rvs-feedback__row' },
        h('h2', { className: 'rvs-feedback__q' }, 'Is this page useful?'),
        h(ButtonGroup, null,
          h(Button, { variant: 'secondary', size: 'sm', onClick: function () { setSt('thanks'); if (props.onAnswer) props.onAnswer('yes'); } }, 'Yes', vh(', this page is useful')),
          h(Button, { variant: 'secondary', size: 'sm', onClick: function () { setSt('form'); if (props.onAnswer) props.onAnswer('no'); } }, 'No', vh(', this page is not useful'))),
        h('button', { type: 'button', className: 'rvs-linkbtn rvs-feedback__report', onClick: function () { setSt('form'); } }, 'Report a problem with this page')) : null,
      st === 'thanks' ? h('p', { className: 'rvs-feedback__thanks', role: 'status' }, h(Icon, { name: 'check-circle', size: 22 }), 'Thank you for your feedback') : null,
      st === 'form' ? h('form', { className: 'rvs-feedback__form', onSubmit: function (e) { e.preventDefault(); setSt('thanks'); if (props.onSubmit) props.onSubmit(); } },
        h('h2', { className: 'rvs-feedback__q' }, 'Help us improve this page'),
        h('p', { className: 'rvs-hint' }, 'Do not include personal or financial information, for example a National Insurance number or credit card details.'),
        h(TextInput, { id: id + '-doing', label: 'What were you doing?' }),
        h(TextInput, { id: id + '-wrong', label: 'What went wrong?', multiline: true, rows: 3 }),
        h(ButtonGroup, null, h(Button, { type: 'submit' }, 'Send'), h('button', { type: 'button', className: 'rvs-linkbtn', onClick: function () { setSt('ask'); } }, 'Cancel'))) : null);
  }

  /* ---------- PupilCard (Pupil Zone navigation tile) ---------- */
  function PupilCard(props) {
    return h('a', { className: cx('rvs-pupil-card', 'rvs-pupil-card--' + (props.tone || 'teal'), props.className), href: props.href },
      h('span', { className: 'rvs-pupil-card__icon', 'aria-hidden': 'true' }, h(Icon, { name: props.icon || 'star', size: 36 })),
      h('span', { className: 'rvs-pupil-card__title' }, props.title),
      props.text ? h('span', { className: 'rvs-pupil-card__text' }, props.text) : null,
      h(Icon, { name: 'arrow-right', size: 24, className: 'rvs-pupil-card__arrow' }));
  }

  /* ---------- export ---------- */
  var RVS = {
    Logo: Logo, Icon: Icon, IconBadge: IconBadge, BrandPattern: BrandPattern, SectionDivider: SectionDivider, Illustration: Illustration, CtaBanner: CtaBanner,
    SkipLink: SkipLink, Header: Header, Footer: Footer, Breadcrumbs: Breadcrumbs, AudienceSelector: AudienceSelector, QuickLinks: QuickLinks, OnThisPage: OnThisPage, Pagination: Pagination, BackToTop: BackToTop, AzIndex: AzIndex, SectionNav: SectionNav,
    SearchInput: SearchInput, SearchResults: SearchResults, FilterPanel: FilterPanel,
    Button: Button, ButtonGroup: ButtonGroup, Link: Link, PageActions: PageActions, Tag: Tag,
    Hero: Hero, Grid: Grid, Card: Card, Signpost: Signpost, Panel: Panel, ContactPanel: ContactPanel, Quote: Quote, StatsPanel: StatsPanel, Timeline: Timeline, KeyFacts: KeyFacts, Table: Table, ContentMeta: ContentMeta, VideoEmbed: VideoEmbed, MapEmbed: MapEmbed, Accordion: Accordion, Details: Details, EditorialFeature: EditorialFeature, Prose: Prose,
    Steps: Steps, Checklist: Checklist, KeyDates: KeyDates, EventCard: EventCard, DocumentLink: DocumentLink,
    Tabs: Tabs, TextInput: TextInput, PasswordInput: PasswordInput, Select: Select, ChoiceGroup: ChoiceGroup, SelectableCard: SelectableCard, ErrorSummary: ErrorSummary, ProgressIndicator: ProgressIndicator, Dialog: Dialog,
    Term: Term, Glossary: Glossary, Explainer: Explainer, TeamProfile: TeamProfile, PageFeedback: PageFeedback, PupilCard: PupilCard,
    NotificationBanner: NotificationBanner, ConfirmationPanel: ConfirmationPanel, StateMessage: StateMessage, CookieBanner: CookieBanner,
    ICON_NAMES: ICON_NAMES, ASSETS: ASSETS, formatDate: fmtDate
  };
  window.RVS = Object.assign(window.RVS || {}, RVS);
})();
