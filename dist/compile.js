(()=>{var Qt=Object.create;var St=Object.defineProperty;var Zt=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var Vt=Object.getPrototypeOf,Yt=Object.prototype.hasOwnProperty;var z=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var zt=(t,n,e,A)=>{if(n&&typeof n=="object"||typeof n=="function")for(let c of jt(n))!Yt.call(t,c)&&c!==e&&St(t,c,{get:()=>n[c],enumerable:!(A=Zt(n,c))||A.enumerable});return t};var Jt=(t,n,e)=>(e=t!=null?Qt(Vt(t)):{},zt(n||!t||!t.__esModule?St(e,"default",{value:t,enumerable:!0}):e,t));var ot=z((Ie,yt)=>{yt.exports={sep:"/"}});var tt=z((Be,Tt)=>{"use strict";var te=ot(),W="\\\\/",$t=`[^${W}]`,Q="\\.",ee="\\+",se="\\?",at="\\/",re="(?=.)",dt="[^/]",ft=`(?:${at}|$)`,Ht=`(?:^|${at})`,At=`${Q}{1,2}${ft}`,ue=`(?!${Q})`,ne=`(?!${Ht}${At})`,oe=`(?!${Q}{0,1}${ft})`,ae=`(?!${At})`,ce=`[^.${at}]`,ie=`${dt}*?`,Lt={DOT_LITERAL:Q,PLUS_LITERAL:ee,QMARK_LITERAL:se,SLASH_LITERAL:at,ONE_CHAR:re,QMARK:dt,END_ANCHOR:ft,DOTS_SLASH:At,NO_DOT:ue,NO_DOTS:ne,NO_DOT_SLASH:oe,NO_DOTS_SLASH:ae,QMARK_NO_DOT:ce,STAR:ie,START_ANCHOR:Ht},le={...Lt,SLASH_LITERAL:`[${W}]`,QMARK:$t,STAR:`${$t}*?`,DOTS_SLASH:`${Q}{1,2}(?:[${W}]|$)`,NO_DOT:`(?!${Q})`,NO_DOTS:`(?!(?:^|[${W}])${Q}{1,2}(?:[${W}]|$))`,NO_DOT_SLASH:`(?!${Q}{0,1}(?:[${W}]|$))`,NO_DOTS_SLASH:`(?!${Q}{1,2}(?:[${W}]|$))`,QMARK_NO_DOT:`[^.${W}]`,START_ANCHOR:`(?:^|[${W}])`,END_ANCHOR:`(?:[${W}]|$)`},pe={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};Tt.exports={MAX_LENGTH:1024*64,POSIX_REGEX_SOURCE:pe,REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:te.sep,extglobChars(t){return{"!":{type:"negate",open:"(?:(?!(?:",close:`))${t.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}},globChars(t){return t===!0?le:Lt}}});var ct=z(M=>{"use strict";var fe=ot(),Ae=!1,{REGEX_BACKSLASH:Re,REGEX_REMOVE_BACKSLASH:_e,REGEX_SPECIAL_CHARS:he,REGEX_SPECIAL_CHARS_GLOBAL:Ee}=tt();M.isObject=t=>t!==null&&typeof t=="object"&&!Array.isArray(t);M.hasRegexChars=t=>he.test(t);M.isRegexChar=t=>t.length===1&&M.hasRegexChars(t);M.escapeRegex=t=>t.replace(Ee,"\\$1");M.toPosixSlashes=t=>t.replace(Re,"/");M.removeBackslashes=t=>t.replace(_e,n=>n==="\\"?"":n);M.supportsLookbehinds=()=>{let t="10.0.0".slice(1).split(".").map(Number);return t.length===3&&t[0]>=9||t[0]===8&&t[1]>=10};M.isWindows=t=>t&&typeof t.windows=="boolean"?t.windows:Ae===!0||fe.sep==="\\";M.escapeLast=(t,n,e)=>{let A=t.lastIndexOf(n,e);return A===-1?t:t[A-1]==="\\"?M.escapeLast(t,n,A-1):`${t.slice(0,A)}\\${t.slice(A)}`};M.removePrefix=(t,n={})=>{let e=t;return e.startsWith("./")&&(e=e.slice(2),n.prefix="./"),e};M.wrapOutput=(t,n={},e={})=>{let A=e.contains?"":"^",c=e.contains?"":"$",R=`${A}(?:${t})${c}`;return n.negated===!0&&(R=`(?:^(?!${R}).*$)`),R}});var Bt=z((Me,It)=>{"use strict";var Ot=ct(),{CHAR_ASTERISK:Rt,CHAR_AT:xe,CHAR_BACKWARD_SLASH:et,CHAR_COMMA:ge,CHAR_DOT:_t,CHAR_EXCLAMATION_MARK:ht,CHAR_FORWARD_SLASH:wt,CHAR_LEFT_CURLY_BRACE:Et,CHAR_LEFT_PARENTHESES:xt,CHAR_LEFT_SQUARE_BRACKET:be,CHAR_PLUS:Ce,CHAR_QUESTION_MARK:vt,CHAR_RIGHT_CURLY_BRACE:Se,CHAR_RIGHT_PARENTHESES:mt,CHAR_RIGHT_SQUARE_BRACKET:ye}=tt(),Nt=t=>t===wt||t===et,kt=t=>{t.isPrefix!==!0&&(t.depth=t.isGlobstar?1/0:1)},$e=(t,n)=>{let e=n||{},A=t.length-1,c=e.parts===!0||e.scanToEnd===!0,R=[],l=[],x=[],_=t,v=-1,g=0,O=0,N=!1,w=!1,b=!1,d=!1,Z=!1,U=!1,K=!1,H=!1,q=!1,k=!1,j=0,I,i,E={value:"",depth:0,isGlob:!1},m=()=>v>=A,u=()=>_.charCodeAt(v+1),y=()=>(I=i,_.charCodeAt(++v));for(;v<A;){i=y();let B;if(i===et){K=E.backslashes=!0,i=y(),i===Et&&(U=!0);continue}if(U===!0||i===Et){for(j++;m()!==!0&&(i=y());){if(i===et){K=E.backslashes=!0,y();continue}if(i===Et){j++;continue}if(U!==!0&&i===_t&&(i=y())===_t){if(N=E.isBrace=!0,b=E.isGlob=!0,k=!0,c===!0)continue;break}if(U!==!0&&i===ge){if(N=E.isBrace=!0,b=E.isGlob=!0,k=!0,c===!0)continue;break}if(i===Se&&(j--,j===0)){U=!1,N=E.isBrace=!0,k=!0;break}}if(c===!0)continue;break}if(i===wt){if(R.push(v),l.push(E),E={value:"",depth:0,isGlob:!1},k===!0)continue;if(I===_t&&v===g+1){g+=2;continue}O=v+1;continue}if(e.noext!==!0&&(i===Ce||i===xe||i===Rt||i===vt||i===ht)===!0&&u()===xt){if(b=E.isGlob=!0,d=E.isExtglob=!0,k=!0,i===ht&&v===g&&(q=!0),c===!0){for(;m()!==!0&&(i=y());){if(i===et){K=E.backslashes=!0,i=y();continue}if(i===mt){b=E.isGlob=!0,k=!0;break}}continue}break}if(i===Rt){if(I===Rt&&(Z=E.isGlobstar=!0),b=E.isGlob=!0,k=!0,c===!0)continue;break}if(i===vt){if(b=E.isGlob=!0,k=!0,c===!0)continue;break}if(i===be){for(;m()!==!0&&(B=y());){if(B===et){K=E.backslashes=!0,y();continue}if(B===ye){w=E.isBracket=!0,b=E.isGlob=!0,k=!0;break}}if(c===!0)continue;break}if(e.nonegate!==!0&&i===ht&&v===g){H=E.negated=!0,g++;continue}if(e.noparen!==!0&&i===xt){if(b=E.isGlob=!0,c===!0){for(;m()!==!0&&(i=y());){if(i===xt){K=E.backslashes=!0,i=y();continue}if(i===mt){k=!0;break}}continue}break}if(b===!0){if(k=!0,c===!0)continue;break}}e.noext===!0&&(d=!1,b=!1);let C=_,V="",s="";g>0&&(V=_.slice(0,g),_=_.slice(g),O-=g),C&&b===!0&&O>0?(C=_.slice(0,O),s=_.slice(O)):b===!0?(C="",s=_):C=_,C&&C!==""&&C!=="/"&&C!==_&&Nt(C.charCodeAt(C.length-1))&&(C=C.slice(0,-1)),e.unescape===!0&&(s&&(s=Ot.removeBackslashes(s)),C&&K===!0&&(C=Ot.removeBackslashes(C)));let r={prefix:V,input:t,start:g,base:C,glob:s,isBrace:N,isBracket:w,isGlob:b,isExtglob:d,isGlobstar:Z,negated:H,negatedExtglob:q};if(e.tokens===!0&&(r.maxDepth=0,Nt(i)||l.push(E),r.tokens=l),e.parts===!0||e.tokens===!0){let B;for(let h=0;h<R.length;h++){let X=B?B+1:g,F=R[h],D=t.slice(X,F);e.tokens&&(h===0&&g!==0?(l[h].isPrefix=!0,l[h].value=V):l[h].value=D,kt(l[h]),r.maxDepth+=l[h].depth),(h!==0||D!=="")&&x.push(D),B=F}if(B&&B+1<t.length){let h=t.slice(B+1);x.push(h),e.tokens&&(l[l.length-1].value=h,kt(l[l.length-1]),r.maxDepth+=l[l.length-1].depth)}r.slashes=R,r.parts=x}return r};It.exports=$e});var Dt=z((De,Mt)=>{"use strict";var it=tt(),P=ct(),{MAX_LENGTH:lt,POSIX_REGEX_SOURCE:de,REGEX_NON_SPECIAL_CHARS:He,REGEX_SPECIAL_CHARS_BACKREF:Le,REPLACEMENTS:Gt}=it,Te=(t,n)=>{if(typeof n.expandRange=="function")return n.expandRange(...t,n);t.sort();let e=`[${t.join("-")}]`;try{new RegExp(e)}catch{return t.map(c=>P.escapeRegex(c)).join("..")}return e},J=(t,n)=>`Missing ${t}: "${n}" - use "\\\\${n}" to match literal characters`,gt=(t,n)=>{if(typeof t!="string")throw new TypeError("Expected a string");t=Gt[t]||t;let e={...n},A=typeof e.maxLength=="number"?Math.min(lt,e.maxLength):lt,c=t.length;if(c>A)throw new SyntaxError(`Input length: ${c}, exceeds maximum allowed length: ${A}`);let R={type:"bos",value:"",output:e.prepend||""},l=[R],x=e.capture?"":"?:",_=P.isWindows(n),v=it.globChars(_),g=it.extglobChars(v),{DOT_LITERAL:O,PLUS_LITERAL:N,SLASH_LITERAL:w,ONE_CHAR:b,DOTS_SLASH:d,NO_DOT:Z,NO_DOT_SLASH:U,NO_DOTS_SLASH:K,QMARK:H,QMARK_NO_DOT:q,STAR:k,START_ANCHOR:j}=v,I=a=>`(${x}(?:(?!${j}${a.dot?d:O}).)*?)`,i=e.dot?"":Z,E=e.dot?H:q,m=e.bash===!0?I(e):k;e.capture&&(m=`(${m})`),typeof e.noext=="boolean"&&(e.noextglob=e.noext);let u={input:t,index:-1,start:0,dot:e.dot===!0,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:l};t=P.removePrefix(t,u),c=t.length;let y=[],C=[],V=[],s=R,r,B=()=>u.index===c-1,h=u.peek=(a=1)=>t[u.index+a],X=u.advance=()=>t[++u.index]||"",F=()=>t.slice(u.index+1),D=(a="",S=0)=>{u.consumed+=a,u.index+=S},st=a=>{u.output+=a.output!=null?a.output:a.value,D(a.value)},Ft=()=>{let a=1;for(;h()==="!"&&(h(2)!=="("||h(3)==="?");)X(),u.start++,a++;return a%2===0?!1:(u.negated=!0,u.start++,!0)},rt=a=>{u[a]++,V.push(a)},Y=a=>{u[a]--,V.pop()},f=a=>{if(s.type==="globstar"){let S=u.braces>0&&(a.type==="comma"||a.type==="brace"),o=a.extglob===!0||y.length&&(a.type==="pipe"||a.type==="paren");a.type!=="slash"&&a.type!=="paren"&&!S&&!o&&(u.output=u.output.slice(0,-s.output.length),s.type="star",s.value="*",s.output=m,u.output+=s.output)}if(y.length&&a.type!=="paren"&&(y[y.length-1].inner+=a.value),(a.value||a.output)&&st(a),s&&s.type==="text"&&a.type==="text"){s.value+=a.value,s.output=(s.output||"")+a.value;return}a.prev=s,l.push(a),s=a},ut=(a,S)=>{let o={...g[S],conditions:1,inner:""};o.prev=s,o.parens=u.parens,o.output=u.output;let p=(e.capture?"(":"")+o.open;rt("parens"),f({type:a,value:S,output:u.output?"":b}),f({type:"paren",extglob:!0,value:X(),output:p}),y.push(o)},Wt=a=>{let S=a.close+(e.capture?")":""),o;if(a.type==="negate"){let p=m;if(a.inner&&a.inner.length>1&&a.inner.includes("/")&&(p=I(e)),(p!==m||B()||/^\)+$/.test(F()))&&(S=a.close=`)$))${p}`),a.inner.includes("*")&&(o=F())&&/^\.[^\\/.]+$/.test(o)){let $=gt(o,{...n,fastpaths:!1}).output;S=a.close=`)${$})${p})`}a.prev.type==="bos"&&(u.negatedExtglob=!0)}f({type:"paren",extglob:!0,value:r,output:S}),Y("parens")};if(e.fastpaths!==!1&&!/(^[*!]|[/()[\]{}"])/.test(t)){let a=!1,S=t.replace(Le,(o,p,$,G,T,pt)=>G==="\\"?(a=!0,o):G==="?"?p?p+G+(T?H.repeat(T.length):""):pt===0?E+(T?H.repeat(T.length):""):H.repeat($.length):G==="."?O.repeat($.length):G==="*"?p?p+G+(T?m:""):m:p?o:`\\${o}`);return a===!0&&(e.unescape===!0?S=S.replace(/\\/g,""):S=S.replace(/\\+/g,o=>o.length%2===0?"\\\\":o?"\\":"")),S===t&&e.contains===!0?(u.output=t,u):(u.output=P.wrapOutput(S,u,n),u)}for(;!B();){if(r=X(),r==="\0")continue;if(r==="\\"){let o=h();if(o==="/"&&e.bash!==!0||o==="."||o===";")continue;if(!o){r+="\\",f({type:"text",value:r});continue}let p=/^\\+/.exec(F()),$=0;if(p&&p[0].length>2&&($=p[0].length,u.index+=$,$%2!==0&&(r+="\\")),e.unescape===!0?r=X():r+=X(),u.brackets===0){f({type:"text",value:r});continue}}if(u.brackets>0&&(r!=="]"||s.value==="["||s.value==="[^")){if(e.posix!==!1&&r===":"){let o=s.value.slice(1);if(o.includes("[")&&(s.posix=!0,o.includes(":"))){let p=s.value.lastIndexOf("["),$=s.value.slice(0,p),G=s.value.slice(p+2),T=de[G];if(T){s.value=$+T,u.backtrack=!0,X(),!R.output&&l.indexOf(s)===1&&(R.output=b);continue}}}(r==="["&&h()!==":"||r==="-"&&h()==="]")&&(r=`\\${r}`),r==="]"&&(s.value==="["||s.value==="[^")&&(r=`\\${r}`),e.posix===!0&&r==="!"&&s.value==="["&&(r="^"),s.value+=r,st({value:r});continue}if(u.quotes===1&&r!=='"'){r=P.escapeRegex(r),s.value+=r,st({value:r});continue}if(r==='"'){u.quotes=u.quotes===1?0:1,e.keepQuotes===!0&&f({type:"text",value:r});continue}if(r==="("){rt("parens"),f({type:"paren",value:r});continue}if(r===")"){if(u.parens===0&&e.strictBrackets===!0)throw new SyntaxError(J("opening","("));let o=y[y.length-1];if(o&&u.parens===o.parens+1){Wt(y.pop());continue}f({type:"paren",value:r,output:u.parens?")":"\\)"}),Y("parens");continue}if(r==="["){if(e.nobracket===!0||!F().includes("]")){if(e.nobracket!==!0&&e.strictBrackets===!0)throw new SyntaxError(J("closing","]"));r=`\\${r}`}else rt("brackets");f({type:"bracket",value:r});continue}if(r==="]"){if(e.nobracket===!0||s&&s.type==="bracket"&&s.value.length===1){f({type:"text",value:r,output:`\\${r}`});continue}if(u.brackets===0){if(e.strictBrackets===!0)throw new SyntaxError(J("opening","["));f({type:"text",value:r,output:`\\${r}`});continue}Y("brackets");let o=s.value.slice(1);if(s.posix!==!0&&o[0]==="^"&&!o.includes("/")&&(r=`/${r}`),s.value+=r,st({value:r}),e.literalBrackets===!1||P.hasRegexChars(o))continue;let p=P.escapeRegex(s.value);if(u.output=u.output.slice(0,-s.value.length),e.literalBrackets===!0){u.output+=p,s.value=p;continue}s.value=`(${x}${p}|${s.value})`,u.output+=s.value;continue}if(r==="{"&&e.nobrace!==!0){rt("braces");let o={type:"brace",value:r,output:"(",outputIndex:u.output.length,tokensIndex:u.tokens.length};C.push(o),f(o);continue}if(r==="}"){let o=C[C.length-1];if(e.nobrace===!0||!o){f({type:"text",value:r,output:r});continue}let p=")";if(o.dots===!0){let $=l.slice(),G=[];for(let T=$.length-1;T>=0&&(l.pop(),$[T].type!=="brace");T--)$[T].type!=="dots"&&G.unshift($[T].value);p=Te(G,e),u.backtrack=!0}if(o.comma!==!0&&o.dots!==!0){let $=u.output.slice(0,o.outputIndex),G=u.tokens.slice(o.tokensIndex);o.value=o.output="\\{",r=p="\\}",u.output=$;for(let T of G)u.output+=T.output||T.value}f({type:"brace",value:r,output:p}),Y("braces"),C.pop();continue}if(r==="|"){y.length>0&&y[y.length-1].conditions++,f({type:"text",value:r});continue}if(r===","){let o=r,p=C[C.length-1];p&&V[V.length-1]==="braces"&&(p.comma=!0,o="|"),f({type:"comma",value:r,output:o});continue}if(r==="/"){if(s.type==="dot"&&u.index===u.start+1){u.start=u.index+1,u.consumed="",u.output="",l.pop(),s=R;continue}f({type:"slash",value:r,output:w});continue}if(r==="."){if(u.braces>0&&s.type==="dot"){s.value==="."&&(s.output=O);let o=C[C.length-1];s.type="dots",s.output+=r,s.value+=r,o.dots=!0;continue}if(u.braces+u.parens===0&&s.type!=="bos"&&s.type!=="slash"){f({type:"text",value:r,output:O});continue}f({type:"dot",value:r,output:O});continue}if(r==="?"){if(!(s&&s.value==="(")&&e.noextglob!==!0&&h()==="("&&h(2)!=="?"){ut("qmark",r);continue}if(s&&s.type==="paren"){let p=h(),$=r;if(p==="<"&&!P.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");(s.value==="("&&!/[!=<:]/.test(p)||p==="<"&&!/<([!=]|\w+>)/.test(F()))&&($=`\\${r}`),f({type:"text",value:r,output:$});continue}if(e.dot!==!0&&(s.type==="slash"||s.type==="bos")){f({type:"qmark",value:r,output:q});continue}f({type:"qmark",value:r,output:H});continue}if(r==="!"){if(e.noextglob!==!0&&h()==="("&&(h(2)!=="?"||!/[!=<:]/.test(h(3)))){ut("negate",r);continue}if(e.nonegate!==!0&&u.index===0){Ft();continue}}if(r==="+"){if(e.noextglob!==!0&&h()==="("&&h(2)!=="?"){ut("plus",r);continue}if(s&&s.value==="("||e.regex===!1){f({type:"plus",value:r,output:N});continue}if(s&&(s.type==="bracket"||s.type==="paren"||s.type==="brace")||u.parens>0){f({type:"plus",value:r});continue}f({type:"plus",value:N});continue}if(r==="@"){if(e.noextglob!==!0&&h()==="("&&h(2)!=="?"){f({type:"at",extglob:!0,value:r,output:""});continue}f({type:"text",value:r});continue}if(r!=="*"){(r==="$"||r==="^")&&(r=`\\${r}`);let o=He.exec(F());o&&(r+=o[0],u.index+=o[0].length),f({type:"text",value:r});continue}if(s&&(s.type==="globstar"||s.star===!0)){s.type="star",s.star=!0,s.value+=r,s.output=m,u.backtrack=!0,u.globstar=!0,D(r);continue}let a=F();if(e.noextglob!==!0&&/^\([^?]/.test(a)){ut("star",r);continue}if(s.type==="star"){if(e.noglobstar===!0){D(r);continue}let o=s.prev,p=o.prev,$=o.type==="slash"||o.type==="bos",G=p&&(p.type==="star"||p.type==="globstar");if(e.bash===!0&&(!$||a[0]&&a[0]!=="/")){f({type:"star",value:r,output:""});continue}let T=u.braces>0&&(o.type==="comma"||o.type==="brace"),pt=y.length&&(o.type==="pipe"||o.type==="paren");if(!$&&o.type!=="paren"&&!T&&!pt){f({type:"star",value:r,output:""});continue}for(;a.slice(0,3)==="/**";){let nt=t[u.index+4];if(nt&&nt!=="/")break;a=a.slice(3),D("/**",3)}if(o.type==="bos"&&B()){s.type="globstar",s.value+=r,s.output=I(e),u.output=s.output,u.globstar=!0,D(r);continue}if(o.type==="slash"&&o.prev.type!=="bos"&&!G&&B()){u.output=u.output.slice(0,-(o.output+s.output).length),o.output=`(?:${o.output}`,s.type="globstar",s.output=I(e)+(e.strictSlashes?")":"|$)"),s.value+=r,u.globstar=!0,u.output+=o.output+s.output,D(r);continue}if(o.type==="slash"&&o.prev.type!=="bos"&&a[0]==="/"){let nt=a[1]!==void 0?"|$":"";u.output=u.output.slice(0,-(o.output+s.output).length),o.output=`(?:${o.output}`,s.type="globstar",s.output=`${I(e)}${w}|${w}${nt})`,s.value+=r,u.output+=o.output+s.output,u.globstar=!0,D(r+X()),f({type:"slash",value:"/",output:""});continue}if(o.type==="bos"&&a[0]==="/"){s.type="globstar",s.value+=r,s.output=`(?:^|${w}|${I(e)}${w})`,u.output=s.output,u.globstar=!0,D(r+X()),f({type:"slash",value:"/",output:""});continue}u.output=u.output.slice(0,-s.output.length),s.type="globstar",s.output=I(e),s.value+=r,u.output+=s.output,u.globstar=!0,D(r);continue}let S={type:"star",value:r,output:m};if(e.bash===!0){S.output=".*?",(s.type==="bos"||s.type==="slash")&&(S.output=i+S.output),f(S);continue}if(s&&(s.type==="bracket"||s.type==="paren")&&e.regex===!0){S.output=r,f(S);continue}(u.index===u.start||s.type==="slash"||s.type==="dot")&&(s.type==="dot"?(u.output+=U,s.output+=U):e.dot===!0?(u.output+=K,s.output+=K):(u.output+=i,s.output+=i),h()!=="*"&&(u.output+=b,s.output+=b)),f(S)}for(;u.brackets>0;){if(e.strictBrackets===!0)throw new SyntaxError(J("closing","]"));u.output=P.escapeLast(u.output,"["),Y("brackets")}for(;u.parens>0;){if(e.strictBrackets===!0)throw new SyntaxError(J("closing",")"));u.output=P.escapeLast(u.output,"("),Y("parens")}for(;u.braces>0;){if(e.strictBrackets===!0)throw new SyntaxError(J("closing","}"));u.output=P.escapeLast(u.output,"{"),Y("braces")}if(e.strictSlashes!==!0&&(s.type==="star"||s.type==="bracket")&&f({type:"maybe_slash",value:"",output:`${w}?`}),u.backtrack===!0){u.output="";for(let a of u.tokens)u.output+=a.output!=null?a.output:a.value,a.suffix&&(u.output+=a.suffix)}return u};gt.fastpaths=(t,n)=>{let e={...n},A=typeof e.maxLength=="number"?Math.min(lt,e.maxLength):lt,c=t.length;if(c>A)throw new SyntaxError(`Input length: ${c}, exceeds maximum allowed length: ${A}`);t=Gt[t]||t;let R=P.isWindows(n),{DOT_LITERAL:l,SLASH_LITERAL:x,ONE_CHAR:_,DOTS_SLASH:v,NO_DOT:g,NO_DOTS:O,NO_DOTS_SLASH:N,STAR:w,START_ANCHOR:b}=it.globChars(R),d=e.dot?O:g,Z=e.dot?N:g,U=e.capture?"":"?:",K={negated:!1,prefix:""},H=e.bash===!0?".*?":w;e.capture&&(H=`(${H})`);let q=i=>i.noglobstar===!0?H:`(${U}(?:(?!${b}${i.dot?v:l}).)*?)`,k=i=>{switch(i){case"*":return`${d}${_}${H}`;case".*":return`${l}${_}${H}`;case"*.*":return`${d}${H}${l}${_}${H}`;case"*/*":return`${d}${H}${x}${_}${Z}${H}`;case"**":return d+q(e);case"**/*":return`(?:${d}${q(e)}${x})?${Z}${_}${H}`;case"**/*.*":return`(?:${d}${q(e)}${x})?${Z}${H}${l}${_}${H}`;case"**/.*":return`(?:${d}${q(e)}${x})?${l}${_}${H}`;default:{let E=/^(.*?)\.(\w+)$/.exec(i);if(!E)return;let m=k(E[1]);return m?m+l+E[2]:void 0}}},j=P.removePrefix(t,K),I=k(j);return I&&e.strictSlashes!==!0&&(I+=`${x}?`),I};Mt.exports=gt});var Kt=z((Pe,Pt)=>{"use strict";var Oe=ot(),ve=Bt(),bt=Dt(),Ct=ct(),me=tt(),Ne=t=>t&&typeof t=="object"&&!Array.isArray(t),L=(t,n,e=!1)=>{if(Array.isArray(t)){let g=t.map(N=>L(N,n,e));return N=>{for(let w of g){let b=w(N);if(b)return b}return!1}}let A=Ne(t)&&t.tokens&&t.input;if(t===""||typeof t!="string"&&!A)throw new TypeError("Expected pattern to be a non-empty string");let c=n||{},R=Ct.isWindows(n),l=A?L.compileRe(t,n):L.makeRe(t,n,!1,!0),x=l.state;delete l.state;let _=()=>!1;if(c.ignore){let g={...n,ignore:null,onMatch:null,onResult:null};_=L(c.ignore,g,e)}let v=(g,O=!1)=>{let{isMatch:N,match:w,output:b}=L.test(g,l,n,{glob:t,posix:R}),d={glob:t,state:x,regex:l,posix:R,input:g,output:b,match:w,isMatch:N};return typeof c.onResult=="function"&&c.onResult(d),N===!1?(d.isMatch=!1,O?d:!1):_(g)?(typeof c.onIgnore=="function"&&c.onIgnore(d),d.isMatch=!1,O?d:!1):(typeof c.onMatch=="function"&&c.onMatch(d),O?d:!0)};return e&&(v.state=x),v};L.test=(t,n,e,{glob:A,posix:c}={})=>{if(typeof t!="string")throw new TypeError("Expected input to be a string");if(t==="")return{isMatch:!1,output:""};let R=e||{},l=R.format||(c?Ct.toPosixSlashes:null),x=t===A,_=x&&l?l(t):t;return x===!1&&(_=l?l(t):t,x=_===A),(x===!1||R.capture===!0)&&(R.matchBase===!0||R.basename===!0?x=L.matchBase(t,n,e,c):x=n.exec(_)),{isMatch:!!x,match:x,output:_}};L.matchBase=(t,n,e,A=Ct.isWindows(e))=>(n instanceof RegExp?n:L.makeRe(n,e)).test(Oe.basename(t));L.isMatch=(t,n,e)=>L(n,e)(t);L.parse=(t,n)=>Array.isArray(t)?t.map(e=>L.parse(e,n)):bt(t,{...n,fastpaths:!1});L.scan=(t,n)=>ve(t,n);L.compileRe=(t,n,e=!1,A=!1)=>{if(e===!0)return t.output;let c=n||{},R=c.contains?"":"^",l=c.contains?"":"$",x=`${R}(?:${t.output})${l}`;t&&t.negated===!0&&(x=`^(?!${x}).*$`);let _=L.toRegex(x,n);return A===!0&&(_.state=t),_};L.makeRe=(t,n={},e=!1,A=!1)=>{if(!t||typeof t!="string")throw new TypeError("Expected a non-empty string");let c={negated:!1,fastpaths:!0};return n.fastpaths!==!1&&(t[0]==="."||t[0]==="*")&&(c.output=bt.fastpaths(t,n)),c.output||(c=bt(t,n)),L.compileRe(c,n,e,A)};L.toRegex=(t,n)=>{try{let e=n||{};return new RegExp(t,e.flags||(e.nocase?"i":""))}catch(e){if(n&&n.debug===!0)throw e;return/$^/}};L.constants=me;Pt.exports=L});var qt=z((Ke,Ut)=>{"use strict";Ut.exports=Kt()});var Xt=Jt(qt(),1);function ke(t,n){let e={csv:!1,...n};e.csv&&delete n.csv;let A=(Array.isArray(t)?t:e.csv?t.split(/\s*,\s*/):[t]).map(c=>c instanceof RegExp?R=>c.test(R):c.startsWith("/")&&c.endsWith("/")?R=>new RegExp(c.substring(1,c.length-1)).test(R):(0,Xt.default)(c,n));return function(R){return A.some(l=>l(R))}}})();
