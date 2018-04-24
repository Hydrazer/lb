;(_=>{
let hc={'<':'&lt;','&':'&amp;',"'":'&apos;','"':'&quot;'},he=x=>x.replace(/[<&'"]/g,c=>hc[c]) //html chars and escape fn
,tcs=''
,lbs=["ǝpop a,b,c\ninsert b into a on location c\n\n.ǝ\npop a\nprint a to STDERR","ʒpop a\nfilter a when the result of code == 1: usage ʒCODE}","αpop a,b\npush absolute difference of a and b","βpop a,b\npush a converted from base b (arbitrary)","γpop a\npush a split into chunks of consecutive equal elements","δpop a,b\nget the next command, push double vectorized command","εpop a\napply each on a: usage εCODE}","ζpop a,(b)\npush zipped a with filler b (standardized to space)","ηpop a\npush prefixes(a)","θpop a\npush a[-1]","вpop a,b\npush a converted to base b (arbitrary)","иpop a,b\npush a n-repeat (list-multiply) b","мpop a,b\npush a.remove(all elements of b)","нpop a\npush a[0]","тpush 100","Δpop a\nrepeat CODE until a doesn't change: usage ΔCODE}","Θpop a\npush 05AB1E truthified a (a == 1)","Σpop a\nsort a by the result of code: usage ΣCODE}","Ωpop a\npush random_pick(a)","≠pop a\npush 05AB1E falsified a (a != 1)","∊pop a\npush vertically mirrored a\n\n.∊\npop a\npush intersected vertical mirror a","∍pop a,b\npush a extended/shortened to length b","∞pop a\npush mirrored a\n\n.∞\npop a\npush intersected mirror a","₁push 256","₂push 26","₃push 95","₄push 1000","!pop a,\npush factorial(a)","\"start/end string literal","#pop a\nif true: break/end (used in infinite loops)\n\npop a\nif contains spaces, split on spaces","$push 1 and input (used for sequences)","%pop a,b\npush (a % b)","&pop a,b\npush a AND b","'push char ( 'a pushes \"a\" )","(pop a\npush -a",")wrap total stack to an array","*pop a,b\npush (a * b)","+pop a,b\npush (a + b)",",pop a\nprint(a)","-pop a,b\npush (a - b)","/pop a,b\npush (a / b)","0numeric literal\n\n.0\n\nthrow a division by zero error","1numeric literal","2numeric literal","3numeric literal","4numeric literal","5numeric literal","6numeric literal","7numeric literal","8numeric literal","9numeric literal",":pop a,b,c\na.replace(b, c) / infinite replacement\n\n.:\npop a,b,c\npush a.replace(b, c)",";pop a\npush a / 2\n\n.;\npop a,b,c\npush a.replace_first(b, c)","<pop a\npush a - 1"," print last item",">pop a\npush a + 1","?pop a\nprint a no newline","@pop a\npop and push the element at index a in the stack (leftmost element = index 0)","Apush 'abcdefghijklmnopqrstuvwxyz'\n\nžA\npush 512","Bpop a,b\npush base(a, b)\n\nžB\npush 1024","Cpop a\npush int(a, 2)\n\nžC\npush 2048","Dpop a\npush a, a\n\nžD\npush 4096","Epush eval(input())\n\nžE\npush 8192","Fpop a\nfor N in range(0, a) { }: F(commands)} / N = variable\n\nžF\npush 16384","Gpop a\nfor N in range(1, a) { }: F(commands)} / N = variable\n\nžG\npush 32768","Hpop a\npush int(a, 16)\n\nžH\npush 65536","Ipush input()\n\nžI\npush 2147483648","Jpop a\npush ''.join(a) if a is list / if not, then push ''.join(stack)\n\nžJ\npush 4294967296","Kpop a,b\npush a with no b's\n\nžK\npush [a-zA-Z0-9]","Lpop a\npush [1 .. a]\n\nžL\npush [z-aZ-A9-0]","Mpush the largest number in the stack\n\nžM\npush aeiou","Nreserved for variables\n\nžN\npush bcdfghjklmnpqrstvwxyz","Opop (a)\npush total sum of a if a is list, else total sum of stack\n\nžO\npush aeiouy","Ppop (a)\npush total product of a if a is list, else total product of stack\n\nžP\npush bcdfghjklmnpqrstvwxz","Qpop a,b\npush a == b (bool)\n\nžQ\npush printable ASCII character set (32-128)","Rpop a\npush reversed(a)\n\nžR\npush ABC","Spop a\npush all chars a seperate\n\n.S\npop a,b\npush 1 if a > b, -1 if a < b, 0 if a == b ","Tpush 10","Upop a\nassign X to a","Vpop a\nassign Y to a\n\n.V\npop a\nrun as 05AB1E code","Wpush min(a) without popping\n\n.W\npop a\nwait a milliseconds","Xinteger variable","Yinteger variable","Zpush max(a) without popping","[infinite loop start","\\delete last item","]close all loops and if statements","^pop a,b\npush a XOR b\n\n.^\npop a\ninsert a into global array with immediate sorting and after quit, print array[input_1]","_pop a\npush negative bool","`pop a\npush all the items of a into the stack","apop a\npush is_alpha(a)\n\nža\npush current hours","bpop a\npush bin(a)\n\nžb\npush current minutes","cpop a,b\npush a nCr b\n\nžc\npush current seconds","dpop a\npush is_number(a)\n\nžd\npush current microseconds","epop a,b\npush a nPr b\n\nže\npush current day","fpop a\npush list of prime factors (no duplicates)\n\nžf\npush current month","gpop a\npush length of a\n\nžg\npush current year","hpop a\npush hex(a)\n\nžh\npush [0-9]","ipop a\nif statement: iTHEN}: if true { then }\n\nži\npush [a-zA-Z]","jpop a\nSame as J, with each substring right justified w/ a length of b\n\nžj\npush [a-zA-Z0-9_]","kpop a,b\npush 0-indexed index of b in a (-1 when not found)\n\nžk\npush [z-aZ-A]","lpop a\npush lower_case(a)\n\nžl\npush [z-aZ-A9-0_]","mpop a,b\npush a**b\n\nžm\npush [9-0]","npop a\npush a**2\n\nžn\npush [A-Za-z]","opop a\npush 2**a\n\nžo\npush [Z-Az-a]","ppop a\npush isPrime(a)\n\nžp\npush [Z-A]","qterminates the program\n\nžq\npush pi","rreverse stack\n\nžr\npush e","spop a,b\npush b,a\n\nžs\npop a, push pi to a digits (max. 100000)","tpop a\npush sqrt(a)\n\nžt\npop a, push e to a digits (max. 10000)","upop a\npush upper_case(a)\n\nžu\npush ()<>[]{}","vpop a\nrange loop: for y in a (y = string, N = index)\n\nžv\npush 16","wwait one second\n\nžw\npush 32","xpop a\npush a, a * 2\n\nžx\npush 64","ypush string variable (used in mapping loops)\n\nžy\npush 128","zpop a\npush 1 / a\n\nžz\npush 256","{pop a\npush sorted a","|push the rest of input as an array with strings","}close a single if statement, loop, etc.","~pop a,b\npush a OR b","Ƶconvert the next char from base 255 to base 10 and add 101","€pop a\napply next command for each in a\n\n.€\npop a\ndebug printer (default encoding, fallbacks on cp1252)","Λpop a,b,c\nstore a canvas with {a: num, b: filler, c: pattern} (todo: docs)\n\n.Λ\npop a,b,c\nstore a canvas with {a: num, b: filler, c: pattern} and push the string to the stack","‚pop a,b\npush [a, b]","ƒpop a\npush for N in range(0, a + 1)","„2 char string / can also be used for 2 compressed strings","…3 char string / can also be used for 3 compressed strings","†pop a,b\npush a with b filtered to the front","‡pop a,b,c\npush a.transliterate(b -> c)","ˆpop a\nadd to global array\n\n.ˆ\npop a\ninsert a into global array and after quit, print array[input_1]","‰pop a,b\npush a divmod b","Špop a,b,c\npush c,a,b","‹pop a,b\npush a < b","Œpop a\npush substrings(a)\n\n.Œ\npop a,b\npush all possible ways to divide a into b pieces","Ćpop a\npush enclosed a: a + a[0]","Žbreak/end if stack is empty","ƶpop a\npush lifted a, each element is multiplied by its index (1-indexed)","Āpop a\npush truthified a","‘for compressed strings (upper)","’for compressed strings (no implicit space)","“for compressed strings (normal)","”for compressed strings (title)","•start/end a 1-9 char compressed string\n\n.•\n\ndecompress a base 255 alphabet based string","–pop a\nif 1, print N (used in loops)","—pop a\nif 1, print y (used in loops)","˜pop a\npush deep flattened a","™pop a\npush title_cased(a)","špop a\npush switch_cased(a)","›pop a,b\npush a > b","œpop a\npush permutations(a)\n\n.œ\npop a\npush partitions(a)","ćpop a\npush head_extracted a: a[1:], a[0] ","Ÿpop (a),b\npush [a, ..., b] if b not a list, otherwise push [b[0],...,b[1],...,b[n]]","āget a\npush range(1, len(a) + 1)","¡pop a,b\npush a.split(b)","¢pop a,b\npush a.count(b)","£pop a,b\npush a[0:b]\n\n.£\npop a,b\npush a[:-b]","¤get a\npush tail(a)","¥pop a\npush delta's a\n\n.¥\npop a\npush undelta a","¦pop a\npush a[1:]","§pop a\npush str(a)","¨pop a\npush a[0:-1]","©get a\nstore a in register_c without popping","ªpop a\npush sentence_cased(a)","«pop a,b\npush merged(a,b) if both are lists, else push concatenated(a, b)\n\n.«\nfoldr\nfolds a dyadic command between each element in a list from right to left","¬get a\npush head(a)","®push the last item from register_c","¯push global array","°pop a\npush 10 ** a","±pop a\npush bitwise not a","²push the second item from the input history\n\n.²\npop a\npush log_2(a)","³push the third item from the input history","´clear global array","µpop a\nwhile counter_variable != a, do...","¶push newline character","·pop a\npush 2 * a","¸pop a\npush [a]","¹push the first item from the input history","ºpush len(stack) > 0","»pop (a)\nif list, join list by newlines, else join stack by newlines\n\n.»\nfoldl\nfolds a dyadic command between each element in a list from right to left with opposite right/left operands","¼counter_variable += 1\n\n.¼\npop a\ntan(a)","½pop a,\nif 1, then counter_variable += 1\n\n.½\npop a\nsin(a)","¾push counter_variable\n\n.¾\npop a\ncos(a)","¿pop (a),b\npush gcd(b) if b is list, else push gcd([b, a])\n\n.¿\npop (a),b\npush lcm(b) if b is list, else push lcm(b, a)","Àpop a\npush a rotated 1 left\n\n.À\n\nrotate stack 1 left","Ápop a\npush a rotated 1 right\n\n.Á\n\nrotate stack 1 right","Âpop a\npush a, reversed(a)","Ãpop a,b\npush a.keep(b)","Äpop a\npush abs(a)","Ålist commands","Æpop a\npush reduced_substraction(a) if a is list, else reduced_substraction(stack)","Çpop a\npush ASCII value of a","Èpop a\npush a % 2 == 0 (is even)","Épop a\npush a % 2 == 1 (is uneven)","Êpop a,b\npush a != b","Ëpop a\npush 1 if all equal else 0","Ìpop a\npush a + 2","Ípop a\npush a - 2","Îpush 0 and input","Ïpop a,b\npush the elements from a at which the same index at b is 1","Ðpop a\ntriplicate top of stack (push a, push a, push a)","Ñpop a\npush divisors(a)","Òpop a\npush list of prime factors (with duplicates)","Ópop a\npush list of exponents of prime factors (2^a, 3^b, 5^c, 7^d, etc.)","Ôpop a\npush connected uniquified a","Õpop a\npush euler_totient(a)","Öpop a,b\npush a % b == 0","×pop a,b\npush a × b (strings)\n\n.×\npop a,b\npush the list a repeated b times","Øpop a\npush ath prime (zero-indexed)\n\n.Ø\npop a\npush 0-indexed number of the greatest prime ≤ a","Ùpop a\npush uniquified a","Úpop a\npush reverse uniquified a","Ûpop a,b\npush a with leading b's trimmed off","Üpop a,b\npush a with trailing b's trimmed off","Ýpop a\npush [0 .. a]","Þpop a\npush stringified float(a)","ßget a\nextract smallest element of list","àget a\nextract greatest element of list","ápop a\npush only letters of a","âpop a,b\npush cartesian product","ãpop (a),b\npush cartesian product of b.repeat(2) if b is list, else cartesian product of a.repeat(b)","äpop a,b\npush a sliced into b pieces\n\n.ä\npop a\ndebug printer (cp1252)","åpop a,b\npush b in a\n\n.å\npop a,b\npush b in a (vectorized results)","æpop a\npush powerset(a)\n\n.æ\npop a\ncompute permutations by function, usage: .æ<FUNC>}","çpop a\npush char a","èpop a,b\npush a[b]","épop a\npush sorted a (key=length)","êpop a\npush sorted_uniquified(a)","ëelse statement","ìpop a,b\npush merged(b, a) if both are lists, else a.prepend(b)","ípop a\npush [reversed Q for Q in a] (short for €R)","îpop a\npush round_up(a)","ïpop a\npush int(a)\n\n.ï\npop a\npush is int(a)","ðpush a space character","ñpop a,b,c\npush a + b merged with c as merge character","òpop a\npush round to nearest integer(a) (bankers rounding)\n\n.ò\npop a,b\nround a with b digits precision (bankers rounding)","ópop a\npush round_down(a)","ôpop a,b\npush a split in pieces of b","õpush empty string","öpop a,b\npush int(a, b)","÷pop a,b\npush a // b (integer division)","øpop (a),b\npush zipped b if b is list, else zipped a with b\n\n.ø\npop a,b\nsurround a with b","ùpop a,b\npush a with elements of length b","úpop a,b\npush a padded with b spaces in the front","ûpop a\npush palindromized(a), 12345 becomes 123454321 (a + a[::-1][1:])","üpairwise command (vectorizes if the first element is a list)","ýpop (a),b\npush b.join(a) if a is list, else b.join(stack)","þpop a\npush only digits of a","ÿused for string interpolation, pop a and replace ÿ with str(a)",".\ntwo char functions","ž\ntwo char functions"]
,bqk=''.replace(/∙/g,'')
,bqv=''.replace(/∙/g,'')
,tc={},bqc={} //tab completions and ` completions
for(let i=0;i<bqk.length;i++)bqc[bqk[i]]=bqv[i]
for(let i=0;i<tcs.length;i+=3)tc[tcs[i]+tcs[i+1]]=tcs[i+2]
for(let i=0;i<tcs.length;i+=3){let k=tcs[i+1]+tcs[i];tc[k]=tc[k]||tcs[i+2]}
let lbh='';for(let i=0;i<lbs.length;i++){
  let ks=[]
  for(let j=0;j<tcs.length;j+=3)if(lbs[i][0]===tcs[j+2])ks.push('\n'+tcs[j]+' '+tcs[j+1]+' <tab>')
  for(let j=0;j<bqk.length;j++)if(lbs[i][0]===bqv[j])ks.push('\n` '+bqk[j])
  lbh+='<b title="'+he(lbs[i].slice(1)+(ks.length?'\n'+ks.join(''):''))+'">'+lbs[i][0]+'</b>'
}
let d=document,el=d.createElement('div');el.innerHTML=
`<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>@font-face{font-family:"DVSM";src:local("DejaVu Sans Mono"),url(//abrudz.github.io/lb/DejaVuSansMono.ttf)format('truetype');}</style>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"DVSM",monospace;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal;display:inline-block}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
 </style>`
d.body.appendChild(el)
let t,ts=[],lb=el.firstChild,bqm=0 //t:textarea or input, lb:language bar, bqm:backquote mode
let pd=x=>x.preventDefault()
let ev=(x,t,f,c)=>x.addEventListener(t,f,c)
ev(lb,'mousedown',x=>{
  if(x.target.classList.contains('ngn_x')){lb.hidden=1;upd();pd(x);return}
  if(x.target.nodeName==='B'&&t){
    let i=t.selectionStart,j=t.selectionEnd,v=t.value,s=x.target.textContent
    if(i!=null&&j!=null){t.value=v.slice(0,i)+s+v.slice(j);t.selectionStart=t.selectionEnd=i+s.length}
    pd(x);return
  }
})
let fk=x=>{
  let t=x.target
  if(bqm){let i=t.selectionStart,v=t.value,c=bqc[x.key];if(x.which>31){bqm=0;d.body.classList.remove('ngn_bq')}
          if(c){t.value=v.slice(0,i)+c+v.slice(i);t.selectionStart=t.selectionEnd=i+1;pd(x);return!1}}
  switch(x.ctrlKey+2*x.shiftKey+4*x.altKey+8*x.metaKey+100*x.which){
    case   900:{let i=t.selectionStart,v=t.value,c=tc[v.slice(i-2,i)] //tab
                if(c){t.value=v.slice(0,i-2)+c+v.slice(i);t.selectionStart=t.selectionEnd=i-1;pd(x)}
                break}
  }
}
let ff=x=>{
  let t0=x.target,nn=t0.nodeName.toLowerCase()
  if(nn!=='textarea'&&(nn!=='input'||t0.type!=='text'&&t0.type!=='search'))return
  t=t0;if(!t.ngn){t.ngn=1;ts.push(t);ev(t,'keydown',fk)}
}
let upd=_=>{d.body.style.marginTop=lb.clientHeight+'px'}
upd();ev(window,'resize',upd)
ev(d,'focus',ff,!0);let ae=d.activeElement;ae&&ff({type:'focus',target:ae})
})();
