; (_ => {
	let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }, he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
		, tcs = "cur¤hlf½ud.↕up.↑dow↓lr.↔lft←rgt→bar¦exc¡dex‼ell…ppm‰dag†ddg‡srd√leq≤geq≥pm.±ptl∂int∫inf∞apx≈neq≠cng≡neg¬div÷eks×blt·nul₀one₁two₂thr₃fou₄fiv₅six₆sev₇eig₈nin₉lce⌈rce⌉lfl⌊rfl⌋GamΓTheΘLamΛXi.ΞPi.ΠSigΣPsiΨOhmΩdelδepsεetaηlamλmu.μxi.ξpi.πsjgσphiφchiχpsiψohmωNul⁰One¹Two²Thr³Fou⁴Fiv⁵Six⁶Sev⁷Eig⁸Nin⁹cnt¢gbp£eur€yen¥fl.ƒacu´top▲bot▼est►wst◄sec§dC.ĊdD.ḊdF.ḞdG.ĠdI.İdM.ṀdP.ṖdR.ṘdS.ṠdT.ṪdX.Ẋdd.ḋde.ėdf.ḟdg.ġdh.ḣdl.ŀdm.ṁdo.ȯdp.ṗdr.ṙds.ṡdt.ṫdz.żdie¨DE.ËDO.ÖDe.ëDo.öDu.üso.øsqu□pgf¶ll.«rr.»"
		, lbs = ["¤¤\ncombin \n(y -> y -> z) -> (x -> y) -> x -> x -> z \nCompose both arguments of binary function", "½½\nhalve \nTNum -> TNum \nDivide by 2", "↕↕\nspan \n(Concrete y) => (x -> y) -> [x] -> ([x], [x]) \nSplit at first value where function gives falsy result", "↑↑\ntake \nTNum -> [x] -> [x] \nTake n elements from list. Negative n takes from the end", "↓↓\ndrop \nTNum -> [x] -> [x] \nDrop n elements from list. Negative n drops from the end", "↔↔\nswap \n(x, y) -> (y, x) \nSwap a pair", "←←\nhead \n[x] -> x \nFirst value of a list", "→→\nlast \n[x] -> x \nLast value of a list", "\\\\\nNewline \n\nSeparates lines in program", "¦¦\ndivds \nTNum -> TNum -> TNum \n1 if b == 0, b / a if a divides b, 0 otherwise", "¡¡\niter \n(x -> x) -> x -> [x] \nApply function repeatedly, collect values in infinite list", "‼‼\ntwice \n(x -> x) -> (x -> x) \nApply function twice", "……\nrangeN \nTNum -> TNum -> [TNum] \nInclusive numeric range", "‰‰\ndivmod \nTNum -> TNum -> [TNum] \nTwo-element list [b ÷ a, b % a]", "††\nvec \n(Vect a b x y) => (a -> b) -> x -> y \nVectorize a function (\"deep map\")", "‡‡\nvec2 \n(Vect2 a b c x y z) => (a -> b -> c) -> x -> y -> z \nBi-vectorize a function (\"deep zip\")", "√√\nsqrt \nTNum -> TNum \nSquare root", "≤≤\nle \n(Concrete x) => x -> x -> TNum \nLess than or equal", "≥≥\nge \n(Concrete x) => x -> x -> TNum \nGreater than or equal", "±±\nsign \nTNum -> TNum \nSign of a number", "∂∂\nadiags \n[[x]] -> [[x]] \nAntidiagonals", "∫∫\ncumsum \n[TNum] -> [TNum] \nCumulative sum", "∞∞\nrep \nx -> [x] \nInfinite list of copies of the argument", "≈≈\nsimil \n(Concrete x) => x -> x -> TNum \nSimilar. For numbers or chars checks if the absolute difference is <=1. For lists checks if they are the same length. For Pairs checks if both elements are similar.", "≠≠\nneq \n(Concrete x) => x -> x -> TNum \nNot equal", "≡≡\ncongr \n(Concrete x) => x -> x -> TNum \nRecursively check if the two arguments have the same shape and the same distribution of truthy/falsy values. Returns 1 or 0.", "¬¬\nnot \n(Concrete x) => x -> TNum \nNegation of truthiness", "÷÷\nidiv \nTNum -> TNum -> TNum \nInteger division", "××\nmix \n(x -> y -> z) -> [x] -> [y] -> [z] \nFunction applied to all pairs drawn from the lists", "!!\nindex \nTNum -> [x] -> x \nValue at modular index", "\\\\\ninv \nTNum -> TNum \nReciprocal number", "\"\"\nDouble quote \n\nString delimiter", "##\ncountf \n(Concrete y) => (x -> y) -> [x] -> TNum \nNumber of list elems where function result is truthy", "%%\nmod \nTNum -> TNum -> TNum \nModulus of second argument by first", "&&\nand \n(Concrete x) => x -> x -> x \nSecond argument if falsy, else first", "''\nSingle quote \n\nCharacter delimiter", "((\nParentheses \n\nGroup expressions", "**\nmul \nTNum -> TNum -> TNum \nMultiply numbers", "++\nadd \nTNum -> TNum -> TNum \nAdd numbers", ",,\npair \nx -> y -> (x, y) \nConstruct pair", "--\nsub \nTNum -> TNum -> TNum \nSubtract first argument from second", "..\nDecimal point \n\nUsed in floating point literals", "//\ndiv \nTNum -> TNum -> TNum \nExact division, uses rational numbers when possible", "::\ncons \nx -> [x] -> [x] \nPrepend a value to a list", ";;\npure \nx -> [x] \nCreate singleton list", "<<\nlt \n(Concrete x) => x -> x -> TNum \nLess than", "==\neq \n(Concrete x) => x -> x -> TNum \nEquals", ">>\ngt \n(Concrete x) => x -> x -> TNum \nGreater than", "??\nif \n(Concrete x) => y -> y -> x -> y \nTernary if conditioned on third argument", "AA\nmean \n[TNum] -> TNum \nAverage of a list", "BB\nbase \nTNum -> TNum -> [TNum] \nDigits in given base", "CC\ncut \nTNum -> [a] -> [[a]] \nCut into sublists of given length. Negative n counts lengths from the end.", "DD\ndouble \nTNum -> TNum \nMultiply by 2", "EE\nsame \nConcrete x => [x] -> TNum \nLength plus 1 if all elements are equal, else 0", "FF\nfoldl \n(y -> x -> y) -> y -> [x] -> y \nLeft fold", "GG\nscanl \n(y -> x -> y) -> y -> [x] -> [y] \nScan from left", "II\nid \nx -> x \nIdentity function", "JJ\njoin \n[x] -> [[x]] -> [x] \nJoin by a list", "KK\nconst \nx -> y -> x \nConstant function", "LL\nlen \n[x] -> TNum \nLength of list", "MM\nlmap \n(x -> y -> z) -> [x] -> y -> [z] \nMap over left argument", "NN\nnats \n[TNum] \nInfinite list of natural numbers", "OO\nsort \n(Concrete x) => [x] -> [x] \nSort list in ascending order", "PP\nperms \n[a] -> [[a]] \nList of all permutations of the given list", "QQ\nslices \n[a] -> [[a]] \nAll contiguous sublists", "RR\nreplic \nTInt -> a -> [a] \nList composed by a given number of copies of a value", "SS\nhook \n(x -> y -> z) -> (x -> y) -> x -> z \nS-combinator", "TT\ntrsp \n[[a]] -> [[a]] \nTranspose a 2-d list, elements missing from shorter rows are skipped", "UU\nnubw \nConcrete a => [a] -> [a] \nLongest prefix of a list with all unique elements", "VV\nany \nConcrete b => (a->b) -> [a] -> TNum \nIndex of first element satisfying predicate, 0 if not found", "WW\nwhere \nConcrete b => (a->b) -> [a] -> [TNum] \nIndices of elements satisfying predicate", "XX\nslice \nTNum -> [a] -> [[a]] \nAll subslists of length n. Negative n includes final stubs.", "YY\nmax \n(Concrete x) => x -> x -> x \nMaximum of two values", "^^\npower \nTNum -> TNum -> TNum \nSecond argument raised to the power of the first", "__\nneg \nTNum -> TNum \nNegate a number", "``\nflip \n(x -> y -> z) -> y -> x -> z \nInvert order of arguments", "aa\nabs \nTNum -> TNum \nAbsolute value", "cc\nchr \nTNum -> TChar \nConvert integer to character", "dd\nbase10 \nTNum -> [TNum] \nBase-10 digits", "ee\nlist2 \nx -> x -> [x] \nCreate a list with two elements", "ff\nfilter \n(Concrete y) => (x -> y) -> [x] -> [x] \nFilter list by predicate", "gg\ngroup \n(Concrete x) => [x] -> [[x]] \nGroup equal adjacent values", "hh\ninit \n[x] -> [x] \nRemove last element", "ii\nd2i \nTDouble -> TNum \nConvert from Double to Int by rounding (round half to even)", "kk\nkeyon \nConcrete y => (x -> y) -> [x] -> [[x]] \nGroup list elements into classes by function value. Classes are ordered by the function values.", "mm\nmap \n(x -> y) -> [x] -> [y] \nMap function over list", "nn\nbwand \nTNum -> TNum -> TNum \nBitwise AND", "oo\ncom \n(y -> z) -> (x -> y) -> x -> z \nFunction composition", "pp\npfac \nTNum -> [TNum] \nPrime factorization", "rr\nread \n(Concrete x) => [TChar] -> x \nConvert string to value", "ss\nshow \n(Concrete x) => x -> [TChar] \nConvert value to string", "tt\ntail \n[x] -> [x] \nRemove first element", "uu\nnub \n(Concrete x) => [x] -> [x] \nRemove duplicates", "vv\nbwor \nTNum -> TNum -> TNum \nBitwise OR", "ww\nwords \n[TChar] -> [[TChar]] \nSplit on spaces", "xx\nsplit \nConcrete x => x -> [x] -> [[x]] \nSplit on given element", "yy\nmin \n(Concrete x) => x -> x -> x \nMinimum of two values", "zz\nzip \n(x -> y -> z) -> [x] -> [y] -> [z] \nZip lists with function", "||\nor \n(Concrete x) => x -> x -> x \nSecond argument if truthy, else first", "~~\nbranch \n(x -> y -> z) -> (u -> x) -> (v -> y) -> (u -> v -> z) \nCompose both arguments of binary function separately", "··\ncomf \n(x -> y -> z) -> (u -> y) -> (x -> u -> z) \nCompose second argument of function", "₀₀\nSubscript digit\n\nLine label", "₁₁\nSubscript digit\n\nLine label", "₂₂\nSubscript digit\n\nLine label", "₃₃\nSubscript digit\n\nLine label", "₄₄\nSubscript digit\n\nLine label", "₅₅\nSubscript digit\n\nLine label", "₆₆\nSubscript digit\n\nLine label", "₇₇\nSubscript digit\n\nLine label", "₈₈\nSubscript digit\n\nLine label", "₉₉\nSubscript digit\n\nLine label", "⌈⌈\nceil \nTNum -> TNum \nCeiling function", "⌉⌉\nlcm \nTNum -> TNum -> TNum \nLowest common multiple", "⌊⌊\nfloor \nTNum -> TNum \nFloor function", "⌋⌋\ngcd \nTNum -> TNum -> TNum \nGreatest common divisor", "ΓΓ\nlist \ny -> (x -> [x] -> y) -> [x] -> y \nPattern match on list", "ΘΘ\nprep0 \n[x]->[x] \nPrepends a default value of the appropriate type to a list. Default values are either falsy values (0,[],...) or functions returning those values.", "ΛΛ\nall \nConcrete b => (a->b) -> [a] -> TNum \nLength + 1 if all elements satisfy predicate, else 0", "ΞΞ\nmerge \nConcrete a => [[a]] -> [a] \nMerge a list of lists. Each list should be ordered, and if there are more than 2 lists, their heads should also be ordered. Works on infinite lists.", "ΠΠ\nprod \n[TNum] -> TNum \nProduct of list", "ΣΣ\nsum \n[TNum] -> TNum \nSum of list", "ΨΨ\ntoadjM \n(((a, a) -> c) -> [(a,a)] -> [[(a, a)]]) -> (a -> a -> c) -> [a] -> [[a]] \nApply higher-order function on adjacent pairs instead of single elements", "ΩΩ\nuntil \nConcrete y => (x -> y) -> (x -> x) -> x -> x \nIterate function until test result is truthy", "δδ\ndecorM \n(((a, b) -> c) -> [(a,b)] -> [[(a,d)]]) -> (a -> b -> c) -> [a] -> [b] -> [[d]] \nApply higher-order function using auxiliary list", "εε\nsmall \nTNum -> TNum \nHas absolute value at most 1", "ηη\nonixes \n((TNum -> a) -> [TNum] -> b) -> [a] -> b \nAct on list of indices using indexing function. If α is a function, ηα is roughly equivalent to α§!ŀ.", "λλ\nSmall lambda \n\nOne-argument anonymous function", "μμ\nSmall mu \n\nTwo-argument anonymous function", "ξξ\nSmall xi \n\nThree-argument anonymous function", "ππ\ncpow \nTNum -> [x] -> [[x]] \nCartesian power", "σσ\nsubs \n(Concrete x) => [x] -> [x] -> [x] \nSubstitute list elements according to mapping. Each element is mapped to the one after its first occurrence, or itself.", "φφ\nSmall phi \n\nSelf-referential anonymous function", "χχ\nSmall chi \n\nSelf-referential anonymous function with 2 extra arguments", "ψψ\nSmall psi \n\nSelf-referential anonymous function with extra argument", "ωω\nfixp \n(Concrete x) => (x -> x) -> x -> x \nFind periodic point by iterating", "⁰⁰\nSuperscript digit\n\nLambda argument", "¹¹\nSuperscript digit\n\nLambda argument", "²²\nSuperscript digit\n\nLambda argument", "³³\nSuperscript digit\n\nLambda argument", "⁴⁴\nSuperscript digit\n\nLambda argument", "⁵⁵\nSuperscript digit\n\nLambda argument", "⁶⁶\nSuperscript digit\n\nLambda argument", "⁷⁷\nSuperscript digit\n\nLambda argument", "⁸⁸\nSuperscript digit\n\nLambda argument", "⁹⁹\nSuperscript digit\n\nLambda argument", "¢¢\ncycle \n[x] -> [x] \nRepeat list infinitely", "££\noelem \n(Concrete x) => [x] -> x -> TNum \nLike elem, but the list is supposed to be sorted", "€€\nelem \n(Concrete x) => [x] -> x -> TNum \nIndex of first occurrence, or 0 if not found", "¥¥\nixsof \n(Concrete x) => x -> [x] -> [TNum] \nIndices of occurrence", "ƒƒ\nfix \n(x -> x) -> x \nLeast fixed point (used for recursion)", "´´\nargdup \n(x -> x -> y) -> x -> y \nApply twice to same argument", "▲▲\nmaxl \n(Concrete x) => [x] -> x \nMaximum of list", "▼▼\nminl \n(Concrete x) => [x] -> x \nMinimum of list", "►►\nmaxlby \nConcrete y => (x -> x -> y) -> [x] -> x \nMaximum element with custom ordering predicate", "◄◄\nminlby \nConcrete y => (x -> x -> y) -> [x] -> x \nMinimum element with custom ordering predicate", "§§\nfork \n(x -> y -> z) -> (u -> x) -> (u -> y) -> u -> z \nCompose each argument of binary function", "ĊĊ\ngaps \nTNum -> [a] -> [a] \nTake every abs(n)'th element, starting from the first if n is positive, from the -n-1st if negative", "ḊḊ\ndivs \nTNum -> [TNum] \nList of divisors", "ḞḞ\nfoldr \n(x -> y -> y) -> y -> [x] -> y \nRight fold", "ĠĠ\nscanr \n(x -> y -> y) -> y -> [x] -> [y] \nScan from right", "İİ\nDotted capital I \n\nAccess built-in numeric sequences", "ṀṀ\nrmap \n(x -> y -> z) -> x -> [y] -> [z] \nMap over right argument", "ṖṖ\npowset \n[x] -> [[x]] \nAll finite subsequences", "ṘṘ\nclone \nTNum -> [x] -> [x] \nReplicate each element by given number", "ṠṠ\nhookf \n(x -> y -> z) -> (y -> x) -> y -> z \nLike S, but composes on other argument", "ṪṪ\ntable \n(x -> y -> z) -> [x] -> [y] -> [[z]] \nOuter product, or \"multiplication table\"", "ẊẊ\nmapad2 \n(x -> x -> y) -> [x] -> [y] \nMap over pairs of adjacent values", "ḋḋ\nbase2 \nTNum -> [TNum] \nBinary digits", "ėė\nlist3 \nx -> x -> x -> [x] \nCreate a list with three elements", "ḟḟ\nfind \n(Concrete y) => (x -> y) -> [x] -> x \nReturn first value that gives truthy result", "ġġ\ngroupOn \n(Concrete y) => (x -> y) -> [x] -> [[x]] \nGroup on function result", "ḣḣ\nheads \n(Concrete x) => x -> [x] \nPrefixes for lists, range for numbers", "ŀŀ\nlrange \nTNum -> [TNum] \nLowered range (from 0 to n-1)", "ṁṁ\ncmap \n(x -> [y]) -> [x] -> [y] \nMap function over list and concat the result", "ȯȯ\n\nToo many to list \nComposition of three functions; ȯABC is roughly equivalent to oAoBC", "ṗṗ\nisprime \nTNum -> TNum \nReturn the index of the argument in the list of all primes, or 0 if it is not a prime number", "ṙṙ\nrotate \nTNum -> [a] -> [a] \nRotate n steps to the left", "ṡṡ\nsrange \nTNum -> [TNum] \nSymmetric range (from -n to n)", "ṫṫ\ntails \n(Concrete x) => x -> [x] \nSuffixes for lists, reversed range for numbers", "żż\nzip' \n(a -> a -> a) -> [a] -> [a] -> [a] \nLike zip, but keeps trailing elements from the longer list unchanged.", "¨¨\nDieresis \n\nDelimiter for compressed strings", "ËË\nsameon \nConcrete y => (x -> y) -> [x] -> TNum \nAre function results all equal? Returns length + 1 or 0.", "ÖÖ\nsorton \n(Concrete y) => (x -> y) -> [x] -> [x] \nSort by function result", "ëë\nlist4 \nx -> x -> x -> x -> [x] \nCreate a list with four elements", "öö\n\nToo many to list \nComposition of four functions; öABCD is roughly equivalent to oAoBoCD", "üü\nnubon \n(Concrete x) => (x -> y) -> [x] -> [x] \nRemove duplicates by function result", "øø\nempty \n[x] \nEmpty list", "□□\nsquare \nTNum -> TNum \nRaise to second power", "¶¶\nlines \n[TChar] -> [[TChar]] \nSplit on newlines", "««\nmapacL \n(x -> y -> x) -> (x -> y -> z) -> x -> [y] -> [z] \nScanl over a list with the first function, but results are produced by applying the second function to intermediate steps", "»»\nmapacR \n(y -> x -> x) -> (y -> x -> z) -> x -> [y] -> [z] \nScanr over a list with the first function, but results are produced by applying the second function to intermediate steps"]
		, bqk = ''.replace(/∙/g, '')
		, bqv = ''.replace(/∙/g, '')
		, tc = {}, bqc = {} //tab completions and ` completions
	for (let i = 0; i < bqk.length; i++)bqc[bqk[i]] = bqv[i]
	for (let i = 0; i < tcs.length; i += 4)tc[tcs[i] + tcs[i + 1] + tcs[i + 2]] = tcs[i + 3]
	for (let i = 0; i < tcs.length; i += 4) { let k = tcs[i + 2] + tcs[i + 1] + tcs[i]; tc[k] = tc[k] || tcs[i + 3] }
	let lbh = ''; for (let i = 0; i < lbs.length; i++) {
		let ks = []
		for (let j = 0; j < tcs.length; j += 4)if (lbs[i][0] === tcs[j + 3]) ks.push('\n' + tcs[j] + tcs[j + 1] + tcs[j + 2] + ' <tab>')
		for (let j = 0; j < bqk.length; j++)if (lbs[i][0] === bqv[j]) ks.push('\n` ' + bqk[j])
		lbh += '<b title="' + he(lbs[i].slice(1) + (ks.length ? '\n' + ks.join('') : '')) + '">' + lbs[i][0] + '</b>'
	}
	let d = document, el = d.createElement('div'); el.innerHTML =
		`<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>@font-face{font-family:"DVSM";src:local("DejaVu Sans Mono"),url(//Hydrazer.github.io/lb/DejaVuBQNSansMono.ttf)format('truetype');}</style>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"DVSM",monospace;border-bottom:solid #999 1px;padding:2px 2px 2px 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal;display:inline-block}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
 </style>`
	d.body.appendChild(el)
	let t, ts = [], lb = el.firstChild, bqm = 0 //t:textarea or input, lb:language bar, bqm:backquote mode
	let pd = x => x.preventDefault()
	let ev = (x, t, f, c) => x.addEventListener(t, f, c)
	ev(lb, 'mousedown', x => {
		if (x.target.classList.contains('ngn_x')) { lb.hidden = 1; upd(); pd(x); return }
		if (x.target.nodeName === 'B' && t) {
			let i = t.selectionStart, j = t.selectionEnd, v = t.value, s = x.target.textContent
			if (i != null && j != null) { t.value = v.slice(0, i) + s + v.slice(j); t.selectionStart = t.selectionEnd = i + s.length }
			pd(x); return
		}
	})
	let fk = x => {
		let t = x.target
		if (bqm) {
			let i = t.selectionStart, v = t.value, c = bqc[x.key]; if (x.which > 31) { bqm = 0; d.body.classList.remove('ngn_bq') }
			if (c) { t.value = v.slice(0, i) + c + v.slice(i); t.selectionStart = t.selectionEnd = i + 1; pd(x); return !1 }
		}
		switch (x.ctrlKey + 2 * x.shiftKey + 4 * x.altKey + 8 * x.metaKey + 100 * x.which) {
			case 900: {
				let i = t.selectionStart, v = t.value, c = tc[v.slice(i - 3, i)] //tab
				if (c) { t.value = v.slice(0, i - 3) + c + v.slice(i); t.selectionStart = t.selectionEnd = i - 1; pd(x) }
				break
			}
		}
	}
	let ff = x => {
		let t0 = x.target, nn = t0.nodeName.toLowerCase()
		if (nn !== 'textarea' && (nn !== 'input' || t0.type !== 'text' && t0.type !== 'search')) return
		t = t0; if (!t.ngn) { t.ngn = 1; ts.push(t); ev(t, 'keydown', fk) }
	}
	let upd = _ => { d.body.style.marginTop = lb.clientHeight + 'px' }
	upd(); ev(window, 'resize', upd)
	ev(d, 'focus', ff, !0); let ae = d.activeElement; ae && ff({ type: 'focus', target: ae })
})();
