<script>
(function() {
	function a() {
		var username;
		return b ? c.username : (12 <= d ? "" === (username = e.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), e.saveString(20, username)) : 5 <= d ? "" === (username = e.loadString(0)) && (username = "Player " + Math.floor(1e3 * Math.random()), e.saveString(0, username)) : username = f.g(0), username)
	}

	function h() {
		var id;
		i = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)), b ? i = c.id : 12 <= d ? -1 === (id = e.loadNumber(20)) ? e.saveNumber(20, i) : i = id : 5 <= d ? 2 === (id = e.loadNumber(2)) ? e.saveNumber(2, i + 3) : i = id - 3 : i = f.g(1)
	}

	function j() {
		var l, max;
		if (b) l = c.password;
		else if (12 <= d) l = e.loadString(22);
		else {
			if (5 <= d) return 0;
			l = f.g(9)
		}
		return max = Math.floor(Math.pow(2, 48)), 0 < (l = Math.floor(parseInt(m.n(l)))) && l < max || o(l = Math.floor(1 + (max - 1) * Math.random())) ? l : 0
	}

	function p() {
		var t;
		b ? q = c.zoom || r < s : 12 <= d ? -1 === (t = e.loadNumber(21)) ? (q = e.getNumber(0) <= 100 || r < s, e.saveNumber(21, q ? 1 : 0)) : q = 1 === t || r < s : 5 <= d ? 2 === (t = e.loadNumber(1)) ? (q = !0, e.saveNumber(1, q ? 1 : 0)) : q = 1 === t : q = 0 === f.g(4) || r < s
	}

	function u() {
		return b ? c.emojis : 5 <= d ? e.loadString(1) : f.g(7)
	}

	function v() {
		return b ? c.colors : 12 <= d ? e.loadString(21) : 5 <= d ? e.loadString(2) : f.g(8)
	}

	function w(username) {
		b ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= d ? (e.saveString(20, username), e.setState(10)) : 5 <= d ? e.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (username = "Player 666"), f.x(0, username), f.y())
	}

	function o(k) {
		k = m.z(k.toString());
		return b ? (c.password = k, window.webkit.messageHandlers.iosCommandA.postMessage("password " + k), !0) : 12 <= d ? (e.saveString(22, k), !0) : !(5 <= d || 2 !== f.a0() || (f.x(9, k), f.y(), 0))
	}

	function a1(zoom, a2) {
		b ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (a2 ? 1 : 0))) : 12 <= d ? (e.saveNumber(22, a2 ? 1 : 0), e.saveNumber(21, zoom ? 1 : 0)) : 5 <= d ? (e.saveNumber(1, zoom ? 1 : 0), e.saveNumber(11, a2 ? 1 : 0)) : (f.x(2, a2 ? 1 : 0), f.x(4, zoom ? 0 : 1), f.y())
	}

	function a3() {
		for (var l = "", a4 = 0; a4 < a5.a6; a4 += 2) l += a5.a7[a4] || a5.a7[a4 + 1] ? a5.a7[a4] && !a5.a7[a4 + 1] ? "1" : !a5.a7[a4] && a5.a7[a4 + 1] ? "2" : "3" : "0";
		b ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + l) : 5 <= d ? e.saveString(1, l) : (f.x(7, l), f.y())
	}

	function a8(l) {
		if (b) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + l);
		else {
			if (12 <= d) e.saveString(21, l);
			else if (5 <= d) return void e.saveString(2, l);
			f.x(8, l), f.y()
		}
	}

	function a9(aA) {
		b || 5 <= d && e.setState(aA)
	}

	function aB() {
		b ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad " + 18e5) : 12 <= d && e.presentAd(18e5)
	}

	function aC() {
		!b && 7 <= d ? e.setState(5) : location.reload()
	}

	function aD() {
		d < 14 || e.saveString(23, '<!DOCTYPE html>\n<html lang="aG">\n' + document.getElementsByTagName("html")[0].innerHTML + "\n</html>")
	}
	var aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, cj, cg, ci, d7;

	function aY() {
		aQ = 0, aR = 2048, aS = new Uint32Array(4 * aR), aT = 0, aU = new Uint32Array(aR), (aV = new Int32Array(4))[0] = -4 * aZ, aV[1] = 4, aV[2] = -aV[0], aV[3] = -aV[1], aW = new Uint8Array(aZ * aa)
	}

	function ab(player) {
		aM = player, aX = !1, ac(), ad();
		for (var a4 = ae.af(aM) - 1; 0 <= a4; a4--) 0 === ae.ag(aM, a4) && (aL = a4, ah());
		aX && ai()
	}

	function ai() {
		aj(), ak()
	}

	function ah() {
		aP = ae.al(aM, aL), aN = ae.am(aM, aL), an(), (0 !== aQ && (ap(), aq()) ? ar : ao)()
	}

	function aq() {
		return aO = as(aN, aQ), at < aO
	}

	function ap() {
		for (var a4 = aQ - 1; 0 <= a4; a4--) aW[as(aS[a4], 4)] = 0
	}

	function ao() {
		var t;
		1 === ae.af(aM) && au.av(aM), aM !== aw ? (ax[aM] += aN, ay.az(aM)) : (t = ax[aM], ax[aM] += aN, ay.az(aM), b0.b1[13] -= ax[aM] - t), ae.b2(aM, aL)
	}

	function ac() {
		var a4, b3 = b4[aM].length;
		for (aT = 0, a4 = (aR < b3 ? aR : b3) - 1; 0 <= a4; a4--) aU[aT++] = b4[aM][a4]
	}

	function ad() {
		for (var a4 = b4[aM].length - 1; 0 <= a4; a4--) b5.b6(b4[aM][a4]) && b5.b7(b4[aM][a4], aM);
		b4[aM] = []
	}

	function an() {
		aQ = 0, (aP === b8 ? b9 : bA)()
	}

	function bA() {
		for (var bB, bC, a4, bD = 3; 0 <= bD; bD--)
			for (a4 = aT - 1; 0 <= a4; a4--) bC = as(bB = aU[a4] + aV[bD], 4), 0 === aW[bC] && b5.bE(bB) && b5.bF(bB) === aP && (aW[bC] = 1, aS[aQ++] = bB)
	}

	function b9() {
		for (var bB, bC, a4, bD = 3; 0 <= bD; bD--)
			for (a4 = aT - 1; 0 <= a4; a4--) bC = as(bB = aU[a4] + aV[bD], 4), 0 === aW[bC] && b5.bG(bB) && (aW[bC] = 1, aS[aQ++] = bB)
	}

	function ar() {
		bH() ? (bI(), aP !== b8 && bJ()) : ao()
	}

	function bJ() {
		bK(), bL(bM[aP]), bL(bN[aP]), bO(b4[aP]), bP(bN[aP]), bP(bQ[aP]), bR(), bS()
	}

	function bI() {
		aX = !0, ae.bT(aM, aL, aN), bU[aM] += aQ, bV(), bW()
	}

	function bH() {
		return (aP === b8 ? bX : bY)()
	}

	function bY() {
		var bZ = aQ * at,
			ba = bb(),
			bc = bd(),
			ba = bZ + 2 * ba + bc,
			bf = aO * aQ;
		return ba < bf ? (aN -= ba, bg(ba - bZ, bc), !0) : (aN -= bf, bg(bf - bZ, bc), !1)
	}

	function bg(bf, bc) {
		if (0 < bc) {
			if (!(bc <= bf)) return ae.bh(aP, aM, bc - bf), void(bf = 0);
			ae.bh(aP, aM, 0), bf -= bc
		}
		bf = as(bf, 2), ax[aP] >= bf ? ax[aP] -= bf : ax[aP] = 0
	}

	function bd() {
		return ae.bi(aP, aM)
	}

	function bb() {
		return as(aQ * ax[aP], 1 + bj() * bk())
	}

	function bj() {
		return Math.floor(2 + bl(as(bU[aP], 100), 8))
	}

	function bk() {
		return bM[aP].length + as(bN[aP].length + bQ[aP].length, 50)
	}

	function bX() {
		return aN -= aQ * at, !0
	}

	function bW() {
		for (var a4 = aQ - 1; 0 <= a4; a4--) b4[aM].push(aS[a4]), bM[aM].push(aS[a4]), b5.b7(aS[a4], aM)
	}

	function bm() {
		var bn = 1,
			bo = [null, null];
		this.bp = function() {
			bn = .72 * (q ? .0011 : .001) * bq;
			for (var a4 = 1; 0 <= a4; a4--) bo[a4] && this.br(a4, bo[a4].l)
		}, this.br = function(bs, l) {
			bo[bs] = {
				l: l,
				font: bt + 10 + bu
			}, this.bv(bs)
		}, this.bv = function(bs) {
			var l, by, c0, c1, c3;
			bw.bx() && bo[bs] && (l = bo[bs].l, by = Math.floor(.15 * bn * bw.bz(13).height), c1 = c2.measureText(l, c0 = bt + by + bu), (c3 = .8 * bn * bw.bz(13).width) < c1 && (by = Math.floor(by * c3 / c1), c0 = bt + by + bu), bo[bs] = {
				l: l,
				font: c0
			}, c4.c5 = !0)
		}, this.c6 = function() {
			return Math.floor(bn * bw.bz(13).height)
		}, this.c7 = function(c8, c9) {
			return !!bw.bx() && !(c8 < cA || c9 < cB - cC.c1 - bn * bw.bz(13).height - 2 * cA || c9 > cB - cC.c1 - 2 * cA || (c8 < cA + bn * bw.bz(13).width ? (cD.cE(0), 0) : c8 < 2 * cA + bn * bw.bz(13).width || !(c8 < 2 * cA + 2 * bn * bw.bz(13).width) || (cD.cE(1), 0)))
		}, this.cF = function() {
			return Math.floor(cB - cC.c1 - bn * bw.bz(13).height - 2 * cA)
		}, this.cG = function() {
			if (bw.bx()) {
				cH.imageSmoothingEnabled = !0, cH.setTransform(bn, 0, 0, bn, cA, this.cF()), cH.drawImage(bw.bz(14), 0, 0), cH.setTransform(bn, 0, 0, bn, 2 * cA + bn * bw.bz(13).width, this.cF()), cH.drawImage(bw.bz(13), 0, 0);
				for (var a4 = 1; 0 <= a4; a4--) bo[a4] && (cH.setTransform(1, 0, 0, 1, (1 + a4) * cA + a4 * bn * bw.bz(13).width, this.cF()), cH.font = bo[a4].font, cH.textBaseline = cI, cH.textAlign = cJ, cH.fillStyle = cK, cH.fillText(bo[a4].l, .5 * bn * bw.bz(13).width, .86 * bn * bw.bz(13).height));
				cH.setTransform(1, 0, 0, 1, 0, 0)
			}
		}
	}

	function cL(player, cM, b3, cN) {
		var cO = as(3 * ax[player], 256);
		cN -= cN >= as(ax[player], 2) ? cO : 0, cP(b3, player), ae.cQ(player, cN, cM), ax[player] -= cN + cO, au.cR(player, !1)
	}

	function cS(player, cM) {
		for (var cT, a4 = bM[player].length - 1; 0 <= a4; a4--)
			if (b5.cU(bM[player][a4]))
				for (cT = 3; 0 <= cT; cT--)
					if (b5.bE(bM[player][a4] + aV[cT]) && b5.bF(bM[player][a4] + aV[cT]) === cM) {
						b4[player].push(bM[player][a4]);
						break
					}
	}

	function cP(cV, player) {
		for (var a4 = b4[player].length - 1; cV <= a4; a4--) b5.cW(b4[player][a4], player)
	}

	function cX(player) {
		for (var cT, a4 = bM[player].length - 1; 0 <= a4; a4--)
			if (b5.cU(bM[player][a4]))
				for (cT = 3; 0 <= cT; cT--)
					if (b5.bG(bM[player][a4] + aV[cT])) {
						b4[player].push(bM[player][a4]);
						break
					}
	}

	function cY(player, cZ) {
		var a4, ca, cT, cb, b3 = bM[player].length,
			cc = 256 <= b3 ? 12 : 32 <= b3 ? 6 : 1,
			cd = b3 - 1 - ce.cf(cc);
		cg = 0;
		loop: for (a4 = cd; 0 <= a4; a4 -= cc)
			for (cT = 3; 0 <= cT; cT--)
				if ((cb = b5.bG(bM[player][a4] + aV[cT]) ? b8 : b5.bF(bM[player][a4] + aV[cT])) === b8 || b5.bE(bM[player][a4] + aV[cT]) && cb !== player && (cZ || ch(player, cb))) {
					for (ca = cg - 1; 0 <= ca; ca--)
						if (ci[ca] === cb) continue loop;
					if (ci[cg] = cb, ++cg >= cj) return !0
				}
		return 0 < cg
	}

	function ck(player, cZ) {
		var a4, cT, cb;
		for (cg = 0, a4 = bM[player].length - 1; 0 <= a4; a4--)
			for (cT = 3; 0 <= cT; cT--)
				if ((cb = b5.bG(bM[player][a4] + aV[cT]) ? b8 : b5.bF(bM[player][a4] + aV[cT])) === b8 || b5.bE(bM[player][a4] + aV[cT]) && cb !== player && (cZ || ch(player, cb))) return ci[cg++] = cb, !0;
		return !1
	}

	function cl() {
		for (var cm, a4 = cg - 1; 0 <= a4; a4--)
			if (ci[a4] === b8) {
				for (cg--, cm = a4; cm < cg; cm++) ci[cm] = ci[cm + 1];
				return !0
			} return !1
	}

	function cn(player) {
		for (var cm, a4 = cg - 1; 0 <= a4; a4--)
			if (ae.co(player, ci[a4]))
				for (cg--, cm = a4; cm < cg; cm++) ci[cm] = ci[cm + 1];
		return 0 === cg
	}

	function cp() {
		for (var a4 = cg - 1; 0 <= a4; a4--)
			if (ci[a4] >= cq) return !0;
		return !1
	}

	function cr() {
		for (var a4 = cg - 1; 0 <= a4; a4--) ci[a4] < cq && (ci[a4] = ci[--cg]);
		return 0 < cg
	}

	function cs(player) {
		for (var cm, ct = ci[0], cu = ax[ct] + ae.bi(ct, player), a4 = cg - 1; 1 <= a4; a4--)(cm = ax[ci[a4]] + ae.bi(ci[a4], player)) < cu && (ct = ci[a4], cu = cm);
		return ct
	}

	function cv(player) {
		var cw, cx = ci[0];
		if (1 !== cg)
			for (var cy = as(cz[player] + d0[player], 2), d1 = as(d2[player] + d3[player], 2), d4 = d5(cy - as(cz[cx] + d0[cx], 2)) + d5(d1 - as(d2[cx] + d3[cx], 2)), a4 = cg - 1; 1 <= a4; a4--)(cw = d5(cy - as(cz[ci[a4]] + d0[ci[a4]], 2)) + d5(d1 - as(d2[ci[a4]] + d3[ci[a4]], 2))) < d4 && (d4 = cw, cx = ci[a4]);
		return cx
	}

	function d6() {
		return ci[ce.cf(cg)]
	}

	function d8() {
		cj = 8, cg = 0, ci = new Uint16Array(cj)
	}

	function d9() {
		d7 = dA ? new Uint8Array(b8) : null
	}

	function dB(player, cN) {
		var dC;
		dA && (d7[player] = 0), !ae.dD(player) || cN < 60 || (0 === bM[player].length ? dE.dF(player, dG.cN[player - cq]) || (dG.dH(player - cq, 200), dI(player, cN, dG.cN[player - cq], ay.dJ(player))) : 0 < bN[player].length && ce.random() < ce.value(bN[player].length > bM[player].length ? 7 : 3) && dE.dF(player, dG.cN[player - cq]) || (dC = ay.dJ(player), ax[player] > dC && cN < ax[player] - dC && (cN = ax[player] - dC), dA ? dK(player, cN, dG.cN[player - cq], dC) : dL(player, cN, dG.cN[player - cq])))
	}

	function dK(player, cN, dM, dC) {
		var cM;
		cY(player, !1) || ck(player, !1) ? (d7[player] = 1, cn(player) || (cl() ? (dN(player, cN), dO(player, b8, dM)) : (ce.dP(dG.dQ[dM]) ? dR(player, cN, cM = cs(player)) : (cp() && ce.dP(dG.dS[dM]) && cr(), dR(player, cN, cM = cv(player))), dO(player, cM, dM)))) : 0 < bN[player].length && ce.random() < ce.value(60) && dE.dF(player, dM) || (dG.dH(player - cq, 200), dI(player, cN, dM, dC))
	}

	function dT(player, cN) {
		cY(player, !1) || ck(player, !1) ? (d7[player] = 1, cl() ? dN(player, cN) : dR(player, cN, d6())) : dI(player, cN, 0, 0)
	}

	function dO(player, cM, dM) {
		3 <= dM && 2142 < c4.dU() && (cM === b8 || ax[cM] < as(ax[player], 20)) && dG.dH(player - cq, 25)
	}

	function dI(player, cN, dM, dC) {
		var a4, cm, dV;
		if (0 !== dW.dX[player] && !(5 === dM && ax[player] < dC || 4 === dM && ax[player] < as(dC, 2)))
			for (a4 = ce.cf(dY), cm = 0; cm < dY; cm++)
				if (dV = dZ[(cm + a4) % dY], dW.dX[dV] === dW.dX[player] && 1 === d7[dV]) return da(player, dV, cN), void(dV < cq && ce.random() < ce.value(10) && (d7[dV] = 0))
	}

	function dL(player, cN, dM) {
		!cY(player, !0) && !ck(player, !0) || cn(player) || (cl() ? dN(player, cN) : ce.dP(dG.dQ[dM]) ? dR(player, cN, cs(player)) : (cp() && ce.dP(dG.dS[dM]) && cr(), dR(player, cN, cv(player))))
	}

	function db(player, cN) {
		(cY(player, !0) || ck(player, !0)) && (cl() ? dN(player, cN) : dR(player, cN, d6()))
	}

	function dR(player, cN, cM) {
		as(ax[player], 8) > ax[cM] && (cN = (dc = as(11 * ax[cM], 5)) < cN ? cN : dc);
		var dc = b4[player].length;
		cS(player, cM), cL(player, cM, dc, cN)
	}

	function dN(player, cN) {
		var cM = b8,
			b3 = b4[player].length;
		return cX(player), b4[player].length !== b3 && (cL(player, cM, b3, cN), !0)
	}
	self.aiCommand746 = function(aH) {
		0 === aH ? aI() : 1 !== aH || d < 14 || aJ.aK()
	};
	var cq, j1, dq, j0, dd = [60, 74, 112, 200, 256, 512];

	function de() {
		var df, dg, dh, di, dj, dk;

		function e0(a4) {
			df[a4] = 1 + as(dj[a4] * ce.random(), 10 * ce.value(100))
		}
		this.dl = ["çok kolay", "kolay", "Normal", "zor", "daha zor", "çok zor"], this.dm = [97, 95, 93, 90, 87, 84], this.dS = [98, 95, 70, 40, 20, 0], this.dn = [85, 70, 50, 30, 7, 3], this.dQ = [0, 0, 5, 25, 50, 90], this.bp = function() {
			var a4, dp;
			if (df = new Uint8Array(dq), dg = new Uint16Array(dq), dh = new Uint16Array(dq), di = new Uint8Array(dq), this.cN = new Uint8Array(dq), dj = new Uint16Array(dq), dk = new Uint16Array(dq), dr.ds) {
				if (dr.dt.du)
					for (a4 = dq - 1; 0 <= a4; a4--) this.cN[a4] = dr.dt.du[a4 + 1]
			} else if (9 === dv) this.dw();
			else if (dx)
				if (dA)
					for (a4 = dq - 1; 0 <= a4; a4--) this.cN[a4] = dy.dz[dW.dX[a4 + cq] - 1].bD;
				else
					for (a4 = dq - 1; 0 <= a4; a4--) this.cN[a4] = dy.dz[0].bD;
			else
				for (dp = 8 === dv ? 3 : 0, a4 = dq - 1; 0 <= a4; a4--) this.cN[a4] = dp;
			for (a4 = dq - 1; 0 <= a4; a4--) this.cN[a4] <= 2 ? (di[a4] = 5, dj[a4] = dk[a4] = 1040, 0 === this.cN[a4] ? (dg[a4] = 1e3, dh[a4] = 1e3) : 1 === this.cN[a4] ? (dg[a4] = 1e3, dh[a4] = 920, dj[a4] = dk[a4] = 1100) : (dg[a4] = 825, dh[a4] = 750)) : this.cN[a4] <= 4 ? (di[a4] = 1 + ce.cf(20), 3 === this.cN[a4] ? (dg[a4] = dh[a4] = 500, dj[a4] = dk[a4] = 1e3) : (dk[a4] = 250 + ce.cf(1501), dj[a4] = 500 + ce.cf(501), dg[a4] = 300 + ce.cf(201), dh[a4] = 100 + ce.cf(201))) : (dj[a4] = 1e3, dk[a4] = 1e3, di[a4] = 35 + ce.cf(16), dg[a4] = 300 + ce.cf(201), dh[a4] = 50 + ce.cf(101)), e0(a4)
		}, this.dw = function() {
			for (var cm, e1 = e2.e3, a4 = e1 - 1; 0 <= a4; a4--) this.cN[a4] = 5;
			for (cm = 0; cm < 6; cm++)
				if (0 < e2.e4[cm]) {
					for (a4 = e1 + e2.e4[cm] - 1; e1 <= a4; a4--) this.cN[a4] = cm;
					e1 += e2.e4[cm]
				}
		}, this.dH = function(e5, value) {
			0 <= e5 && (df[e5] = value)
		}, this.dF = function(e5) {
			0 == --df[e5] && ! function(e5) {
				! function(e5) {
					dj[e5] !== dk[e5] && (dj[e5] += dj[e5] < dk[e5] ? 3 : -3);
					dg[e5] !== dh[e5] && (dg[e5] += dg[e5] < dh[e5] ? di[e5] : -di[e5], dg[e5] = (Math.abs(dg[e5] - dh[e5]) <= di[e5] ? dh : dg)[e5]);
					df[e5] = as(dj[e5], 10)
				}(e5);
				var player = e5 + cq;
				dB(player, as(dg[e5] * ax[player], 1e3))
			}(e5)
		}
	}

	function e8() {
		e9.dF(), eA.dF(), eB.eC(), eD.dF()
	}

	function eE() {
		ay.dF(), eF.dF(), eG.dF(), eH.dF(), eI.dF(), eJ.dF(), au.dF(), eK.dF(), eL(), eM.dF(), e2.dF(), eA.dF(), eA.eN(), eB.dF(), eO.dF(), eP.dF(), eQ.dF(), e9.dF(), eR.dF(), eS.dF(), eT.dF(), b0.dF(), eU.dF(), eD.dF()
	}

	function eV() {
		eW.dF(), eX.dF(), c2.dF(), eY.dF(), eZ.ea()
	}

	function eb() {
		eM.ec(!1), eQ.ec(), eB.ec(!1), eP.ec(), eS.ec(), eT.ec(), eA.ec(2 === ed), eU.bv()
	}

	function ee() {
		eA.ec(!0) && (c4.c5 = !0), eD.dF()
	}

	function ef() {
		var eg, eh, ei, ej, ek, el;

		function ep(er) {
			for (var a4 = eh - 1; 0 <= a4; a4--) 0 === ej[ei[a4]] && bU[ei[a4]] >= er && ab(ei[a4])
		}

		function en(player) {
			10 === ej[player] ? ej[player] = eg : bU[player] < 1e3 ? ej[player] = 3 : bU[player] < 1e4 ? ej[player] = 2 : bU[player] < 6e4 ? ej[player] = 1 : ej[player] = 0
		}
		this.bp = function() {
			ek = el = 0, eg = 6, eh = 0, ei = new Uint16Array(b8), ej = new Uint8Array(b8)
		}, this.dF = function() {
			var a4;
			for (ek = b0.b1[13], el = ax[aw], a4 = eh - 1; 0 <= a4; a4--) 10 === ej[ei[a4]] ? en(ei[a4]) : 0 == ej[ei[a4]]-- && (en(ei[a4]), ab(ei[a4]));
			16e4 <= bU[eo[0]] && (ep(16e4), 3e5 <= bU[eo[0]]) && ep(3e5), bU[aw] > b0.b1[7] && (b0.b1[7] = bU[aw]), b0.b1[14] += el - ax[aw] + ek - b0.b1[13]
		}, this.av = function(player) {
			for (var ca, a4 = eh - 1; 0 <= a4; a4--)
				if (player === ei[a4]) {
					for (eh--, ca = a4; ca < eh; ca++) ei[ca] = ei[ca + 1];
					return
				}
		}, this.cR = function(player, es) {
			for (var a4 = eh - 1; 0 <= a4; a4--)
				if (player === ei[a4]) return;
			ei[eh++] = player, ej[player] = es ? 2 : 10
		}
	}

	function et() {
		var eu, ev, ew, player;

		function f7(bB) {
			if (b5.b6(bB) && (b5.bG(bB) || b5.bF(bB) !== player && ch(player, b5.bF(bB)))) {
				if (f1.co(player, bB)) return 2;
				if (0 == eu--) return 0
			}
			return 1
		}

		function f6(cd, f8) {
			for (var f9, fA, fC, c1, cw, fD, a4 = cd; a4 < cd + 50 * f8; a4 += f8) {
				f9 = (f9 = d0[player] - a4) < 1 ? 1 : f9, fA = (fA = d3[player] - a4) < 1 ? 1 : fA, fB = cz[player] + a4, fB = aZ - 1 <= fB ? aZ - 2 : fB, fC = d2[player] + a4, fC = aa - 1 <= fC ? aa - 2 : fC, fD = as(ce.random() * (2 * (fB - f9 + fC - fA)), ce.value(100)), cw = fC - fA, ew = fD <= (c1 = fB - f9) ? (ev = f9 + fD, fA) : fD <= c1 + cw ? (ev = fB, fA + fD - c1) : fD <= 2 * c1 + cw ? (ev = f9 + fD - c1 - cw, fC) : (ev = f9, fA + fD - 2 * c1 - cw);
				var fB = f7(b5.f3(ev, ew));
				if (1 !== fB) return fB
			}
			return 1
		}
		this.dF = function(ex, ey) {
			if (0 !== bN[player = ex].length && (eu = 3, 0 !== (ex = function() {
					for (var f4, a4 = 40; 1 <= a4; a4--)
						if (ev = d0[player] + as(ce.random() * (cz[player] - d0[player] + 1), ce.value(100)), ew = d3[player] + as(ce.random() * (d2[player] - d3[player] + 1), ce.value(100)), 1 !== (f4 = f7(b5.f3(ev, ew)))) return f4;
					return 1
				}()) && (2 === ex || 0 !== (ex = f6(1, 1)) && (2 === ex || 2 === f6(54, 4))))) {
				ex = as(dG.dn[ey] * ax[player], 100);
				if (100 <= (ex = ex < 100 && 100 <= ax[player] ? 100 : ex)) return f0(player, f1.f2(), b5.f3(ev, ew), ex)
			}
			return !1
		}
	}

	function fE() {
		var cV, fF;
		this.bp = function() {
			cV = dq, fF = new Uint16Array(dq);
			for (var a4 = dq - 1; 0 <= a4; a4--) fF[a4] = a4
		}, this.dF = function() {
			for (var a4 = cV - 1; 0 <= a4; a4--) 0 === fH[fF[a4] + cq] ? function(ca) {
				cV--;
				for (var a4 = ca; a4 < cV; a4++) fF[a4] = fF[a4 + 1]
			}(a4) : dG.dF(fF[a4])
		}
	}

	function fJ() {
		var player, id, fK, cM, fL, fM;

		function fb(ex, fu, fS, fW, fT, fU) {
			! function(fS) {
				return 0 < fS && fS <= 1e3
			}(fS) || (player.push(ex), id.push(fu), fK.push(fS), cM.push(fW), fL.push(fT), fM.push(fU))
		}
		this.bp = function() {
			player = [], id = [], fK = [], cM = [], fL = [], fM = []
		}, this.dF = function() {
			for (var ex, fY, b3 = player.length, a4 = 0; a4 < b3; a4++) 0 === id[a4] ? fN(player[a4], cM[a4], fK[a4]) : 1 === id[a4] ? this.fO(player[a4], fK[a4], fL[a4], fM[a4]) : 2 === id[a4] ? this.fP(player[a4], cM[a4]) : 6 === id[a4] ? (ex = player[a4], fY = cM[a4], 0 !== fH[ex] && 2 !== fV[player] && eT.fZ(ex, 1 === fY)) : 7 === id[a4] && this.fR(player[a4], cM[a4]);
			0 < b3 && this.bp()
		}, this.fO = function(ex, fS, fT, fU) {
			0 !== fH[ex] && 2 !== fV[player] && f1.co(ex, b5.f3(fT, fU)) && f0(ex, f1.f2(), b5.f3(fT, fU), as(fS * ax[ex], 1e3)) && ex === aw && (b0.b1[0] += fS, b0.b1[1]++, b0.b1[2]++)
		}, this.fP = function(ex, fW) {
			var cN;
			0 !== fH[ex] && 2 !== fV[player] && ae.co(ex, fW) && (cN = ae.bi(ex, fW), ae.bh(ex, fW, 0), ex !== aw ? (ax[ex] += cN, ay.az(ex)) : (fW = ax[ex], ax[ex] += cN, ay.az(ex), b0.b1[13] -= ax[ex] - fW))
		}, this.fR = function(ex, id) {
			var cN;
			0 !== fH[ex] && 2 !== fV[player] && -1 !== (id = ae.fX(ex, id)) && (cN = ae.am(ex, id), ae.bT(ex, id, 0), ax[ex] += cN, ay.az(ex))
		}, this.fa = function(ex, fS, fW) {
			1 === ed && fb(ex, 0, fS, fW, 0, 0)
		}, this.fc = function(ex, fS, fT, fU) {
			1 === ed && (fd ? fe.cQ(ex, fT, fU) : fb(ex, 1, fS, 0, fT, fU))
		}, this.ff = function(ex, fW) {
			1 === ed && fb(ex, 2, 1, fW, 0, 0)
		}, this.fg = function(ex, id) {
			1 === ed && fb(ex, 7, 1, id, 0, 0)
		}, this.fh = function(ex, fY) {
			1 === ed && fb(ex, 6, 1, fY, 0, 0)
		}, this.fi = function(ex) {
			1 === ed && 0 !== fH[ex] && 2 !== fV[ex] && (8 === dv ? fj.fk(1 - ex) : this.fl(ex)), e9.fm(ex, 4)
		}, this.fl = function(ex) {
			fd ? (fn(ex), fo()) : eI.fp(ex)
		}, this.fq = function(ex) {
			0 !== fH[ex] && 2 !== fV[ex] && fr.fs(ex) && (1 === dY ? fj.fk(ex) : (e9.fm(ex, ex === aw ? 21 : 22), 8 === dv ? fj.fk(1 - ex) : dx ? (fn(ex), fo(), fd && fe.dF()) : this.fl(ex)))
		}
	}

	function fv() {
		var fw, fx, eh, ei, ej, fy, fz, g0;

		function g3(a4) {
			var ca;
			for (eh--, ca = a4; ca < eh; ca++) ei[ca] = ei[ca + 1], ej[ca] = ej[ca + 1], fy[ca] = fy[ca + 1], fz[ca] = fz[ca + 1], g0[ca] = g0[ca + 1]
		}
		this.bp = function() {
			fw = 1, eh = 0, fx = 2 * b8, ei = new Uint16Array(fx), ej = new Uint8Array(fx), fy = new Uint16Array(fx), fz = new Uint32Array(fx), g0 = new Uint32Array(fx)
		}, this.g1 = function(bs, position) {
			fz[bs] = position
		}, this.dF = function() {
			for (var a4 = eh - 1; 0 <= a4; a4--) 0 == ej[a4]-- && (ej[a4] = 2, g2.dF(a4, fy[a4], ei[a4], fz[a4], g0[a4]))
		}, this.av = function(player, id) {
			for (var a4 = eh - 1; 0 <= a4; a4--)
				if (player === ei[a4] && id === fy[a4]) return void g3(a4)
		}, this.g4 = function(player) {
			for (var a4 = eh - 1; 0 <= a4; a4--) player === ei[a4] && (g2.g5(player, fz[a4]), g3(a4))
		}, this.cR = function(player, cd, g6) {
			if (fx <= eh) return 0;
			ei[eh] = player, ej[eh] = 0, fy[eh] = fw, fz[eh] = cd, g0[eh] = g6;
			player = fw;
			return eh++, fw = 2 * fx < ++fw ? 1 : fw, player
		}, this.cG = function() {
			if (!(g8 < 40 || 0 === eh)) {
				var ca, fL, fM, a4, by, gC, cN, f9 = gD / g8,
					fA = gE / g8,
					fB = (gF + gD) / g8,
					fC = (cB + gE) / g8;
				for (cH.textAlign = cJ, cH.textBaseline = cI, ca = eh - 1; 0 <= ca; ca--) fL = b5.gG(fz[ca]), fM = b5.cF(fz[ca]), a4 = ei[ca], f9 - 1 < fL && fL < fB && fA - 1 < fM && fM < fC && 0 !== fH[a4] && ((by = Math.floor(.94 * g8 * eA.gH(a4))) < 6 || (fL = Math.floor(gF * (fL + .5 - f9) / (fB - f9)), fM = Math.floor(cB * (fM + .48 - fA) / (fC - fA)), cH.font = bt + by + bu, cH.fillStyle = gI, cN = ae.am(a4, ae.fX(a4, fy[ca])), cH.fillText(gJ.gK.gL ? eQ.gM(cN) : gN[a4], fL, fM), (gC = Math.floor(.5 * by)) < 6) || (cH.font = bt + gC + bu, cH.fillText(gJ.gK.gL ? gN[a4] : eQ.gM(cN), fL, fM + Math.floor(.82 * by))))
			}
		}
	}

	function gO() {
		var gP, gQ, gR, gS, gT, gU, gV, gW, gX, gY, gZ, ga, gb, gc = !1,
			gd = !1;

		function ge(gf) {
			ga = c4.gg, gR = gS = gQ = 0, gT = (gb = 33) / gf, gP = 1 / (gf / gb / 4), gU = (gF / 2 + gD) / g8, gV = (cB / 2 + gE) / g8, gW = g8
		}

		function gv(gz) {
			Math.abs(Math.log(gZ / gW)) < .125 && (gZ = gz * gW)
		}

		function gu(f9, fA, fB, fC) {
			gX = (f9 + fB + 1) / 2, gY = (fA + fC + 1) / 2;
			fB = gF / (fB - f9 + 1), f9 = cB / (fC - fA + 1);
			gZ = .9 * (fB < f9 ? fB : f9)
		}
		this.gh = function() {
			return gc
		}, this.gi = function() {
			ge(1), this.gj(0, 0, aZ - 1, aa - 1), fd || this.gk(aw, 3e3, !0, .3)
		}, this.gk = function(player, gf, gl, zoom) {
			gm || gc && !gl && gd || 0 === bU[player] || (gn.go = !1, gd = gl, ge(gf), function(player) {
				gX = (d0[player] + cz[player] + 1) / 2, gY = (d3[player] + d2[player] + 1) / 2
			}(player), function(zoom, player) {
				var gw = cz[player] - d0[player] + 1,
					player = d2[player] - d3[player] + 1,
					ca = gF / gw,
					cm = cB / player,
					ca = (gZ = ca < cm ? ca : cm, 0 !== zoom ? zoom : gw < 20 && player < 20 ? .5 : .9);
				gZ *= ca, gv(7 / 8)
			}(zoom, player), gc = !0, gr.gs())
		}, this.gt = function(gf) {
			gn.go = !1, gd = !0, ge(gf), gu(0, 0, aZ - 1, aa - 1), gv(7 / 8), gc = !0, gr.gs()
		}, this.gj = function(f9, fA, fB, fC) {
			gu(f9, fA, fB, fC), g8 = gZ, gn.h0(gX, gF / 2), gn.h1(gY, cB / 2), h2.h3()
		}, this.h4 = function() {
			return !(gc && gd || (gc = !1))
		}, this.dF = function() {
			var h7, h8, bD, hB;
			gc && (gQ < .5 ? gS < gT && (gS += gT * gP, gR = gQ) : 1 - gR < gQ && (gS = (gS -= gT * gP) < gT * gP ? gT * gP : gS), ga = ga >= c4.gg ? c4.gg - 1 : ga, bD = c4.gg - ga, gQ = 1e3 < bD || 1 < (gQ += gS * bD / gb) ? 1 : gQ, ga = c4.gg, bD = g8, h7 = gD, h8 = gE, bD = (g8 = gW * Math.pow(gZ / gW, gQ)) / bD, hB = 1 - (gW * Math.pow(gZ / gW, 1 - gQ) - gW) / (gZ - gW), gn.h0(gU + hB * (gX - gU), gF / 2), gn.h1(gV + hB * (gY - gV), cB / 2), eA.zoom(bD, (h7 * bD - gD) / (1 - bD), (h8 * bD - gE) / (1 - bD)), h2.h3(), 1 <= gQ && (gc = !1, hC.hD = !0), c4.c5 = !0)
		}
	}

	function hE() {
		var fL, fM, c1, cw, hF, hG, hH, hI, player, hJ;

		function hR() {
			return function() {
				var a4;
				for (a4 = 0; a4 < 8; a4++)
					if (fL = as(c1 * ce.random(), ce.value(100)), fM = as(cw * ce.random(), ce.value(100)), hY()) return 1;
				return
			}() || function() {
				var gw, gx, ca, hP, cm, hO;
				for (gw = as(c1 * ce.random(), ce.value(100)), gx = as(cw * ce.random(), ce.value(100)), ca = 40; 1 <= ca; ca--)
					for (hP = cw - ca; 0 <= hP; hP -= 40)
						for (fM = (hP + gx) % cw, cm = 40; 1 <= cm; cm--)
							for (hO = c1 - cm; 0 <= hO; hO -= 40)
								if (fL = (hO + gw) % c1, hY()) return 1;
				return
			}()
		}

		function hY() {
			for (var bB, ha, f8 = as(hF - hI, 2), hb = hH + fM * hF + f8, hc = hG + fL * hF + f8, hZ = hb + hI - 1; hb <= hZ; hZ--)
				for (ha = hc + hI - 1; hc <= ha; ha--)
					if (bB = b5.f3(ha, hZ), !b5.b6(bB) || b5.cU(bB)) return;
			return 1
		}

		function hS(hO, hP) {
			hK(), hd(hO - 2, hP - 2)
		}

		function hK() {
			fH[player] = 0, ax[player] = 0, bU[player] = he[player] = 0, b4[player] = [], bM[player] = [], bN[player] = [], bQ[player] = [], d0[player] = d3[player] = cz[player] = d2[player] = 0
		}

		function hd(hO, hP) {
			var bB, a4, hg, hh;
			for (fH[player] = 1, ax[player] = player < cq ? hf : dd[dG.cN[player - cq]], d0[player] = hO + 10, d3[player] = hP + 10, d2[player] = cz[player] = 0, hg = hO; hg < hO + 4; hg++)
				for (hh = hP; hh < hP + 4; hh++)(hO < hg && hg < hO + 3 || hP < hh && hh < hP + 3) && (bB = b5.f3(hg, hh), b5.b6(bB)) && (d0[player] = hg < d0[player] ? hg : d0[player], cz[player] = hg > cz[player] ? hg : cz[player], d3[player] = hh < d3[player] ? hh : d3[player], d2[player] = hh > d2[player] ? hh : d2[player], hJ[bU[player]] = bB, bU[player]++, b5.hi(bB, player));
			for (he[player] = bU[player], a4 = bU[player] - 1; 0 <= a4; a4--) b5.hj(hJ[a4], player) ? (b5.b7(hJ[a4], player), bM[player].push(hJ[a4])) : b5.hk(hJ[a4]) ? (b5.b7(hJ[a4], player), bN[player].push(hJ[a4])) : b5.hl(hJ[a4]) && (b5.b7(hJ[a4], player), bQ[player].push(hJ[a4]))
		}

		function hX(hO, hP) {
			for (var bB, ha, hZ = hP; hP - 6 < hZ; hZ--)
				for (ha = hO; hO - 6 < ha; ha--)
					if (bB = b5.f3(ha, hZ), b5.cU(bB)) return;
			return 1
		}
		this.bp = function() {
			var a4, hO, hP;
			if (hJ = new Array(12), hI = 6, c1 = as(aZ, hF = 10), cw = as(aa, hF), hG = as(aZ - hF * c1, 2), hH = as(aa - hF * cw, 2), fd)
				for (a4 = 0; a4 < cq; a4++) player = a4, hK(), fH[player] = 1;
			if (dr.ds && dr.dt.hL) {
				for (player = 0; player < b8; player++)
					if (1 !== fH[player]) {
						if (player < hQ) {
							if (function() {
									var hO = dr.dt.hL[player] + 1,
										hP = dr.dt.hW[player] + 1;
									if (3 < hO && hO < aZ - 5 && 3 < hP && hP < aa - 5 && b5.b6(b5.f3(hO, hP)) && hX(hO + 3, hP + 3)) return hS(hO + 1, hP + 1), 1;
									return
								}()) continue;
							if (hR()) {
								hO = hG + fL * hF + as(hF, 2), hP = hH + fM * hF + as(hF, 2), hS(hO, hP);
								continue
							}
						}
						hK()
					}
			} else ! function() {
				var hO, hP;
				for (player = 0; player < b8; player++) 1 !== fH[player] && (player < hQ && hR() ? (hO = hG + fL * hF + as(hF, 2), hP = hH + fM * hF + as(hF, 2), hS(hO, hP)) : hK())
			}();
			b0.b1[7] = bU[aw], b0.b1[8] = ax[aw]
		}, this.hm = function(cM, hn, ho) {
			var a4, hO, hP, bB, fL, fM;
			for (player = cM, a4 = 0; a4 < 20; a4++)
				for (hO = hn + a4; hn - a4 <= hO; hO--)
					for (hP = ho + a4; ho - a4 <= hP; hP--)
						if ((hO === hn + a4 || hO === hn - a4 || hP === ho + a4 || hP === ho - a4) && 3 < hO && hO < aZ - 5 && 3 < hP && hP < aa - 5 && b5.b6(b5.f3(hO, hP)) && hX(hO + 3, hP + 3)) {
							if (0 < bU[player]) {
								for (fM = fL = bB = void 0, fL = cz[player]; fL >= d0[player]; fL--)
									for (fM = d2[player]; fM >= d3[player]; fM--) bB = 4 * (fM * aZ + fL), b5.hq(player, bB) && (b5.hr(bB), bU[player]--);
								hK()
							}
							return hd(hO - 1, hP - 1), !0
						} return !1
		}, this.hs = function(cM) {
			player = cM, hR() ? hS(hG + fL * hF + as(hF, 2), hH + fM * hF + as(hF, 2)) : hK()
		}
	}

	function ht() {
		hu.hv(), cH.setTransform(g8, 0, 0, g8, 0, 0), cH.imageSmoothingEnabled = g8 < 3, cH.drawImage(hw, gn.gG(), gn.cF()), eO.cG(), cH.drawImage(hx, gn.gG(), gn.cF()), cH.imageSmoothingEnabled = !1, hu.cG(), cH.setTransform(1, 0, 0, 1, 0, 0), eA.cG(), eK.cG(), gm || (cH.imageSmoothingEnabled = !1, e9.cG(), eM.cG(), eS.cG(), eT.cG(), eB.cG(), gn.cG(), c2.cG(), eU.cG(), eP.cG(), eQ.cG(), fr.cG(), eX.cG(), hy.cG(), hz.cG(), eY.cG())
	}

	function i0(i1, c1, cw) {
		i1.clearRect(0, 0, c1, cw), i1.fillStyle = i2, i1.fillRect(0, 0, c1, cw)
	}

	function i3(i1, c1, cw, i4) {
		i1.fillStyle = cK, i1.fillRect(0, 0, c1, i4), i1.fillRect(0, 0, i4, cw), i1.fillRect(c1 - i4, 0, i4, cw), i1.fillRect(0, cw - i4, c1, i4)
	}

	function i5(i1, fL, fM, i6, i4, bB, i7) {
		i1.fillStyle = cK;
		var bB = Math.floor(i6 * bB),
			i9 = (bB += (bB - i4) % 2, Math.floor((bB - i4) / 2)),
			i6 = Math.floor((i6 - bB) / 2);
		i1.fillRect(fL + i6, fM + i6 + i9, bB, i4), i7 && i1.fillRect(fL + i6 + i9, fM + i6, i4, bB)
	}

	function iB() {
		this.iC = null, this.bp = function(iC) {
			this.iC = iC, e9.iD(this.iC)
		}, this.iE = function(iF) {
			var cc = (this.iC[iF].iG - this.iC[1 - iF].iG) / 10,
				cc = 8 / (1 + Math.pow(2, cc / 32)),
				cc = Math.floor(10 * cc + .5),
				iI = this.iJ(this.iC[iF].iG + cc + 1),
				cc = this.iJ(this.iC[1 - iF].iG - cc);
			0 === iF ? e9.iL(this.iC, iI, cc, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : e9.iL(this.iC, cc, iI, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
		}, this.iJ = function(iG) {
			return 16e3 <= (iG = iG < 0 ? 0 : 16e3 < iG ? 16e3 : iG) ? "Unknown" : (iG / 10).toFixed(1)
		}
	}

	function iM() {
		var iN, iO, iP;
		iN = [32, 65, 191, 913, 931], iO = [64, 127, 688, 930, 1155], iP = new Array(iN.length + 1);
		for (var a4 = 0; a4 < iP.length; a4++) {
			iP[a4] = 0;
			for (var ca = a4 - 1; 0 <= ca; ca--) iP[a4] += iO[ca] - iN[ca]
		}

		function iW(dV) {
			for (var a4 = iN.length - 1; 0 <= a4; a4--)
				if (dV >= iN[a4] && dV < iO[a4]) return a4;
			return -1
		}
		this.iR = function(l) {
			return 0 !== (l = l.trim()).indexOf("Bot ") && 0 !== l.indexOf("[Bot] ") && function(l, iT, iU) {
				var b3 = (l = l.trim()).length;
				if (b3 < iT || iU < b3) return !1;
				for (var dV, iV = 0, a4 = 0; a4 < b3; a4++)
					if (dV = l.charCodeAt(a4), iV += 65 <= dV && dV <= 90 || 1040 <= dV && dV <= 1071 ? 1 : 0, -1 === iW(dV)) return !1;
				if (3 < iV && iV > Math.floor(b3 / 2)) return !1;
				return !0
			}(l, 3, 20)
		}, this.iX = function(l) {
			for (var b3 = (l = l.trim()).length, hJ = [], a4 = 0; a4 < b3; a4++) {
				var dV, bB = iW(dV = l.charCodeAt(a4));
				hJ.push(iP[bB] + dV - iN[bB])
			}
			return hJ
		}, this.iY = function(hJ) {
			for (var dV, cm, l = "", b3 = hJ.length, a4 = 0; a4 < b3; a4++)
				for (cm = 1; cm < iP.length; cm++)
					if (hJ[a4] < iP[cm]) {
						dV = iN[cm - 1] + hJ[a4] - iP[cm - 1], l += String.fromCharCode(dV);
						break
					} return l
		}, this.iZ = function(l) {
			for (var hJ = this.iX(l), result = "", a4 = 0; a4 < hJ.length; a4++) result = (result += hJ[a4] < 10 ? "00" : hJ[a4] < 100 ? "0" : "") + hJ[a4].toString(10);
			return result
		}, this.ia = function(l) {
			for (var hJ = new Array(Math.floor(l.length / 3)), a4 = 0; a4 < l.length; a4 += 3) hJ[Math.floor(a4 / 3)] = parseInt(l.substring(a4, a4 + 3));
			return this.iY(hJ)
		}, this.z = function(l) {
			for (var aH, hJ = [l.length], a4 = 0; a4 < l.length; a4++) hJ[a4] = l.charCodeAt(a4) - 48;
			var result = "";
			for (a4 = 0; a4 < l.length; a4++) a4 === l.length - 1 || 51 < 10 * hJ[a4] + hJ[a4 + 1] ? result += hJ[a4].toString() : (aH = 10 * hJ[a4] + hJ[a4 + 1], result += String.fromCharCode(aH + (aH < 26 ? 65 : 71)), a4++);
			return result
		}, this.n = function(l) {
			for (var dV, result = "", a4 = 0; a4 < l.length; a4++) 48 <= (dV = l.charCodeAt(a4)) && dV < 58 ? result += String.fromCharCode(dV) : 65 <= dV && dV < 75 ? result += "0" + (dV - 65).toString() : 75 <= dV && dV < 91 ? result += (dV - 65).toString() : 97 <= dV && dV < 123 && (result += (dV - 71).toString());
			return result
		}, this.ib = function(l) {
			for (var b3 = l.length, hJ = [], a4 = 0; a4 < b3; a4++)(dV = l.charCodeAt(a4)) < 58 ? hJ.push(l[a4]) : (dV -= dV < 91 ? 65 : 71, hJ.push(String(as(dV, 10))), hJ.push(String(dV - 10 * as(dV, 10))));
			var b3 = hJ.length - 2,
				dV = 0,
				ic = [];
			for (a4 = 0; a4 < b3; a4 += 3) ic[dV++] = parseInt(hJ[a4] + hJ[a4 + 1] + hJ[a4 + 2]);
			return ic
		}, this.id = function() {
			for (var fD, ie = "", a4 = 0; a4 < 6; a4++) fD = 48 + ce.random() % 36, fD += 58 <= fD ? 39 : 0, ie += String.fromCharCode(fD);
			return ie
		}
	}

	function ig() {
		this.fk = function(ih) {
			var ij = 0,
				il = !1;
			2 !== ed && (eT.iz(), j0 = j1, ed = 2) && (8 === dv ? ((il = (ij = ih = ih < 0 ? bU[0] >= bU[1] ? 0 : 1 : ih) === aw) ? e9.fm(ih, 2) : e9.fm(1 - aw, 3), io.iE(ih)) : dA ? (ih = eU.ip(), il = dW.dX[aw] === ih, 9 === dv ? ij = il ? eo[0] : 512 : 512 !== (ij = (ih = dW.iq(dW.ir[ih]))[0]) && e9.is(ih[1]), e9.it(il)) : (il = (ij = eo[0]) === aw, e9.iu(ij)), dx || iv.iw(ix(), ij), eX.show(il, !1), e9.j2(!0), eM.ec(!0), eB.ec(!0), c4.c5 = !0, hC.j3(), a9(0))
		}
	}

	function j4() {
		this.cQ = function(player, fL, fM) {
			0 !== fH[player] && j5.hm(player, fL, fM) && (c4.c5 = !0)
		}, this.dF = function() {
			fd = !1;
			for (var a4 = 0; a4 < cq; a4++) 0 !== fH[a4] && 0 === bU[a4] && j5.hs(a4);
			0 !== fH[aw] ? (b0.b1[7] = bU[aw], b0.b1[8] = ax[aw], eS.cE(), eB.j6(), eW.gj(d0[aw] - 5, d3[aw] - 5, cz[aw] + 5, d2[aw] + 5), eY.bp()) : eX.show(!1, !1), e9.j7(18), eA.j8(), eA.ec(!0), fe = null, hC.j9 = !0, hC.jA(), dx && a9(1)
		}
	}
	var dx, jC, jD, jE, jF, aw, gm, fd, jG, dA, jH, dv, jI, fe, io, jJ, dG, au, dE, eJ, eG, eK, eW, j5, m, hy, fr, e9, jj, eQ, c2, eS, gn, jk, eP, eM, eB, eX, jl, jm, aJ, jn, jo, jp, dy, ji, bw, b5, f, ae, ay, eA, jW, e2, jU, jq, jr, gr, f1, ce, g2, hu, js, jt, eY, iv, ju, eO, jv, jw, eT, eZ, eD, eH, gJ, jx, eI, eF, eR, jy, dr, b8 = 512,
		hQ = 512,
		jB = 150,
		ed = 0,
		hf = 512,
		at = 2;

	function jK(jL, jM, iC, jN, jO) {
		jC = gm = !1, jI = jO, dA = (dv = jN) < 7 || 9 === dv, j1 = cq = iC.length, dx = 1 === j1, jH = 9 === (dv = 8 === (dv = 10 === dv && dx ? 7 : dv) && 2 !== cq ? 7 : dv) ? 2 : dv + 2, jJ = cq <= 2 ? 30 : cq <= 50 ? 40 : 50, jG = fd = !(dr.ds && !dr.dt.jP) && (dA || cq < 100), fe = fd ? new j4 : null, hf = 512, hQ = b8, dx && (hQ = dy.jQ()), dq = hQ - cq, j0 = 0, aw = jM, ce.jR(jL), jS(iC), e2.bp(), dW.bp(iC), ed = 1, jE = 15e8, jF = 1e9, b0.bp(), jT(), jU.jV(), hC.bp(), ay.bp(), d9(), b5.bp(iC), hu.bp(), dG.bp(), jW.jX(), jW.jY(), j5.bp(), jZ(), eU.bp(), eO.bp(), hz.bp(), ja.putImageData(jb, 0, 0), eM.bp(), gn.bp(), eS.bp(), eT.bp(), eP.bp(), eB.bp(), fr.bp(), c2.bp(), e9.bp(), eQ.bp(), hy.bp(), eX.bp(), eG.bp(), eK.bp(), au.bp(), eJ.bp(), aY(), ae.bp(), eA.bp(), eF.bp(), eI.bp(), eR.bp(), eH.bp(), 8 === dv ? (io = new iB).bp(iC) : io = null, dx ? c4.jc() : c4.jd(), je(), eY.bp(), c4.c5 = !0, dx && fd || a9(1)
	}

	function je() {
		eW.gi(), 0 === fH[aw] && eX.show(!1, !0), eA.ec(!0)
	}

	function jf() {
		eD.close(eD.jg, 3246), ed = 0, c4.jh(), ji.bp(), a9(0), aB()
	}

	function jz() {
		dG = new de, au = new ef, dE = new et, eJ = new fE, eG = new fJ, eK = new fv, eW = new gO, j5 = new hE, m = new iM, hy = new k0, fr = new k1, e9 = new k2, jj = new k3, eQ = new k4, c2 = new k5, eS = new k6, gn = new k7, jk = new k8, eP = new k9, eM = new kA, eB = new kB, eX = new kC, jl = new kD, jm = new kE, aJ = new kF, (jn = new kG).jX(), jo = new kH, jp = new kI, dy = new kJ, ji = new kK, bw = new kL, b5 = new kM, f = new kN, ae = new kO, ay = new kP, eA = new kQ, jW = new kR, e2 = new kS, jU = new kT, jq = new kU, jr = new kV, gr = new kW, f1 = new kX, ce = new kY, g2 = new kZ, hu = new ka, js = new kb, jt = new kc, eY = new kd, iv = new ke, ju = new kf, eO = new kg, jv = new kh, jw = new ki, eT = new kj, eZ = new kk, eD = new kl, eH = new km, gJ = new kn, jx = new ko, eI = new kp, eF = new kq, eR = new kr, jy = new ks, dr = new kt
	}

	function k0() {
		var kv, fL, fM, kw, kx, ky, gg, player, kz, f8, l0, zoom, l1, l2, ku = [];

		function l7(hJ, l8, i6, l9) {
			for (var lA, c1, i1, a4 = 0; a4 < hJ.length; a4++) l8.push(document.createElement("canvas")), l8[a4].width = i6, l8[a4].height = i6, lA = l8[a4].getContext("2d", {
				alpha: !0
			}), c1 = i6, (i1 = lA).fillStyle = l9, i1.beginPath(), i1.arc(Math.floor(c1 / 2), Math.floor(c1 / 2), Math.floor(.47 * c1), 0, 2 * Math.PI), i1.fill(), 6 === hJ[a4] ? lA.drawImage(bw.bz(19), 0, 0) : 7 === hJ[a4] ? lA.drawImage(bw.lC("emojis"), -4 * i6, 0) : lA.drawImage(bw.bz(3), -hJ[a4] * i6, 0)
		}

		function lQ(player) {
			for (var a4 = l1.length - 1; 0 <= a4; a4--)
				if (l1[a4] === player) return 1
		}

		function lO(lM) {
			if (-1 !== lM && 0 !== lM && 6 !== lM) {
				if (!ku[5]) {
					if (8 === lM) return;
					if (!ku[4] && 7 === lM) return
				}
				if (!ku[7]) {
					if (2 === lM) return;
					if (!ku[6] && 1 === lM) return
				}
				return 3 !== lM || ku[2] ? !!(5 !== lM || ku[1] || ku[5] || ku[7]) : void 0
			}
		}

		function lN(c8, c9) {
			return c8 < fL - kw - f8 || fL + 2 * kw + f8 < c8 || c9 < fM - kw - f8 || fM + 2 * kw + f8 < c9 ? -1 : 3 * (c9 < fM - f8 / 2 ? 0 : c9 < fM + kw + f8 / 2 ? 1 : 2) + (c8 < fL - f8 / 2 ? 0 : c8 < fL + kw + f8 / 2 ? 1 : 2)
		}
		this.l3 = [], this.bp = function() {
			l1 = [], kv = !(ku = []), kx = ky = fL = fM = gg = 0, this.l4();
			for (var a4 = this.l5.length - 1; 0 <= a4; a4--) ku.push(!1);
			ku.push(!1)
		}, this.l4 = function() {
			this.l5 = [], l0 = [], this.l6 = [];
			var i6 = bw.bz(3).height;
			kw = Math.floor((q ? .075 : .0468) * bq), zoom = kw / i6, f8 = Math.floor(kw / 3), l7([0, 1, 2, 3, 7, 4, 5, 6], this.l5, i6, "rgba(0,180,0,0.6)"), l7([0, 4, 5], l0, i6, "rgba(200,0,0,0.6)"), l7([0, 2, 4], this.l6, i6, "rgba(0,0,0,0.6)"), l7([0, 5], this.l3, i6, "rgba(200,200,0,0.6)"), this.l5[6] = this.l3[1]
		}, this.lE = function(c8, c9) {
			return !!this.lF() && (c8 = this.c7(c8, c9), c4.c5 = 0 < c8, c8 < 2)
		}, this.lG = function(c8, c9) {
			this.lF() || (kx = c8, ky = c9, gg = (new Date).getTime())
		}, this.lH = function(player) {
			return player < cq && 2 !== fV[player]
		}, this.c7 = function(c8, c9) {
			if (ky = kx = -1e3, 2 === fV[aw] || 0 === fH[aw] && !fd) return this.lI(), 1;
			if (kv) return this.lI(), a5.lJ(c8, c9) ? (a5.lK(c8, c9, player) && (kv = !0), 1) : (a5.lL(), 2);
			var t, lM = lN(c8, c9);
			if (lO(lM) && (0 !== lM && 6 !== lM && (ku[2] || 3 !== lM))) {
				if (1 === lM) return ku[6] ? (t = (new Date).getTime(), l2 + 4e3 < t && (l1 = []), l2 = t, lQ(player) || (l1.push(player), 16 < l1.length && l1.shift()), this.lI(), 1) : 0;
				if (2 === lM) {
					if (ku[7]) {
						for (var a4 = l1.length - 1; 0 <= a4; a4--) 0 === fH[l1[a4]] && l1.splice(a4, 1);
						return 0 < l1.length && (eR.lR(1, l1, !0) && (e9.lS(l1, player), iv.lT(l1, player)), l1 = []), this.lI(), 1
					}
					return 0
				}
				if (3 === lM) return this.lI(), e9.lU(), dx ? da(aw, player, as(eS.lV() * ax[aw], 1e3)) : iv.lW(eS.lV(), player === b8 ? aw : player), 1;
				if (4 === lM) return ku[0] ? fd ? (this.lI(), dx ? (fe.cQ(0, b5.gG(kz), b5.cF(kz)), fe.dF()) : iv.lY(1e3, b5.gG(kz), b5.cF(kz))) : (this.lI(), e9.lU(), dx ? fN(aw, player, eS.lV()) : (!jG || 300 < eB.lX()) && iv.lW(eS.lV(), player === b8 ? aw : player)) : ku[8] ? (this.lI(), eH.lZ(player, eS.lV())) : this.lI(), 1;
				if (5 === lM) return ku[1] ? (this.lI(), e9.lU(), dx ? eG.fO(aw, eS.lV(), b5.gG(kz), b5.cF(kz)) : iv.lY(eS.lV(), b5.gG(kz), b5.cF(kz)), 1) : 0;
				if (7 === lM && ku[4]) return this.lI(), kv = a5.show(c8, c9), 1;
				if (8 === lM) return ku[5] ? (eR.lR(0, [player], !0) && (e9.la(player, 0), iv.lb(player)), this.lI(), 1) : 0
			}
			return this.lI(), 2
		}, this.click = function(c8, c9, lc) {
			var ld = Math.floor((c8 + gD) / g8),
				le = Math.floor((c9 + gE) / g8),
				bB = le * aZ * 4 + 4 * ld;
			if (lc) return function(bB) {
				b5.b6(bB) ? b5.bG(bB) ? e9.fm(0, 56) : e9.fm(b5.bF(bB), 57) : e9.fm(0, b5.lp(bB) ? 55 : 58)
			}(bB), !1;
			if (this.lF() || 2 === fV[aw] || 0 === fH[aw] && !fd) return !1;
			lc = (q ? .0288 : .0144) * bq;
			if (Math.abs(c8 - kx) > lc || Math.abs(c9 - ky) > lc || (new Date).getTime() > gg + 425) return !1;
			if (ld < 1 || le < 1 || aZ - 1 <= ld || aa - 1 <= le) return !1;
			if (!b5.b6(bB)) return !1;
			if (2 === ed) return !!(1 <= a5.lh && (player = b5.bF(bB), this.lH(player))) && (player === aw && this.lI(), ku[4] = !0, this.li(c8, c9));
			if (kz = b5.f3(ld, le), fd) ku[0] = !0;
			else if (ku[1] = f1.co(aw, kz), b5.bG(bB)) player = b8, lj(aw) ? ku[0] = !0 : lk(aw, player) && (ku[8] = !0);
			else {
				if ((player = b5.bF(bB)) === aw) return this.lI(), 0 !== a5.lh && (ku[4] = !0, this.li(c8, c9));
				ku[6] = function(player) {
					return hy.lH(player) && !lQ(player) && eR.lR(1, [player], !1)
				}(player), ku[4] = 1 <= a5.lh && this.lH(player), ch(player, aw) ? (ku[5] = this.lH(player) && !eA.lm(player) && eR.lR(0, [player], !1), ku[7] = function(player) {
					if (0 === l1.length) return !1;
					if ((new Date).getTime() > l2 + 4e3) return !(l1 = []);
					return !lQ(player) && ! function(player) {
						var a4;
						if (dA)
							for (a4 = l1.length - 1; 0 <= a4; a4--)
								if (!ch(player, l1[a4])) return 1;
						return
					}(player)
				}(player), lo(aw, player) ? ku[0] = !0 : lk(aw, player) && (ku[8] = !0)) : ku[2] = dA
			}
			return this.li(c8, c9)
		}, this.li = function(c8, c9) {
			return fL = c8 - Math.floor(kw / 2), fM = c9 - Math.floor(kw / 2), this.lF()
		}, this.lr = function(c8, c9) {
			return !!this.lF() && (kv ? !a5.lJ(c8, c9) && (a5.lL(), kv = !1, c4.c5 = !0) : !lO(lN(c8, c9)) && (this.lI(), c4.c5 = !0))
		}, this.lI = function() {
			for (var a4 = ku.length - 1; 0 <= a4; a4--) ku[a4] = !1;
			kv = !1
		}, this.ls = function() {
			this.lI()
		}, this.lF = function() {
			for (var a4 = ku.length - 1; 0 <= a4; a4--)
				if (ku[a4]) return !0;
			return kv
		}, this.cG = function() {
			this.lF() && this.lt()
		}, this.lt = function() {
			var lu;
			kv ? a5.cG() : (lu = (kw + f8) / zoom, cH.imageSmoothingEnabled = !0, cH.setTransform(zoom, 0, 0, zoom, fL, fM), ku[0] ? fd ? cH.drawImage(this.l5[3], 0, 0) : cH.drawImage(this.l5[0], 0, 0) : ku[8] ? cH.drawImage(this.l3[0], 0, 0) : cH.drawImage(l0[0], 0, 0), ku[1] && cH.drawImage(this.l5[1], lu, 0), ku[2] && cH.drawImage(this.l5[2], -lu, 0), ku[4] && cH.drawImage(this.l5[4], 0, lu), ku[5] && cH.drawImage(this.l5[5], lu, lu), ku[6] && cH.drawImage(this.l5[6], 0, -lu), ku[7] && cH.drawImage(this.l5[7], lu, -lu), cH.imageSmoothingEnabled = !1, cH.setTransform(1, 0, 0, 1, 0, 0))
		}
	}

	function k1() {
		var cw, lv, c0, lx, ly, lw = ["Quit Game", "Surrender", "Statistics"];

		function m1() {
			var i1 = lv.getContext("2d", {
					alpha: !0
				}),
				m4 = (i1.clearRect(0, 0, cw, cw), i1.fillStyle = m2, i1.fillRect(0, 0, cw, cw), 0 === lx && (i1.fillStyle = m3, i1.fillRect(0, 0, cw, cw)), i1.fillStyle = cK, i1.fillRect(0, 0, cw, 1), i1.fillRect(0, 0, 1, cw), i1.fillRect(0, cw - 1, cw, 1), i1.fillRect(cw - 1, 0, 1, cw), .9 * cw / bw.bz(0).width);
			i1.imageSmoothingEnabled = !0, i1.setTransform(m4, 0, 0, m4, Math.floor((cw - m4 * bw.bz(0).width) / 2), Math.floor((cw - m4 * bw.bz(0).height) / 2)), i1.drawImage(bw.bz(0), 0, 0), i1.setTransform(1, 0, 0, 1, 0, 0)
		}

		function m7(c8, c9) {
			if (!fr.lz) return c8 <= cw + mA && c9 >= eS.fM ? 0 : -1;
			if (c8 <= 4 * cw + mA) {
				if (c9 >= eS.fM) return 0;
				if (c9 >= eS.fM - cw - ly * mA) return 2;
				if (c9 >= eS.fM - 2 * (cw + ly * mA)) return 3
			} else if (c8 <= 7 * cw + mA && c9 >= eS.fM - cw - ly * mA) return 1;
			return -1
		}

		function mF(a4, l9) {
			cH.setTransform(1, 0, 0, 1, mA, eS.fM - a4 * ly * mA - a4 * cw), cH.fillStyle = m2, cH.fillRect(0, 0, 4 * cw, cw), lx === a4 + 1 && l9 === cK && (cH.fillStyle = m3, cH.fillRect(0, 0, 4 * cw, cw)), cH.fillStyle = l9, cH.fillRect(0, 0, 4 * cw, 1), cH.fillRect(0, 0, 1, cw), cH.fillRect(4 * cw, 0, 1, cw), cH.fillRect(0, cw - 1, 4 * cw, 1), cH.fillText(lw[a4], 2 * cw, .54 * cw)
		}
		this.bp = function() {
			lx = -1, this.lz = !1, ly = q ? 1.2 : .6, this.m0()
		}, this.m0 = function() {
			cw = eS.cw, (lv = document.createElement("canvas")).width = cw, lv.height = cw, c0 = bt + Math.floor((q ? .5 : .45) * cw) + bu, m1()
		}, this.m5 = function() {
			this.lz = !this.lz, this.lz ? (gm = !1, dx && 1 === ed && !fd && (eM.ec(!0), setTimeout(function() {
				hC.j3()
			}, 0), a9(0))) : (lx = -1, m1(), dx && a9(1)), c4.c5 = !0
		}, this.c7 = function(c8, c9) {
			c8 = m7(c8, c9);
			return this.lz ? 0 === c8 ? (jf(), 2) : 1 === c8 ? (this.m5(), 2) : 2 === c8 ? (this.fs(aw) && (dx ? eG.fq(aw) : iv.m8(), this.m5()), 2) : 3 === c8 && 2 <= b0.m9 ? (hz.m5(), c4.c5 = !0, 2) : hz.lF ? 1 : (this.m5(), 2) : 0 === c8 ? (this.m5(), 2) : 0
		}, this.lr = function(c8, c9) {
			c8 = m7(c8, c9);
			return c8 !== lx && (lx = c8, this.lz || m1(), c4.c5 = !0), -1 !== lx
		}, this.cG = function() {
			var c1;
			this.lz ? (c1 = Math.floor(5.5 * cw), cH.setTransform(1, 0, 0, 1, mA, eS.fM), cH.fillStyle = m2, cH.fillRect(0, 0, c1, cw), 0 === lx ? (cH.fillStyle = m3, cH.fillRect(0, 0, 4 * cw, cw)) : 1 === lx && (cH.fillStyle = m3, cH.fillRect(4 * cw, 0, Math.floor(1.5 * cw), cw)), cH.fillStyle = cK, cH.fillRect(0, 0, c1, 1), cH.fillRect(0, 0, 1, cw), cH.fillRect(4 * cw, 0, 1, cw), cH.fillRect(0, cw - 1, c1, 1), cH.fillRect(c1 - 1, 0, 1, cw), cH.font = c0, cH.textBaseline = cI, cH.textAlign = cJ, cH.fillText(lw[0], 2 * cw, .54 * cw), c1 = .4 * cw, fr.mE(mA + 4 * cw + (1.5 * cw - c1) / 2, eS.fM + .3 * cw, c1), mF(1, fr.fs(aw) ? cK : mG), 2 <= b0.m9 && mF(2, cK), cH.setTransform(1, 0, 0, 1, 0, 0)) : cH.drawImage(lv, mA, eS.fM)
		}, this.fs = function(player) {
			return 0 !== fH[player] && 2 !== ed && hy.lH(player)
		}, this.mE = function(fL, fM, b3) {
			cH.setTransform(1, 0, 0, 1, fL, fM), cH.lineWidth = 2, cH.strokeStyle = cK, cH.beginPath(), cH.moveTo(0, 0), cH.lineTo(b3, b3), cH.moveTo(0, b3), cH.lineTo(b3, 0), cH.stroke()
		}
	}

	function k2() {
		var mH, cw, mI, mJ, mK, mL, mM, mN, mO;

		function cF() {
			return eS.mi(e9.mf()) ? eT.lF ? eS.fM - eS.cw - 2 * mI : eS.fM - mI : eT.lF ? s - eS.cw - (q ? 3 : 2) * mI : s - mI
		}

		function mW(t, l, id, bB, mZ, ma, mb, mc) {
			var i1, mk, mg, l8, ml = 1e3 <= id,
				c1 = Math.floor(c2.measureText(l, e9.c0) + 1.5 * mJ + (ml ? cw : 1.5 * mJ));
			r < c1 + mI && !ml && 50 !== id && 20 < l.length ? (mg = Math.floor(.5 * l.length), mW(t, l.substring(0, mg), id, bB, mZ, ma, mb, mc), mW(t, l.substring(mg), id, bB, mZ, ma, mb, mc)) : (mk = id - 1e3, mg = c1 + (50 === id ? mK : 0), (l8 = document.createElement("canvas")).width = c1, l8.height = cw, (i1 = l8.getContext("2d", {
				alpha: !0
			})).font = e9.c0, i1.textBaseline = cI, i1.textAlign = mm, i1.clearRect(0, 0, c1, cw), i1.fillStyle = ma, i1.fillRect(0, 0, c1, cw), i1.fillStyle = mZ, i1.fillText(l, Math.floor(1.5 * mJ), Math.floor(cw / 2)), ml && (ml = cw / a5.c1, i1.imageSmoothingEnabled = !0, i1.setTransform(ml, 0, 0, ml, c1 - cw, 0), i1.drawImage(a5.l8[mk], 0, 0)), mH.unshift({
				gg: t,
				l: l,
				id: id,
				player: bB,
				lv: l8,
				mZ: mZ,
				ma: ma,
				c1: c1,
				mg: mg,
				mb: mb,
				mc: mc
			}))
		}

		function mp(id, er) {
			for (var n1 = 0, b3 = mH.length, a4 = 0; a4 < b3; a4++)
				if (mH[a4].id === id && er <= ++n1) return void mH.splice(a4, 1)
		}

		function mX(fD, nB, cm) {
			return "rgb(" + fD + "," + nB + "," + cm + ")"
		}

		function mn(id, player) {
			for (var nD = !1, a4 = mH.length - 1; 0 <= a4; a4--) mH[a4].id !== id || player !== b8 && mH[a4].player !== player || (mH.splice(a4, 1), nD = !0);
			return nD
		}

		function nJ(aH) {
			return 1 === aH ? "" : "s"
		}

		function nV(player, nW) {
			return (dx || cq <= player || nW || gJ.gK.nX ? gN : nY)[player]
		}
		this.bp = function() {
			mM = q ? 7 : 12, mL = {
				iC: [mN = 0, 0, 0],
				mP: [0, 0, 0],
				gf: [220, 180, 180],
				mQ: [0, 0, 0],
				dV: [0, 0, 0],
				mR: [" were erased.", " oyundan çıktı.", " yok edildi."],
				mS: [" was erased by ", " left the game.", " surrendered."]
			}, mH = [], this.m0(), fd && this.fm(0, 18);
			var nM = "harita: " + jq.nN() + "   alan: " + eQ.gM(jU.nO) + "   Land: " + eQ.gM(jU.nP) + " (" + eB.ms(100 * jU.nP / jU.nO, 1) + ")",
				nQ = "";
			0 < jU.nR && (nQ += "su: " + eQ.gM(jU.nR) + " (" + eB.ms(100 * jU.nR / jU.nO, 1) + ")"), 0 < jU.nS && (nQ = (nQ += 0 < jU.nR ? "   " : "") + "Mountains: " + eQ.gM(jU.nS) + " (" + eB.ms(100 * jU.nS / jU.nO, 1) + ")"), mW(340, nM, 6, 0, mX(215, 245, 255), i2, -1, !1), 0 < nQ.length && mW(340, nQ, 6, 0, mX(215, 245, 255), i2, -1, !1), 10 === dv && mW(120, "Full sending against human players is disabled.", 6, 0, mX(235, 255, 120), i2, -1, !1), this.mU()
		}, this.mU = function() {
			var a4, b3;
			if (dr.ds)
				for (b3 = dr.dt.mV.length, a4 = 0; a4 < b3; a4++) mW(400, dr.dt.mV[a4], 6, 0, mX(255, 255, 255), i2, -1, !1)
		}, this.m0 = function() {
			var mY, a4;
			if (cw = (cw = Math.floor((q ? .031 : .0249) * bq)) < 10 ? 10 : cw, this.by = Math.floor(2 * cw / 3), this.c0 = bt + this.by + bu, mI = mA, mJ = Math.floor(cw / 5), 0 < mH.length)
				for (mY = mH, mH = [], a4 = mY.length - 1; 0 <= a4; a4--) mW(mY[a4].gg, mY[a4].l, mY[a4].id, mY[a4].player, mY[a4].mZ, mY[a4].ma, mY[a4].mb, mY[a4].mc);
			this.md()
		}, this.md = function() {
			mO = document.createElement("canvas");
			var l = "Accept",
				i1 = (mK = c2.measureText(l, this.c0) + 5 * mJ, mO.height = cw, mO.width = mK, mO.getContext("2d", {
					alpha: !0
				}));
			i1.font = this.c0, i1.textBaseline = cI, i1.textAlign = cJ, i1.clearRect(0, 0, mK, cw), i1.fillStyle = me, i1.fillRect(0, 0, mK, cw), i1.fillStyle = cK, i1.fillText(l, Math.floor(mK / 2), Math.floor(cw / 2))
		}, this.mf = function() {
			var b3;
			return eT.lF ? eT.c1 : 0 === (b3 = mH.length) ? 0 : 1 === b3 ? mH[0].mg : mh(mH[0].mg, mH[1].mg)
		}, this.c7 = function(fL, fM) {
			for (var fU, mj = cF(), a4 = mH.length - 1; 0 <= a4; a4--)
				if ((fU = mj - (a4 + 1) * cw) <= fM && fM < fU + cw) return 50 === mH[a4].id ? fL >= gF - mK - mI - mH[a4].c1 && (gF - mK - mI <= fL ? (fU = mH[a4].player, this.la(fU, 0), iv.lb(fU)) : eW.gk(mH[a4].player, 800, !1, 0), !0) : fL >= gF - mH[a4].c1 - mI && (mH[a4].mc && (eW.gk(mH[a4].player, 800, !1, 0), 0 <= mH[a4].mb) && (fU = mH[a4].mb, mH[a4].mb = mH[a4].player, mH[a4].player = fU), !0);
			return !1
		}, this.j7 = function(id) {
			for (var a4 = mH.length - 1; 0 <= a4; a4--) mH[a4].id === id && (mH[a4].gg = 1)
		}, this.fm = function(player, id) {
			0 === id ? (b0.b1[player < cq ? 4 : 3]++, c2.cQ(player, 0), mW(q ? 100 : 160, "You erased " + gN[player] + ".", 0, player, "rgb(10,220,10)", i2, -1, !1)) : 1 === id ? (mn(50, b8), c2.cQ(player, 1), mW(360, "You were erased by " + gN[player] + ".", 0, player, "rgb(255,40,40)", i2, -1, !0), eW.gk(player, 2700, !0, 0)) : 2 === id ? (c2.cQ(player, 2), mW(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", i2, -1, !0), eW.gk(player, 2700, !0, 0)) : 3 === id ? (c2.cQ(player, 2), mW(0, gN[player] + " won the game.", 0, player, cK, i2, -1, !0), eW.gk(player, 2700, !0, 0)) : 4 === id ? (j1--, j0--, this.mo(1, player, player)) : 5 === id ? 2 !== fV[player] && hy.lH(aw) && (mp(1, 5), eA.mq(player) ? mW(180, gN[player] + " broke the non-aggression pact.", 1, player, mX(255, 200, 180), i2, -1, !0) : mW(180, gN[player] + " seni sikiyo!", 1, player, "rgb(255,70,10)", i2, -1, !0)) : 18 === id ? mW(255, "doğuş yerini seç", 18, 0, cK, i2, -1, !1) : 21 === id ? mW(220, "sikildin!", id, 0, "rgb(255,40,40)", i2, -1, !1) : 22 === id ? this.mo(2, player, player) : 55 === id ? (mn(55, 0), mW(220, "Water", 55, 0, cK, i2, -1, !1)) : 56 === id ? (mn(55, 0), mW(220, "boş alan", 55, 0, cK, i2, -1, !1)) : 57 === id ? (mn(55, 0), mW(220, "[" + gN[player] + "] Balance: " + eQ.gM(ax[player]) + " Border Defense: " + (player = player, eB.ms(Math.sqrt(bU[player]) / Math.max(bM[player].length + .02 * (bN[player].length + bQ[player].length), 1), 2)), 55, 0, cK, i2, -1, !1)) : 58 === id && (mn(55, 0), mW(220, "Rock", 55, 0, cK, i2, -1, !1))
		}, this.mt = function(mu) {
			mW(200, "Error [" + mu + "]", 94, 0, cK, mv, -1, !1)
		}, this.iu = function(ih) {
			c2.cQ(ih, 2), mW(0, cq < 100 ? gN[ih] + " helal la kazandın." : gN[ih] + " was immortalized!", 3, ih, cK, i2, -1, !0), eW.gk(ih, 2700, !0, 0)
		}, this.mw = function(mx, my, mk) {
			mx === aw ? mW(175, " Message to " + gN[my] + ": ", 1e3 + mk, my, mX(200, 255, 210), i2, -1, !0) : this.mz(mx, mk)
		}, this.mz = function(mx, mk) {
			var a4, n0 = 0;
			for (mW(175, gN[mx] + ": ", 1e3 + mk, mx, cK, "rgba(5,60,25,0.9)", -1, !0), a4 = 0; a4 < mH.length; a4++)
				if (1e3 <= mH[a4].id && mH[a4].player === mx && 3 < ++n0) return void mH.splice(a4, 1)
		}, this.it = function(il) {
			var mu, n2 = dW.ir[eU.n3()];
			il ? (9 === dv ? (mu = "The Resistance defeated the virus.", c2.n4("The Resistance", 2, 1, 12)) : mu = "Congratulations! Team " + dW.bo[n2] + " won the game!", mW(0, mu, 40, 0, "rgb(10,220,10)", i2, -1, !1)) : (9 === dv ? (mu = "Mankind lost the war against the virus.", c2.n4("The Virus", 2, 0, 16)) : mu = "Our alliance was defeated!", mW(0, mu, 41, 0, "rgb(200,80,80)", i2, -1, !1)), 9 !== dv && c2.n4("Team " + dW.bo[n2], 2, 1, 12), eW.gt(2700)
		}, this.iD = function(iC) {
			mW(300, iC[0].name + " [" + io.iJ(iC[0].iG) + "] vs " + iC[1].name + " [" + io.iJ(iC[1].iG) + "]", 65, 0, gI, "rgba(100,255,255,0.75)", -1, !1)
		}, this.n5 = function(mu) {
			mW(200, mu, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
		}, this.iL = function(iC, iI, iK, n6) {
			1 === eD.n7() && (mW(0, iC[0].name + ": " + io.iJ(iC[0].iG) + " -> " + iI, 66, 0, cK, n6[0], -1, !1), mW(0, iC[1].name + ": " + io.iJ(iC[1].iG) + " -> " + iK, 66, 1, cK, n6[1], -1, !1))
		}, this.is = function(n8) {
			1 === eD.n7() && mW(0, "[" + n8 + "] won " + cq + (jI ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", i2, -1, !1)
		}, this.la = function(player, id) {
			0 === id ? mn(50, player) ? (mW(128, "pakta katıldın " + gN[player] + ".", 52, player, mX(180, 255, 180), i2, -1, !0), eA.n9(player, 2, 255)) : mW(384, "sordun " + gN[player] + " pakt isteği gönderdin.", 51, player, mX(210, 210, 255), i2, -1, !0) : mn(51, player) ? (mW(128, gN[player] + " pakt kabul edildi.", 52, player, cK, "rgba(60,120,10,0.9)", -1, !0), eA.n9(player, 2, 255)) : (mW(384, gN[player] + " istek gönderildi.", 50, player, cK, "rgba(90,90,90,0.9)", -1, !0), eA.n9(player, 2, 96))
		}, this.lS = function(iC, target) {
			var l = "sen ",
				color = function(iC) {
					var a4;
					for (a4 = iC.length - 1; 0 <= a4; a4--)
						if (2 * bU[iC[a4]] > bU[aw]) return;
					return 1
				}(iC) ? (l += "ordered ", mX(255, 235, 210)) : (l += "saldırı ", mX(210, 255, 210));
			1 < iC.length ? mW(230, l + iC.length + " players to attack " + gN[target] + ".", 66, target, color, i2, -1, !0) : mW(230, l + gN[iC[0]] + " to attack " + gN[target] + ".", 66, iC[0], color, i2, target, !0)
		}, this.nC = function(player, target) {
			mW(230, gN[player] + " suggested sen saldırı " + gN[target] + ".", 66, player, cK, "rgba(75,65,5,0.9)", target, !0)
		}, this.nF = function(id, player) {
			mn(id, player)
		}, this.lU = function() {
			var bs;
			100 <= ax[aw] || (-1 === (bs = function(id) {
				for (var a4 = mH.length - 1; 0 <= a4; a4--)
					if (mH[a4].id === id) return a4;
				return -1
			}(143)) ? mW(80, "Your balance is too low!", 143, 0, cK, i2, -1, !1) : mH[bs].gg = 80)
		}, this.nG = function(nH, nI, player) {
			2 !== fV[aw] && (mW(200, "sen exported " + eQ.gM(nH) + " resource" + nJ(nH) + " to " + gN[player] + ".", 30, player, "rgb(190,255,190)", i2, -1, !0), nI) && mW(30, "A tax of " + eQ.gM(nI) + " unit" + nJ(nI) + " vay be.", 30, 0, cK, i2, -1, !1)
		}, this.nK = function(nH, player) {
			var t, nL;
			2 !== fV[aw] && (nL = 2 === fV[player] || cq <= player, mW((t = 200 - 20 * mH.length) < 80 ? 80 : t, (nL ? "A bot" : gN[player]) + " destek you with " + eQ.gM(nH) + " resource" + nJ(nH) + ".", 31, player, gI, nL ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0), mp(31, q ? 4 : 6))
		}, this.j2 = function(nT) {
			for (var dV = c4.dU(), a4 = 2; 0 <= a4; a4--) 0 < mL.mQ[a4] && (nT || mL.dV[a4] < dV - 220) && this.nU(a4)
		}, this.nU = function(id) {
			var l, b3 = mL.mQ[id],
				player = mL.iC[id];
			mL.mQ[id] = 0, 1 === b3 ? (l = nV(player, 0 === id) + mL.mS[id], 0 === id && (l += nV(mL.mP[id], !0) + "."), mW(mL.gf[id], l, 7, mL.mP[id], cK, i2, -1, !0)) : 2 <= b3 && (l = nV(player, 0 === id) + " and " + (b3 - 1) + " diğer player" + nJ(b3 - 1) + mL.mR[id], mW(mL.gf[id], l, 7, player, cK, i2, -1, !1))
		}, this.mo = function(id, nZ, mb) {
			var dV = c4.dU(),
				b3 = mL.mQ[id] + 1;
			mL.mQ[id]++, mL.iC[id] = nZ, mL.mP[id] = mb, 1 === b3 && (mL.dV[id] = dV), (1 === b3 && (j1 < 32 || 2 === ed) || 1 < b3 && (mL.dV[id] < dV - 140 || 2 === ed)) && this.nU(id)
		}, this.dF = function() {
			for (var cc = (cc = mH.length - mM) <= 1 ? 1 : cc * cc, a4 = mH.length - 1; 0 <= a4; a4--) 0 < mH[a4].gg && (mH[a4].gg -= cc, mH[a4].gg <= 0) && mH.splice(a4, 1);
			! function() {
				var n0, a4;
				if (128 !== mN && !(++mN < 128))
					for (n0 = 5, a4 = dY - 1; 0 <= a4; a4--) 1 === fV[dZ[a4]] && 0 < n0-- && mW(240, gN[dZ[a4]] + " joined the game.", 1, dZ[a4], gI, "rgba(255,255,255,0.75)", -1, !0)
			}(), this.j2(!1)
		}, this.cG = function() {
			for (var hP, fM = cF(), a4 = mH.length - 1; 0 <= a4; a4--) hP = fM - (a4 + 1) * cw, 50 === mH[a4].id ? (cH.drawImage(mH[a4].lv, gF - mH[a4].c1 - mK - mI, hP), cH.drawImage(mO, gF - mK - mI, hP)) : cH.drawImage(mH[a4].lv, gF - mH[a4].c1 - mI, hP)
		}
	}

	function nb() {
		this.c1 = 0, this.cw = 0, this.i8 = 0, this.nc = 0, this.nd = 0, this.by = 0, this.bs = -1, this.lw = ["çerezi kabul et", "daha fazla bilgi", "reddet"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.lF = !1, this.bp = function() {
			this.m0(), this.lF = d < 5 && !b && 0 === f.a0()
		}, this.m0 = function() {
			this.c1 = Math.floor(2.8 * Math.floor((q ? .09 : .062) * bq)), this.cw = Math.floor(+this.c1), this.i8 = Math.floor(.06 * this.c1), this.i9 = this.c1 - 2 * this.i8, this.nc = this.i8, this.nd = (this.cw - (this.lw.length + 1) * this.nc) / this.lw.length, this.by = Math.floor(.3 * this.nd)
		}, this.c7 = function(c8, c9) {
			return !!this.lF && -1 !== (c8 = this.nf(c8, c9)) && (0 === c8 ? (f.ng(2), this.lF = !1) : 1 === c8 ? nh.bp(ni, !0) : 2 === c8 && (f.ng(1), this.lF = !1), c4.c5 = !0)
		}, this.lr = function(c8, c9) {
			var t;
			return !!this.lF && (t = this.bs, this.bs = this.nf(c8, c9), t !== this.bs && (c4.c5 = !0), -1 !== this.bs)
		}, this.nf = function(c8, c9) {
			return c8 -= cA, c9 -= Math.floor(cB - this.cw - cA), c8 < 0 || c9 < 0 || c8 >= this.c1 || c9 >= this.cw ? -1 : (c8 = Math.floor((c9 - .5 * this.nc) / ((this.cw - this.nc) / this.lw.length))) < 0 ? 0 : c8 >= this.lw.length ? this.lw.length - 1 : c8
		}, this.cG = function() {
			this.lF && this.nj()
		}, this.nj = function() {
			var fL = cA,
				fM = Math.floor(cB - this.cw - cA);
			cH.setTransform(1, 0, 0, 1, fL, fM), cH.fillStyle = i2, cH.fillRect(0, 0, this.c1, this.cw), cH.textBaseline = cI, cH.textAlign = cJ, cH.strokeStyle = cK, cH.font = bt + this.by + bu, cH.strokeRect(0, 0, this.c1, this.cw);
			for (var a4 = this.lw.length - 1; 0 <= a4; a4--) cH.setTransform(1, 0, 0, 1, fL + this.i8, fM + this.nc + a4 * (this.nc + this.nd)), cH.fillStyle = this.colors[a4], cH.fillRect(0, 0, this.i9, this.nd), this.bs === a4 && (cH.fillStyle = nk, cH.fillRect(0, 0, this.i9, this.nd)), cH.fillStyle = cK, cH.fillText(this.lw[a4], this.i9 / 2, .54 * this.nd), cH.strokeRect(0, 0, this.i9, this.nd);
			cH.setTransform(1, 0, 0, 1, 0, 0)
		}
	}

	function k3() {
		var nl, nm, nn, c1, cw, font;

		function nr(ns) {
			return ns < 10 ? "0" + ns : String(ns)
		}
		this.bp = function() {
			void 0 === c1 && this.m0(), this.setTime()
		}, this.m0 = function() {
			c1 = Math.floor((q ? .53 : .36) * bq), cw = Math.floor(.065 * c1), font = bt + Math.floor(.9 * cw) + bu, nn--, this.setTime()
		}, this.dF = function() {
			this.setTime() && (c4.c5 = !0)
		}, this.setTime = function() {
			var t = new Date,
				np = t.getUTCMinutes(),
				t = t.getUTCSeconds();
			return nm = 3600 - 60 * np - t, nm %= 900, nl = "sonraki Contest: " + nr(Math.floor(nm / 60)) + ":" + nr(nm % 60), nn !== (nn = 60 * np + t) && (c1 = c2.measureText(nl, font), c1 += Math.floor(.4 * cw), !0)
		}, this.cG = function() {
			cH.lineWidth = 1 + Math.floor(cw / 15), 7 === aJ.nt() && jv.nu() + 2 * cA > .5 * (cB - c1) ? cH.translate(gF - cw, Math.floor(jv.nu() + 2 * cA + c1)) : cH.translate(gF - cw, Math.floor(.5 * (cB + c1))), cH.rotate(-Math.PI / 2), cH.fillStyle = cK, cH.fillRect(0, 0, c1, cw), cH.strokeStyle = gI, cH.strokeRect(0, 0, c1, cw + 10), cH.fillStyle = gI, cH.font = font, cH.textBaseline = cI, cH.textAlign = cJ, cH.fillText(nl, Math.floor(c1 / 2), Math.floor(.59 * cw)), cH.setTransform(1, 0, 0, 1, 0, 0)
		}
	}

	function nv() {
		this.nw = 10, this.nx = 50, this.ny = 50, this.nz = 8, this.o0 = this.nx + this.ny, this.a6 = this.nx + this.ny + this.nz, this.c1 = 72, this.o1 = 0, this.o2 = 0, this.l8 = new Array(this.a6), this.o3 = 8, this.o4 = new Array(this.nx + this.ny), this.o5 = new Array(this.nx + this.ny), this.fB = 0, this.fC = 0, this.zoom = 1, this.o6 = .2, this.lh = 0, this.a7 = null, this.o7 = null, this.o8 = 0, this.bp = function() {
			this.a7 = new Array(this.a6), this.o7 = new Array(this.a6);
			var o9 = bw.lC("emojis");
			for (this.oA(), a4 = this.lh = 0; a4 < this.nx; a4++) this.oB(a4, a4, o9);
			for (var oC = bw.lC("flags"), a4 = 0; a4 < this.ny; a4++) this.oB(a4, this.nx + a4, oC);
			this.oD(), this.l8[26] = this.oE(25, 2), this.oF()
		}, this.oB = function(a4, ca, dV) {
			this.a7[ca] = !1, this.o7[ca] = 0;
			var lv = document.createElement("canvas"),
				i1 = (lv.width = this.c1, lv.height = this.c1, lv.getContext("2d", {
					alpha: !0
				}));
			i1.clearRect(0, 0, this.c1, this.c1), 23 === ca ? i1.drawImage(hy.l6[2], 0, 0) : 36 === ca ? i1.drawImage(hy.l6[0], 0, 0) : 49 === ca ? i1.drawImage(hy.l6[1], 0, 0) : i1.drawImage(dV, this.c1 * a4 % (a4 === ca ? this.nw * this.c1 : 4e3), a4 === ca ? as(a4, this.nw) * this.c1 : 0, this.c1, this.c1, 0, 0, this.c1, this.c1), this.l8[ca] = lv
		}, this.oD = function() {
			this.l8[this.a6 - 5] = this.l8[26], this.l8[this.a6 - 4] = this.oE(this.a6 - 5, 2), this.l8[this.a6 - 1] = this.oE(this.a6 - 5, 1), this.l8[this.a6 - 8] = this.oE(this.a6 - 4, 1), this.l8[this.a6 - 3] = this.l8[39], this.l8[this.a6 - 2] = this.oE(this.a6 - 3, 1), this.l8[this.a6 - 7] = this.oE(this.a6 - 2, 1), this.l8[this.a6 - 6] = this.oE(this.a6 - 7, 1)
		}, this.oE = function(a4, oG) {
			var lv = document.createElement("canvas"),
				i1 = (lv.width = this.c1, lv.height = this.c1, lv.getContext("2d", {
					alpha: !0
				}));
			return i1.clearRect(0, 0, this.c1, this.c1), i1.rotate(oG * Math.PI / 2), i1.drawImage(this.l8[a4], 1 === oG ? 0 : -this.c1, -this.c1), lv
		}, this.oF = function() {
			var oH = u().split("");
			if (2 * oH.length !== this.a6) this.lh = 0;
			else {
				for (var a4 = 0; a4 < this.a6; a4 += 2) {
					var aH = parseInt(oH[Math.floor(a4 / 2)]);
					this.a7[a4] = aH % 2 == 1, this.a7[a4 + 1] = 1 < aH
				}
				this.oI()
			}
		}, this.oI = function() {
			for (var a4 = this.lh = 0; a4 < this.a6; a4++) this.a7[a4] && (this.o7[this.lh++] = a4)
		}, this.lL = function() {
			8 === this.lh && this.o7[0] === this.o0 && this.oI()
		}, this.oJ = function() {
			this.lh = this.nz;
			for (var a4 = 0; a4 < this.nz; a4++) this.o7[a4] = this.o0 + a4
		}, this.oA = function() {
			this.o1 = Math.floor((q ? .075 : .0468) * bq), this.zoom = this.o1 / this.c1, this.o2 = (1 + this.o6) * this.o1
		}, this.show = function(c8, c9) {
			if (this.lh < 1) return !1;
			this.o8 = c4.gg;
			var oK = (oK = Math.floor(gF / this.o2)) < 3 ? 3 : oK > this.o3 ? this.o3 : oK,
				oL = this.lh > oK ? oK : this.lh,
				oK = 1 + as(this.lh - 1, oL),
				i8 = Math.floor(oL * this.o2),
				f9 = Math.floor(c8 - i8 / 2),
				fA = (f9 = (f9 = gF < f9 + i8 ? gF - i8 : f9) < 0 ? 0 : f9, Math.floor(c9 - this.o2 / 2)),
				c8 = Math.floor(oK * this.o2);
			fA = (fA = cB < fA + c8 ? cB - c8 : fA) < 0 ? 0 : fA, this.fB = f9 + i8, this.fC = fA + c8;
			for (var a4 = 0; a4 < this.lh; a4++) this.o4[a4] = Math.floor(f9 + a4 % oL * this.o2), this.o5[a4] = Math.floor(fA + as(a4, oL) * this.o2);
			return !0
		}, this.lJ = function(c8, c9) {
			return !(c8 < this.o4[0] || c9 < this.o5[0] || c8 >= this.fB || c9 >= this.fC)
		}, this.lK = function(c8, c9, player) {
			if (!(player === aw && this.o8 + 190 > c4.gg))
				for (var a4 = this.lh - 1; 0 <= a4; a4--)
					if (c8 >= this.o4[a4] && c9 >= this.o5[a4]) return 39 === this.o7[a4] ? (this.oJ(), this.show(c8, c9), !0) : (dx ? eA.n9(aw, 0, this.o7[a4]) : player === aw ? iv.oN(this.o7[a4]) : iv.oO(this.o7[a4], player), this.oI(), !1);
			return !1
		}, this.oP = function(a4) {
			return a4 < 16 || 40 <= a4 && a4 < 47
		}, this.oQ = function(a4) {
			return a4 >= this.nx && a4 < this.nx + this.ny
		}, this.cG = function() {
			cH.imageSmoothingEnabled = !0;
			for (var f8 = this.o6 * this.o1 / 2, a4 = this.lh - 1; 0 <= a4; a4--) cH.setTransform(this.zoom, 0, 0, this.zoom, this.o4[a4] + f8, this.o5[a4] + f8), cH.drawImage(this.l8[this.o7[a4]], 0, 0);
			cH.imageSmoothingEnabled = !1, cH.setTransform(1, 0, 0, 1, 0, 0)
		}, this.oR = function(fL, fM, mk) {
			cH.imageSmoothingEnabled = !0, cH.setTransform(this.zoom, 0, 0, this.zoom, fL, fM), cH.drawImage(this.l8[mk], 0, 0), cH.imageSmoothingEnabled = !1, cH.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
	var mA, pA, cA, pB, pC, pD, pE, cC, g8, gD, gE, qg, eo, sV, gN, nY, fH, d0, d3, cz, d2, bU, he, ax, b4, bM, bN, bQ, fV, dZ, dY, pK, cH, a2W, a2X, r, s, pW, bq, gF, cB, pa, a2Y, b, c, e, d, q, gI = "rgb(0,0,0)",
		oS = "rgba(0,0,0,0.7)",
		oT = "rgba(0,0,0,0.5)",
		m2 = "rgba(0,0,0,0.5)",
		i2 = "rgba(0,0,0,0.75)",
		oU = "rgba(0,0,0,0.85)",
		oV = "rgba(0,96,96,0.75)",
		oW = "rgb(255,255,255)",
		mG = "rgb(128,128,128)",
		oX = "rgb(30,255,30)",
		oY = "rgb(0,200,0)",
		oZ = "rgba(0,255,0,0.6)",
		oa = "rgba(0,255,0,0.5)",
		ob = "rgba(0,200,0,0.5)",
		me = "rgba(0,100,0,0.75)",
		oc = "rgba(0,60,0,0.8)",
		od = "rgb(128,255,128)",
		oe = "rgba(255,255,150,0.2)",
		og = "rgba(0,255,0,0.3)",
		m3 = "rgba(255,255,255,0.3)",
		oh = "rgba(0,40,90,0.75)",
		oi = "rgba(220,0,0,0.6)",
		oj = "rgba(255,100,100,0.8)",
		mv = "rgba(100,0,0,0.85)",
		ok = "rgba(60,0,0,0.85)",
		ol = "rgb(255,120,120)",
		om = "rgb(255,160,160)",
		on = "rgb(255,70,70)",
		oo = "rgb(230,0,0)",
		op = "rgba(0,60,60,0.85)",
		oq = "rgb(160,160,255)",
		cK = "rgb(255,255,255)",
		or = "rgba(255,255,255,0.6)",
		os = "rgba(255,255,255,0.4)",
		nk = "rgba(255,255,255,0.25)",
		ot = "rgba(255,255,255,0.85)",
		ou = "rgba(255,255,255,0.75)",
		ov = "rgb(255,120,100)",
		ow = "rgba(255,255,0,0.5)",
		cI = "middle",
		ox = "bottom",
		cJ = "center",
		mm = "left",
		oy = "right",
		bt = "bold ",
		oz = "italic ",
		p0 = "normal ",
		bu = "px sans-serif",
		p1 = [bt, oz + bt, bt],
		p2 = "https://play.google.com/store/apps/details?id=territorial.io",
		p3 = "https://apps.apple.com/app/id1581110913",
		p4 = "https://www.youtube.com/watch?v=toZTQ8aRdFc",
		p5 = "https://discord.gg/pthqvpTXmh",
		p6 = "https://www.instagram.com/davidtschacher/",
		ni = "https://territorial.io/cookie_policy",
		p7 = "https://territorial.io/privacy_policy",
		p8 = "https://territorial.io/tutorial",
		p9 = ["https://territorial.io/players", "https://territorial.io/clans"],
		pF = ["wss://", "/s50/", "/s51/", "/s52/"];

	function pG() {
		pH(), pB = 3, (cC = new pI).bp()
	}

	function pJ() {
		pK.addEventListener("mousedown", pL), pK.addEventListener("mousemove", pM), pK.addEventListener("mouseup", pN), pK.addEventListener("mouseleave", pO), pK.addEventListener("wheel", pP), pK.addEventListener("touchstart", pQ), pK.addEventListener("touchmove", pR), pK.addEventListener("touchend", pS), pK.addEventListener("touchcancel", pT), pK.addEventListener("dragover", pU), pK.addEventListener("drop", pV), pC = !1
	}

	function pH() {
		cA = (cA = Math.floor((q ? .02 : .01152) * bq)) < 2 ? 2 : cA, mA = (mA = Math.floor((q ? .0114 : .01296) * bq)) < 2 ? 2 : mA, pA = (pA = Math.floor(.005 * pW)) < 1 ? 1 : pA
	}

	function pL(pX) {
		pX.preventDefault(), pC || (eD.pY(eD.jg), pZ(Math.floor(pa * pX.clientX), Math.floor(pa * pX.clientY)))
	}

	function pQ(pX) {
		pX.preventDefault(), eD.pY(eD.jg), pC = !0, 0 < pX.touches.length && (pD = Math.floor(pa * pX.touches[0].clientX), pE = Math.floor(pa * pX.touches[0].clientY), js.pb(pX) || pZ(pD, pE))
	}

	function pZ(fL, fM) {
		var pc;
		0 === ed ? aJ.c7(fL, fM) : hz.c7(fL, fM) || hy.lE(fL, fM) || eX.c7(fL, fM) || eQ.c7(fL, fM) || 2 === (pc = fr.c7(fL, fM)) || eM.c7(fL, fM) || (gn.c7(fL, fM) ? c4.c5 = !0 : eS.pd(fL, fM) ? (gn.go = !1, eS.pe(fL, fM) && (c4.c5 = !0)) : e9.c7(fL, fM) || eT.c7(fL, fM) || 0 === pc && hy.lG(fL, fM))
	}

	function pM(pX) {
		pC = !1, pX.preventDefault(), pf(Math.floor(pa * pX.clientX), Math.floor(pa * pX.clientY))
	}

	function pR(pX) {
		pX.preventDefault(), 0 < pX.touches.length && (pD = Math.floor(pa * pX.touches[0].clientX), pE = Math.floor(pa * pX.touches[0].clientY), js.pg(pX) || pf(pD, pE))
	}

	function pf(fL, fM) {
		0 === ed ? aJ.lr(fL, fM) : hz.lr(fL, fM) || (hy.lF() ? hy.lr(fL, fM) : fr.lr(fL, fM) || (eS.ph ? eS.lr(fL, fM) && (c4.c5 = !0) : (eM.lr(fL, fM), gn.go && gn.lr(fL, fM) && (c4.c5 = !0))))
	}

	function pO(pX) {
		pX.preventDefault(), 0 === ed ? (aJ.click(-1024, -1024), jk.pi()) : (eM.pj(-1024, -1024), fr.lr(-1024, -1024), eS.pk(), gn.go && (gn.go = !1))
	}

	function pN(pX) {
		pX.preventDefault(), pC || pl(Math.floor(pa * pX.clientX), Math.floor(pa * pX.clientY), 2 === pX.button)
	}

	function pS(pX) {
		pX.preventDefault(), pX && pX.touches && 0 < pX.touches.length && 0 !== ed ? gn.go = !1 : pl(pD, pE, !1)
	}

	function pT(pX) {
		pX.preventDefault(), pl(pD, pE, !1)
	}

	function pU(pX) {
		jy.pm(pX)
	}

	function pV(pX) {
		jy.pn(pX)
	}

	function pl(fL, fM, lc) {
		0 === ed ? aJ.click(fL, fM) : (eM.pj(fL, fM), hz.pj(), eS.pk(), gn.go = !1, hy.click(fL, fM, lc) && (c4.c5 = !0))
	}

	function pP(pX) {
		pX.preventDefault(), eD.pY(eD.jg);
		var fL = Math.floor(pa * pX.clientX),
			fM = Math.floor(pa * pX.clientY),
			deltaY = pX.deltaY;
		1 === pX.deltaMode && (deltaY *= 20), 0 === ed ? aJ.po(fL, fM, deltaY) : eM.po(fL, fM, deltaY) || (eS.pd(fL, fM) ? eS.po(deltaY) && (c4.c5 = !0) : gn.po(fL, fM, 2 * deltaY) && (c4.c5 = !0))
	}

	function pp(i1, c1, cw) {
		i1.fillStyle = cK, i1.fillRect(0, 0, c1, 1), i1.fillRect(0, cw - 1, c1, 1), i1.fillRect(0, 0, 1, cw), i1.fillRect(c1 - 1, 0, 1, cw)
	}

	function k4() {
		var mH, pq, c0, cw, pr;

		function py(a4) {
			var c1 = mH[a4].lv.width,
				i8 = (mH[a4].i1.clearRect(0, 0, c1, cw), mH[a4].i1.fillStyle = 0 !== mH[a4].id ? "rgba(33,33,120,0.83)" : mH[a4].cM === b8 ? "rgba(88,88,88,0.83)" : mH[a4].cM < cq ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", mH[a4].i1.fillRect(0, 0, c1, cw), pp(mH[a4].i1, c1, cw), pq + 2 * cw < c1 && (mH[a4].i1.fillRect(c1 - pq - cw, 0, 1, cw), mH[a4].i1.fillText(gN[mH[a4].cM], Math.floor((c1 - pq) / 2), Math.floor(.57 * cw))), 0 !== mH[a4].id ? 0 : cw);
			mH[a4].i1.fillText(eQ.gM(mH[a4].cN), Math.floor(c1 - pq / 2 - i8), Math.floor(.57 * cw)),
				function(a4, c1, i8) {
					mH[a4].i1.fillStyle = or;
					var q3 = Math.floor(pq * mH[a4].cN / mH[a4].q4);
					mH[a4].i1.fillRect(Math.floor(c1 - pq - i8), cw - pr, q3, pr)
				}(a4, c1, i8), 0 === mH[a4].id ? (q1(a4, c1), function(a4, c1) {
					mH[a4].i1.strokeStyle = od, mH[a4].i1.fillRect(cw, 0, 1, cw);
					c1 -= cw;
					mH[a4].i1.beginPath(), mH[a4].i1.moveTo(Math.floor(.3 * cw + c1), Math.floor(cw / 2)), mH[a4].i1.lineTo(Math.floor(cw - .3 * cw + 0 + c1), Math.floor(cw / 2)), mH[a4].i1.stroke(), mH[a4].i1.beginPath(), mH[a4].i1.moveTo(Math.floor(cw / 2 + c1), Math.floor(.3 * cw)), mH[a4].i1.lineTo(Math.floor(cw / 2 + c1), Math.floor(cw - .3 * cw + 0)), mH[a4].i1.stroke()
				}(a4, c1)) : q1(a4, 2 * cw)
		}

		function q1(a4, c1) {
			mH[a4].i1.strokeStyle = mH[a4].q5 ? mG : om, mH[a4].i1.fillStyle = cK, mH[a4].i1.fillRect(c1 - cw, 0, 1, cw);
			var q6 = Math.floor(cw / 12),
				q6 = (mH[a4].i1.lineWidth = q6 < 3 ? 3 : q6, mH[a4].i1.lineCap = "round", .35);
			c1 = cw + 1, mH[a4].i1.beginPath(), mH[a4].i1.moveTo(Math.floor(c1 - q6 * cw + 0), Math.floor(q6 * cw)), mH[a4].i1.lineTo(Math.floor(c1 - cw + q6 * cw), Math.floor(cw - q6 * cw + 0)), mH[a4].i1.stroke(), mH[a4].i1.beginPath(), mH[a4].i1.moveTo(Math.floor(c1 - cw + q6 * cw), Math.floor(q6 * cw)), mH[a4].i1.lineTo(Math.floor(c1 - q6 * cw + 0), Math.floor(cw - q6 * cw + 0)), mH[a4].i1.stroke()
		}

		function qN(b3) {
			for (var cN, a4 = b3 - 1; 0 <= a4; a4--) cN = ae.am(aw, a4), mH[a4].cN !== cN && (mH[a4].cN = cN, mH[a4].q4 = cN > mH[a4].q4 ? cN : mH[a4].q4, mH[a4].pz = !0)
		}

		function px(qP) {
			qP.lv = document.createElement("canvas"), pw.font = c0;
			var c1 = pq;
			qP.cM < b8 && 0 === qP.id && (c1 += Math.floor(pw.measureText(gN[qP.cM] + "000").width)), c1 += cw, 0 === qP.id && (c1 += cw), qP.lv.width = c1, qP.lv.height = cw, qP.i1 = qP.lv.getContext("2d", {
				alpha: !0
			}), qP.i1.font = c0, qP.i1.textBaseline = cI, qP.i1.textAlign = cJ
		}

		function qH(a4) {
			return eP.qR() ? gF - mH[a4].lv.width - mA : eP.fL
		}

		function qI(a4) {
			return Math.floor(2 * mA + (eP.qR() ? eB.cw + mA : 0) + eP.cw + a4 * (1.3 * cw))
		}
		this.bp = function() {
			mH = [], this.m0()
		}, this.m0 = function() {
			c0 = e9.c0, cw = e9.by + 5, cw = Math.floor(1.25 * cw), q && (cw = Math.floor(1.25 * cw)), pr = Math.floor(.15 * cw), pw.font = c0, pq = Math.floor(pw.measureText("02 000 000 0000").width);
			for (var a4 = mH.length - 1; 0 <= a4; a4--) px(mH[a4]), py(a4)
		}, this.ec = function() {
			for (var a4 = mH.length - 1; 0 <= a4; a4--) mH[a4].pz && (mH[a4].pz = !1, py(a4))
		}, this.gM = function(n0) {
			if (n0 < 1e3) return n0 < 0 ? "-" + this.gM(Math.abs(n0)) : n0.toString();
			for (var q8 = Math.floor(Math.log(n0 + .5) / Math.log(10)) + 1, q9 = Math.floor((q8 - 1) / 3), qA = n0.toString(), qB = qA.substring(q8 - 3, q8), a4 = 1; a4 < q9; a4++) qB = qA.substring(q8 - 3 * (a4 + 1), q8 - 3 * a4) + " " + qB;
			return qA.substring(0, q8 - 3 * q9) + " " + qB
		}, this.c7 = function(c8, fM) {
			if (2 !== ed && 0 !== fH[aw] && !jC && hy.lH(aw))
				for (var qC, qD, qE, qF = q ? cw : 0, qG = q ? Math.floor(.15 * cw) : 0, a4 = mH.length - 1; 0 <= a4; a4--)
					if (qC = qH(a4), qD = qI(a4), qE = mH[a4].lv.width, qD - qG <= fM && fM <= qD + cw + qG) {
						if (qC - qF <= c8 && c8 <= qC + cw + qF) return mH[a4].q5 || (mH[a4].pz = !0, mH[a4].q5 = !0, 0 === mH[a4].id ? dx ? eG.fP(aw, mH[a4].cM) : iv.qJ(mH[a4].cM === b8 ? aw : mH[a4].cM) : dx ? eG.fR(aw, mH[a4].id) : iv.qK(mH[a4].id)), !0;
						if (0 === mH[a4].id && qC + qE - cw - qF <= c8 && c8 <= qC + qE + qF) return dx ? fN(aw, mH[a4].cM, eS.lV()) : iv.lW(eS.lV(), mH[a4].cM === b8 ? aw : mH[a4].cM), !0
					} return !1
		}, this.dF = function() {
			var b3;
			2 !== ed && 0 !== fH[aw] && !jC && hy.lH(aw) && (function(b3) {
				if (mH.length !== b3) return 1;
				for (var a4 = b3 - 1; 0 <= a4; a4--)
					if (mH[a4].id !== ae.ag(aw, a4) || mH[a4].cM !== ae.al(aw, a4)) return 1;
				return
			}(b3 = ae.af(aw)) && function(b3) {
				var a4, id, cM, cm, cN, mY = [];
				loop: for (a4 = 0; a4 < b3; a4++) {
					for (id = ae.ag(aw, a4), cM = ae.al(aw, a4), cm = 0; cm < mH.length; cm++)
						if (mH[cm].id === id && mH[cm].cM === cM) {
							mY.push(mH.splice(cm, 1)[0]);
							continue loop
						} cN = ae.am(aw, a4), px(cN = {
						cM: cM,
						cN: cN,
						q4: cN,
						id: id,
						pz: !0,
						q5: !1,
						lv: null,
						i1: null
					}), mY.push(cN)
				}
				mH = mY
			}(b3), qN(b3))
		}, this.qQ = function(bB) {
			for (var b3 = Math.min(mH.length, ae.af(aw)), a4 = 0; a4 < b3; a4++)
				if (mH[a4].cM === bB) return void(mH = [])
		}, this.cG = function() {
			if (0 !== fH[aw] && hy.lH(aw) && !jC)
				for (var a4 = mH.length - 1; 0 <= a4; a4--) cH.drawImage(mH[a4].lv, qH(a4), qI(a4))
		}
	}

	function k5() {
		var mH, df, qS, qT, cw, c0, by, qU, nl, qV, qW, qX, lv, i1, ga, qY;

		function qe() {
			cH.drawImage(lv, mA + (dA ? mA + eU.qf() : 0), qg + 2 * mA)
		}

		function qZ() {
			lv.width = mH[0].width + qW, lv.height = cw + qW, (i1 = lv.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, mH[0].width + qW, cw + qW), i1.translate(Math.floor(qW / 2), Math.floor(qW / 2)), i1.lineWidth = qW, i1.fillStyle = 1 === mH[0].qd ? ot : i2, qh(), i1.fill(), i1.strokeStyle = 1 === mH[0].qd ? gI : cK, qh(), i1.stroke(), i1.textAlign = cJ, i1.textBaseline = cI, i1.fillStyle = 1 === mH[0].qd ? gI : cK, i1.font = c0[0], i1.fillText(nl[mH[0].qc], Math.floor(mH[0].width / 2), Math.floor(.72 * qU[0] * cw)), i1.font = c0[1], i1.fillText(mH[0].l, Math.floor(mH[0].width / 2), Math.floor((qU[0] + .48 * qU[1]) * cw))
		}

		function qh() {
			i1.beginPath(), i1.moveTo(qX, 0), i1.lineTo(mH[0].width - qX, 0), i1.lineTo(mH[0].width, qX), i1.lineTo(mH[0].width, cw - qX), i1.lineTo(mH[0].width - qX, cw), i1.lineTo(qX, cw), i1.lineTo(0, cw - qX), i1.lineTo(0, qX), i1.closePath()
		}
		this.bp = function() {
			df = 4, qS = qT = ga = 0, mH = [], c0 = new Array(2), by = new Array(2), qU = new Array(2), nl = ["sikildin", "YOU WERE ERASED BY", "şu adam kazanmış", "harita:"], qU[0] = .3, qU[1] = .7, qV = new Array(4), lv = document.createElement("canvas"), qY = c4.gg + 2e3, this.m0()
		}, this.m0 = function() {
			var a4, c1;
			for (cw = Math.floor((q ? .0725 : .058) * bq), by[0] = Math.floor(.85 * qU[0] * cw), by[1] = Math.floor(.85 * qU[1] * cw), c0[0] = bt + by[0] + bu, c0[1] = bt + by[1] + bu, a4 = qV.length - 1; 0 <= a4; a4--) qV[a4] = this.measureText(nl[a4] + "000", c0[0]);
			if (qW = Math.floor(1 + .05 * cw), qX = Math.floor(.2 * cw), 0 < mH.length) {
				for (a4 = mH.length - 1; 0 <= a4; a4--) c1 = this.measureText(mH[a4].l + "00", c0[1]), mH[a4].width = c1 < qV[a4] ? qV[a4] : c1;
				qZ()
			}
		}, this.dF = function() {
			0 !== df && (4 === df ? c4.gg > qY && (df = 0, 1 === ed) && c2.n4(jq.nN(), 3, 1, 9) : (1 === df ? (0 === qS && (qZ(), qS = 1e-4), 1 <= (qS += .002 * (c4.gg - ga)) && (qT = 0, df = 2, qS = 1), c4.c5 = !0) : 2 === df ? ((qT += (c4.gg - ga) / 1e3) > mH[0].gf || 1 < qT && 1 < mH.length) && (df = 3) : 3 === df && ((qS -= .002 * (c4.gg - ga)) <= 0 && (qS = 0, mH.shift(), df = 0 < mH.length ? 1 : 0), c4.c5 = !0), ga = c4.gg))
		}, this.measureText = function(l, c0) {
			return cH.font = c0, Math.floor(cH.measureText(l).width)
		}, this.cQ = function(ex, a4) {
			this.n4(gN[ex], a4, 1, 0 === a4 ? 3 : 7)
		}, this.n4 = function(l, qc, qd, gf) {
			var c1 = (c1 = this.measureText(l + "00", c0[1])) < qV[qc] ? qV[qc] : c1;
			mH.push({
				l: l,
				width: c1,
				qc: qc,
				qd: qd,
				gf: gf
			}), 0 === df && (qS = 0, df = 1, ga = c4.gg)
		}, this.cG = function() {
			0 !== df && 0 !== qS && (qS < 1 ? (cH.globalAlpha = qS, qe(), cH.globalAlpha = 1) : qe())
		}
	}

	function kj() {
		var cw, lv, i1, qi, qj, qk, ql, qm, pz, qn, qo, qp, qq;

		function bv() {
			var c1 = eT.c1,
				qs = (pz = !1, i0(i1, c1, cw), Math.floor(c1 / 2));
			1 === qj ? (i1.fillStyle = oZ, i1.fillRect(qs, 0, qs, cw)) : -1 === qj && (i1.fillStyle = oi, i1.fillRect(0, 0, qs, cw)), i3(i1, c1, cw, 2);
			var qs = (qs = Math.floor(.25 * cw)) < 2 ? 2 : qs,
				nO = (i1.fillStyle = ou, Math.floor((cw - 4) * qk[1] / ql[1]));
			0 < nO && i1.fillRect(2, cw - 2 - nO, qs, nO), 0 < (nO = Math.floor((cw - 4) * qk[0] / ql[0])) && i1.fillRect(c1 - 2 - qs, cw - 2 - nO, qs, nO);
			qs = (qs = Math.floor(cw / 8)) < 2 ? 2 : qs;
			i5(i1, Math.floor(.4 * cw), 0, cw, qs, .5, !1), i5(i1, Math.floor(c1 - 1.4 * cw), 0, cw, qs, .5, !0), i1.drawImage(qi, Math.floor((c1 - qi.width) / 2), 3)
		}

		function qv() {
			pz = !0, qn = 140, qj = 0, qm = [], eT.lF = !1, qk[0] = qk[1] = 0
		}

		function cF() {
			return eS.mi(e9.mf()) ? eS.fM - cw - mA : s - cw - (q ? 2 : 1) * mA
		}
		this.bp = function() {
			qp = qq = 0, this.lF = !1, pz = !1, qn = 140, qk = [qj = 0, 0], ql = [1, 1], qm = [], qo = new Uint32Array(10), this.m0()
		}, this.m0 = function() {
			cw = eS.cw, this.c1 = 4 * cw, this.qr(), (lv = document.createElement("canvas")).width = this.c1, lv.height = cw, i1 = lv.getContext("2d", {
				alpha: !0
			}), bv()
		}, this.ec = function() {
			pz && bv()
		}, this.qr = function() {
			var lA, qW, qs, nc = (nc = cw - 6) < 6 ? 6 : nc;
			void 0 !== qi && qi.width === nc || ((qi = document.createElement("canvas")).width = nc, qi.height = nc, (lA = qi.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, nc, nc), qW = Math.floor(nc / 8), lA.lineWidth = qW = qW < 1 ? 1 : qW, lA.strokeStyle = cK, qs = Math.floor(nc / 2), nc = Math.floor((nc - qW) / 2), lA.beginPath(), lA.arc(qs, qs, nc, 0, 2 * Math.PI), lA.moveTo(qs, qs - nc), lA.lineTo(qs, qs + nc), lA.moveTo(qs + Math.cos(.78 * Math.PI) * nc, qs + Math.cos(.28 * Math.PI) * nc), lA.lineTo(qs, qs), lA.lineTo(qs + Math.cos(.22 * Math.PI) * nc, qs + Math.cos(1.72 * Math.PI) * nc), lA.stroke())
		}, this.c7 = function(fL, fM) {
			var fA;
			return !(fL < r - this.c1 - mA || fM < (fA = cF()) || fA + cw < fM || (fA = fL > r - mA - this.c1 / 2, dx ? this.fZ(0, fA) : hy.lH(aw) && 0 !== fH[aw] && iv.qu(fA), 0))
		}, this.dF = function() {
			if (0 < qq) 0 === --qq && qv();
			else if (this.lF) 270 == --qn && 2 <= qp && function() {
				var a4;
				for (a4 = dY - 1; 0 <= a4; a4--)
					if (hy.lH(dZ[a4])) return;
				return 1
			}() && (pz = !0, qk[0] += ql[0]), 180 === qn && 3 * qk[0] < ql[0] ? qv() : qk[0] >= ql[0] ? fj.fk(-1) : qk[1] >= ql[1] ? qq = 4 : qn <= 0 && qv();
			else if (function() {
					var a4;
					for (a4 = 9; 0 <= a4; a4--) 12 < Math.abs(qo[a4] - bU[eo[a4]]) && (qn = 140), qo[a4] = bU[eo[a4]];
					if (--qn <= 0) return 1;
					return
				}()) {
				this.lF = !0, qn = 360;
				var a4, t = 0;
				for (a4 = dY - 1; 0 <= a4; a4--) hy.lH(dZ[a4]) && (t += bU[dZ[a4]]);
				ql[0] = mh(as(3 * t, 5), 1), dA && 9 !== dv && (ql[0] = qz(mh(as(t * (100 - as(100 * eU.r0(), jD)), 100), 1), ql[0])), ql[1] = mh(t - ql[0], 1), qp++
			}
		}, this.iz = function() {
			this.lF && qk[0] < ql[0] && qv()
		}, this.fZ = function(player, fY) {
			var a4;
			if (this.lF) {
				for (a4 = qm.length - 1; 0 <= a4; a4--)
					if (qm[a4] === player) return;
				qm.push(player), pz = !0;
				var t = dx ? ql[0] : bU[player];
				fY ? qk[0] += t : qk[1] += t, player === aw && (qj = fY ? 1 : -1)
			}
		}, this.cG = function() {
			var fM;
			this.lF && (fM = cF(), cH.drawImage(lv, r - this.c1 - mA, fM))
		}
	}

	function k6() {
		var c1, fL, r2, lv, i1, lF, r3, r4, c0, pz, r5 = 11 / 12;

		function r7() {
			i1.clearRect(0, 0, c1, eS.cw);
			var q3 = Math.floor(r3 * (c1 - 2 * r2)),
				q3 = (i1.fillStyle = i2, i1.fillRect(0, 0, r2, eS.cw), i1.fillRect(r2 + q3, 0, c1 - r2 - q3, eS.cw), i1.fillStyle = r3 < 1 / 3 ? "rgba(" + Math.floor(3 * r3 * 180) + ",180,0,0.75)" : r3 < 2 / 3 ? "rgba(180," + (180 - Math.floor(3 * (r3 - 1 / 3) * 180)) + ",0,0.75)" : "rgba(180,0," + Math.floor(3 * (r3 - 2 / 3) * 180) + ",0.75)", i1.fillRect(r2, 0, q3, eS.cw), i1.fillStyle = cK, i1.fillRect(0, 0, c1, 1), i1.fillRect(0, eS.cw - 1, c1, 1), i1.fillRect(0, 0, 1, eS.cw), i1.fillRect(r2, 0, 1, eS.cw), i1.fillRect(r2 + q3, 0, 1, eS.cw), i1.fillRect(c1 - r2, 0, 1, eS.cw), i1.fillRect(c1 - 1, 0, 1, eS.cw), 1 + Math.floor(.0625 * eS.cw)),
				rB = 1 + Math.floor(.3 * eS.cw);
			i1.fillRect(Math.floor(.25 * eS.cw) + rB, Math.floor((eS.cw - q3) / 2), eS.cw - 2 * rB, q3), i1.fillRect(Math.floor(c1 - 1.25 * eS.cw) + rB, Math.floor((eS.cw - q3) / 2), eS.cw - 2 * rB - rB % 2, q3), i1.fillRect(Math.floor(c1 - 1.25 * eS.cw) + Math.floor((eS.cw - q3) / 2), rB, q3, eS.cw - 2 * rB - rB % 2), r4 = Math.floor(ax[aw] * r3), i1.fillText(eQ.gM(r4), Math.floor(c1 / 2), Math.floor(.55 * eS.cw))
		}

		function rF(bn) {
			if (1 < bn && 0 === r3) r3 = .01;
			else {
				if (1 < bn && 1 === r3 || 0 === r3) return !1;
				r3 = 1 < (r3 *= bn) ? 1 : r3 < 0 ? 0 : r3
			}
			return r7(), !0
		}

		function rG(c8) {
			return r3 !== (r3 = 1 < (r3 = (r3 = (c8 - fL - r2) / (c1 - 2 * r2)) < 0 ? 0 : r3) ? 1 : r3) && (r7(), !0)
		}
		this.bp = function() {
			lF = !fd, pz = !1, r3 = .5, r4 = 0, this.ph = !1, this.m0()
		}, this.m0 = function() {
			q && r < .8 * s ? (this.cw = Math.floor(.0536 * bq), c1 = r - 4 * mA - this.cw) : (c1 = Math.floor((q ? .65 : .389) * bq), c1 += 12 - c1 % 12, this.cw = Math.floor(c1 / 12)), r2 = Math.floor(3 * this.cw / 2), c0 = bt + Math.floor(.5 * this.cw) + bu, (lv = document.createElement("canvas")).width = c1, lv.height = this.cw, (i1 = lv.getContext("2d", {
				alpha: !0
			})).font = c0, i1.textBaseline = cI, i1.textAlign = cJ, this.r6(), r7()
		}, this.r6 = function() {
			fL = q && r < .8 * s ? this.cw + 3 * mA : Math.floor((gF - c1) / 2), this.fM = cB - this.cw - (q ? 2 : 1) * mA
		}, this.ec = function() {
			pz && (pz = !1, r7())
		}, this.lF = function() {
			return !(!lF || fr.lz && fL < Math.floor(mA + 5.5 * this.cw))
		}, this.mi = function(c3) {
			return !!this.lF() && r - c3 - mA < fL + c1
		}, this.cE = function() {
			lF = !0
		}, this.qv = function() {
			lF = !1
		}, this.lV = function() {
			var fK = Math.floor(1e3 * r3);
			return fK <= 0 ? 1 : 1e3 < fK ? 1e3 : fK
		}, this.pd = function(c8, c9) {
			return this.lF() && fL < c8 && c8 < fL + c1 && c9 > this.fM
		}, this.pe = function(c8, c9) {
			return !!this.lF() && (function(c8, c9) {
				return fL < c8 && c8 < fL + r2 && c9 > eS.fM
			}(c8, c9) ? rF(r5) : function(c8, c9) {
				return fL + c1 - r2 < c8 && c8 < fL + c1 && c9 > eS.fM
			}(c8, c9) ? rF(1 / r5) : (this.ph = !0, rG(c8)))
		}, this.rH = function(gy) {
			0 !== ed && this.lF() && rF(gy) && (c4.c5 = !0)
		}, this.po = function(deltaY) {
			var gy;
			return !(0 === deltaY || !this.lF()) && rF(gy = 0 < deltaY ? (gy = 400 / (400 + deltaY)) < r5 ? r5 : gy : 1 / r5 < (gy = (400 - deltaY) / 400) ? 1 / r5 : gy)
		}, this.lr = function(c8, c9) {
			return !!this.ph && rG(c8)
		}, this.pk = function() {
			this.ph = !1
		}, this.dF = function() {
			this.lF() && Math.floor(ax[aw] * r3) !== r4 && (pz = !0)
		}, this.cG = function() {
			this.lF() && cH.drawImage(lv, fL, this.fM)
		}
	}

	function k7() {
		var rK, rL, c1, fL, fM, rM, rN;
		this.bp = function() {
			rK = new Array(2), rL = new Array(2), this.go = !1, rN = rM = gE = gD = 0, g8 = 1, this.m0()
		}, this.m0 = function() {
			c1 = (c1 = Math.floor((q ? .072 : .0502) * bq)) < 8 ? 8 : c1;
			for (var a4 = 1; 0 <= a4; a4--) rK[a4] = document.createElement("canvas"), rK[a4].width = c1, rK[a4].height = c1, rL[a4] = rK[a4].getContext("2d", {
				alpha: !0
			});
			this.r6(),
				function() {
					for (var rg = Math.floor(1 + c1 / 20), a4 = 1; 0 <= a4; a4--) rL[a4].clearRect(0, 0, c1, c1), rL[a4].fillStyle = oS, rL[a4].beginPath(), rL[a4].arc(c1 / 2, c1 / 2, c1 / 2 - rg, 0, 2 * Math.PI), rL[a4].fill(), rL[a4].lineWidth = rg, rL[a4].fillStyle = oW, rL[a4].strokeStyle = oW, rL[a4].beginPath(), rL[a4].arc(c1 / 2, c1 / 2, c1 / 2 - rg, 0, 2 * Math.PI), rL[a4].stroke(), i5(rL[a4], 0, 0, c1, rg, .3, 0 === a4)
				}()
		}, this.gG = function() {
			return -gD / g8
		}, this.cF = function() {
			return -gE / g8
		}, this.h0 = function(rQ, rR) {
			gD = g8 * rQ - rR
		}, this.h1 = function(rS, rT) {
			gE = g8 * rS - rT
		}, this.c7 = function(fT, fU) {
			return function(fT, fU) {
				return Math.pow(fT - (fL + c1 / 2), 2) + Math.pow(fU - (fM + c1 / 2), 2) < c1 * c1 / 4 || Math.pow(fT - (fL + c1 / 2), 2) + Math.pow(fU - (fM + 2 * c1), 2) < c1 * c1 / 4
			}(fT, fU) && !gJ.gK.rU ? fU < fM + 1.25 * c1 ? this.po(Math.floor(gF / 2), Math.floor(cB / 2), -200) : this.po(Math.floor(gF / 2), Math.floor(cB / 2), 200) : (eW.h4() && (this.go = !0, rM = fT, rN = fU), !1)
		}, this.lr = function(fT, fU) {
			var rV, rW, gw, gx;
			return !eW.h4() || (rV = gD, rW = gE, gD += gw = rM - fT, gE += gx = rN - fU, eA.lr(gw, gx), this.rX(), rM = fT, rN = fU, rV !== gD) || rW !== gE
		}, this.po = function(c8, c9, deltaY) {
			if (eW.h4()) {
				var gy;
				if (0 < deltaY) gy = (gy = 450 / (450 + deltaY)) < .5 ? .5 : gy;
				else {
					if (!(deltaY < 0)) return !1;
					gy = 2 < (gy = (450 - deltaY) / 450) ? 2 : gy
				}
				this.rY(c8, c9, gy)
			}
			return !0
		}, this.rY = function(fL, fM, e1) {
			var bn;
			e1 = bn = (bn = 1024 < (bn = e1) * g8 ? 1024 / g8 : bn) * g8 < .125 ? .125 / g8 : bn, eA.zoom(e1, fL, fM),
				function(bn, c8, c9) {
					g8 *= bn, gD = (gD + c8) * bn - c8, gE = (gE + c9) * bn - c9, gn.rX()
				}(e1, fL, fM)
		}, this.rX = function() {
			var rb = r / 16,
				rc = 0,
				rd = s / 16,
				re = 0;
			gD < rb - r && (rc = rb - r - gD), gE < rd - s && (re = rd - s - gE), gD += rc = g8 * aZ - rb < gD ? g8 * aZ - rb - gD : rc, gE += re = g8 * aa - rd < gE ? g8 * aa - rd - gE : re, h2.h3(), eA.rf(rc, re)
		}, this.r6 = function() {
			fL = gF - c1 - mA, fM = Math.floor(cB / 2 - 1.25 * c1)
		}, this.cG = function() {
			gJ.gK.rU || (cH.drawImage(rK[0], fL, fM), cH.drawImage(rK[1], fL, Math.floor(fM + 3 * c1 / 2)))
		}
	}

	function k8() {
		var hJ, hG, rh, ri, f8, rj, rk, rl, rm, rn, c0, ro, rp, rq, rr, q3, rs, rt, ru;

		function ry() {
			ri = Math.floor(.2 * (q ? .07 : .035) * bq), ri = mh(q ? 3 : 1, ri);
			var s3 = r / (hJ.length + f8);
			ri = ri < s3 ? s3 : ri, q3 = Math.floor((1 - f8) * ri), hG = 0, s4()
		}

		function s4() {
			hG = (hG = hG < -20 ? -20 : hG) > (hJ.length - 15) * ri ? (hJ.length - 15) * ri : hG, rk = Math.floor(hG / ri), rl = (rl = rk + Math.floor(gF / ri)) > hJ.length - 1 ? hJ.length - 1 : rl, rk = (rk = rl < rk ? rl : rk) < 0 ? 0 : rk;
			var qs = rl;
			rj = rh / hJ[qs];
			for (var a4 = rl - 1; rk <= a4; a4--) hJ[a4] > hJ[qs] && (qs = a4, rj = rh / Math.pow(hJ[a4], rr))
		}

		function s7(fL) {
			fL = Math.floor((hG + gF - fL - f8 * ri) / ri);
			return (fL = fL < -1 ? -1 : -1 === fL ? 0 : fL > hJ.length - 1 ? -1 : fL) !== rm && (rm = fL, -1 === rs && 0 === rm && rq && (rs = setInterval(s8, 100)), 1)
		}

		function s9(a4) {
			var pr = Math.floor(rj * Math.pow(hJ[a4], rr));
			cH.fillRect(hG + gF - (a4 + 1) * ri, cB - pr, q3, pr)
		}

		function s8() {
			var bB;
			0 !== (rm = 8 === aJ.nt() ? -1 : rm) ? (rt = (new Date).getTime(), clearInterval(rs), rs = -1) : (bB = hJ[1] / 864e3, -1 !== rt && (bB += ((new Date).getTime() - rt) * hJ[1] / 864e5, rt = -1), 0 < bB && (hJ[0] += Math.floor(bB), c4.c5 = !0))
		}
		this.bp = function() {
			rq = !(rt = rs = -1), rm = -(rr = 1), this.rv = !1, rp = 0, ro = new Date, hG = 0, f8 = .3, (ru = []).push({
				n0: "Plateau A",
				b3: 0,
				pX: 57
			}), ru.push({
				n0: "Max A",
				b3: 1,
				pX: 1
			}), ru.push({
				n0: "Black Friday",
				b3: 15,
				pX: 15
			}), ru.push({
				n0: "Max B",
				b3: 19,
				pX: 19
			}), ru.push({
				n0: "Max C",
				b3: 44,
				pX: 44
			}), ru.push({
				n0: "First Android Version",
				b3: 58,
				pX: 58
			}), ru.push({
				n0: "Max D",
				b3: 67,
				pX: 67
			}), ru.push({
				n0: "The iFrame Explosion",
				b3: 98,
				pX: 99
			}), ru.push({
				n0: "The 155-Day Uptrend",
				b3: 58,
				pX: 213
			}), ru.push({
				n0: "Max E",
				b3: 213,
				pX: 213
			}), ru.push({
				n0: "Plateau B",
				b3: 214,
				pX: 259
			}), ru.push({
				n0: "Turbulent Times",
				b3: 260,
				pX: 344
			}), ru.push({
				n0: "Max F",
				b3: 262,
				pX: 262
			}), ru.push({
				n0: "Max G",
				b3: 282,
				pX: 282
			}), ru.push({
				n0: "Max H",
				b3: 333,
				pX: 333
			}), ru.push({
				n0: "The 19-Day Downtrend",
				b3: 283,
				pX: 301
			}), ru.push({
				n0: "Plateau C",
				b3: 345,
				pX: 385
			}), ru.push({
				n0: "The Alliance Ascent",
				b3: 386,
				pX: 395
			}), ru.push({
				n0: "Max I",
				b3: 395,
				pX: 395
			}), ru.push({
				n0: "First iOS Version",
				b3: 411,
				pX: 411
			}), ru.push({
				n0: "Plateau D",
				b3: 396,
				pX: 453
			}), ru.push({
				n0: "The TikTok Revolution",
				b3: 454,
				pX: 470
			}), ru.push({
				n0: "Max J",
				b3: 456,
				pX: 456
			}), ru.push({
				n0: "Max K",
				b3: 472,
				pX: 472
			}), ru.push({
				n0: "Max L",
				b3: 478,
				pX: 478
			}), ru.push({
				n0: "YT Drew",
				b3: 471,
				pX: 485
			}), ru.push({
				n0: "Plateau E",
				b3: 485,
				pX: 600
			}), ru.push({
				n0: "Uptrend A",
				b3: 600,
				pX: 613
			}), ru.push({
				n0: "Max M",
				b3: 613,
				pX: 613
			}), ru.push({
				n0: "Downtrend A",
				b3: 614,
				pX: 635
			}), ru.push({
				n0: "Plateau F",
				b3: 636,
				pX: 737
			}), ru.push({
				n0: "End of Record",
				b3: 738,
				pX: 738
			}), hJ = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931e3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47e3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176], this.m0(), eD.rx(0, 0)
		}, this.m0 = function() {
			rh = Math.floor(.15 * s), rn = Math.floor((q ? .018 : .0137) * bq), c0 = bt + (rn = rn < 2 ? 2 : rn) + bu, ry()
		}, this.rz = function() {
			rq || iv.s0()
		}, this.s1 = function(s2) {
			var a4;
			for (rq = !0, a4 = 0; a4 < s2.length; a4++) hJ.unshift(s2[a4]);
			ry(), c4.c5 = !0
		}, this.s5 = function() {
			s4()
		}, this.lr = function(fL, fM) {
			cB - .6 * rh < fM ? this.rv ? fL !== rp && (hG += fL - rp, rp = fL, s4(), s7(fL), this.rv = -1 !== rm, c4.c5 = !0) : s7(fL) && (c4.c5 = !0) : this.pi()
		}, this.pi = function() {
			-1 !== rm && (this.rv = !1, rm = -1, c4.c5 = !0)
		}, this.po = function(fL, deltaY) {
			-1 !== rm && (hG += Math.floor(deltaY), s4(), s7(fL), c4.c5 = !0)
		}, this.c7 = function(fL, fM) {
			this.lr(fL, fM), -1 !== rm && (rp = fL, this.rv = !0)
		}, this.pj = function() {
			-1 !== rm && (this.rv = !1)
		}, this.cG = function() {
			cH.fillStyle = os;
			for (var sB, month, t, i9, sE, sF, fA, sG, sH, a4 = rl; rk <= a4; a4--) s9(a4);
			rq && 0 === rk && (cH.fillStyle = oi, s9(0)), -1 !== rm && (cH.fillStyle = or, s9(rm)), -1 !== rm && (cH.font = c0, cH.textBaseline = ox, (t = new Date).setTime(ro.getTime() - 1e3 * rm * 60 * 60 * 24), month = "month", sB = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(t), sB = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(t)), sB = sB + ", " + t.getUTCDate() + " " + month + " " + t.getFullYear(), month = 1 === hJ[rm] ? " second played" : " seconds played", month = eQ.gM(hJ[rm]) + month, t = Math.floor(cH.measureText(sB).width), i9 = Math.floor(cH.measureText(month).width), sE = Math.floor(.5 * (t + rn)), sF = (sF = hG + gF - (rm + 1) * ri) < sE ? sE : gF - sE < sF ? gF - sE : sF, fA = cB - Math.floor(rj * Math.pow(hJ[rm], rr)), sG = Math.floor(1.1 * rn), sH = cB - sG < fA ? cB - sG : fA, cH.fillStyle = i2, cH.fillRect(gF - i9 - rn, sH - sG, i9 + rn, sG), cH.fillRect(sF - sE, cB - sG, t + rn, sG), cH.fillStyle = cK, cH.textAlign = oy, cH.fillText(month, Math.floor(gF - .5 * rn), sH), function(fA, sG) {
				for (var i8, m6 = -1, bs = hJ.length - rm - 1, a4 = ru.length - 1; 0 <= a4; a4--) bs >= ru[a4].b3 && bs <= ru[a4].pX && (-1 === m6 || ru[a4].pX - ru[a4].b3 < ru[m6].pX - ru[m6].b3) && (m6 = a4); - 1 !== m6 && (i8 = Math.floor(cH.measureText(ru[m6].n0).width), cH.fillStyle = i2, cH.fillRect(gF - i8 - rn, fA, i8 + rn, sG), cH.fillStyle = cK, cH.fillText(ru[m6].n0, Math.floor(gF - .5 * rn), fA + sG))
			}(sH - 2 * sG, sG), cH.textAlign = cJ, cH.fillText(sB, sF, cB), cH.strokeStyle = nk, cH.lineWidth = 1, cH.beginPath(), cH.moveTo(0, fA), cH.lineTo(gF, fA), cH.closePath(), cH.stroke())
		}
	}

	function k9() {
		var c0, c1, fM, sJ, sK, lv, i1, pz, sL, sM, sN, sO, sP;
		this.fL = 0, this.cw = 0, this.bp = function() {
			sK = hf, sN = "rgba(0,100,0,0.8)", sO = "rgba(150,0,0,0.8)", pz = !(sM = !0), sL = ax[aw], this.m0()
		}, this.m0 = function() {
			c1 = Math.floor((q ? .305 : .24) * bq), this.cw = Math.floor(.5 + .13 * c1), c1 = Math.floor(6 * this.cw), c0 = bt + Math.floor(.8 * this.cw) + bu, sP = Math.floor(.5 * this.cw), pw.font = c0, fM = mA, sJ = Math.floor(1 + .13 * this.cw), (lv = document.createElement("canvas")).width = c1, lv.height = this.cw, (i1 = lv.getContext("2d", {
				alpha: !0
			})).font = c0, i1.textBaseline = cI, i1.textAlign = cJ, this.sQ()
		}, this.qR = function() {
			return q && r < 1.2 * s
		}, this.r6 = function() {
			this.qR() ? this.fL = gF - c1 - mA : this.fL = Math.floor(eM.sR() + (gF - eM.sR() - eB.c1 - c1) / 2 - .5 * mA)
		}, this.ec = function() {
			pz && (pz = !1, this.sQ())
		}, this.sQ = function() {
			i1.clearRect(0, 0, c1, this.cw), i1.fillStyle = sM ? sN : sO, i1.fillRect(0, 0, c1, this.cw), i1.fillStyle = or, this.sS(), this.sT(), i1.fillStyle = ax[aw] >= ay.dJ(aw) ? om : cK, i1.fillText(eQ.gM(sL), Math.floor(c1 / 2), sP), i1.fillStyle = cK, i1.fillRect(0, 0, c1, 1), i1.fillRect(0, 0, 1, this.cw), i1.fillRect(0, this.cw - 1, c1, 1), i1.fillRect(c1 - 1, 0, 1, this.cw)
		}, this.sS = function() {
			var hP = qz(Math.floor((ay.sU() - 1) * this.cw / 9), this.cw - sJ);
			i1.fillRect(0, hP, sJ, this.cw - hP), i1.fillRect(c1 - sJ, hP, sJ, this.cw - hP)
		}, this.sT = function() {
			i1.fillRect(sJ, this.cw - sJ, Math.floor((c1 - 2 * sJ) * ax[aw] / sK), sJ)
		}, this.dF = function() {
			0 !== fH[aw] && 2 !== fV[aw] && sL !== ax[aw] && (sK = mh(ax[aw], sK), sM = ax[aw] > sL && 10 <= ax[aw], sL = ax[aw], pz = !0)
		}, this.cG = function() {
			0 === fH[aw] || fd || 2 === fV[aw] || cH.drawImage(lv, this.fL, fM)
		}
	}

	function kA() {
		var sW, sX, sY, sZ, sa, sb, sc, sd, se, sf, sg, sh, si, sj, sk, sl, sm, sn, so, title, sp, sq, sr, ss, st, position, su, sv, sw, sx, sy = 1;

		function t1() {
			sc.clearRect(0, 0, sW, qg), sc.fillStyle = oh, sc.fillRect(0, 0, sW, sh), sc.fillStyle = oU, sc.fillRect(0, sh, sW, qg - sh), sV[aw] >= position && t4(sV[aw] - position, og), 0 !== sV[aw] && 0 === position && t4(0, oe), -1 !== st && t4(st, m3), sc.fillStyle = oW, sc.fillRect(0, sh, sW, 1), sc.fillRect(0, 0, sW, pA), sc.fillRect(0, 0, pA, qg), sc.fillRect(sW - pA, 0, pA, qg), sc.fillRect(0, qg - pA, sW, pA), sc.font = sX, sc.textBaseline = cI, sc.textAlign = cJ, sc.fillText(title, Math.floor(sW / 2), Math.floor(sf + sY / 2));
			var ca, bC = sV[aw] < position + sa - 1 ? 1 : 2;
			for (sc.font = sZ, sc.textAlign = mm, ca = sa - bC; 0 <= ca; ca--) t5(eo[ca + position]), t6(ca, ca + position, eo[ca + position]);
			for (sc.textAlign = oy, ca = sa - bC; 0 <= ca; ca--) t5(eo[ca + position]), t7(ca, eo[ca + position]);
			2 == bC && (t5(aw), sc.textAlign = mm, t6(sa - 1, sV[aw], aw), sc.textAlign = oy, t7(sa - 1, aw)), 0 === position && (bC = .7 * si / bw.bz(4).height, sc.setTransform(bC, 0, 0, bC, Math.floor(sj + .58 * si + .5 * bC * bw.bz(4).width), Math.floor(sf + sY + .4 * si)), sc.imageSmoothingEnabled = !0, sc.drawImage(bw.bz(4), -Math.floor(bw.bz(4).width / 2), -Math.floor(bw.bz(4).height / 2)), sc.setTransform(1, 0, 0, 1, 0, 0))
		}

		function t5(player) {
			dA && (sc.fillStyle = dW.t9[dW.ir[dW.dX[player]]])
		}

		function t4(a4, lD) {
			sc.fillStyle = lD, a4 = sa - 1 < a4 ? sa - 1 : a4;
			lD = Math.floor((a4 === sa - 1 ? 2 : 0 === a4 ? 1.15 : 1) * si), lD = a4 === sa - 2 ? Math.floor(sh + 9.15 * si) - Math.floor(sh + 8.15 * si) : lD;
			sc.fillRect(0, Math.floor(sh + (a4 + (0 === a4 ? 0 : .15)) * si), sW, lD)
		}

		function t6(tB, tC, a4) {
			sc.fillText(sp[tC], sj, Math.floor(sf + sY + (tB + .5) * si)), 1 === fV[a4] && (sc.font = oz + sZ);
			tC = Math.floor(sf + sY + (tB + .5) * si);
			sc.fillText(sn[a4] === a4 ? gN[a4] : sm[sn[a4] % b8], sk, tC), 0 !== fV[a4] && (sc.font = sZ), a4 < cq && 2 !== fV[a4] || sc.fillRect(sk, tC + .35 * sy, so[a4], Math.max(1, .1 * sy))
		}

		function t7(tB, a4) {
			sc.fillText(bU[a4], sl, Math.floor(sf + sY + (tB + .5) * si))
		}

		function tL(fM) {
			return (fM -= mA + sh) < 0 ? Math.floor(fM / si) - 1 : fM < (sa - 1) * si ? Math.floor(fM / si) : fM < qg - sh ? sa - 1 : (fM -= qg - sh, sa + Math.floor(fM / si))
		}

		function lJ(fL, fM) {
			return mA <= fL && fL < mA + sW && mA <= fM && fM < mA + qg
		}
		this.bp = function() {
			var a4, l, ca;
			for (sv = !1, title = "LİDER TABLOSU", sa = q ? 6 : 10, position = sx = sw = su = 0, ss = !(st = -1), sq = new Uint16Array(sa + 1), sr = new Uint32Array(sa + 1), se = b8, eo = new Uint16Array(se), sV = new Uint16Array(se), a4 = se - 1; 0 <= a4; a4--) eo[a4] = a4, sV[a4] = a4;
			this.m0(!0), sm = [], sn = new Uint16Array(b8), so = new Uint16Array(b8);
			var sz = Math.floor(sW - sk - sj - sd),
				t0 = 0;
			for (sp = new Array(b8), sc.font = sZ, a4 = b8 - 1; 0 <= a4; a4--)
				if (sp[a4] = a4 + 1 + ".", sn[a4] = a4, so[a4] = Math.floor(sc.measureText(gN[a4]).width), so[a4] > sz) {
					for (l = gN[a4], ca = gN[a4].length - 1; 1 <= ca && (l = l.substring(0, ca), so[a4] = Math.floor(sc.measureText(l + "...").width), !(so[a4] <= sz)); ca--);
					l += "...", sm.push(l), sn[a4] = b8 + t0++
				} t1()
		}, this.m0 = function(bp) {
			if (qg = q ? (sW = Math.floor(.335 * bq), Math.floor(sa * sW / 8)) : (sW = Math.floor(.27 * bq), Math.floor(sa * sW / 10)), sW = Math.floor(.97 * sW), (sb = document.createElement("canvas")).width = sW, sb.height = qg, sc = sb.getContext("2d", {
					alpha: !0
				}), sf = .025 * sW, sY = .16 * sW, sg = 0 * sW, sh = Math.floor(.45 * sf + sY), si = (qg - sY - 2 * sf - sg) / sa, sX = bt + Math.floor(.55 * sY) + bu, sy = Math.floor((q ? .67 : .72) * si), sZ = sy + bu, sc.font = sZ, sj = Math.floor(.04 * sW), sk = Math.floor((q ? .195 : .18) * sW), sd = Math.floor(sc.measureText("00920600").width), sc.font = sX, sl = sW - sj, !bp) {
				sc.font = sZ;
				for (var a4 = b8 - 1; 0 <= a4; a4--) so[a4] = Math.floor(sc.measureText(sn[a4] === a4 ? gN[a4] : sm[sn[a4] % b8]).width);
				t1()
			}
		}, this.sR = function() {
			return sW
		}, this.ec = function(nT) {
			ss && (nT || c4.dU() % gJ.t2[gJ.gK.t3] == 0) && (ss = !1, t1())
		}, this.dF = function() {
			! function() {
				for (var ca = se - 1; 0 <= ca; ca--) 0 === fH[eo[ca]] && ! function(ca) {
					var tJ = eo[ca];
					se--;
					for (var a4 = ca; a4 < se; a4++) eo[a4] = eo[a4 + 1], sV[eo[a4]] = a4;
					eo[se] = tJ, sV[eo[se]] = se
				}(ca)
			}();
			for (var tH, h4 = se - 1, ca = 0; ca < h4; ca++) bU[eo[ca]] < bU[eo[ca + 1]] && (tH = eo[ca], eo[ca] = eo[ca + 1], eo[ca + 1] = tH, sV[eo[ca]] = ca, sV[eo[ca + 1]] = ca + 1);
			! function() {
				for (var t = ss, bC = (ss = !0, sV[aw] >= sa - 1 ? sa - 2 : sa - 1), a4 = bC; 0 <= a4; a4--)
					if (sq[a4] !== eo[a4] || sr[a4] !== bU[eo[a4]]) return;
				(bC != sa - 2 || sq[sa] === sV[aw] && sr[sa] === bU[aw]) && (ss = t)
			}();
			for (var a4 = sa - 1; 0 <= a4; a4--) sq[a4] = eo[a4], sr[a4] = bU[eo[a4]];
			sq[sa] = sV[aw], sr[sa] = bU[aw]
		}, this.c7 = function(fL, fM) {
			return !!lJ(fL, fM) && (su = c4.gg, sv = !0, sw = sx = tL(fM), pC && (fL = tM(-1, sx, sa), st !== (fL = fL === sa ? -1 : fL)) && (st = fL, t1(), c4.c5 = !0), !0)
		}, this.lr = function(fL, fM) {
			var t, tK = tL(fM);
			return sv ? (t = position, (position = tM(0, position += sw - tK, b8 - sa)) !== t && (tK = (tK = tM(-1, sw = tK, sa)) !== sa && lJ(fL, fM) ? tK : -1, st = tK, t1(), c4.c5 = !0), !0) : (tK = (tK = tM(-1, tK, sa)) === sa || !lJ(fL, fM) || pC ? -1 : tK, st !== tK && (st = tK, t1(), c4.c5 = !0))
		}, this.pj = function(fL, fM) {
			if (!sv) return !1;
			sv = !1;
			var tK = tL(fM);
			return pC && -1 !== st && (st = -1, t1(), c4.c5 = !0), c4.gg - su < 350 && sx === tK && -1 !== (tK = (tK = tM(-1, tK, sa)) !== sa && lJ(fL, fM) ? tK : -1) && (fL = eo[tK + position], tK === sa - 1 && sV[aw] >= position + sa - 1 && (fL = aw), 0 !== fH[fL]) && eW.gk(fL, 800, !1, 0), !0
		}, this.po = function(fL, fM, deltaY) {
			var tN;
			return !sv && (tN = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !!lJ(fL, fM)) && (fL = (fL = tM(-1, tL(fM), sa)) === sa || pC ? -1 : fL, 0 < deltaY ? position < b8 - sa && (position += Math.min(b8 - sa - position, tN), st = fL, t1(), c4.c5 = !0) : 0 < position && (position -= Math.min(position, tN), st = fL, t1(), c4.c5 = !0), !0)
		}, this.cG = function() {
			cH.drawImage(sb, mA, mA)
		}
	}

	function kB() {
		var lv, i1, fL, fM, pr, tO, f8, tP, by, tQ, lw, b1, tR, tS, tT, tU, tV, tW;

		function tZ() {
			i1.clearRect(0, 0, eB.c1, eB.cw), i1.fillStyle = i2, i1.fillRect(0, 0, eB.c1, eB.cw), i1.fillStyle = oZ, e1 = 0 < tT ? tT : Math.sqrt(b1[4] / b1[3]), i1.fillRect(0, eB.cw - pr - 1, Math.floor(e1 * eB.c1), pr), i1.fillStyle = cK, i1.fillRect(0, 0, eB.c1, 1), i1.fillRect(0, 0, 1, eB.cw), i1.fillRect(eB.c1 - 1, 0, 1, eB.cw), i1.fillRect(0, eB.cw - 1, eB.c1, 1), i1.fillRect(0, eB.cw - pr - 1, eB.c1, 1);
			for (var e1, tc, t = 0, a4 = 0; a4 < lw.length; a4++) tR[a4] ? (i1.textAlign = mm, tc = Math.floor((tO - pr + 2 * tP) * (a4 - t + 1) / (lw.length + 1) - .7 * tP), i1.fillText(lw[a4], f8, tc), i1.textAlign = oy, 5 === a4 && 0 !== fH[aw] && ax[aw] >= ay.dJ(aw) ? (i1.fillStyle = ov, i1.fillText(tY(a4), eB.c1 - f8, tc), i1.fillStyle = cK) : i1.fillText(tY(a4), eB.c1 - f8, tc)) : t++
		}

		function tY(a4) {
			return a4 < 3 ? b1[a4].toString() : 3 === a4 || 4 === a4 || 5 === a4 ? eB.ms(b1[a4] / 100, 2) : a4 < 7 ? eQ.gM(b1[a4]) : eB.sU(b1[7])
		}

		function ti(tj) {
			tj = as(1e4 * tj, jD);
			8 === dv && (0 === fH[0] ? fj.fk(1) : 0 === fH[1] && fj.fk(0)), tj >= b1[3] && (fj.fk(-1), b1[4] = -1), b1[4] !== tj && (tQ++, b1[4] = tj)
		}

		function tl() {
			for (var a4 = dY - 1; 0 <= a4; a4--)
				if (0 < b4[dZ[a4]].length) return;
			return 1
		}

		function tX() {
			bU[aw] !== b1[6] && (b1[6] = bU[aw], tQ++)
		}
		this.bp = function() {
			tT = tU = 0, (lw = new Array(8))[0] = "Humans", lw[1] = dx ? "Oyuncu" : "Botlar", lw[2] = "izleyiciler", lw[3] = "Threshold", lw[4] = "Occupation", lw[5] = "Interest", lw[6] = "Income", lw[7] = "zaman", tW = jD - as(jD, 100), (b1 = new Array(lw.length))[0] = dx ? 0 : cq, b1[1] = dx ? dY : dq, b1[2] = j0, b1[3] = 1e4, b1[4] = as(1e4 * bU[0], jD), b1[5] = 700, b1[6] = 0, tX(), b1[7] = 0, tS = tY(6), tR = new Array(lw.length);
			for (var a4 = lw.length - 1; 0 <= a4; a4--) tR[a4] = !0;
			tV = 0, tV = dx ? (tR[0] = !1, tR[2] = !1, tR[3] = !1, 3) : (tR[3] = !1, 1), tQ = 0, this.m0()
		}, this.m0 = function() {
			this.c1 = Math.floor((q ? .1646 : .126) * bq), this.cw = Math.floor(1.18 * this.c1), pr = Math.floor(.04 * this.c1), f8 = Math.floor(.035 * this.c1), tP = .04 * this.c1, tO = this.cw, this.cw -= Math.floor(tV * (this.cw - 2 * pr) / lw.length), by = Math.floor(.7 * (tO - pr) / lw.length), by = bt + by + bu, (lv = document.createElement("canvas")).width = this.c1, lv.height = this.cw, (i1 = lv.getContext("2d", {
				alpha: !0
			})).font = by, i1.textBaseline = cI, i1.lineWidth = 1, this.j6(), this.r6(), eP.r6(), tZ()
		}, this.r6 = function() {
			fL = gF - this.c1 - mA
		}, this.ta = function() {
			fM = mA
		}, this.j6 = function() {
			fM = mA + (eP.qR() && 0 !== fH[aw] && !fd ? eP.cw + mA : 0)
		}, this.ec = function(nT) {
			0 < tQ && (nT || tb < 12 && 100 <= tQ || 12 <= tb) && (tQ = 0, tZ())
		}, this.lX = function() {
			return b1[7]
		}, this.sU = function(value) {
			var qs = Math.floor(value / 1e3 / 60),
				value = Math.floor((value - 6e4 * qs) / 1e3);
			return value < 10 ? qs + ":0" + value : qs + ":" + value
		}, this.ms = function(bB, q8) {
			return bB.toFixed(q8) + "%"
		}, this.dF = function() {
			var tj, l;
			tR[0] && j1 - j0 !== b1[0] && (b1[0] = j1 - j0, tQ++), dY - b1[0] !== b1[1] && (b1[1] = dY - b1[0], tQ++), this.eC(), dA ? (tj = eU.r0(), tW <= tj && tl() ? (fj.fk(-1), ti(eU.r0())) : ti(tj)) : (tj = bU[eo[0]], tW <= tj && tl() && fj.fk(-1), ti(tj)), (tj = ay.tn(aw)) !== b1[5] && (b1[5] = tj, tQ++), tX(), b1[7] += c4.to(), l = tY(7), tS !== l && (tS = l, tQ += 100)
		}, this.eC = function() {
			tR[2] && j0 !== b1[2] && (b1[2] = j0, tQ++)
		}, this.tp = function(a4) {
			var tq, t, nB;
			return a4 === jJ ? (tT = 0, tZ(), !1) : (-1 !== a4 || 0 !== tU) && (tq = tT, t = performance.now(), 0 <= a4 && (nB = t - 392 * a4, tU = 0 === a4 || nB < tU ? nB : tU), tT = 1 < (tT = (t - tU) / (392 * jJ)) ? 1 : tT, tZ(), tT !== tq)
		}, this.cG = function() {
			cH.drawImage(lv, fL, fM)
		}
	}

	function kC() {
		var lF, tr, c1, cw, nc, ts, tt, qS, lv, ga;
		this.tu = -1, this.bp = function() {
			lF = !1, nc = .61, ts = .07, tt = .09, ga = qS = cw = 0, this.tu = -1
		}, this.m0 = function() {
			var i1, f9, dV, tx, ty, m4;
			lF && (c1 = qz(c1 = q ? Math.floor(.69 * bq) : Math.floor(.5 * bq), mh(r - 2 * mA, 10)), c1 = qz(c1, Math.floor(3.57 * mh(s - 2 * mA, 3))), cw = Math.floor(.28 * c1), (lv = document.createElement("canvas")).width = c1, lv.height = cw, i1 = lv.getContext("2d", {
				alpha: !0
			}), f9 = Math.floor(1 + cw / 40), i1.clearRect(0, 0, c1, cw), i1.fillStyle = i2, i1.fillRect(f9, f9, c1 - 2 * f9, cw - 2 * f9), i1.lineJoin = "bevel", i1.lineWidth = 2 * f9, i1.strokeStyle = cK, i1.strokeRect(f9, f9, c1 - 2 * f9, cw - 2 * f9), i1.imageSmoothingEnabled = !0, dV = bw.bz(tr), tx = dV.width, ty = dV.height, m4 = nc * cw / ty, i1.setTransform(m4, 0, 0, m4, Math.floor((c1 - m4 * tx) / 2), Math.floor((cw - m4 * ty) / 2)), i1.drawImage(dV, 0, 0), i1.setTransform(1, 0, 0, 1, Math.floor(c1 - tt * cw - ts * cw - f9), Math.floor(f9 + ts * cw)), function(i1, b3) {
				i1.lineWidth = Math.floor(1 + cw / 80), i1.strokeStyle = cK, i1.beginPath(), i1.moveTo(0, 0), i1.lineTo(b3, b3), i1.moveTo(0, b3), i1.lineTo(b3, 0), i1.stroke()
			}(i1, Math.floor(tt * cw)), i1.setTransform(1, 0, 0, 1, 0, 0))
		}, this.show = function(aH, tw) {
			lF || (tr = aH ? 1 : 2, lF = !0, this.m0(), hy.ls(), eS.qv(), ga = c4.gg, -1 === this.tu && (this.tu = c4.dU()), qS = tw ? 1 : 0)
		}, this.dF = function() {
			!lF || 1 <= qS || (qS = 1 < (qS += 5e-4 * (c4.gg - ga)) ? 1 : qS, ga = c4.gg, c4.c5 = !0)
		}, this.c7 = function(fL, fM) {
			return !(!lF || qS <= 0 || (fL -= Math.floor((gF - c1) / 2), fM -= cB - cw - 2 * mA, fL < 0) || fM < 0 || c1 < fL || cw < fM || (c1 - cw / 3 < fL && fM < cw / 3 && (lF = !1, c4.c5 = !0), 0))
		}, this.cG = function() {
			!lF || qS <= 0 || (cH.globalAlpha = qS, cH.drawImage(lv, Math.floor((gF - c1) / 2), cB - cw - 2 * mA), cH.globalAlpha = 1)
		}
	}

	function kg() {
		var lF, l8, i6, nm;

		function u0() {
			lF = !(l8 = [])
		}

		function u8(a4, bC, f9, fA, fB, fC, bn) {
			0 === fH[a4] || 0 === bU[a4] || (fB = gF * ((d0[a4] + cz[a4] + 1) / 2 - f9) / (fB - f9) - .5 * bC, f9 = cB * ((d3[a4] + d2[a4] + 1) / 2 - fA) / (fC - fA) - .5 * bC, gF < fB) || cB < f9 || fB < -bC || f9 < -bC || (cH.setTransform(g8 * bn, 0, 0, g8 * bn, fB, f9), cH.drawImage(l8[dA ? dW.dX[a4] : a4 < cq ? 1 : 0], 0, 0))
		}
		this.bp = function() {
			var a4;
			if (u0(), i6 = 63, lF = !(nm = 0), dA)
				for (a4 = 0; a4 <= jH; a4++) l8.push(this.u1(dW.u2[dW.ir[a4]], i6));
			else l8.push(this.u1(dW.u2[0], i6)), l8.push(this.u1(dW.u2[4], i6))
		}, this.dF = function() {
			lF && 349 == ++nm && u0()
		}, this.u1 = function(u3, b3) {
			for (var fM, bB, bD, lv = document.createElement("canvas"), i1 = (lv.width = b3, lv.height = b3, lv.getContext("2d", {
					alpha: !0
				})), u4 = (i1.clearRect(0, 0, b3, b3), i1.getImageData(0, 0, b3, b3)), u5 = u4.data, qs = Math.floor(b3 / 2), u6 = 1 + qs * qs, fL = b3 - 1; 0 <= fL; fL--)
				for (fM = b3 - 1; 0 <= fM; fM--) bD = (fL - qs) * (fL - qs) + (fM - qs) * (fM - qs), u5[bB = 4 * (fM * b3 + fL)] = u3[0], u5[1 + bB] = u3[1], u5[2 + bB] = u3[2], bD = Math.floor((u6 - bD) * u3[3] / u6), u5[3 + bB] = 0 < bD ? bD : 0;
			return i1.putImageData(u4, 0, 0), lv
		}, this.cG = function() {
			if (lF) {
				cH.imageSmoothingEnabled = !0, cH.globalAlpha = 1 - (160 < nm ? (nm - 160) / 190 : 0);
				var a4, bC, bn, f9 = gD / g8,
					fA = gE / g8,
					fB = (gF + gD) / g8,
					fC = (cB + gE) / g8;
				for (bC = i6 * g8 * (bn = .25), a4 = b8 - 1; cq <= a4; a4--) u8(a4, bC, f9, fA, fB, fC, bn);
				for (bC = i6 * g8 * (bn = .5), a4 = cq - 1; 0 <= a4; a4--) u8(a4, bC, f9, fA, fB, fC, bn);
				cH.globalAlpha = 1, cH.imageSmoothingEnabled = g8 < 3, cH.setTransform(g8, 0, 0, g8, 0, 0)
			}
		}
	}

	function fN(player, cM, r3) {
		var cN, cO, b3;
		0 === fH[player] || r3 < 0 || 1e3 < r3 || 2 === fV[player] || (cN = as(r3 * ax[player], 1e3), 10 === dv && cM < cq && 2 !== fV[cM] && (cN = eF.u9(player, cN)), dA && cM < b8 && !ch(player, cM) ? da(player, cM, cN) : (cM < b8 && 0 === fH[cM] && (cM = b8), cO = as(3 * ax[player], 256), (cN -= 500 <= r3 ? cO : 0) <= at || ae.dD(player) && (b3 = b4[player].length, cM === b8 ? cX(player) : cS(player, cM), 0 === b3 && 0 === b4[player].length || (dA && (d7[player] = 1), player === aw && (b0.b1[0] += 500 <= r3 ? r3 - 12 : r3, b0.b1[1]++, b0.b1[12] += cO, b0.b1[13] += cN), cP(b3, player), ae.cQ(player, cN, cM), ax[player] -= cN + cO, au.cR(player, !1)))))
	}

	function f0(player, cd, g6, cN) {
		return !((cN = 10 === dv && player < cq ? eF.u9(player, cN) : cN) <= at || !ae.dD(player) || 0 === (cd = eK.cR(player, cd, g6)) || (g6 = as(3 * ax[player], 128), cN >= as(ax[player], 2) && (cN -= g6), player === aw && (b0.b1[12] += g6), ae.uA(player, cN, cd), ax[player] -= cN + g6, 0))
	}

	function da(player, cM, cN) {
		var cO, max, uB;
		!dA || 0 === fH[player] || 0 === fH[cM] || cN < 0 || cN > ax[player] || player === cM || ch(player, cM) || (cO = as(ax[player], 16), cN -= cN >= as(ax[player], 2) ? cO : 0, (max = bU[cM] * jB - ax[cM]) <= 0) || (cN = max < (cN -= uB = as(Math.max(2142 - c4.dU(), 0) * cN, 2142)) ? max : cN, player === aw && (e9.nG(cN, cO + uB, cM), b0.b1[12] += cO + uB, b0.b1[16] += cN), cM === aw && (e9.nK(cN, player), b0.b1[10] += cN), eA.uC(player, cN + cO + uB), eA.uD(cM, cN), ax[player] -= cN + cO + uB, ax[cM] += cN)
	}

	function uE() {
		this.uF = !1, this.hD = !1, this.j9 = !1, this.uG = [0, 0, 0, 0], this.uH = function() {
			var f9, fA, fB, fC;
			this.j9 = this.j9 || this.hD, (this.hD || this.uF && this.j9) && (f9 = h2.uI[0], fA = h2.uI[1], fB = h2.uI[2], fC = h2.uI[3], f9 = f9 < this.uG[0] ? this.uG[0] : f9, fA = fA < this.uG[1] ? this.uG[1] : fA, fB = fB > this.uG[2] ? this.uG[2] : fB, fC = fC > this.uG[3] ? this.uG[3] : fC, this.hD = !1, this.uF = !1, f9 === this.uG[0] && fA === this.uG[1] && fB === this.uG[2] && fC === this.uG[3] ? this.jA() : f9 <= fB && fA <= fC && ja.putImageData(jb, 0, 0, f9, fA, fB - f9 + 1, fC - fA + 1))
		}, this.jA = function() {
			this.j9 && this.uG[2] >= this.uG[0] && this.uG[3] >= this.uG[1] && ja.putImageData(jb, 0, 0, this.uG[0], this.uG[1], this.uG[2] - this.uG[0] + 1, this.uG[3] - this.uG[1] + 1), this.j9 = !1
		}, this.j3 = function() {
			this.uG[2] >= this.uG[0] && this.uG[3] >= this.uG[1] && ja.putImageData(jb, 0, 0, this.uG[0], this.uG[1], this.uG[2] - this.uG[0] + 1, this.uG[3] - this.uG[1] + 1), this.j9 = !1
		}, this.bp = function() {
			var fL, fM;
			this.uF = !1, this.hD = !1, this.j9 = !1, this.uG[0] = aZ, this.uG[1] = aa, this.uG[2] = this.uG[3] = 0;
			loop: for (fL = 1; fL < aZ - 1; fL++)
				for (fM = aa - 2; 1 < fM; fM--)
					if (1 === uJ[b5.f3(fL, fM) + 2]) {
						this.uG[0] = fL;
						break loop
					} loop: for (fM = 1; fM < aa - 1; fM++)
				for (fL = aZ - 2; 1 < fL; fL--)
					if (1 === uJ[b5.f3(fL, fM) + 2]) {
						this.uG[1] = fM;
						break loop
					} loop: for (fL = aZ - 2; 0 < fL; fL--)
				for (fM = aa - 2; 1 < fM; fM--)
					if (1 === uJ[b5.f3(fL, fM) + 2]) {
						this.uG[2] = fL;
						break loop
					} loop: for (fM = aa - 2; 0 < fM; fM--)
				for (fL = aZ - 2; 1 < fL; fL--)
					if (1 === uJ[b5.f3(fL, fM) + 2]) {
						this.uG[3] = fM;
						break loop
					}
		}
	}

	function uK() {
		this.lF = !1, this.mH = null, this.uL = 0, this.c1 = null, this.cw = null, this.uM = .013, this.uN = .022, this.uO = .025;
		this.uQ = 3, this.uR = 1.2, this.uS = .2, this.uT = .235, this.uU = .9, this.uV = .08;
		var uX, uW = ["en iyi oyuncu", "en iyi klan", "shellbee unutulmaz", "TR sikiyor"],
			uY = [-1e6, -1e6];
		this.position = [0, 0], this.ua = [0, 0], this.bp = function() {
			this.mH = [null, null], this.lF = !1, this.uL = 0, this.m0()
		}, this.cE = function(id) {
			this.uL = id, this.lF = !0, this.bv(), ji.u0(), c4.c5 = !0
		}, this.dF = function() {
			this.lF && this.bv()
		}, this.bv = function() {
			c4.gg - 12e4 >= uY[this.uL] && (uY[this.uL] = c4.gg, this.ua = [0, 0], eD.rx(0, 1 + this.uL)) && iv.ub(0, this.uL)
		}, this.m0 = function() {
			var a4;
			for (this.c1 = this.uc(q ? .85 : .66, .75, r, s), this.cw = Math.floor(this.c1 / .75), a4 = 1; 0 <= a4; a4--) this.mH[a4] && (this.mH[a4][4] = bt + Math.floor(this.mH[a4][5] * this.cw / 10) + bu);
			uX = bt + Math.floor(.1 * this.cw) + bu
		}, this.uc = function(bn, ne, c1, cw) {
			return c1 < ne * cw ? Math.floor(bn * c1) : Math.floor(ne * bn * cw)
		}, this.ud = function(bs, ue, uf, q8, ug, uh, tB) {
			this.position[bs] = tB;
			for (var qP, cV = ue.length, c0 = bt + Math.floor(ug * this.cw / 10) + bu, hJ = (this.ui(ue, c0, uh * this.c1), [
					[], cV, -1, q8, c0, ug, 10 * tB
				]), a4 = 0; a4 < cV; a4++) qP = {
				name: ue[a4].name,
				value: ue[a4].iG / uf,
				colorIndex: ue[a4].colorIndex
			}, hJ[0].push(qP);
			this.mH[bs] = hJ, this.uj(bs);
			uh = this.mH[bs][0][0].name;
			1 === bs && (uh = "[" + uh + "]"), 0 === tB && uk.br(bs, uh), c4.c5 = !0
		}, this.uj = function(a4) {
			this.mH[a4][0].sort(function(ca, cm) {
				return cm.value - ca.value
			})
		}, this.ul = function(bs, name, um, un) {
			if (this.mH && this.mH[bs]) {
				var a4, nD = !1;
				if (0 === bs) {
					for (a4 = 0; a4 < this.mH[bs][0].length; a4++)
						if (name === this.mH[bs][0][a4].name && um > .99 * this.mH[bs][0][a4].value && um < 1.01 * this.mH[bs][0][a4].value) {
							this.mH[bs][0][a4].value = un, nD = !0;
							break
						} nD || this.mH[bs][0].push({
						name: name,
						value: un
					})
				} else {
					for (a4 = 0; a4 < this.mH[bs][0].length; a4++)
						if (name === this.mH[bs][0][a4].name) {
							this.mH[bs][0][a4].value += 32 < this.mH[bs][0][a4].value ? (64 - this.mH[bs][0][a4].value) / 256 : .25, this.mH[bs][0][a4].value *= 1 / (383 / 384), nD = !0;
							break
						} for (a4 = 0; a4 < this.mH[bs][0].length; a4++) this.mH[bs][0][a4].value *= 383 / 384;
					nD || this.mH[bs][0].push({
						name: name,
						value: .25
					})
				}
				this.uj(bs)
			}
		}, this.ui = function(ue, c0, c3) {
			for (var a4 = ue.length - 1; 0 <= a4; a4--)
				for (; 3 < ue[a4].name.length && c2.measureText(ue[a4].name, c0) > c3;) ue[a4].name = ue[a4].name.substring(0, ue[a4].name.length - 4) + "..."
		}, this.c7 = function(rR, rT) {
			return !!this.lF && (rR -= (gF - this.c1) / 2, rT -= (cB - this.cw) / 2, rR < 0 || rR > this.c1 || rT < 0 || rT > this.cw ? (this.lF = !1, 0 === aJ.nt() && jo.cE(0, !0), c4.c5 = !0) : (rT = rT < .3 * this.cw ? 1 : rT < .85 * this.cw ? (rT = (0 === this.uL ? 14.1 : 3) * (rT - .3 * this.cw) / (.55 * this.cw), Math.floor(1 + rT * rT)) : 0 === this.uL ? 200 : 10, rR < this.c1 / 2 ? this.ua[this.uL] = -rT : this.ua[this.uL] = rT, uY[this.uL] + 50 > c4.gg || (uY[this.uL] = c4.gg, eD.rx(0, 1 + this.uL) && iv.ub(0, this.uL)), !0))
		}, this.cG = function() {
			var f9, fA, i8, i9, uo, up, uq, mI;
			this.lF && (f9 = (gF - this.c1) / 2, fA = (cB - this.cw) / 2, i8 = this.uM * this.c1, i9 = this.uQ * i8, uo = this.uN * this.c1, up = this.uR * uo, uq = this.uO * this.c1, mI = Math.floor(.25 * this.cw), cH.setTransform(1, 0, 0, 1, f9, fA), cH.fillStyle = 0 === this.uL ? op : ok, cH.fillRect(0, 0, this.c1, mI), cH.fillStyle = oU, cH.fillRect(0, mI, this.c1, this.cw - mI), cH.fillStyle = cK, cH.font = uX, cH.textBaseline = cI, cH.textAlign = cJ, cH.fillText(uW[this.uL], Math.floor(this.c1 / 2), Math.floor(.135 * this.cw)), cH.font = bt + Math.floor(.025 * this.cw) + bu, cH.fillText(uW[this.uL + 2], Math.floor(this.c1 / 2), Math.floor(.2125 * this.cw)), cH.beginPath(), cH.moveTo(this.c1 / 4, 0), cH.lineTo(this.c1 / 2 - i8, 0), cH.lineTo(this.c1 / 2, -i9), cH.lineTo(this.c1 / 2 + i8, 0), cH.lineTo(this.c1 - uo, 0), cH.lineTo(this.c1 + up, -up), cH.lineTo(this.c1, uo), cH.lineTo(this.c1, this.cw / 2 - i8), cH.lineTo(this.c1 + i9, this.cw / 2), cH.lineTo(this.c1, this.cw / 2 + i8), cH.lineTo(this.c1, this.cw - uo), cH.lineTo(this.c1 + up, this.cw + up), cH.lineTo(this.c1 - uo, this.cw), cH.lineTo(this.c1 / 2 + i8, this.cw), cH.lineTo(this.c1 / 2, this.cw + i9), cH.lineTo(this.c1 / 2 - i8, this.cw), cH.lineTo(uo, this.cw), cH.lineTo(-up, this.cw + up), cH.lineTo(0, this.cw - uo), cH.lineTo(0, this.cw / 2 + i8), cH.lineTo(-i9, this.cw / 2), cH.lineTo(0, this.cw / 2 - i8), cH.lineTo(0, uo), cH.lineTo(-up, -up), cH.lineTo(uo, 0), cH.lineTo(this.c1 / 4, 0), cH.lineTo(this.c1 / 4, uq), cH.lineTo(uq, uq), cH.lineTo(uq, this.cw - uq), cH.lineTo(this.c1 - uq, this.cw - uq), cH.lineTo(this.c1 - uq, uq), cH.lineTo(this.c1 / 4, uq), cH.fill(), this.mH[this.uL] && this.ur(mI), this.us(mI), cH.setTransform(1, 0, 0, 1, 0, 0))
		}, this.us = function(mI) {
			var i8 = mh(2, Math.floor(.06 * this.c1)),
				nc = (i8 -= i8 % 2, mh(2, Math.floor(.01 * this.c1))),
				mI = (nc -= nc % 2, Math.floor(.82 * mI));
			cH.fillRect(i8, mI, i8, nc), cH.fillRect(this.c1 - i8 - i8, mI, i8, nc), cH.fillRect(Math.floor(this.c1 - i8 - i8 + (i8 - nc) / 2), Math.floor(mI - (i8 - nc) / 2), nc, i8)
		}, this.ur = function(mI) {
			var fM;
			cH.font = this.mH[this.uL][4];
			for (var a4 = this.mH[this.uL][1] - 1; 0 <= a4; a4--) cH.textAlign = oy, fM = Math.floor(this.uV * this.cw + mI + a4 * ((1 - 2 * this.uV) * this.cw - mI) / 9), cH.fillText(this.mH[this.uL][0][a4].value.toFixed(this.mH[this.uL][3]), Math.floor(this.uU * this.c1), fM), cH.fillText(a4 + 1 + this.mH[this.uL][6] + ".", Math.floor(this.uS * this.c1), fM), cH.textAlign = mm, cH.fillText(this.mH[this.uL][0][a4].name, Math.floor(this.uT * this.c1), fM)
		}
	}

	function ut() {
		var fL, fM, zoom, cw, uu, uw, ux, uy, uv, c1, v0, v1;
		this.lF = !1, this.bp = function(l, v2) {
			if (13 <= d) return v2 ? void(v0 = l) : v0 !== l ? void 0 : void e.saveString(200, l);
			v2 && ((cC.mH[1].il.lF || cC.mH[2].il.lF) && cC.v3(), ji.u0(), v0 = l, uy = Math.floor((q ? s < r ? .6 : .45 : .4) * pW), zoom = uy / bw.bz(17).width, uu = Math.floor(zoom * bw.bz(17).height), uv = Math.floor(.4 * uu), uw = Math.floor(.6 * uu), ux = Math.floor(2.5 * uw), cw = uu + uv + 3 * uw, v2 = bt + Math.floor(uv / pa) + bu, uv = Math.floor(pa * c2.measureText(v0, v2)), c1 = (uy < uv ? uv : uy) + 2 * ux, fL = Math.floor((gF - c1) / 2), fM = Math.floor((cB - cw) / 2), (v1 = document.createElement("a")).appendChild(document.createTextNode(v0)), v1.title = v0, v1.target = "_blank", v1.href = v0, v1.style.font = v2, v1.style.textAlign = "center", v1.style.color = cK, v1.style.position = "absolute", v1.style.padding = "0px", v1.style.margin = "0px", v1.style.top = Math.floor((fM + 2 * uw + uu) / pa) + "px", v1.style.left = Math.floor((fL + (c1 - uv) / 2) / pa) + "px", document.body.appendChild(v1), this.lF = !0, c4.c5 = !0)
		}, this.lI = function() {
			return !(!this.lF || (document.body.removeChild(v1), this.lF = !1))
		}, this.c7 = function(rR, rT) {
			return !!this.lF && ((rR < fL || rT < fM || fL + c1 < rR || fM + cw < rT) && (c4.c5 = !0, this.lF = !1, document.body.removeChild(v1), 0 === aJ.nt()) && jo.cE(0, !0), !0)
		}, this.cG = function() {
			this.lF && (cH.imageSmoothingEnabled = !0, cH.setTransform(1, 0, 0, 1, fL, fM), cH.fillStyle = i2, cH.fillRect(0, 0, c1, cw), cH.lineWidth = pB, cH.strokeStyle = cK, cH.strokeRect(0, 0, c1, cw), cH.setTransform(zoom, 0, 0, zoom, fL + (c1 - uy) / 2, fM + uw), cH.drawImage(bw.bz(17), 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0))
		}
	}

	function v4() {
		var f8, lw, fL = [0, 0, 0, 0, 0],
			fM = [0, 0, 0, 0, 0],
			gy = [1, 1, 1, 1, 1],
			aH = [!0, !0, !0, !0, !0],
			dV = (this.v5 = [!0, !0, !0, !0, !0], null);
		this.v6 = function(l8, v7) {
			dV = l8, aH = v7, lw = [p2, p3, p4, p5, p6], this.bp()
		}, this.bp = function() {
			if (bw.bx()) {
				var a4, i8 = Math.floor((q ? .261 : .195) * bq),
					i9 = Math.floor(.9 * i8),
					nc = Math.floor(.17 * i9);
				if (f8 = q ? 2 * mA : mA, gy[0] = i8 / dV[0].width, gy[1] = i9 / dV[1].width, gy[2] = nc / dV[2].height, gy[3] = nc / dV[3].height, gy[4] = nc / dV[4].height, gy[3] *= 1.07, fL[0] = f8, fL[1] = f8, fL[2] = f8, fL[3] = f8, fL[4] = Math.floor(2 * f8 + gy[3] * dV[3].width), fM[0] = f8, fM[1] = fM[0] + f8 + gy[0] * dV[0].height, fM[2] = fM[1] + f8 + gy[1] * dV[1].height, fM[3] = fM[2] + f8 + gy[2] * dV[2].height, fM[4] = fM[3], !aH[0])
					for (a4 = 0; a4 < 5; a4++) fM[a4] -= gy[0] * dV[0].height + f8;
				if (!aH[1])
					for (a4 = 2; a4 < 5; a4++) fM[a4] -= gy[1] * dV[1].height + f8
			}
		}, this.lF = function() {
			return !(7 === aJ.nt() && q)
		}, this.c7 = function(rR, rT, v2) {
			if (dV && this.lF())
				for (var a4 = aH.length - 1; 0 <= a4; a4--)
					if (aH[a4] && this.v5[a4] && fL[a4] < rR && fM[a4] < rT && rR < fL[a4] + gy[a4] * dV[a4].width && rT < fM[a4] + gy[a4] * dV[a4].height) return nh.bp(lw[a4], v2), !0;
			return !1
		}, this.cG = function() {
			if (dV && this.lF()) {
				var a4;
				for (cH.imageSmoothingEnabled = !0, a4 = 0; a4 < 5; a4++) aH[a4] && this.v5[a4] && (cH.setTransform(gy[a4], 0, 0, gy[a4], fL[a4], fM[a4]), cH.drawImage(dV[a4], 0, 0));
				cH.setTransform(1, 0, 0, 1, 0, 0)
			}
		}
	}

	function kD() {
		var uL, v8, v9;

		function vF(a4) {
			var button = jl.vA[a4],
				fL = button.fL,
				fM = button.fM,
				c1 = button.c1,
				cw = button.cw;
			cH.fillStyle = button.vD, cH.fillRect(fL, fM, c1, cw), a4 === uL && (cH.fillStyle = v9, cH.fillRect(fL, fM, c1, cw)), cH.lineWidth = 3, cH.strokeStyle = v8, cH.strokeRect(fL, fM, c1, cw),
				function(button) {
					var fL = button.fL,
						fM = button.fM,
						c1 = button.c1,
						cw = button.cw;
					cH.textAlign = cJ, cH.textBaseline = cI, cH.font = button.font, cH.fillStyle = v8, cH.fillText(button.nl, Math.floor(fL + c1 / 2), Math.floor(fM + cw / 2 + .1 * button.by))
				}(button)
		}
		this.c1 = 0, this.cw = 0, this.fM = 0, this.f8 = 0, this.bp = function() {
			uL = -1, v8 = cK, v9 = "rgba(255,255,255,0.16)", this.vA = new Array(7), this.cw = Math.floor((q ? .123 : .093) * bq), this.c1 = Math.floor((q ? 3.96 : 4.2) * this.cw), this.f8 = Math.floor(.025 * this.c1);
			var vB = Math.floor(.26 * this.cw),
				vC = bt + vB + bu;
			this.vA[0] = {
				fL: 0,
				fM: 0,
				c1: Math.floor(.6 * this.c1 - this.f8 / 2),
				cw: this.cw,
				nl: "çok oyunculu",
				font: vC,
				vD: "rgba(22,88,22,0.8)",
				by: vB
			}, vB = Math.floor(.18 * this.cw), this.vA[1] = {
				fL: 0,
				fM: 0,
				c1: this.c1 - this.vA[0].c1 - this.f8,
				cw: this.cw,
				nl: "yıkığım",
				font: bt + vB + bu,
				vD: "rgba(22,88,88,0.8)",
				by: vB
			}, this.vA[2] = {
				fL: 0,
				fM: 0,
				c1: this.c1,
				cw: Math.floor(.3 * this.cw),
				nl: "",
				font: this.vA[1].font,
				vD: "rgba(100,0,0,0.8)",
				by: this.vA[1].by
			}, this.vA[3] = {
				fL: 0,
				fM: 0,
				c1: this.c1,
				cw: this.cw,
				nl: "geri",
				font: this.vA[0].font,
				vD: "rgba(0,0,0,0.8)",
				by: this.vA[0].by
			}, this.vA[4] = {
				fL: 0,
				fM: 0,
				c1: this.c1,
				cw: Math.floor(.3 * this.cw),
				nl: "The game was updated!",
				font: this.vA[1].font,
				vD: "rgba(100,0,0,0.8)",
				by: this.vA[1].by
			}, this.vA[5] = {
				fL: 0,
				fM: 0,
				c1: this.vA[0].c1,
				cw: Math.floor(.8 * this.cw),
				nl: "Reload",
				font: this.vA[0].font,
				vD: "rgba(0,100,0,0.8)",
				by: this.vA[0].by
			}, this.vA[6] = {
				fL: 0,
				fM: 0,
				c1: this.vA[1].c1,
				cw: this.vA[5].cw,
				nl: "geri",
				font: this.vA[0].font,
				vD: "rgba(0,0,0,0.8)",
				by: this.vA[0].by
			}, this.s5()
		}, this.s5 = function() {
			this.fM = Math.floor(.54 * cB), this.vA[0].fL = Math.floor(.5 * gF - .5 * this.c1), this.vA[1].fL = this.vA[0].fL + this.vA[0].c1 + this.f8, this.vA[2].fL = this.vA[3].fL = this.vA[0].fL, this.vA[4].fL = this.vA[5].fL = this.vA[0].fL, this.vA[6].fL = this.vA[1].fL, this.vA[0].fM = Math.floor(.54 * cB), this.vA[1].fM = this.vA[0].fM, this.vA[2].fM = Math.floor((cB - this.vA[2].cw - this.vA[3].cw - this.f8) / 2), this.vA[3].fM = this.vA[2].fM + this.vA[2].cw + this.f8, this.vA[4].fM = Math.floor((cB - this.vA[4].cw - this.vA[5].cw - this.f8) / 2), this.vA[5].fM = this.vA[6].fM = this.vA[4].fM + this.vA[4].cw + this.f8
		}, this.vE = function() {
			vF(0), vF(1)
		}, this.vG = function() {
			vF(2), vF(3)
		}, this.vH = function() {
			vF(4), vF(5), vF(6)
		}, this.lr = function(fL, fM, ec) {
			var a4 = -1;
			return 0 === aJ.nt() ? a4 = this.pd(fL, fM, 0, 2) : 3 === aJ.nt() ? a4 = this.pd(fL, fM, 3, 1) : 5 === aJ.nt() && (a4 = this.pd(fL, fM, 5, 2)), uL !== a4 && (uL = a4, ec) && (c4.c5 = !0), -1 !== a4 && (jk.pi(), !0)
		}, this.pd = function(fL, fM, vI, cV) {
			for (var a4 = vI; a4 < vI + cV; a4++)
				if (fL >= this.vA[a4].fL && fM >= this.vA[a4].fM && fL <= this.vA[a4].fL + this.vA[a4].c1 && fM <= this.vA[a4].fM + this.vA[a4].cw) return a4;
			return -1
		}
	}

	function vK() {
		function vQ(lD) {
			return lD < 0 ? 0 : 255 < lD ? 255 : Math.floor(lD)
		}
		this.c1 = 0, this.cw = 0, this.lF = !1, this.vL = 0, this.f8 = 0, this.o7 = 0, this.vM = 0, this.vN = 0, this.vO = 0, this.colors = null, this.bp = function() {
			r < 2 * s ? this.c1 = Math.floor((q ? .94 : .4) * r) : (this.cw = Math.floor((q ? .88 : .4) * s), this.c1 = Math.floor(2 * this.cw)), this.cw = this.c1 / 2, this.f8 = this.cw / 16, this.lF = !0, this.vL = 0, this.vM = (this.cw - 3 * this.f8) / 2, this.vN = this.c1 - 3 * this.f8 - this.vM, this.vO = (this.cw - 4 * this.f8) / 3
		}, this.vP = function() {
			this.colors = [
				[0, 0, 0],
				[0, 0, 0]
			];
			var l = v().split("");
			if (l.length < 6)
				for (var cm = 2; 0 <= cm; cm--) this.colors[0][cm] = vQ(256 * Math.random());
			else
				for (var a4 = 2; 0 <= a4; a4--) this.colors[0][a4] = vQ(4 * (10 * parseInt(l[2 * a4]) + parseInt(l[2 * a4 + 1])));
			this.vR()
		}, this.vS = function() {
			return [as(this.colors[0][0], 4), as(this.colors[0][1], 4), as(this.colors[0][2], 4)]
		}, this.c7 = function(c8, c9) {
			this.vL = 0;
			var f9 = (gF - this.c1) / 2;
			return c9 -= (cB - this.cw) / 2, (c8 -= f9) < 0 || c9 < 0 || c8 >= this.c1 - 1 || c9 >= this.cw - 1 ? (this.lF = !1, 0 === aJ.nt() && jo.cE(0, !0), !(c4.c5 = !0)) : c8 < this.f8 || c9 < this.f8 || c8 >= this.c1 - this.f8 || c9 >= this.cw - this.f8 || (c8 < this.f8 + this.vM ? (c9 < this.f8 + this.vM && 0 !== this.o7 && (this.o7 = 0, c4.c5 = !0), !0) : c8 < 2 * this.f8 + this.vM || (c8 -= 2 * this.f8 + this.vM, c9 < this.f8 + this.vO ? (this.vL = 1, this.colors[this.o7][0] = vQ(256 * c8 / this.vN), c4.c5 = !0) : c9 < 2 * this.f8 + this.vO || (c9 < 2 * this.f8 + 2 * this.vO ? (this.vL = 2, this.colors[this.o7][1] = vQ(256 * c8 / this.vN), c4.c5 = !0) : !(c9 >= 3 * this.f8 + 2 * this.vO) || (this.vL = 3, this.colors[this.o7][2] = vQ(256 * c8 / this.vN), c4.c5 = !0))))
		}, this.vR = function() {
			for (var cm = 2; 0 <= cm; cm--) this.colors[0][cm] = vQ(this.colors[0][cm])
		}, this.vT = function() {
			for (var aH, l = "", a4 = 0; a4 < 3; a4++)(aH = as(this.colors[0][a4], 4)) < 10 && (l += "0"), l += aH.toString();
			return l
		}, this.lr = function(c8) {
			0 !== this.vL && (c8 -= 2 * this.f8 + this.vM + (gF - this.c1) / 2, this.colors[this.o7][this.vL - 1] = vQ(256 * c8 / this.vN), c4.c5 = !0)
		}, this.vU = function() {
			0 < this.vL && (this.vL = 0, this.vR(), gJ.vV(), c4.c5 = !0)
		}, this.cG = function() {
			var f9 = (gF - this.c1) / 2,
				fA = (cB - this.cw) / 2;
			cH.setTransform(1, 0, 0, 1, f9, fA), cH.fillStyle = i2, cH.fillRect(0, 0, this.c1, this.cw), cH.lineWidth = pB, cH.strokeStyle = cK, cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2), cH.font = bt + Math.floor(.8 * this.vM) + bu, cH.textBaseline = cI, cH.textAlign = cJ, this.vW(0), cH.lineWidth = pB, this.vX(0), this.vX(1), this.vX(2), cH.setTransform(1, 0, 0, 1, 0, 0)
		}, this.vW = function(a4) {
			cH.fillStyle = "rgb(" + this.colors[a4][0] + "," + this.colors[a4][1] + "," + this.colors[a4][2] + ")", cH.fillRect(this.f8, this.f8, this.vM, 2 * this.vM + this.f8), cH.lineWidth = 2 + pB, cH.strokeStyle = cK, cH.strokeRect(this.f8, this.f8, this.vM, 2 * this.vM + this.f8)
		}, this.vX = function(a4) {
			cH.fillStyle = "rgb(" + (0 === a4 ? 200 : 2 === a4 ? 50 : 0) + "," + (1 === a4 ? 200 : 2 === a4 ? 50 : 0) + "," + (2 === a4 ? 255 : 0) + ")", cH.fillRect(2 * this.f8 + this.vM, this.f8 + a4 * (this.f8 + this.vO), Math.floor(this.colors[this.o7][a4] * this.vN / 255), this.vO), cH.strokeStyle = cK, cH.strokeRect(2 * this.f8 + this.vM, this.f8 + a4 * (this.f8 + this.vO), this.vN, this.vO)
		}
	}

	function kE() {
		var fK, vY, pr, q3, r2, vZ, va, vb, vc, c0, by, ga, vd, vf, ve = 0;

		function vi() {
			return eD.vj[(vd + ve) % eD.vk]
		}

		function vg() {
			vd++, ga = c4.gg, eD.rx(vi(), 4) && (vf = !0, iv.vl(vi()))
		}

		function vo() {
			0 === vd ? jn.vq(3249) : (vd === eD.vk - 1 && (vd = -1), vg())
		}

		function vx(fM, ri, vw) {
			var f9 = Math.floor((gF - q3) / 2) + va,
				fB = f9 + Math.floor(vw * (q3 - 2 * va));
			cH.lineWidth = ri, cH.beginPath(), cH.moveTo(f9, fM), cH.lineTo(fB, fM), cH.lineTo(Math.floor(f9 - va + vw * q3), fM + pr), cH.lineTo(f9 - va, fM + pr), cH.closePath()
		}
		this.bp = function() {
			aJ.setState(6), fK = 0, vY = 1, vb = "rgba(0,220,120,0.4)", vc = "rgba(0,0,0,0.8)", this.m0(), c4.c5 = !0, vd = 0, vf = !1, vg()
		}, this.m0 = function() {
			q3 = Math.floor((q ? .5 : .25) * bq), r2 = q3 + 12, pr = Math.floor(.125 * q3), va = 3 * pr, vZ = Math.floor(.225 * q3), by = Math.floor(.3 * pr), c0 = p0 + by + bu
		}, this.vh = function(ca) {
			ve = ca
		}, this.vm = function(vn) {
			vn === vi() && (vf = !1, vo())
		}, this.rz = function(vn) {
			6 !== aJ.nt() || vf || (ga = c4.gg, vf = !0, iv.vl(vn))
		}, this.c7 = function(fL, fM) {
			var f9 = Math.floor((gF - r2) / 2),
				fA = Math.floor(.5 * (cB - cA - pr - vZ)) + pr + cA;
			return f9 < fL && fL < f9 + r2 && fA < fM && fM < fA + vZ && (this.vr(), jl.lr(fL, fM, !1), !0)
		}, this.vr = function() {
			eD.vs(3260), ji.bp(), c4.c5 = !0
		}, this.dF = function() {
			6 === aJ.nt() && (vf ? c4.gg > ga + 12e3 && jn.vq(3250) : c4.gg > ga + 12e3 && vo(), 100 < (fK += .07 * vY * (fK < 16 ? 5 + fK : 84 < fK ? 105 - fK : 17)) ? (fK = 100, vY = -1) : fK < 0 && (fK = 0, vY = 1), vb = "rgba(0," + Math.floor(190 - 1.9 * fK) + "," + Math.floor(120 - 1.2 * fK) + "," + (.4 + .004 * fK) + ")", vc = "rgba(0," + Math.floor(1.9 * fK) + "," + Math.floor(1.2 * fK) + "," + (.8 - .004 * fK) + ")", c4.c5 = !0)
		}, this.cG = function() {
			var fL = Math.floor((gF - r2) / 2),
				fM = Math.floor(.5 * (cB - cA - pr - vZ));
			! function(title, fM, ri, vw) {
				cH.fillStyle = vc, vx(fM, ri, 1), cH.fill(), cH.fillStyle = vb, vx(fM, ri, vw), cH.fill(), cH.strokeStyle = cK, vx(fM, ri, 1), cH.stroke(),
					function(vz, fM) {
						cH.textAlign = cJ, cH.textBaseline = cI, cH.font = c0, cH.fillStyle = cK, cH.fillText(vz, Math.floor(.5 * gF), Math.floor(fM + .58 * pr))
					}(title, fM)
			}("Loading", fM, 3, fK / 100),
			function(fL, fM, c1, cw, nl) {
				cH.fillStyle = oT, cH.fillRect(fL, fM, c1, cw), cH.lineWidth = 3, cH.strokeStyle = cK, cH.strokeRect(fL, fM, c1, cw);
				var b3 = Math.floor(.3 * cw);
				cH.textAlign = cJ, cH.textBaseline = cI, cH.font = p0 + b3 + bu, cH.fillStyle = cK, cH.fillText(nl, Math.floor(fL + c1 / 2), Math.floor(fM + cw / 2 + .1 * b3))
			}(fL, fM + pr + cA, r2, vZ, "geri")
		}
	}

	function kF() {
		var aA;
		this.bp = function() {
			jl.bp(), jo.bp(), aA = 0, w0.bp(), ji.bp()
		}, this.setState = function(w1) {
			aA = w1
		}, this.nt = function() {
			return aA
		}, this.w2 = function() {
			this.setState(8), jv.u0(), cC.v3(), cD.lF = !1, nh.c7(-1e3, -1e3)
		}, this.v3 = function(pX) {
			if (!w3) return !1;
			if (!(c4.gg < 400)) {
				if ("Enter" === pX.key || "Escape" === pX.key) {
					if (this.w4()) return 0 === aA && jo.cE(0, !0), !0;
					if ("Enter" === pX.key) {
						if (0 === aA) return ji.w5(), !0;
						if (7 === aA) return !0
					}
				}
				return !1
			}
		}, this.w4 = function() {
			return !!nh.lI() || !!cC.v3() || !!cD.lF && !(cD.lF = !1)
		}, this.aK = function() {
			c4.c5 = !0, 8 === aA ? gm ? gm = !gm : (hz.lF ? hz : fr).m5() : 7 === aA ? jv.w6() : 6 === aA ? jm.vr() : 3 === aA ? jn.w7(0, 0) : 2 === aA ? dy.w7() : 0 !== aA || this.w4() || a9(11)
		}, this.c7 = function(fL, fM) {
			if (!w0.c7(fL, fM) && w3 && !nh.c7(fL, fM) && !(6 === aA && jm.c7(fL, fM) || 2 === aA && dy.c7(fL, fM) || gJ.c7(fL, fM) || cD.c7(fL, fM) || w8.c7(fL, fM, !0) || cC.c7(fL, fM, !0))) {
				if (jk.c7(fL, fM), 0 === aA) ji.c7(fL, fM);
				else if (3 === aA) jn.c7(fL, fM);
				else if (5 === aA) jp.c7(fL, fM);
				else if (7 === aA && jv.c7(fL, fM)) return;
				uk.c7(fL, fM)
			}
		}, this.lr = function(fL, fM) {
			if (gJ.lr(fL, fM), !jk.rv) {
				if (w0.lr(fL, fM)) return void jk.pi();
				if (2 === aA && dy.lr(fL, fM)) return void jk.pi();
				if (0 <= cC.pd(fL, fM)) return void jk.pi();
				if (cC.lr(fL, fM)) return void jk.pi();
				if (jl.lr(fL, fM, !0)) return
			}
			jk.lr(fL, fM)
		}, this.click = function(fL, fM) {
			jk.pj(), cC.vU() || w8.c7(fL, fM, !1) || cC.c7(fL, fM, !1)
		}, this.po = function(fL, fM, deltaY) {
			cC.mH[1].il.lF || 0 === aA && jk.po(fL, deltaY)
		}, this.w9 = function() {
			jl.s5(), cC.s5(), 0 === aA ? (jo.s5(0), jk.s5()) : 7 === aA && jv.m0(), c4.c5 = !0
		}, this.cG = function() {
			var fM, lv, ne, fL;
			8 !== aA && 10 !== aA && (cH.imageSmoothingEnabled = !0, this.hv(), jk.cG(), jj.cG(), fM = Math.floor(.3 * cB), lv = bw.lC("territorial.io"), ne = (ne = 1.75 * cB / lv.width) * lv.width < .98 * gF ? .98 * gF / lv.width : ne, cH.globalAlpha = .15, fL = Math.floor(.5 * (gF - ne * lv.width)), fL = Math.floor(fL / ne), fM = Math.floor(fM - .5 * lv.height * ne), fM = Math.floor(fM / ne), cH.setTransform(ne, 0, 0, ne, fL, fM), cH.drawImage(lv, fL, fM), cH.setTransform(1, 0, 0, 1, 0, 0), cH.globalAlpha = 1, w8.cG(), uk.cG(), cC.cG(), gJ.cG(), 0 === aA ? ji.cG() : 2 === aA ? dy.cG() : 3 === aA ? jn.cG() : 5 === aA ? jp.cG() : 6 === aA ? jm.cG() : 7 === aA && jv.cG(), cC.wB(), w0.cG(), cD.cG(), nh.cG())
		}, this.hv = function() {
			var wD, wC;
			w3 ? (wC = r / aZ, wD = s / aa, cH.setTransform(wC = wD < wC ? wC : wD, 0, 0, wC, Math.floor((r - wC * aZ) / 2), Math.floor((s - wC * aa) / 2)), cH.drawImage(hw, 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0), cH.fillStyle = oT) : cH.fillStyle = gI, cH.fillRect(0, 0, r, s)
		}
	}

	function wE() {
		this.c1 = 0, this.cw = 0, this.lF = !1, this.nw = 10, this.bB = .12, this.vL = !1, this.wF = !1, this.wG = !1, this.bp = function() {
			this.c1 = r < +s ? Math.floor((q ? .94 : .6) * r) : Math.floor((q ? .94 : .6) * s), this.c1 -= this.c1 % this.nw, this.cw = +this.c1, this.lF = !0, this.vL = !1
		}, this.c7 = function(c8, c9, aA) {
			var f9 = (gF - this.c1) / 2;
			return c9 -= (cB - this.cw) / 2, (c8 -= f9) < 0 || c9 < 0 || c8 >= this.c1 - 1 || c9 >= this.cw - 1 ? (0 === aA && (this.lF = !1, 0 === aJ.nt() && jo.cE(0, !0), c4.c5 = !0), !1) : (c8 = (c8 = as(c8, f9 = Math.floor(this.c1 / this.nw)) + this.nw * as(c9, f9)) < 0 ? 0 : c8 >= a5.o0 ? a5.o0 - 1 : c8, (0 === aA || 1 === aA && !a5.a7[c8] || 2 === aA && a5.a7[c8]) && (this.wF = !a5.a7[c8], this.vL = !0, this.wG = !0, a5.a7[c8] = !a5.a7[c8], a5.oI(), c4.c5 = !0), !0)
		}, this.lr = function(c8, c9) {
			this.vL && this.c7(c8, c9, this.wF ? 1 : 2)
		}, this.vU = function() {
			this.wG && (a3(), this.wG = !1), this.wG = !1, this.vL = !1
		}, this.cG = function() {
			cH.imageSmoothingEnabled = !0;
			for (var f9 = (gF - this.c1) / 2, fA = (cB - this.cw) / 2, i8 = (cH.setTransform(1, 0, 0, 1, f9, fA), cH.fillStyle = i2, cH.fillRect(0, 0, this.c1, this.cw), cH.lineWidth = pB, cH.strokeStyle = cK, cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2), Math.floor(this.c1 / this.nw)), zoom = (i8 - 2 * this.bB * i8) / a5.c1, a4 = a5.o0 - 1; 0 <= a4; a4--) cH.setTransform(1, 0, 0, 1, Math.floor(f9 + a4 % this.nw * i8), Math.floor(fA + as(a4, this.nw) * i8)), a5.a7[a4] && (cH.fillStyle = oa, cH.fillRect(0, 0, i8, i8)), cH.setTransform(zoom, 0, 0, zoom, Math.floor(f9 + a4 % this.nw * i8 + this.bB * i8), Math.floor(fA + as(a4, this.nw) * i8 + this.bB * i8)), cH.drawImage(a5.l8[a4], 0, 0);
			cH.setTransform(1, 0, 0, 1, 0, 0), cH.imageSmoothingEnabled = !1
		}
	}

	function kG() {
		var wH, hJ, wI;

		function oB() {
			var aA;
			0 === (aA = aJ.nt()) ? ji.u0() : 6 === aA ? eD.vs(wH) : 7 === aA ? (jv.u0(), eD.close(eD.wJ, 3240)) : 8 === aA && (jf(), ji.u0()), aJ.setState(3), jl.s5(), wM(wH), c4.c5 = !0
		}

		function wK(pX) {
			for (var a4 = hJ.length - 1; 0 <= a4; a4--)
				if (pX === hJ[a4].code) return hJ[a4].l;
			return wI + pX
		}

		function wM(pX) {
			jl.vA[2].nl = wK(pX)
		}
		this.jX = function() {
			(hJ = []).push({
				l: "No Server Response",
				code: 1006
			}), hJ.push({
				l: "hesap başarıyla kaydedildi",
				code: 3231
			}), hJ.push({
				l: "Account Error",
				code: 3232
			}), hJ.push({
				l: "No Servers Found",
				code: 3249
			}), hJ.push({
				l: "Thanks for the vote.",
				code: 3252
			}), hJ.push({
				l: "lütfen çerezleri accept et",
				code: 3265
			}), hJ.push({
				l: "Invalid Password Format",
				code: 3266
			}), hJ.push({
				l: "lobi zaman aşımı",
				code: 4207
			}), hJ.push({
				l: "bilinmiyen ad",
				code: 4214
			}), hJ.push({
				l: "User already exists.",
				code: 4224
			}), hJ.push({
				l: "No Client Response Error",
				code: 4229
			}), wI = "Error "
		}, this.bp = function(vn, pX) {
			wH = pX;
			var aA = aJ.nt();
			if (6 === aA) {
				if (4211 === pX) return void jp.bp(0, 0);
				if (4214 !== pX) return void jm.vm(vn)
			} else {
				if (7 !== aA) return 8 === aA ? void(vn !== eD.jg || dx || e9.mt(wK(pX))) : void 0;
				if (vn !== eD.wJ) return
			}
			oB()
		}, this.vq = function(pX) {
			wH = pX, 8 === aJ.nt() ? e9.mt(wK(pX)) : oB()
		}, this.m0 = function() {
			wM(wH)
		}, this.c7 = function(fL, fM) {
			3 === jl.pd(fL, fM, 3, 1) && this.w7(fL, fM)
		}, this.w7 = function(fL, fM) {
			ji.bp(), jl.lr(fL, fM, !1), c4.c5 = !0
		}, this.cG = function() {
			jl.vG()
		}
	}

	function kH() {
		var wN, l9, wO;
		this.bp = function() {
			var a4;
			l9 = "rgba(0,0,0,0.6)", wO = oi, void 0 !== wN && this.cE(0, !1), (wN = []).push({
				input: document.createElement("INPUT"),
				lF: !1,
				color: l9
			}), a4 = wN.length - 1, wN[a4].input.setAttribute("type", "text"), wN[a4].input.value = "", wN[a4].input.style.textAlign = 0 == a4 ? "center" : "left", wN[a4].input.style.backgroundColor = l9, wN[a4].input.style.border = "3px solid " + cK, wN[a4].input.style.color = cK, wN[a4].input.style.position = "absolute", wN[a4].input.readOnly = 3 == a4, wN[a4].input.addEventListener("input", function() {
				0 == a4 && ji.wQ()
			}), this.m0()
		}, this.m0 = function() {
			var by = Math.floor(.22 * jl.cw / pa);
			wN[0].input.style.font = bt + by + bu, wN[0].input.style.padding = Math.floor(.3 * by) + "px 5px", wN[0].input.style.width = Math.floor(jl.c1 / pa - 13) + "px"
		}, this.bz = function(a4) {
			return wN[a4]
		}, this.s5 = function(a4) {
			wN[a4].input.style.left = Math.floor((gF / pa - (jl.c1 / pa - 3) - 7) / 2) + "px", 0 === a4 && (wN[a4].input.style.bottom = Math.floor((cB - jl.fM + jl.f8) / pa) + "px")
		}, this.cE = function(a4, cE) {
			wN[a4].lF !== cE && ((wN[a4].lF = cE) ? document.body.appendChild(wN[a4].input) : document.body.removeChild(wN[a4].input))
		}, this.wR = function(a4, wS) {
			wS && wN[a4].color === l9 || !wS && wN[a4].color === wO || (wN[a4].color = wS ? l9 : wO, wN[a4].input.style.backgroundColor = wN[a4].color)
		}
	}

	function kk() {
		var wV, wW, wX, wY;
		this.wT = 0, this.wU = 0, this.bp = function(bB) {
			var gy;
			7 === aJ.nt() && (wV = bB, wW = 0, wX = c4.gg + 4500, wY = jt.wZ(wV) ? 2 : 0, aJ.setState(10), cH.imageSmoothingEnabled = !0, aJ.hv(), bB = bw.lC("loading"), gy = 1, gy = (q ? .396 : .25) * bq / bB.width, cH.setTransform(gy, 0, 0, gy, Math.floor((r - gy * bB.width) / 2), Math.floor((s - gy * bB.height) / 2)), cH.drawImage(bB, 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0))
		}, this.ea = function() {
			0 < wY && c4.gg > wX && (wY--, wX += 4500, 0 === c4.wb) && 0 === c4.wc && (0 === wY && eD.jg < eD.wd && (eD.jg += eD.we), eD.rx(eD.jg, 5))
		}, this.wf = function() {
			10 === aJ.nt() && 2 <= ++wW && (jt.wg(wV), wV = null)
		}
	}

	function kh() {
		var wi, wj, wk, wl, wm, wn, wo, wq, wr, wt, wu, wv, wy, wz, x0, x1, x2, wp = 48,
			ww = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
			wx = [0, 0, 0, 0];

		function x5(a4, l8) {
			var a4 = wo[a4].getContext("2d", {
					alpha: !0
				}),
				zoom = (a4.clearRect(0, 0, wp, wp), wp / l8.width),
				t = wp / l8.height,
				zoom = t < zoom ? t : zoom;
			a4.imageSmoothingEnabled = !0, a4.setTransform(zoom, 0, 0, zoom, Math.floor((wp - zoom * l8.width) / 2), Math.floor((wp - zoom * l8.height) / 2)), a4.drawImage(l8, 0, 0), a4.setTransform(1, 0, 0, 1, 0, 0)
		}

		function x9(dV, fD, xC, lA) {
			lA.beginPath(), lA.moveTo(dV, dV), lA.lineTo(dV + Math.cos(xC) * fD, dV + Math.cos(xC + 1.5 * Math.PI) * fD), lA.stroke()
		}

		function xU() {
			if (7 === aJ.nt()) {
				for (var xV, l8, lA, zoom, t, ca = -1, a4 = wq.length - 1; 0 <= a4; a4--)
					if (null === wq[a4].lv) {
						ca = a4;
						break
					} - 1 !== ca && (null !== (xV = xI(wq[ca].xN, wq[ca].xO)) ? wq[ca].lv = xV : (xV = {
					aZ: aZ,
					aa: aa,
					hw: hw,
					pw: pw,
					xW: xW,
					xX: xX,
					xJ: xJ,
					xK: xK
				}, xY(wq[ca].xN, wq[ca].xO), xZ.xa(), (l8 = document.createElement("canvas")).width = 128, l8.height = 128, lA = l8.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / aZ) < (t = 128 / aa) && (zoom = t), lA.imageSmoothingEnabled = !0, lA.setTransform(zoom, 0, 0, zoom, (128 - zoom * aZ) / 2, (128 - zoom * aa) / 2), lA.drawImage(hw, 0, 0), aZ = xV.aZ, aa = xV.aa, hw = xV.hw, pw = xV.pw, xW = xV.xW, xX = xV.xX, xJ = xV.xJ, xK = xV.xK, wq[ca].lv = l8), c4.c5 = !0)
			}
		}

		function xI(xN, xO) {
			for (var a4 = wq.length - 1; 0 <= a4; a4--)
				if (null !== wq[a4].lv && wq[a4].xN === xN && wq[a4].xO === xO) return wq[a4].lv;
			return null
		}
		this.bp = function() {
			var a4;
			for (x2 = 0, wt = -1, aJ.setState(7), wq = [], this.m0(), wo = new Array(13), a4 = wo.length; 0 <= a4; a4--) wo[a4] = document.createElement("canvas"), wo[a4].width = wp, wo[a4].height = wp;
			for (a4 = 0; a4 < 7; a4++) ! function(n0) {
				var x7, lA = wo[n0 - 2].getContext("2d", {
						alpha: !0
					}),
					x6 = 1.5 * Math.PI,
					dV = Math.floor(.5 * wp),
					fD = Math.floor(.48 * wp);
				lA.lineWidth = 2, lA.strokeStyle = cK, lA.clearRect(0, 0, wp, wp);
				for (var a4 = 0; a4 < n0; a4++) x7 = x6 + 2 * Math.PI / n0,
					function(a4, dV, fD, x6, x7, lA) {
						lA.fillStyle = dW.xB[a4], lA.beginPath(), lA.arc(dV, dV, fD, x6, x7), lA.lineTo(dV, dV), lA.fill()
					}(a4 + 1, dV, fD, x6, x7, lA), 0 !== a4 && x9(dV, fD, x6, lA), x6 = x7;
				x9(dV, fD, 1.5 * Math.PI, lA),
					function(dV, fD, lA) {
						lA.beginPath(), lA.arc(dV, dV, fD, 0, 2 * Math.PI), lA.stroke()
					}(dV, fD, lA)
			}(a4 + 2);
			x5(7, bw.bz(4)), x5(8, a5.l8[27]), x5(9, a5.l8[46]), x5(10, a5.l8[36]), x5(11, bw.bz(20)), x5(12, bw.bz(21)), c4.c5 = !0
		}, this.w6 = function() {
			this.u0(), eD.vs(3240), ji.bp(), a9(12), c4.c5 = !0
		}, this.u0 = function() {
			wq = [], wo = []
		}, this.nu = function() {
			return wv
		}, this.m0 = function() {
			var xD, xE, xF, xG;
			for (wk = [0, 0], wr = [0, 0, 0, 0], x1 = q ? (wu = Math.floor(.8 * .4 * bq), wv = Math.floor(.56 * wu), wr[0] = cA, r < s ? (wr[1] = wv + 2 * cA, wr[2] = r - 3 * wr[0], wr[3] = uk.cF() - 3 * cA - wv, wz = Math.floor(.95 * wv), x0 = Math.floor((r - wu - cA) / 2), Math.floor(cA + wv / 2)) : (wr[1] = cA, wr[2] = r - 3 * cA - wu, wr[3] = uk.cF() - 2 * cA, wz = Math.floor(.8 * wu), wr[3] - wv < wu && (wz = Math.floor(.8 * (wr[3] - wv)), wz = mh(wv, wz)), x0 = Math.floor(r - wu / 2 - cA), mh(x1 = Math.floor(cA + wv + (wr[3] - wv) / 2), Math.floor(wv + 2 * cA + wz / 2)))) : (wu = Math.floor(.2016 * bq), wv = Math.floor(.56 * wu), wr[2] = Math.floor(.5 * r), wr[3] = Math.floor(.5 * s), wr[1] = Math.floor(.45 * (s - wr[3])), wr[0] = Math.floor((r - wr[2]) / 2), wz = Math.floor(.75 * wv), x0 = Math.floor(r / 2), Math.floor(wr[1] + wr[3] + (s - wr[3] - wr[1]) / 2)), wy = bt + Math.floor(.65 * wv / 4) + bu, xD = xE = 1; xD * xE < wq.length;) wr[3] / (xE + 1) < wr[2] / (xD + 1) ? xD++ : xE++;
			wi = (xF = (wr[2] - (xD - 1) * cA) / xD) < (xG = (wr[3] - (xE - 1) * cA) / xE) ? xF : xG, wj = Math.floor(wi), wn = bt + Math.floor(.5 * wi / 5) + bu, wk[0] = xD, wk[1] = xE, wl = wr[0] + Math.floor((wr[2] - wk[0] * wi - (wk[0] - 1) * cA) / 2), wm = wr[1] + Math.floor((wr[3] - wk[1] * wi - (wk[1] - 1) * cA) / 2)
		}, this.ul = function(xH, bB) {
			var a4, t, lv, b3 = wq.length;
			for (wx = xH, a4 = 0; a4 < bB.length; a4++) lv = xI(bB[a4].xJ, bB[a4].xK), wq.push({
				xL: bB[a4].id,
				jN: bB[a4].jN,
				jO: bB[a4].xM,
				xN: bB[a4].xJ,
				xO: bB[a4].xK,
				joined: bB[a4].xP,
				nq: bB[a4].vw,
				xQ: bB[a4].xQ,
				lv: lv,
				xR: bB[a4].xR,
				xS: bB[a4].xS
			});
			for (a4 = b3 - 1; 0 <= a4; a4--) wq.shift();
			if (-1 !== wt)
				for (t = wt, wt = -1, a4 = wq.length - 1; 0 <= a4; a4--)
					if (wq[a4].xL === t) {
						wt = t;
						break
					}(wq.length > x2 || wq.length < x2) && (x2 = wq.length, this.m0()), this.xT(), c4.c5 = !0
		}, this.xT = function() {
			for (var a4 = wq.length - 1; 0 <= a4; a4--) null === wq[a4].lv && setTimeout(xU, 0)
		}, this.c7 = function(fL, fM) {
			return 4 * ((fL - x0) * (fL - x0) + (fM - x1) * (fM - x1)) <= wz * wz ? (this.w6(), jl.lr(fL, fM, !1), !0) : function(fL, fM) {
				var ca, cm, f9, fA;
				if (0 !== wq.length) {
					var a4 = 0;
					for (fA = wm, cm = 0; cm < wk[1]; cm++) {
						for (f9 = wl, ca = 0; ca < wk[0]; ca++) {
							if (f9 < fL && fL < f9 + wi && fA < fM && fM < fA + wi) return iv.xc(wq[a4].xL), wt = wq[a4].xL !== wt ? wq[a4].xL : -1, c4.c5 = !0;
							if (++a4 >= wq.length) return !1;
							f9 += wi + cA
						}
						fA += wi + cA
					}
				}
				return !1
			}(fL, fM)
		}, this.cG = function() {
			var ca, cm, fL, fD, zoom, a4 = 0,
				fM = wm;
			if (cH.imageSmoothingEnabled = !0, cH.lineWidth = 3, fD = Math.floor(.5 * wz), cH.fillStyle = oT, cH.beginPath(), cH.arc(x0, x1, fD, 0, 2 * Math.PI), cH.fill(), cH.strokeStyle = cK, cH.beginPath(), cH.arc(x0, x1, fD, 0, 2 * Math.PI), cH.stroke(), fD = bw.bz(0).height, zoom = .6 * wz / fD, cH.setTransform(zoom, 0, 0, zoom, Math.floor(x0 - .56 * zoom * bw.bz(0).width), Math.floor(x1 - .5 * zoom * fD)), cH.drawImage(bw.bz(0), 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0), function() {
					cH.fillStyle = oT, cH.fillRect(r - wu - cA, cA, wu, wv), 0 <= wt ? (cH.fillStyle = oa, cH.fillRect(r - wu - cA, cA, wu, Math.floor(.25 * wv))) : (cH.fillStyle = ow, cH.fillRect(r - wu - cA, cA + Math.floor(.25 * wv), wu, Math.floor(.25 * wv)));
					cH.strokeStyle = cK, cH.strokeRect(r - wu - cA, cA, wu, wv), cH.fillStyle = cK, cH.font = wy, cH.textBaseline = cI;
					for (var fM, uq = Math.floor(.04 * wu), mI = Math.floor(.08 * wv), a4 = 3; 0 <= a4; a4--) fM = Math.floor(cA + (a4 + 1) * (wv + 2 * mI) / 5 - mI), cH.textAlign = mm, cH.fillText(ww[a4], r - wu - cA + uq, fM), cH.textAlign = oy, cH.fillText(eQ.gM(wx[a4]), r - cA - uq, fM)
				}(), 0 !== wq.length)
				for (cm = 0; cm < wk[1]; cm++) {
					for (fL = wl, ca = 0; ca < wk[0]; ca++) {
						if (! function(a4, fL, fM) {
								var zoom, cm, xg, xi, xj;
								null === wq[a4].lv ? (cH.fillStyle = oT, cH.fillRect(fL, fM, wj, wj)) : (zoom = wj / 128, cH.setTransform(zoom, 0, 0, zoom, fL, fM), cH.drawImage(wq[a4].lv, 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0));
								wt === wq[a4].xL ? (function(fL, fM) {
									var i8 = Math.floor(.2 * wj),
										i9 = Math.floor(.3 * i8);
									cH.fillStyle = oc, cH.fillRect(fL + wj - i8, fM, i8, i8), cH.fillStyle = gI, cH.fillRect(fL + wj - i8, fM, 2, i8), cH.fillRect(fL + wj - i8, fM + i8 - 2, i8, 2), fr.mE(fL + wj - i8 + i9, fM + i9, i8 - 2 * i9), cH.setTransform(1, 0, 0, 1, 0, 0)
								}(fL, fM), cH.lineWidth = 3, cH.fillStyle = oc) : cH.fillStyle = oS;
								if (xi = Math.floor(wi / 4), cH.fillRect(fL, fM, xi, xi), xj = Math.floor(fM + .8 * wi), cH.fillRect(fL, xj, wj, Math.floor(wi / 5)), function(a4, fL, fM) {
										var zoom;
										wq[a4].jO && (a4 = bw.bz(4), zoom = .5 * wi / a4.width, cH.setTransform(zoom, 0, 0, zoom, Math.floor(fL + (wi - zoom * a4.width) / 2), Math.floor(fM + (wi - zoom * a4.height) / 2)), cH.globalAlpha = .6, cH.drawImage(a4, 0, 0), cH.globalAlpha = 1, cH.setTransform(1, 0, 0, 1, 0, 0))
									}(a4, fL, fM), wq[a4].xR) {
									for (cm = xg = 0; cm < wq[a4].xR; cm++) xg = Math.max(xg, c2.measureText(wq[a4].xS[cm], wn));
									xg += .05 * wi, cm = 5 === wq[a4].xR, xi = cm ? fM + xi : Math.max(fM + .8 * wi - .11 * wq[a4].xR * wi, fM + xi), xj = cm ? xj : Math.min(xi + .11 * wq[a4].xR * wi + .05 * wi, xj), cH.fillRect(fL, xi, xg, xj - xi)
								}
								for (cH.font = wn, cH.textBaseline = cI, cH.textAlign = mm, cH.fillStyle = oq, cH.fillText(wq[a4].joined.toString(), Math.floor(fL + .22 * wi), Math.floor(fM + .9 * wi)), cH.fillStyle = cK, cm = 0; cm < wq[a4].xR; cm++) cH.fillText(wq[a4].xS[wq[a4].xR - cm - 1], Math.floor(fL + .03 * wi), Math.floor(fM + .77 * wi - .11 * cm * wi));
								cH.textAlign = oy, cH.fillStyle = ol, cH.fillText(wq[a4].nq.toString(), Math.floor(fL + .81 * wi), Math.floor(fM + .9 * wi)), cH.strokeStyle = wt === wq[a4].xL ? ob : or, cH.strokeRect(fL, fM, wj, wj), xj = Math.floor(.16 * wi), zoom = xj / wp, cH.setTransform(zoom, 0, 0, zoom, Math.floor(fL + .33 * xj), Math.floor(fM + .33 * xj)), wo.length > wq[a4].jN && cH.drawImage(wo[wq[a4].jN], 0, 0);
								cH.setTransform(zoom, 0, 0, zoom, Math.floor(fL + .15 * xj), Math.floor(fM + wi - 1.08 * xj)), cH.drawImage(wo[11], 0, 0), cH.setTransform(zoom, 0, 0, zoom, Math.floor(fL + wi - 1.05 * xj), Math.floor(fM + wi - 1.15 * xj)), cH.drawImage(wo[12], 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0)
							}(a4, Math.floor(fL), Math.floor(fM)), ++a4 >= wq.length) return;
						fL += wi + cA
					}
					fM += wi + cA
				}
		}
	}

	function kI() {
		this.bp = function(fL, fM) {
			aJ.setState(5), jl.lr(fL, fM, !1), c4.c5 = !0
		}, this.cG = function() {
			jl.vH()
		}, this.c7 = function(fL, fM) {
			var a4 = jl.pd(fL, fM, 5, 2);
			5 === a4 ? aC() : 6 === a4 && (ji.bp(), jl.lr(fL, fM, !1), c4.c5 = !0)
		}
	}

	function kJ() {
		var xm = [0, 0, 0, 0];

		function us(fL, fM, i6, y0) {
			cH.fillStyle = cK;
			var i8 = mh(2, Math.floor((y0 ? .5 : .35) * i6)),
				nc = (i8 -= i8 % 2, mh(2, Math.floor(.1 * i6))),
				i6 = (nc -= nc % 2, Math.floor((i6 - i8) / 2)),
				fB = Math.floor(i6 + (i8 - nc) / 2);
			cH.fillRect(fL + i6, fM + fB, i8, nc), y0 && cH.fillRect(fL + fB, fM + i6, nc, i8)
		}

		function vv(fL, fM, c1, cw, lD, bn, nl, cN, n0) {
			cH.fillStyle = lD, cH.fillRect(fL, fM, c1, cw), 0 <= cN && function(fL, fM, c1, cw, cN) {
				cH.fillStyle = "rgba(" + 22 * cN + "," + (110 - 22 * cN) + ",0,0.75)", cH.fillRect(fL, fM, (1 + cN) * c1 / 6, cw)
			}(fL, fM, c1, cw, cN), 0 < n0 && function(fL, fM, c1, cw, n0) {
				cH.fillStyle = "rgba(255,255,255,0.3)", cH.fillRect(fL, fM, n0 * c1 / b8, cw)
			}(fL, fM, c1, cw, n0), cH.strokeStyle = cK, cH.strokeRect(fL, fM, c1, cw), 0 !== bn && (cH.fillStyle = cK, cH.font = bt + Math.floor(bn * cw) + bu, cH.fillText(nl, Math.floor(fL + c1 / 2), Math.floor(fM + .52 * cw)))
		}
		this.dz = [{
			bD: 0,
			n0: 512
		}], this.bp = function() {
			jw.lF = !1, aJ.setState(2), this.m0(), c4.c5 = !0
		}, this.u0 = function() {}, this.m0 = function() {
			xm[2] = Math.floor((q ? .49 : .4) * bq), xm[1] = Math.floor((s - xm[2] / 6 - this.dz.length * (cA + xm[2] / 10)) / 2), xm[0] = Math.floor((r - xm[2]) / 2), jw.lF && jw.m0()
		}, this.xn = function(jN) {
			var a4;
			if (6 < jN) this.dz = [{
				bD: 0,
				n0: 512
			}];
			else {
				for (this.dz = [], a4 = 0; a4 < jN + 2; a4++) this.dz.push({
					bD: 0,
					n0: 0
				});
				this.xo()
			}
		}, this.w7 = function() {
			c4.c5 = !0, jw.lF ? jw.lF = !1 : (this.u0(), ji.bp(), a9(12))
		}, this.jQ = function() {
			var a4, n0;
			if (dr.ds) return dr.dt.xp;
			for (n0 = 0, a4 = this.dz.length - 1; 0 <= a4; a4--) n0 += this.dz[a4].n0;
			return n0
		}, this.lr = function(fL, fM) {
			return !(!jw.lF || !jw.lr(fL, fM)) || -1 !== this.pd(fL, fM)
		}, this.xq = function() {
			var ca;
			eD.jg = 0, eD.rx(0, 3) && iv.xr(0), aJ.w2(), dr.ds ? dr.xs() : (ca = (ca = this.dz.length - 2) < 0 ? 7 : ca, jK(Math.floor(16384 * Math.random()), 0, [{
				name: ji.xt(),
				xu: cC.mH[2].il.vS(),
				xv: 0
			}], ca, !1))
		}, this.c7 = function(fL, fM) {
			if (cD.lF || cC.mH[1].il.lF || cC.mH[2].il.lF) return !1;
			if (jw.lF && !dr.ds) return jw.c7(fL, fM);
			var a4, ca, max, i8, fM = this.pd(fL, fM);
			if (-1 === fM) return !1;
			if (0 === fM) this.w7();
			else if (1 === fM) dr.ds ? (dr.pi(), c4.c5 = !0) : jw.show();
			else if (100 === fM) jy.xw();
			else if (2 === fM) this.u0(), this.xq();
			else {
				if (dr.ds) return !1;
				if (27 === fM) this.dz.length < 8 && (this.dz.push({
					bD: 0,
					n0: b8
				}), this.xo(), this.m0(), c4.c5 = !0);
				else if (a4 = Math.floor((fM - 3) / 3), fM % 3 == 0) 1 < this.dz.length && (this.dz.splice(a4, 1), this.m0(), c4.c5 = !0);
				else if (i8 = (xm[2] - xm[2] / 10 - 2 * cA) / 2, fM % 3 == 1) 0 === a4 && 1 === this.dz[a4].n0 || (fL < xm[0] + xm[2] - 1.5 * i8 - cA ? this.dz[a4].bD-- : this.dz[a4].bD++, this.dz[a4].bD < 0 ? this.dz[a4].bD = 5 : 5 < this.dz[a4].bD && (this.dz[a4].bD = 0), c4.c5 = !0);
				else {
					for (c4.c5 = !0, fM = (fL - (xm[0] + xm[2] - i8)) / i8 - .5, fM *= fM < 0 ? -fM : fM, fM = 0 === (fM = Math.floor(fM * b8)) ? 1 : fM, max = b8, ca = this.dz.length - 1; 0 <= ca; ca--) a4 !== ca && (max -= this.dz[ca].n0);
					if (fM < 0) {
						if (1 === this.dz[a4].n0) return this.dz[a4].n0 = max, !0
					} else if (this.dz[a4].n0 === max) return this.dz[a4].n0 = 1, !0;
					this.dz[a4].n0 += fM, this.dz[a4].n0 < 1 ? this.dz[a4].n0 = 1 : this.dz[a4].n0 > max && (this.dz[a4].n0 = max)
				}
			}
			return !0
		}, this.xo = function() {
			for (var n0 = Math.floor(b8 / this.dz.length), xx = b8 % this.dz.length, a4 = this.dz.length - 1; 0 <= a4; a4--) this.dz[a4].n0 = n0;
			this.dz[0].n0 += xx
		}, this.pd = function(fL, fM) {
			var i8 = (xm[2] - 3 * cA) / 4,
				nc = xm[2] / 6;
			if (fL < xm[0] || fM < xm[1] || xm[0] + xm[2] <= fL) return -1;
			if (fM < xm[1] + nc) return fL < xm[0] + i8 ? 0 : fL < xm[0] + i8 + cA ? -1 : fL < xm[0] + 2 * i8 + cA ? 100 : fL < xm[0] + 2 * (i8 + cA) ? -1 : fL < xm[0] + 3 * i8 + 2 * cA ? 1 : fL < xm[0] + 3 * (i8 + cA) ? -1 : 2;
			for (var fA, nd = xm[2] / 10, i8 = (xm[2] - nd - 2 * cA) / 2, a4 = 0; a4 < this.dz.length; a4++) {
				if (fM < (fA = xm[1] + nc + cA + a4 * (nd + cA))) return -1;
				if (!(fA + nd < fM)) return fL < xm[0] + nd ? 3 + 3 * a4 : fL < xm[0] + nd + cA ? -1 : fL < xm[0] + xm[2] - i8 - cA ? 4 + 3 * a4 : fL < xm[0] + xm[2] - i8 ? -1 : 5 + 3 * a4
			}
			return !(this.dz.length < 8) || fM < (fA = xm[1] + nc + cA + this.dz.length * (nd + cA)) || fA + nd < fM || xm[0] + nd < fL ? -1 : 27
		}, this.cG = function() {
			cH.lineWidth = 2, cH.textAlign = cJ, cH.textBaseline = cI;
			var i8 = (xm[2] - 3 * cA) / 4,
				nc = xm[2] / 6;
			if (vv(xm[0], xm[1], i8, nc, "rgba(128,0,0,0.75)", .34, "geri", -1, -1), vv(xm[0] + i8 + cA, xm[1], i8, nc, "rgba(128,0,128,0.75)", .31, "rastgale", -1, -1), vv(xm[0] + 2 * (i8 + cA), xm[1], i8, nc, "rgba(" + (dr.ds ? 128 : 0) + ",128,128,0.75)", .34, dr.ds ? "Reset" : "haritalar", -1, -1), vv(xm[0] + xm[2] - i8, xm[1], i8, nc, "rgba(0,128,0,0.75)", .34, "başla", -1, -1), !dr.ds) {
				for (var fA, nd = xm[2] / 10, i8 = (xm[2] - nd - 2 * cA) / 2, a4 = 0; a4 < this.dz.length; a4++) fA = xm[1] + nc + cA + a4 * (nd + cA), vv(xm[0], fA, nd, nd, 1 < this.dz.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0, null, -1), 1 < this.dz.length && us(xm[0], fA, nd, !1), vv(xm[0] + nd + cA, fA, i8, nd, i2, .4, this.xy(a4), this.dz[a4].bD, -1), vv(xm[0] + xm[2] - i8, fA, i8, nd, i2, .4, this.xz(a4), -1, this.dz[a4].n0);
				this.dz.length < 8 && (fA = xm[1] + nc + cA + this.dz.length * (nd + cA), vv(xm[0], fA, nd, nd, "rgba(0,128,20,0.75)", 0, null, -1, -1), us(xm[0], fA, nd, !0)), jw.lF && jw.cG()
			}
		}, this.xy = function(a4) {
			return 0 === a4 && 1 === this.dz[a4].n0 ? "You" : dG.dl[this.dz[a4].bD]
		}, this.xz = function(a4) {
			return 1 === this.dz[a4].n0 ? "1 Player" : this.dz[a4].n0 + " oyuncular"
		}
	}

	function pI() {
		this.b3 = 0, this.c1 = 0, this.mH = null, this.bp = function() {
			this.mH = [], this.mH.push({
				fL: 0,
				fM: 0,
				m6: q,
				il: null
			}), this.mH.push({
				fL: 0,
				fM: 0,
				m6: !1,
				il: new wE
			}), this.mH.push({
				fL: 0,
				fM: 0,
				m6: !1,
				il: new vK
			}), this.mH[2].il.vP(), this.b3 = this.mH.length, this.c1 = 0
		}, this.s5 = function() {
			this.c1 = Math.floor((q ? .063 : .04) * bq), this.c1 += 4 - this.c1 % 4, this.mH[0].fL = cA, this.mH[0].fM = cB - this.c1 - cA;
			for (var a4 = 1; a4 < this.b3; a4++) this.mH[a4].fL = this.mH[a4 - 1].fL + Math.floor(q ? 1.5 * cA : 3.7 * cA) + this.c1, this.mH[a4].fM = this.mH[0].fM
		}, this.pd = function(c8, c9) {
			if (bw.bx())
				for (var a4 = this.b3 - 1; 0 <= a4; a4--)
					if (c8 >= this.mH[a4].fL && c9 >= this.mH[a4].fM && c8 < this.mH[a4].fL + this.c1 && c9 < this.mH[a4].fM + this.c1) return a4;
			return -1
		}, this.y3 = function() {
			for (var a4 = 2; 1 <= a4; a4--)
				if (this.mH[a4].il.lF) return !0;
			return !1
		}, this.v3 = function() {
			return this.mH[1].il.lF ? (this.mH[1].il.c7(-5e3, -5e3, 0), !0) : !!this.mH[2].il.lF && (this.mH[2].il.c7(-5e3, -5e3), !0)
		}, this.c7 = function(c8, c9, v2) {
			if (v2) {
				if (this.mH[1].il.lF) return this.mH[1].il.c7(c8, c9, 0), !0;
				if (this.mH[2].il.lF) return this.mH[2].il.c7(c8, c9), !0
			}
			c8 = this.pd(c8, c9);
			if (v2) {
				if (0 === c8) return this.mH[c8].m6 = !this.mH[c8].m6, q = this.mH[c8].m6, ju.y4(), a1(this.mH[0].m6, !1), !0;
				if (1 <= c8 && c8 < 3) return this.mH[c8].il.bp(), ji.u0(), c4.c5 = !0
			}
			return !1
		}, this.lr = function(c8, c9) {
			return this.mH[1].il.lF ? (this.mH[1].il.lr(c8, c9), !0) : !!this.mH[2].il.lF && (this.mH[2].il.lr(c8), !0)
		}, this.vU = function() {
			for (var a4 = 2; 1 <= a4; a4--)
				if (this.mH[a4].il.lF) return this.mH[a4].il.vU(), !0;
			return !1
		}, this.cG = function() {
			if (bw.bx()) {
				cH.imageSmoothingEnabled = !0;
				for (var a4 = this.b3 - 1; 0 <= a4; a4--) cH.fillStyle = this.mH[a4].m6 ? me : i2, cH.fillRect(this.mH[a4].fL, this.mH[a4].fM, this.c1, this.c1), 0 === a4 ? this.y5(a4, bw.bz(15)) : 1 === a4 ? this.y6() : 2 === a4 && this.y7(), cH.setTransform(1, 0, 0, 1, 0, 0), cH.lineWidth = pB, cH.strokeStyle = cK, cH.strokeRect(this.mH[a4].fL, this.mH[a4].fM, this.c1, this.c1);
				cH.imageSmoothingEnabled = !1
			}
		}, this.y5 = function(a4, l8) {
			var f8 = .08 * this.c1,
				zoom = (this.c1 - 2 * f8) / l8.width;
			cH.setTransform(zoom, 0, 0, zoom, this.mH[a4].fL + f8, this.mH[a4].fM + (this.c1 - zoom * l8.height) / 2), cH.drawImage(l8, 0, 0)
		}, this.y6 = function() {
			var f8 = .06 * this.c1,
				zoom = (this.c1 - 2 * f8) / a5.c1;
			cH.setTransform(zoom, 0, 0, zoom, this.mH[1].fL + f8, this.mH[1].fM + f8), cH.drawImage(a5.l8[4], 0, 0)
		}, this.y7 = function() {
			cH.setTransform(1, 0, 0, 1, this.mH[2].fL, this.mH[2].fM);
			for (var bD = this.c1 / 4, fL = 3; 0 <= fL; fL--)
				for (var fM = 3; 0 <= fM; fM--) {
					var fD = Math.floor(367 * (fL + 1) * (fM + 1) % 256),
						nB = Math.floor(687 * (fL + 1) * (fM + 1) % 256),
						cm = Math.floor(651 * (fL + 1) * (fM + 1) % 256);
					cH.fillStyle = "rgb(" + fD + "," + nB + "," + cm + ")", cH.fillRect(fL * bD, fM * bD, bD, bD)
				}
		}, this.wB = function() {
			for (var a4 = 2; 1 <= a4; a4--)
				if (this.mH[a4].il.lF) return void this.mH[a4].il.cG()
		}
	}

	function kK() {
		var username;

		function yE() {
			var lw;
			return 0 === username.indexOf("vote ") && 2 === (lw = username.split(" ")).length ? (ji.y8 = lw[1], yI(), eD.rx(0, 7) && iv.yJ(0), jn.vq(3252), 1) : void 0
		}

		function yI() {
			username = a(), jo.bz(0).input.value = username, jo.wR(0, !0)
		}

		function yD() {
			var max, yK;
			if (0 === username.indexOf("account ")) return 2 !== (yK = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (yK = parseInt(m.n(yK[1]))) <= 0) || max <= yK ? (yI(), jn.vq(3266)) : o(yK) ? (yI(), jn.vq(3231)) : (yI(), 5 <= d ? jn.vq(3232) : (jn.vq(3265), w0.lF = !0, w0.bs = -1)), 1
		}

		function yG() {
			return void 0 !== username && m.iR(username)
		}

		function yA() {
			if (yG()) return jo.wR(0, !0), 1;
			jo.wR(0, !1)
		}
		this.y8 = "", this.y9 = -7e3, this.bp = function() {
			aJ.setState(0), jl.s5(), jo.cE(0, !0), jo.s5(0), jj.bp(), cC.s5(), void 0 === username && (username = a(), jo.bz(0).input.value = username, yA())
		}, this.u0 = function() {
			a9(13), jo.cE(0, !1)
		}, this.yB = function(bs) {
			return 0 === bs ? jl.c1 : 1 === bs ? Math.floor(.3 * jl.cw) : 2 === bs ? jo.bz(0).input.style.font : username
		}, this.wQ = function() {
			var k;
			username = jo.bz(0).input.value.trim(), yA(), "password" !== username && "account" !== username || (k = m.z(j().toString()), username = "account " + k, jo.bz(0).input.value = username)
		}, this.c7 = function(fL, fM) {
			c4.yC(), 1 === jl.pd(fL, fM, 1, 1) ? yD() || yE() || (a9(10), yA() ? (this.u0(), w(username), dy.bp()) : jn.vq(4214)) : 0 === jl.pd(fL, fM, 0, 1) && this.w5()
		}, this.w5 = function() {
			yD() || yE() || (a9(10), yG() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? jm.vh(Math.abs(username.charCodeAt(2) + 5)) : jm.vh(gJ.yH), yA() ? bw.bx() ? (this.u0(), w(username), dr.pi(), jm.bp()) : jn.vq(3228) : jn.vq(4214))
		}, this.yL = function() {
			return !cC.y3() && !cD.lF && !nh.lF
		}, this.cG = function() {
			var dV, gy;
			this.yL() && (cH.imageSmoothingEnabled = !0, dV = bw.lC("territorial.io"), gy = 1.1 * jl.c1 / dV.width, cH.setTransform(gy, 0, 0, gy, Math.floor((gF - gy * dV.width) / 2), jl.fM - gy * dV.height - .72 * jl.cw), cH.drawImage(dV, 0, 0), cH.setTransform(1, 0, 0, 1, 0, 0), jl.vE())
		}, this.xt = function() {
			return username
		}
	}

	function kL() {
		var yN, lv, bo, yO;

		function yR(bs, name, yS, l) {
			bo[bs] = name, lv[bs] = new Image, lv[bs].onload = function() {
				0 < yS && ! function(bs, yS) {
					var fL, fM, a4, dV = document.createElement("canvas"),
						c1 = lv[bs].width,
						cw = lv[bs].height,
						lA = (dV.width = c1, dV.height = cw, dV.getContext("2d", {
							alpha: !0
						})),
						u4 = (lA.drawImage(lv[bs], 0, 0), lA.getImageData(0, 0, c1, cw)),
						u5 = u4.data;
					if (yS < 3) {
						var yV = 2 === yS ? 160 : 600;
						for (fL = c1 - 1; 0 <= fL; fL--)
							for (fM = cw - 1; 0 <= fM; fM--) u5[a4 = 4 * (fL + fM * c1)] + u5[a4 + 1] + u5[a4 + 2] < yV && (u5[a4 + 3] = Math.floor(255 * (u5[a4] + u5[a4 + 1] + u5[a4 + 2]) / yV))
					} else if (3 === yS)
						for (fL = c1 - 1; 0 <= fL; fL--)
							for (fM = cw - 1; 0 <= fM; fM--) 0 === u5[a4 = 4 * (fL + fM * c1)] && 200 < u5[a4 + 1] && 0 === u5[a4 + 2] && (u5[a4 + 3] = 0);
					else if (4 === yS) ! function(u5, c1, cw) {
						var fL, fM, a4;
						for (fL = c1 - 1; 0 <= fL; fL--)
							for (fM = cw - 1; 0 <= fM; fM--) u5[1 + (a4 = 4 * (fL + fM * c1))] > u5[a4] + 20 && u5[1 + a4] > u5[2 + a4] + 20 && u5[a4] + u5[2] < 40 && (u5[3 + a4] = 255 - u5[1 + a4], u5[a4] = u5[1 + a4] = u5[2 + a4] = u5[a4])
					}(u5, c1, cw);
					else if (5 === yS) ! function(u5, c1, cw, id) {
						var fL, fM, a4;
						for (fL = c1 - 1; 0 <= fL; fL--)
							for (fM = cw - 1; 0 <= fM; fM--) 200 < u5[1 + (a4 = 4 * (fL + fM * c1))] && u5[1 + a4] - 20 > u5[a4] && u5[1 + a4] - 20 > u5[2 + a4] ? u5[a4] + u5[2 + a4] < 40 ? u5[3 + a4] = 0 : (u5[3 + a4] = u5[a4], u5[a4] = 255, u5[1 + a4] = 255, u5[2 + a4] = 255) : u5[a4] < 50 && u5[1 + a4] < 50 && u5[2 + a4] < 50 && (u5[a4] + u5[1 + a4] + u5[2 + a4] < 50 ? (u5[1 + a4] = 0 === id ? u5[1 + a4] : 160, u5[3 + a4] = 180) : (u5[1 + a4] = 0 === id ? u5[1 + a4] : 160, u5[3 + a4] = 180 + Math.floor(75 * (u5[a4] + u5[1 + a4] + u5[2 + a4] - 50) / 100)))
					}(u5, c1, cw, 0);
					else if (6 === yS)
						for (fL = c1 - 1; 0 <= fL; fL--)
							for (fM = cw - 1; 0 <= fM; fM--) u5[(a4 = 4 * (fL + fM * c1)) + 3] = Math.floor(255 * (u5[a4] + u5[a4 + 1] + u5[a4 + 2]) / 765), u5[a4] = u5[a4 + 1] = u5[a4 + 2] = 255;
					else if (7 === yS)
						for (fL = c1 - 1; 0 <= fL; fL--)
							for (fM = cw - 1; 0 <= fM; fM--) u5[(a4 = 4 * (fL + fM * c1)) + 1] > u5[a4 + 2] + 10 && (u5[a4 + 3] = u5[a4], u5[a4 + 1] = u5[a4 + 2]);
					lA.putImageData(u4, 0, 0), lv[bs] = dV
				}(bs, yS), yN--, bw.bx() && (uk.bv(), hy.l4(), a5.bp(), w8.v6([lv[8], lv[16], lv[7], lv[9], lv[10]], [!b, 0 === d, !0, !0, !0]), c4.c5 = !0, lv[7] = yO, lv[8] = yO, lv[9] = yO, lv[10] = yO)
			}, lv[bs].src = l
		}
		this.bp = function() {
			if (void 0 === lv) {
				yN = 22, lv = new Array(yN), bo = new Array(yN), (yO = document.createElement("canvas")).width = 1, yO.height = 1;
				for (var a4 = yN - 1; 0 <= a4; a4--) lv[a4] = yO;
				yR(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"), yR(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="), yR(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"), yR(3, "orders", 6, "data:image/png;base64,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"), yR(4, "crown", 4, "data:image/png;base64,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"), yR(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"), yR(6, "territorial.io", 6, "data:image/png;base64,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"), yR(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"), yR(8, "googleplay", 3, "data:image/png;base64,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"), yR(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="), yR(10, "insta", 3, "data:image/png;base64,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"), yR(11, "emojis", 4, "data:image/png;base64,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"), yR(12, "flags", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADhAAAABICAMAAACahq7PAAAAwFBMVEUAAABLBAEDIpUAL4YGL3nKAAMAM50AQRsAN6zQCCjcCQD+AAAQQHe2GAbrCx7NFh47PXHdEDqvIC8AUbTKIDPaIxxZS20DaUcNX6/tKTpWW1XKPkCZVSlFcE5fZqkNjEFlc4snkSDiWQoVljYqnmUGsdGlkqW7kXrZh4f7hjrOllKUoL1fsr1xrNyfp5vUoTT8lif0pwDBskQA/wDawCXPwHzkuLn/wQDuxa3/0ADM0tvM1sD+6ADz3d7o6OX///9Mo8dUAAAgAElEQVR42u2dDWOayPe29Umzbc2S5GerTyvUTe1WxjEFYQEVwvD9v9V/zoCKCgg4GtRzNyhvTRSYYS7OW+s/FAqFQqFQKBQKhULdpFp4CFAoFAqFQqFQKBQKgRCFQqFQKBQKhUKhUAiEKBQKhUKhUCgUCoVCIEShUCgUCoVCoVAoFAIhCoVCoVAoFAqFQqEQCFEoFAqFQqFQKBQKhUCIQqFQKBQKhUKhUCgEQhQKhUKhUCgUCoVCIRCiUCgUCoVC3c6IqpbwuKFQKARCFAqFQqEubxyPI3vU7oX0UEMtvJ5RKBQCIQ44sINGoVCod+2fIynC/hmBsBlA+CBFeD2jUAiE7wc8V6tfUtRqGlhe6+e5VoDH73Wb3wsfSF0WEOIN80Kv5ysDQjzvNwoGqNscPzfthtp6lKJW64sUtaR1rLKAsGkDl5kUyWup/2Qr70B8zVar1ZOi5g0Qn6SoeeD0/7KVd96/Z6t530tWv/pZihAIz9WvyroPypKsz1N8/DZ3zEPX896qj3WEQHho3HKXrWWO8vqNlipFrda3labirH+rJwTCc403ZI3DO1IkrR+Tdpz/kiIEQgTCKwNCWdfPtQLhHylCIDwAhI17YodAeJ7rh0nRyYFwhECIQIhA2BggRM+UawHC7+q79KuSgPB6By4IhGcBQmlCIEQgRCBEILx0IPwkRScGsNlsiUCIQIhA2BwgzLg4P6R0qbHHN2ghnFw0EN5LEQLhxQMhK3NY2f5x/v/ZyvsNuR09AiECIQIhAiECYQyEsvr5bPvg25uFQIhAeEVAqCEQIhDWAcLRIfgbWVWAUFWpqiIQyhMC4bFA6Dh1gHAwOIiEbDBAIEQgRCBEIEQgvDwgnM3Ws/O3t8k1AeEe+OUB4e4KBMJrAUKqSQLCqV9BCIQXD4STAzyoEjpSiVoGCFVCFoQuiE4IaR4QDofHAaGiKKbGX2BGETOFQPjivzw/j/3n5+fp9Pm574/hha/i6/vd0kIgPBYI7TcuuzIQGq1BZBQfUyMatAwEwvcBQmlqGBA2Tg0DwsY9aJMEhFer5gLhfJ66sVmPCIQygVD6A6AjgVDaB7oUINSJLCB8n5AZSUB4tToBEPY8Dm5kwifP691nw6CnepRalPL3NBRm9mPfFyNVe5zoj/ekR0njgFDXjwFCZWRqDrUdh3a7puOYtqNRpRgIgQXhZcyB8BmA8DkGwmcEwrMB4U/nTcj5WQ0IWavFjFYhEfLNsBcC4fsA4W8pah4Qyvpekf9FistE04CQ34hCPnnHHuemAeFXEiZdz/TDnqLIi9uPtz0sijVlkafyjfw38OuwLec47zW5Mocjo502Fwjf3nb8RnsIhPKA8E6KDgDhY7jW4wEg/DdbeVfyJFsHxi33ndVc5/79gJB4hqcHuu555PxAKOv+LgsIv0pR81wHpQOhpy4sy1rQuUtN01oQb58HPZXyMeVotByN+DtVvWIgVElP1e6pe98jj6PmAOHdnbAP0vmcDjfLFYFQ0RzNNk3a5RCo8CU+bzumWMg57wn/9eOXviBBDofAheMqDQyB8AggtN/WsisB4QBob8CMXCQ0DDYAZhwgECIQSgVCIwiCVwlAGEXTT1cIhCQkhE/q1QHh1wIkLALCFA7GA7IuAmEZIJzsuomO3paTawDCLPZ7KFx5uUC4+ZjvCoRtQMCO0lbabQWW4b2tdDrJprMCIfECnb8FVFW1YOEhEMoGwtHoMoDw258KQKh6M2tudToc9UajTmc2tyxCtnGQEA6DYm4ZxxLOJutdMvqxXm9CqUZVeIHXXq9UP2ZIUREQjsexx+hyOUwvVwJCzoOUmpqmrN1HOUVTvi7/vO9YBRP3UR+B8HxA+PNtSz/LAyGA3qDl+628QEIWb40GBkMgRCCUCYSB67oygJAxThbXB4RfQzV8ClVyaiCM7Q7nA8IN1GUgYT4QbuFgMiBT2mcBwoyjcyFAOIKx/fKNAyDXquDEiK/oIRAiENYBwi6YB++h4cVA2Gq1+ViRz3XPDoQLVV/AGwdCulCph0AoFwhHHIsuAwhZFSCks85oDpg3B+izJp2RuRMnqCY42LGWSVqZ0UTNB0KwmlGd/4tfbF3rVfZ0OGK8mhs5SB1HWAbHuj5OL1cBQiV2Ft2yBiqm49iOlmshfDGABMf92CrYh6X+GFYZ/ZewtBAI6wOh87YjpywQJg6jQH15BxRYEXxK2TYRIhAeD4SWdeMWQlsKEC5duEyH1waEnhqGfDotEIZEja/XLgnPBITbYLeDhHlAON39X3H7kuE2ehgICblYIEzfFUYbC+F8hkBYDgiNAQJh2lW03b5/6HRWRBjzYKcTrz83EGrwo7ocCF29bChhqzVdKR7yTDeqlFTmBoBwNLoIIBxOoz/lgZCYnPbmlupZI4uQGaDhfMdp1JuBAXE0s/jlCI6jYEj08oBwZOp/qG261KUm1fhEpy900gAg/Ku/XPaFp6j42SxXAULNMSGfjDANbtZ2TZs62bllVjGEsVVwbRpkAIQMYwjPAYQrb1HH5nIO+Y1uH+eVw2hREGEMjLtOowiExwPhcnnbQOi6tgQg5FgZP7n4cl1AGJIw5NMpYwhDkr5kC5FQHhDuw930EBBm/I9V++qeHgjDXi8sAYSy+h+5LqPzFQ6mE8vMMIawHBAazEAL4ZY6gILgLtpttR8e2q0uuI3Cms7ZYwiJRij1KJ80qhO9rMtobtPzK5WduAEgtKyLcBmdTvmpKw+E1JosZrMO7VijiTqbUWqZO0BIKKfB+WQ+55fjfD6aT0YdmucyOjFtW1N6HepyGZQ+9hSV86F5FBAGTAYQJpbB3OUcIFRS6pqm6UBqUWraKQBUqMP/dbPyjQqXUWEQjK2C47S1sDlASLxQuP6QqwPCJJmMo3+I+9kPulOYXGbrOGc4jDIPbAYq8Viq5gQTTqNb1IhAeDwQvr1dIhDOpUi4jMqxEK6v1GNCCRuYVCZUiXpSl1Fv96L1zgKEHwqQMAsIM/det6+j3UYPAiHp9cjFAiFEEIImtQHsfEDY6zULCH/4kSHDZfTl5WqAEMyCfFAMHMhhUEAhPJLpgLHw7EllNJ3ToGZqlAOhpiIQ3mhSGeYz/095l9HZxKTW0pqLaW5ROrJ2XUZVy5ot58kFOV/O5paa4zLKf5dti8Inugjpg6sS1piTI4CQUV0GEH4QP/nLWUCoUNMB2U4i2+Q4qFFnuXQ2YYR8nyWscRxqCgui0E4MYT+2CvbT1sI+Ka1TAmH6dk6uCwhj8+BST3e1+rLASJg+zvsOoyw1RlwjIeMtbi/TKALh0UA4e3ub3TIQGm7gHvrYr6WSyqwv6CECYXkgJPtXLTkPEOYj4T4Q5uy5aV/Huo0WAqFHWAjrQka8o4HQ998BCB9jIHxsOhCO+M9IvDUFCH+wiG2ZC+sCoetekctofDITEIzBMF5zf/4so+ZGCIQnAMKRdQlACL1qeSDsjEbz+RKAD0IELTAB7hck3OBggoQ5WUZHlHL8sx8fe7Mk3aiqPgIQTg4RYeZ5Z1xgIIxLg8cL9YCwYCA0LABCxXTWiplw6ZhgIYRlW1mlmYEF2M5fbHEA+JsdBxWCy+gUMotOVzGE05fkha9qRFIZdeXv43GFUaheDxCuzIPP233tc4GRMH2cjV2H0VBN9w3rA7d2GjUQCCUCISR7uGUgfA3cA0D4ahivxmt5IDwilLCBMYQkDPl0MiAkWZctORMQ5oHeLhDm2hLT7at7OiAMe19VWKd+3XYbrQWEX76U6X8Crn/5v/h99bKe/7fc9vV9cLQTQJjAV7OAEEhw8jjhP4eY8NBxzgPCEuONfR6MtgIIfU6EA6MGEJrm1QBh50EMisEm2I7BMF7q8A3nB0KNkyDVqcn/qQiEsoHQmk/qE+E5Ywh9Nq1Uh3DiLsE2KLS0aVYdQuEtKnYQczl1CO9VKMLAgZD09Efy+PideP97BCC0TZv2KgMhMwydGj5jC3DKM+jAMFg9IBwXVB7M9htdWQjtDRDGs/bSARMg/05LgXyKueQguHRiIEzJXgMhWAWnmxjC6cZa2AQgVFfhMitzYTkivAQgXJUefN7tbJ+d3OQyW8fZ33YYzXMhW2Ua9Su6jLJFyBAICzxGS/iMXgoQmk51C+GrW0h7r4YLXhhuUAEIo2j65VrKTjx5nAa9UwGhl33derntQlbsaFFk4A4QFkQbbrWvr+2TuYweXF0eCKefPk1LAmHAghyxoNz29X1wzmFwtB1C+LgcNQwIe7PHnvU4mz1avcdZrxlAyO92/s4Kw48G1YGwb1n9q8kyyseGGY1NrH4fIIyFQCgdCOdLToPz2fXVIeyo1FoZBUfWborRZP18bRQczTbzO0Covuhmj7o2WRBPDQjxyZhjBnXdnklftF51IBxoPufBUERpMUMb1APCD9RZmjn5Y/qc5+iHfCBU6I6J0AbfUMBePqspXZMv28vYOJjGQbObdhkF8+AzVKUXL30IH3x5gZcqWUb/kqLdG8/3eCzhpT1Iv18FEK5qTezz4IYI9ytQ7GQZHaQcRsP97iFMZRodVMwyykJd0zT9IBDKArlLA8IZnJ/Z+YBQ1vHJoDveYVBqVmJCEUPoGEYBD7oB2BANzoUlvxdLqOF9gVCRIgAw1ePTiYAwzBsRhKduX0W5Q6dpICxKPrMNhEe5jRYDobpaqx4LhOzTcPiJlQTCo7W+D77N+cCkN0/5jIJrglUeCJdSdOD4LBbRPHTdcA5zx/Tz0oAQvGEGe2v8Gi6j+mikX42FUFHuO/ttqMNHkqe2EP69rbGqEkJERXp45e/k7xLCshMlgXC2nM/567w2EMq6X8gah29Stljbcvf/qruzS5Ddb9CxFnKMs4m/YIuQqAbz+GVJXb679qKziv0PM4yBPmDM8I2WwcFwMChhIszkprv5Mjd9zHg5vytKKqNoUHl+K5BwRYYxBa45cLmhQYggTAMhEzGE41UMIVvHEFZJKnMaIPT2eJBD4hUA4c91rYlBVnc7WFeg+FlcmD5aO4Iydb97UNnOTqWBMGA61dJEWB8IGW8cVwiEItJz2SAgZGWc1rOA0JxTi/IfPlMJCG3DfC3gQcOIadMoCjVMfa+Fy+r7jcoDwo4UcSAEFCRPJypMT/JGBOSMQLiPhGkgLCpP8WG3fXVPBIRktZYcC4TDT77/aXhuT5kkuGXL7japEFJ4DiBc8FM8X7hg6XEX8ygKFw0AQt6XbEcQis5lUAMIzU7HvBYgVDqdbAshX39uIPQiYrosJF4UmDQMEQjlWghnnAlH1rLxQPgNyoX8qQKEo+1bbRYQ7tgLs4FwYbvQUwW26vlsOiaqZ/hT36PwC0PXdqsCITMGA52PdSGOi496NQ6ErBYQ9vV8n1G+qX+g7ITKmU+kjAHrIH9fAgXawlF0ueHApWNDDlJTVXazjIJB8HltFVwv8Zf3B8L4uW64f6NTLxsI7XV1KftF1NDZzWSW2qEYCFmuw+iW0yirCoSuy4kQZBwHhP4Qvt7QvzogjM/O4RvG9wOC56PfD+rg8eE0GIZhiQ4owz6oal81/qNWsBEetBAawevq978WJCNNvhd8bFcAofgC1UtQNBAIQ+/J855OYyEM84cE4Ynb14EdvIMJT7MHZKTu58kHQo//Tm+1ln+gVF6ZKkDox1XOPn2Kp00JtPPG0qeqTowmo0ZZCBdu5MZPk8w5n100wEIId600EA4M8VSS7buMHjwVVqdjHT5fGUCYfoad6nhSq88OhN1WN8sd8P6+C/llzgqEJApVjbKIhBHVVMJb63mBUFbd0Q9SJK/f2KSUubeWS6vpQJicNTaUCoReLCg2EX7NA0I3cBnjA137kZDxcPj3wg98gwOhDSMR2FjZQsiJUDOEaZAN6EC817IQJpUH/yq/bSuZELgo2XEcoRsDoLAMLpcbi6HwGjX3607wzmAcWwX7sVWwv7YW8lV9r7ROBITx6CaD/g5FEjYaCH+mStGvokYgGei0f/e8ayLcMRLmNlTWzRwestwL8YDLKAt0LRY7BginU2AUxqbTqwDC0doLISkQNl+vGNUCQsKikDcf9VggZGwRLrgOEWGWhZAmJ1qj8mIIXw3DXe0bGPn7Jd/LXohh5cZKOL14IORDnKeQkdMAIckHQnJ8+2LvAIS9wjKKVYEwVIkXqpwyw9XaMCI9NfRInGqrChCy/WEgO6ofI6TM98rP31Ity+g5XEbd+bqx89ni7yXrfloMhGzfP3TAh2yM/agKhAs+/hwt6gDhwQs6PH8dQlGMfl9K/nE+FRB6EYPKE1EYhZqqwvMaBEKZQDiHHJzLWcOBcPNo7Y9MIFzdjDpqh0/ZQMhcPuLgPMiBsEfGL8bfwdgdfw8JB0Lbjfj6oNp41RgYwIBUb2naQNcHgxZfcdgQIoubdk6gopimCBgUsYIikyjw4NJOeBCqbWTHjvb7zy/PWy9j/vLyAjNVTvwpgLCX4TCaAGEossReJBBurH+c9pgvnkD7PkfCIPD9laVwmdrJLgGEftUkE0VAyDimMk1rp0yE9YDQn7LYZZRN/auwEFpvObJqWQj50JDA+9FACDio83/hoiIQmhafqJA5n1tmhSyjhXUIjde1ubEo90zyvRbuInIdxvvodbGU6YUDYRSpwkR1EiBU84FQrdW+DLj7Jc8zRes38q6fA08GE1QlBx8g7jUVNazV3rMthEnsoLcBQi8dS1jJZXT6acpg4kpmjwHmEIAwPAzMmbc1y3prHBDythu6m57BDRcFNsJzAaG4pnesgVlVCfO/l5vIgebsrJYuHAjb3ZaSFUOotLvtMwNhCD7lKolYFMIbX0IglAeEI46CIgvnqNFAmD5n305hIYS6BF42EAYLDoSMcx+UnRj/PfYN3/VU75Hagb3gpBhU83RgBriMDlqtQUKDwkBosHNxU8ZJpJqtCVtgkkJmKeyCS+EtCiUIs4EQDII+hA8Kq+DL87O/sha+PxDGj1KzsC+MoAaFeoFAmDYPcta7myYl6e8+vPgwEkuQME2NKSNhbkOdbo0Ru32ubkEe+gMWQv45GFgIPV3XjwHCIYsAeH0/YsPrcBmdZPPgpJbL6P8SHgQ0PAoIWbjQTcsyaToxbCkg1My5ZWlad6zrrjs3tQoWwqAgOPDVeN0MEQ9bCHn/C6MJZ7HlbHzZQMg7KOKFX08BhGFRGElYo30ZopGv717s33wglBXrktFYSJ32ng2Eq9jBTVKZrb9RLYbwyyf/05e92Vr9mMdRkAOhd4gIc4BwBGHLTbMQsp2nSCZ7dwuhuHp3M8j4H6sAYeTO9sqbuZduIbxXOg/7QYRt5aGj3J8ZCCHi3VPDiL8RFR62HAuEw2kFXTsQzhJfUWvWZCD8tmU8KAuEi+1ni0UxhPdfwUI4yQTCOIQQgJD3qJphEPeF6V+/CiBknBQLgwizjg+YCA3IJDPQAA3FYh1uGh4Y+GRtzwRCzdGouTIQAhPG1SaWjgnxg46SA4Rr0+BLf8da+PLeLqPJ3TsjhJDlkWLTgdDZBgn3bivJ6NAPgsAYQjXc7f2cQ0A4TLuM9uMP38+zFxQDIe+iWbBwDU0b+MwwfOFCVgsI2RQcYcEAyvjsVQBhkk1mW8uaMYQkCuMZNQxD7wggDBcLCg8Eqb4IKwPhpKt1v/rG2DAqASF4W7zm0eBrsHEZ5UD4+9U9kFQmHk5sP5SrEErYQJdRNWTe02lcRmUDYcyDayAMgvcBwhpuo3lAGOY1yLAGEPp85Ofvzdbqx9QVEKr1LITLtwa6jLJFumtYsKiZQPixGhBGC3O7TZuLK3AZ7XTv94Hwvts5u8sojDIi4nks9PRQBhB+q1Z24upjCI/SeYDwz/Zzt5JAmOMfml6V1D4gvTBk/C0TCHVKGfg3gIVQJYbueS9/93tQh3BhC8cHGlbq5/0YCA0Bg0ayUCeGUNeLxzpZ2zPPu2I6pqkJBHSoQMKV1yh4k2o55UbGUdoqGFsLI7AWRi/vnlQmfoy6R4NefKbCy4sh/LmLEu5OP/tyNw0CNt0DwlUFityG+uV5jwcFEdYAQoO3ocClVGtrbSPyfebWBUJ/CikZ7u4gDUOxz+hBV7TSDyZOn1TGKukuehgIvSihQCIcaI6xEIKB0LJMvaqF0FjMJ5qmffXHZGzMF0YFC6Hr2tlACBXrDXf9q15d47ebU45QfK8FR8t4OAGuWfEXWAhr4fTT5QIhvxFxyvcuAAgFDwZGAoTMMN7JQljDbfQsQBgNN+lFh8WZRg89uCEcCD3+E5KwDhA+Ps6aBoQLd793yPcZPScQsiOBMIrMlHfayLyCGMJ2q91R2p220k6osN0Wix2+4fwWQsa6HuHNgXjCXIhAeGtAuD0k/CYPCNcxhJ2Ol5NlNNT+6KGIJORASJjvTnXDGPa+f6exZ7j2Z+xVchllgIFGixngLer7YmlQ3UI4pPM5LbARZm/PPu9dQYSmYy9pYiYENHS6mmPaWh4Q9qEIYcYLny4aCM9Sf6lCwygGwnSS0Sn4jVYGwi/rRBNk0466dYCQd84vPgsZM9qQNCmuZnByIPyfFJ0ly+ho+8yMeu8OhOFCjy2Ei6oWwrFujTSaAKGljyUA4atrO79/uysToQEGwrldCwi9p8/lhEBYFwgDFvwAt4R/jEAAIQuuAAi9/BbpvScQRiSEEbB4qweEj020EG4xodsUC2H041ggTLmNztzoCoDwofNw3364V+6VJLeMKED20L5/6JzdQhgJIPQQCBEIk65VHhCm7sR5QBjpLo2Tm9vEI1Pf9fXhy1RdEA6EizoWQsMQEBgNRABhBKZCViepzHC5LPQZzdyefd4Vk6OfqfA3RZAg2AqpAvlmtGyPUQBCv0CX7DLaSCDMcBlNlaN/XjuOMlbZZVTYA7fsg1zPdVxGeZPz+dVt+Atz4YchC2rHEFZxGb0gINxyG10eUXZCmssoCxcUYgj1qjGEmq7PvmoQQ8hlzHRdk+Ay6tpu8AqFCN25474afC+3EAjzXEY99fPnywXCS3AZ5exncBCMFRgBv3h+GD8M41/2I7hol1GS1yDrxBBKdBkFFoTg0si7HiBc7MYQLhoChMbRQBgtJnF7nhxK1nUhMYT3CpgI77vrzDLgQqp02nx0eO6kMikLIbqM3iYQTk9lISwDhDBKSYCQk854PNWHY18PPGrbkBi/cgwhWAXhVjoALgQ09PkaozoQjnV9XIRImdtzgJDzoOaALVDjMKjFdQkVDoPmMpsHAQhlnfimJZVpKBDuJZW5e0lAEGo/ro2E20BYJqkMbzV3fUL6d+l2dFcrqQwUwfD911fj1TDGUeDWBsIqSWUuCgjnm3MzPwIIpSWVgSyjkGS0cpZRy/Csidrt9vtj3nvNPWMmIanMqw1RhK+uy1+NgPMgh40c79KCpDIh+fz5goHwIpLKsHQTASthFInZf/kGdnYglJhUJvKe8u2D75hUJoIK3EQNw4Pf61KAUFS7sdIxhIsCN4WzAiE7HgjdglyGFwiESqvdeVA6UJAQbIR86j48dJSHTrulvAcQsrgolR+VB8J1Xpj4ucy0nhAIGxdDKDOpTAmX0WgBWUYht4ytesw3Qg/q0zOPxEAYuItqWUZ9yDJqDJhL4TGr6/oAhnWyjBZVIczdnnfeFUdkFAU0dBQBhGA0tE2q3F8iEB5TdqKpQLhddmJ59/ySpBl9eU45jk6dqmUnshtSvbITAWOvr4vFqwfZRgNWHwgrlJ24KCBM0/oxhemllZ1gTIzDqtchJNrc1LTu83O3q3XnGpFSdsIwfrvGb4gjBH9RsRhULDtRCQcbCYSXUHaCGcFGcVNPyqIGQQ4QXkbZCShFWOCR+n5lJyLmcSxl0dUAYbSbZtRsgMvox6ikifDQ+bJWDdq6CiBM/EYV4D8++LsHQlQ6hcf5dGUnAAJDLwrD0Icb2LgcEMoajyEQNqDsRHpQ+Oc0henNPCAUdQj5r0uA0PceCYFCtRwIheHQrQaEcDP1dWOx8H3+y/xFYLy8GOx83JQDhBrl/xxTobapmFCE0HZMExAxFwhlJfNoWmH65gLhlpFw8LKOINzYB59fqhemz2xHd/UK00MFX183qf7Kx+hnKkx/SUA4KhtCeLbC9PwQ8xsrY4ezWm2D3WS8ACDUOA5yzRdjTUZh+ldOiq984yv/ETO5BSryCtN7nz9fOBBeRGH6gEWsYj92YIdmFKaPHynk/4l3LUwfhmW+1yW5jC7CTc8QLhrgMvoxOUODI4EwmEA2GcgtMwmuAQg77XvxCilkFFGPHtLMgC9pu3PuwvQQREg8HUqweACHBIHwhoAwDhgc7lk0hlKAcLVNofQfqmWXnYjWQEg4BvLpcaR6ZNJLgDA4EAudMQIbMMiAwCArG1+kVB+wOllGZQLh/T1EDjompTaUmrZtm3IeNCFyOA8Iu1J0IiCMH3dnZI9RHy8YCNNGQhtIsB+bCF82uUbtLPNgFhDyq3DjM5rnpL3eqSQQRswNAhaEYbA2FNQEwsgX5YGGh4NrLwkI52kgnB8DhBwJeW/0/fvRQAgdEmMlrsP9LKMAhJraFUBoVCk74YD5L4cIYQIDoStMhcFrMRDG0d0smasSPNhYIHwKvSfPezoNEIYVPUYllnU5ERCSup8nFwj3AglTf6IKEPqxk9mnT/G08VY77XG+GCAE/1DTTPLKuKYJXqS1j88GRSpfhx/3fUYj9uPIpDJxNhnILVM9qUzqNHxPdTyp1ecGwo7SuVe47qHyoIggfFDa8ZpOtqHwtEDoER2Syuge1KBAILwlIPTjiME/bJsHp3+kACGJpf4QYz87GwiTQoSckQhkqoSGyamwZ9uHyxBm1yEE6wnHQTYwmM9nFgHzDx+f7MQxBTllKgLhvaJp1HRszdYUalKb06HZLTjvzQbCJM/ottPo96a4ytQHwpSRcJBmwecPd3dDzoODTPNgFhAardW9LyMm9xvb2aksEEIW+iDwAnfdlFhbyXMAAAzqSURBVOoCYRS7jB4+PpcEhKtsMsuDPqOt1k8pkncd7gKhGwOh0NytAoS24bzmV6Z/hW2xCdEIfh8qTB+lrIMVvUUlA+FMijgQAgqSJ/2fo5R33kk1A6FEUNkax0zXpwycVb0MIFxtYdOdAdB2O9F+1VMhEG4TYfrIVMwyChp+8v3iDKPx8YHMsnxK/9RYviiXUTDumy5nQT5FhZ5WZwPClYlwnwiNHSAsfK5jdSyRZ3TGZ4ofAGUAYUqPm4/5mMldZwLC+5j+hEkwrkAoqtXDuvszA6HwjfF1SCrjMU6H4ZmB0JKizM+T7uhKf54fUnQ5QJgQ4DdxC/ETDhxGciyEq6eT/xQBIaNjbeFy8nMpB0I1tjNNTE6ItquN9bByPyasg4MB1O4eiJr0Zca92XljCqoQjqsCoWKCp6gNqYU1R3NoXvxgAoShFJ0KCL+He0RIrgEINxUonHRl+j6Hwf7L3bOzVWsiFwjhWcSg5W89Y8lw0fZb/CLdNhIeBEIYy6X/R30gLHl8Lq3shLUuSTg6CxD+kaJdIDQHg7nFUVDXta5mzgcDKsVCmIQSunFAYT42/t7qoOPXGjgoEwhl9RtPT6rHJ+M0QBhWMxCeBgh3cZBN00C4vzUXCJ/sXycBwq/p9V+PA0L2aTj8VCImJIle2Q+uFK8hKbf9smIIOQPOOQlyLpxzOmRNAEJjHdiztXrgVwHCiWUlo8+RZU0uHwhjz9CO0um247oTitLuCttg7Et6RiB8gfhqxjw18giEOyAQ3hYQ/tmMV7992xgw2OEYwsiMD/0sOQUZ3Q1zEzlCdna/EapTXYQKBkEAdsKJabsL3pfB/6ZT4tV5sGXECUbhhZU7PvsM9IE6S7OfzUd9c+nQDxViCGHqUk3r2l0RUci/J+0WAqGsE9+Tor0boboaVaxw8FD04KUA4boCxRYRiswyKx50sgZAaWemiNMg0F4OEforbBR7RX5FINxSbkcvC3guCAjnGwocHfAZbToQ0vEYCp3qhqFTC5Z0GTGEiZEwELlG565RDggTl8PP1wGE5ImP7p+8EwHhCrx2lZ9ESpYKcBCGPxsgzN4jCwi1f36dBAhDyG0D+aghTpekk9bUAMIIHEZL9PPCV8lTxStRyY48Um67PCCUdf8quEht/mP/M7ftObzDYvXrWTYQflzf7fxNIOEPI/I/VgBCy8qev1ggXFsBO53YQtjp7G06ERDu+TgwTzdC1fd94jFdZaFX7jr8JkUIhIeAUFboRA7hfcsYr0JO+lwg3G+co901e72Nk9H/pHNWqrZpJkXtILzOtpMF07Rpr1a/ynxDuIwahl8bCP+6my9zC0+Ml/O7shZCZSUNyo0KC6ECWWa6sUvAZQLh4/o+Dsk3wqgcD14EEK78RldE+OFDwoROprfoHhAaLYOB7W/tD+pveY1+81P7DVpsy28UgfAIINxiwHmhz2jTgbCuIMto4Lq/i2UYQVAMjTvtK1Q/f74SIPSgLD0JTwWE2U6jJDoXEGbD3jYQFiBhun1pv36dBghX7Lw/1KwDhNGXL2X6eVkDqQsCwpgJHfFj172eZQPhj82AjA/PBj8GfIy270JafL5GuQsXCoSb5DLtOIaw3e4cSN5zKiD0KDWpSiDVqKqZJi2XVAqB8EqAEKwV2+NVUYRiWB4I91XqfpruHUfmxDRHYnYCPJhQoMlX07r9qi8MhL5f9rxnmQH1fJ9RvqlfFgg1G3LJKOAl6kAeGZtq1FS0rqhLr+UBIZGi0wHhqhphMgxqVOzEkUC4Si6z1NNdrb7MSCaTBYSsJShv4zTKx1upfDKrGyJjvtiN741AKAMIR2+z9OKsyGf0ioHQcINDQHhYW+0rJJ8/Xw0QqqFK+HQyIMwiQhKdCQjzQG8XCHP33LSvpx+/LgQIy9zkbxUIf8Z2QjFT4XreA788INxdcRgI00S4uWX++FgFCCucr8sCQuE3yr+70jmYzfVUQBhqpkpVjwNhqKp8AE4iBMJbAsJvOyaMP35UUIvwNED4yK+7SWwjpK5tu248C5hYv18VWUZZdAQQFlUizNmWed6huIRC75Wldq8tFQUYUDEd5d404/fTJpU5HRByJPRCYSIkDQumPxoI10ZCPSlG+EEvMA/uuowarUE0MKKN0yiYrKfDL1+G043Bmg34VoPvuJVYBoGwPhBOdgBwNLlJIAzy6xBWAsL1leo9fUYgrGBR8cr6i8oGwnxX0H0gzNl73b6OcBc9NxCW6+dvEwhjJvxZ9Xo+JRB+/LEH8P6PjwiEsboxEHbfDQgjQqmpifL0xDSpFiIQ3hQQJlXp/SkMS5LxalZixJMCISdC29YUSFbCidCdgB8plOwzj+pXy5oHo+KyE8Nh8fJBIDQdDXxDAQj5FCMgLAAQOs79BQNhU7OrHQ+EmwoUDtisncxaE7lJZTjkQZrb/SSi0bZjKezF4RGBUI7LaKXruWlA+CRFwkLo2hKAMEjyO3vq58/XBIQhCUM+BacDwhixNubBMDoLEBYli8kCwkwkXLUv7dcvBMLrAMI61/NJgfDjx+3EDszIKjtxo0AIFQihGuH7AWGociAEHmQeNVUvQiC8LSD8sheRzYZfzg2EnAj1P5wA6WTiunQ0MSmdjql5xn61IJ+oXrx8OIbQXAokdDQoTe+YYh1/Ey6jyqmzjCIQ1gPCdXKZVCn6ogHQVgvacxrdf1qRRBkygyEQIhDKBMJAjoVw6R7nLdrUGEI1DPmknxAI4bCp8fXaPRCCIw8Ii3KH5gBhBhLG7es4d1G5QCirLhkCYdnrOYv9HgpXVgXCNBJm4eBNA2FcmP79gJAToUkEEIYaJaWvQ1+KEAjfHwgTG2EZHjwdED4+qsQGH1Fb06Bku2nrWu+xAUA4NJdLc7ixDG6W/6qQVMZcmmAUhCwyprAJKksBhDkhhJeQVOb6gXBdgSKv1kR+HULhNJrONLr30CXJMDrYyYKLQIhAeCQQBq4rx2WUHY2DTQTCr6EaPp3UZTQZVgkd7n9kqQAH84FwDwlF+zrSXRSBEIHwEBBCpQmR5SG3MP3NAuFDt/vwrkDI+wJPBFuxsvZBmeVzEAjfHQi/DNN2DP/bl3cBwsceFSBoTG1BhL1eqX7VkKICC+FwuRymLYPr5dJAqAm3UQW8ROM5AYQihlDLtxAiEL47EG78Rou8RTML0w+STKO5PqNGkmF0ECEQIhDKtRAGwauUpDLHBA82t+xESAif9FMDYdn+RyIQ5uFgERDuICG0L+3Xr7MAYUaEPwLh7QBhoW4ZCMvopEAo0kJAkZUq1yEC4fUAYZJKRqRD/Fa43ymBkCPhZEKpplFzMhmV7VdlKZfxxlzAgVAWbLhZLg2EHPw05Z6ugVBxTLATmteQVObqgXCVXCY3mUweECZOo0V/ei/DKAIhAqEEIJQifj0fFzzY3KQyHgn5ZFwdEObjYDEQbiEhvw5//DoTEGYIgfAmYgibA4Sb4BoEwuOuQwTCawJCSDf658/w26GdTguEcQ2KSaV+9eRAuGcpLFK2hdCklEMgfxPwp4AllDNi1zS7QIZdBMLmAmFiJLQPD4D2cG8QGcV/29jJMIpAeE4glKWmAWHT1DQglOqi2SAgvFYhEN4mEEpSMRAe5K7Nf5clBMIzutBLAMKm6WxAWEpnAMKJ2WskEI51fVwPCDOyzMR5R5MIw2wglCUEwuOA8NcvxynzRHz3Nw8GB2uesMEgQiB8HyD8T5KaBoT/NUxNA0Jp36thA6D/rlQIhLcJhPIvpOOA8F0/xiUAoaSkMqfsn+sAYeP6w1sDwoltm40EwqKqhBWBkEMg1ZRiy7C0CwiB8FggLOcitUd7Zf48O90TKQRCBEIEQgRCBMIYCGXpJoBwT3lAWMJShEB4E0AoqewEAiEC4ZaobdudJgJhKVVwFVYUBMJrBsKan0faeUcgRCC8JiBsGDghEF4WEEr7PAiECIQIhAiECITnAcKeWSWIsHlA2LiBCwIhAuExQChL1wqEsoRAWAiEjfteCITnOc5MihAIEQgRCG8JCK+0X729GMJRr0oMobTjLAkIpX0eBEIEwiYAobTPc6VAKO34IBAiECIQnuw4IxAiECIQ3g4QXm1/eHNAWK1fRSA8lwXjWiULCJtmGb7Sz3O1T/7we93k90IgvDAgRF3m9XxtQIjn/TaBEHWb42e89HHAikKhUDfdPzcMCFGXeiE1BAhxvIFCoRAIUSgUCoXCATTqNoEQhUKhEAhRKBQKhUKhLuPJAh43FAqFQIhCoVAoFAqFQqFQKARCFAqFQqFQKBQKhUIhEKJQKBQKhUKhUCgUCoEQhUKhUCgUCoVCoVAIhCgUCoVCoVAoFAqFQiBEoVAoFAqFQqFQKBQCIQqFQqFQKBQKhUKhEAhRKBQKhUKhUCgUCoVAiEKhUCgUCoVCoVCoYv0fISarP50fnqYAAAAASUVORK5CYII="), yR(13, "bestTeam", 5, "data:image/png;base64,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"), yR(14, "bestPlayer", 5, "data:image/png;base64,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"), yR(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"), yR(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="), yR(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC"), yR(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="), yR(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="), yR(20, "members", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"), yR(21, "hourglass", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC")
			}
		}, this.bz = function(bs) {
			return lv[bs]
		}, this.lC = function(name) {
			for (var a4 = bo.length - 1; 0 <= a4; a4--)
				if (bo[a4] === name) return lv[a4];
			return yO
		}, this.bx = function() {
			return 0 === yN
		}
	}

	function kM() {
		var yc, yd, ye, yf, yg, yh, yi, yj, yk, yl, ym, yZ = [224, 224, 224],
			ya = [
				[172, 172, 172],
				[144, 0, 0],
				[0, 128, 0],
				[0, 0, 144],
				[128, 128, 0],
				[128, 0, 128],
				[0, 128, 128],
				[196, 196, 196],
				[0, 0, 0]
			],
			yb = [
				[4, 4, 4, 20],
				[4, 0, 0, 27],
				[0, 4, 0, 31],
				[0, 0, 4, 27],
				[4, 4, 0, 31],
				[4, 0, 4, 31],
				[0, 4, 4, 31],
				[4, 4, 4, 14],
				[4, 4, 4, 13]
			];

		function z9(bB, zB) {
			uJ[bB] = 0, uJ[bB + 1] = 0, uJ[bB + 2] = zB, uJ[bB + 3] = 0, zC(bB)
		}

		function zC(bB) {
			var fL;
			hC.hD || (fL = b5.gG(bB), bB = b5.cF(bB), hC.hD = fL >= h2.uI[0] && fL <= h2.uI[2] && bB >= h2.uI[1] && bB <= h2.uI[3])
		}
		this.bp = function(iC) {
			if (yc = new Uint8Array(b8), yd = new Uint8Array(b8), ye = new Uint8Array(b8), yf = new Uint8Array(b8), yg = new Uint8Array(b8), yh = new Uint8Array(b8), yi = new Uint8Array(b8), yj = new Uint8Array(b8), yk = new Uint8Array(b8), yl = new Uint8Array(b8), this.r9 = new Uint8Array(b8), (ym = new Int32Array(4))[0] = -4 * aZ, ym[1] = 4, ym[2] = -ym[0], ym[3] = -ym[1], dA)
				for (var qs, dV, a4 = b8 - 1; 0 <= a4; a4--) dV = dW.ir[dW.dX[a4]], qs = as((yb[dV][3] + 1) * ce.random(), ce.value(100)), yc[a4] = ya[dV][0] + qs * yb[dV][0], yd[a4] = ya[dV][1] + qs * yb[dV][1], ye[a4] = ya[dV][2] + qs * yb[dV][2];
			else dr.ds && dr.dt.yt ? function(hJ) {
				var a4;
				for (a4 = hQ - 1; 0 <= a4; a4--) yc[a4] = 4 * hJ[a4][0], yd[a4] = 4 * hJ[a4][1], ye[a4] = 4 * hJ[a4][2]
			}(dr.dt.yt) : (function() {
				for (var a4 = b8 - 1; cq <= a4; a4--) yc[a4] = 4 * as(64 * ce.random(), ce.value(100)), yd[a4] = 4 * as(64 * ce.random(), ce.value(100)), ye[a4] = 4 * as(64 * ce.random(), ce.value(100))
			}(), function(iC) {
				for (var a4 = cq - 1; 0 <= a4; a4--) yc[a4] = 4 * iC[a4].xu[0], yd[a4] = 4 * iC[a4].xu[1], ye[a4] = 4 * iC[a4].xu[2]
			}(iC));
			! function() {
				var a4, bD;
				for (a4 = b8 - 1; 0 <= a4; a4--) bD = as(yc[a4] + yd[a4] + ye[a4], 3), yc[a4] += z2(bD - yc[a4], 2), yd[a4] += z2(bD - yd[a4], 2), ye[a4] += z2(bD - ye[a4], 2), yc[a4] -= yc[a4] % 4, yd[a4] -= yd[a4] % 4, ye[a4] -= ye[a4] % 4
			}(),
			function() {
				for (var a4 = b8 - 1; 0 <= a4; a4--) yc[a4] += as(a4, 128), yd[a4] += as(a4 % 128, 32), ye[a4] += as(a4 % 32, 8), yf[a4] = a4 % 8
			}(), this.yz(),
				function() {
					for (var a4 = b8 - 1; 0 <= a4; a4--) yg[a4] = yc[a4] < 32 ? yc[a4] + 32 : yc[a4] - 32, yh[a4] = yd[a4] < 32 ? yd[a4] + 32 : yd[a4] - 32, yi[a4] = ye[a4] < 32 ? ye[a4] + 32 : ye[a4] - 32
				}(),
				function() {
					for (var a4 = b8 - 1; 0 <= a4; a4--) yj[a4] = 235 < yc[a4] ? yc[a4] - 20 : yc[a4] + 20, yk[a4] = 235 < yd[a4] ? yd[a4] - 20 : yd[a4] + 20, yl[a4] = 235 < ye[a4] ? ye[a4] - 20 : ye[a4] + 20
				}()
		}, this.yz = function() {
			for (var a4 = b8 - 1; 0 <= a4; a4--) this.r9[a4] = yc[a4] + yd[a4] + ye[a4] < 280 ? 0 : 1
		}, this.gG = function(bB) {
			return as(bB, 4) % aZ
		}, this.cF = function(bB) {
			return as(bB, 4 * aZ)
		}, this.f3 = function(fL, fM) {
			return Math.floor(4 * (fM * aZ + fL))
		}, this.hl = function(bB) {
			return this.z3(bB + ym[0]) || this.z3(bB + ym[1]) || this.z3(bB + ym[2]) || this.z3(bB + ym[3])
		}, this.hj = function(bB, player) {
			return this.z4(bB + ym[0], player) || this.z4(bB + ym[1], player) || this.z4(bB + ym[2], player) || this.z4(bB + ym[3], player)
		}, this.bE = function(bB) {
			return 208 <= uJ[bB + 3]
		}, this.hq = function(player, bB) {
			return this.bE(bB) && this.z5(player, bB)
		}, this.z5 = function(player, bB) {
			return player === this.bF(bB)
		}, this.z6 = function(bB) {
			return 208 <= uJ[bB + 3] && uJ[bB + 3] < 224
		}, this.cU = function(bB) {
			return 224 <= uJ[bB + 3] && uJ[bB + 3] < 248
		}, this.hk = function(bB) {
			for (var a4 = 3; 0 <= a4; a4--)
				if (this.lp(bB + ym[a4])) return !0;
			return !1
		}, this.z7 = function(bB) {
			return 192 <= uJ[bB + 3] && uJ[bB + 3] < 208
		}, this.z8 = function(bB, player) {
			return this.z7(bB) && player === this.bF(bB)
		}, this.b6 = function(bB) {
			return this.bE(bB) || this.bG(bB)
		}, this.lp = function(bB) {
			return 0 === uJ[bB + 3] && 2 === uJ[bB + 2] || this.z7(bB)
		}, this.bG = function(bB) {
			return 0 === uJ[bB + 3] && 1 === uJ[bB + 2]
		}, this.z3 = function(bB) {
			return 0 === uJ[bB + 3] && 3 === uJ[bB + 2]
		}, this.z4 = function(bB, player) {
			return this.bG(bB) || this.bE(bB) && player !== this.bF(bB)
		}, this.bF = function(bB) {
			return uJ[bB] % 4 * 128 + uJ[bB + 1] % 4 * 32 + uJ[bB + 2] % 4 * 8 + uJ[bB + 3] % 8
		}, this.hr = function(bB) {
			z9(bB, 1)
		}, this.zA = function(bB) {
			z9(bB, 2)
		}, this.hi = function(bB, player) {
			uJ[bB] = yc[player], uJ[bB + 1] = yd[player], uJ[bB + 2] = ye[player], uJ[bB + 3] = 208 + yf[player], zC(bB)
		}, this.b7 = function(bB, player) {
			uJ[bB] = yg[player], uJ[bB + 1] = yh[player], uJ[bB + 2] = yi[player], uJ[bB + 3] = 224 + yf[player], zC(bB)
		}, this.cW = function(bB, player) {
			uJ[bB] = yj[player], uJ[bB + 1] = yk[player], uJ[bB + 2] = yl[player], uJ[bB + 3] = 248 + yf[player], zC(bB)
		}, this.zD = function(bB, player) {
			uJ[bB] = yZ[0] + yc[player] % 4, uJ[bB + 1] = yZ[1] + yd[player] % 4, uJ[bB + 2] = yZ[2] + ye[player] % 4, uJ[bB + 3] = 192 + yf[player], zC(bB)
		}
	}

	function kN() {
		var bo, b1, b3, a0, zE;

		function zJ() {
			for (var zO = 0, a4 = 1; a4 < 5; a4++) zO += b1[a4] % 1024;
			return zO
		}

		function zI() {
			for (var a4 = 1; a4 < b3 - zE; a4++) b1[a4] = parseInt(b1[a4])
		}

		function zK() {
			b1[0] = "Player " + Math.floor(1e3 * Math.random()), b1[1] = r < s ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, b1[2] = 1, b1[3] = 1, b1[4] = r < s ? 0 : 1, b1[5] = 0, b1[6] = "000", b1[7] = "0", b1[8] = "0", b1[9] = "0", f.y()
		}

		function zH() {
			for (var a4 = b3 - zE - 1; 0 <= a4; a4--) b1[a4] = m.n(b1[a4]);
			b1[0] = m.ia(b1[0])
		}

		function zR(name, value, zS) {
			var zT = new Date,
				zS = (zT.setTime(zT.getTime() + Math.floor(31536e6 * zS)), name + "=" + value + ";expires=" + zT.toUTCString() + ";SameSite=Strict;Secure;path=/");
			document.cookie = zS
		}
		this.bp = function() {
			if (!(5 <= d || b)) {
				zE = 4, bo = [], b3 = 10;
				for (var a4 = a0 = 0; a4 < b3; a4++) bo.push("u" + a4);
				b1 = new Array(b3), ! function(zP) {
					for (var ca, bB, zQ = zP.split(";"), a4 = zQ.length - 1; 0 <= a4; a4--) {
						for (zQ[a4] = zQ[a4].trim(), ca = 2; 0 <= ca; ca--) zQ[a4] = zQ[a4].replace(" ", "");
						3 < zQ[a4].length && (ca = bo.indexOf(zQ[a4].substring(0, 2)), bB = zQ[a4].indexOf("="), 0 <= ca && 2 === bB ? b1[ca] = zQ[a4].substring(bB + 1, zQ[a4].length) : 0 < bB && zR(zQ[a4].substring(0, bB), "0", 0))
					}
				}(document.cookie), b1[9] || (b1[9] = "0"), (! function() {
					for (var a4 = b3 - 1; 0 <= a4; a4--)
						if (void 0 === b1[a4]) return;
					return 1
				}() || (a0 = 2, zH(), zI(), zJ() !== b1[5])) && zK()
			}
		}, this.y = function() {
			if (2 === a0) {
				b1[1] = 0 === b1[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : b1[1], b1[5] = zJ(), ! function() {
					for (var a4 = 1; a4 < b3 - zE; a4++) b1[a4] = b1[a4].toString()
				}(), ! function() {
					b1[0] = m.iZ(b1[0]);
					for (var a4 = b3 - zE - 1; 0 <= a4; a4--) b1[a4] = m.z(b1[a4])
				}();
				for (var a4 = b3 - 1; 0 <= a4; a4--) zR(bo[a4], b1[a4], 1);
				zH(), zI()
			}
		}, this.a0 = function() {
			return a0
		}, this.ng = function(ca) {
			a0 = ca, this.y()
		}, this.x = function(a4, value) {
			5 <= d || b || (b1[a4] = value)
		}, this.g = function(a4) {
			return 5 <= d || b ? 0 : b1[a4]
		}
	}

	function km() {
		var bs = 0,
			zU = new Uint16Array(32);

		function zW(lM) {
			var a4;
			for (bs -= 2, a4 = lM; a4 < bs; a4 += 2) zU[a4] = zU[a4 + 2], zU[a4 + 1] = zU[a4 + 3]
		}
		this.bp = function() {
			bs = 0
		}, this.dF = function() {
			var a4, cM, r3;
			if (0 !== bs)
				if (0 === fH[aw] || ae.zV(aw) === ae.af(aw)) bs = 0;
				else
					for (a4 = bs - 2; 0 <= a4; a4 -= 2)(cM = zU[a4]) < b8 && 0 === fH[cM] ? zW(a4) : (r3 = zU[a4 + 1], (b8 <= cM && lj(aw) || cM < b8 && lo(aw, cM)) && (dx ? fN(aw, cM, r3) : iv.lW(r3, cM === b8 ? aw : cM), zW(a4)))
		}, this.lZ = function(cM, r3) {
			! function(cM, r3) {
				var a4;
				for (a4 = 0; a4 < bs; a4 += 2)
					if (zU[a4] === cM) return zU[a4 + 1] += r3, zU[a4 + 1] = qz(zU[a4 + 1], 1e3), 1;
				return
			}(cM, r3) && 32 !== bs && (zU[bs] = cM, zU[bs + 1] = r3, bs += 2)
		}
	}

	function fn(player) {
		zY(player), zZ(player), za(player), au.av(player), eK.g4(player), ae.zb(player)
	}

	function zY(player) {
		hy.lH(player) && j0++;
		var zc = ae.zd(player);
		0 === zc.length ? player === aw && ze() : (zf(player, zc), zg(player, zc))
	}

	function ze() {
		b0.b1[17] += ax[aw] + ae.zh(aw), eX.show(!1, !1), eB.ta()
	}

	function zf(player, zc) {
		for (var a4 = zc.length - 1; 0 <= a4; a4--) ae.zi(zc[a4], player)
	}

	function zj(zc) {
		for (var bs = 0, a4 = zc.length - 1; 1 <= a4; a4--) bU[zc[a4]] > bU[zc[bs]] && (bs = a4);
		return bs
	}

	function zg(player, zc) {
		var a4, nD, zk = zc[zj(zc)];
		if (9 === dv && 1 === dW.dX[player] && ce.dP(8) && e2.zl(zk), player === aw) 2 !== fV[player] && e9.fm(zk, 1), ze();
		else {
			for (nD = !1, a4 = zc.length - 1; 0 <= a4; a4--)
				if (zc[a4] === aw) return nD = !0, void e9.fm(player, 0);
			!nD && player < cq && 2 !== fV[player] && e9.mo(0, player, zk)
		}
	}

	function za(player) {
		fH[player] = ax[player] = 0, b4[player] = null, bM[player] = null, bN[player] = null, bQ[player] = null, eI.fi(player)
	}

	function zZ(player) {
		for (var bB, fM, fL = cz[player]; fL >= d0[player]; fL--)
			for (fM = d2[player]; fM >= d3[player]; fM--) bB = 4 * (fM * aZ + fL), b5.hq(player, bB) && (b5.hr(bB), bU[player]--)
	}

	function ks() {
		var input;

		function zm(pX) {
			zo(pX.target.files)
		}

		function zo(files) {
			files && 0 < files.length && jy.zp(files[0])
		}

		function zv(pX) {
			var dV = new Image;
			dV.onload = zw, dV.src = pX.target.result
		}

		function zw(pX) {
			var pX = pX.target,
				c1 = pX.width,
				cw = pX.height;
			4096 < c1 || 4096 < cw || c1 < 10 || cw < 10 ? zx("Image w & h must be between 10 and 4096.") : (xJ = zy, xK = 0, aZ = c1, aa = cw, hw.width = aZ, hw.height = aa, pw.drawImage(pX, 0, 0), c1 = pw.getImageData(0, 0, aZ, aa), xX = c1.data)
		}

		function zz(pX) {
			pX.stopPropagation(), pX.preventDefault()
		}

		function a00() {
			return 0 === aJ.nt() || 2 === aJ.nt()
		}
		this.bp = function() {
			(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = zm
		}, this.xw = function() {
			input.click()
		}, this.zn = function(pX) {
			zm(pX)
		}, this.zp = function(zq) {
			var hJ = zq.name.split("."),
				zr = hJ[hJ.length - 1].toLowerCase();
			"json" === zr ? dr.zt(zq) : "gif" !== zr && "jpg" !== zr && "jpeg" !== zr && "png" !== zr || (dr.zu = hJ[0], (zr = new FileReader).onload = zv, zr.readAsDataURL(zq))
		}, this.pm = function(pX) {
			a00() && (zz(pX), pX.dataTransfer.dropEffect = "copy")
		}, this.pn = function(pX) {
			a00() && (zz(pX), zo(pX.dataTransfer.files))
		}
	}

	function kq() {
		this.a01 = null, this.bp = function() {
			this.a01 = 10 !== dv ? null : new Uint32Array(b8)
		}, this.dF = function() {
			10 === dv && this.a02()
		}, this.a02 = function() {
			for (var bB, target, tm, a01 = this.a01, iC = dZ, sL = ax, a4 = dY - 1; 0 <= a4; a4--) bB = iC[a4], cq <= bB || (target = Math.max(as(sL[bB], 4), 2048), tm = Math.max(ay.tn(bB), 100), a01[bB] += as(tm * target, 1e4), a01[bB] > target && (a01[bB] = target))
		}, this.u9 = function(player, cN) {
			return cN > this.a01[player] ? (cN = this.a01[player], this.a01[player] = 0) : this.a01[player] -= cN, cN
		}
	}

	function kt() {
		function zv(pX) {
			dr.ds = !0, dr.a08(JSON.parse(pX.target.result)), dr.lK()
		}

		function a0D(l, min, max, a0M) {
			return "string" != typeof l || l.length < min ? a0M : l.length > max ? l.substring(0, max) : l
		}

		function a0A(aH, min, max) {
			return aH = "number" == typeof aH ? Math.floor(aH) : min, Math.min(Math.max(aH, min), max)
		}

		function a0C(aH, a0O) {
			return "boolean" == typeof aH ? aH : a0O
		}

		function a0F(aH, b3, max, a0P) {
			var a4, hJ, qs;
			if (!Array.isArray(aH) || aH.length < 1) return null;
			for (hJ = new(8 === a0P ? Uint8Array : Uint16Array)(b3), qs = aH.length, a4 = 0; a4 < b3; a4++) hJ[a4] = a0A(aH[a4 % qs], 0, max);
			return hJ
		}
		this.ds = !1, this.dt = null, this.zu = "", this.pi = function() {
			this.ds = !1, this.dt = null
		}, this.xs = function() {
			this.dt.yt && this.dt.a03 && (this.dt.yt[0] = cC.mH[2].il.vS()), jK(this.dt.a04, 0, this.a05(), this.dt.jN, !1)
		}, this.a05 = function() {
			return [{
				name: this.dt.a06 ? ji.xt() : this.dt.a07[0],
				xu: [0, 0, 0],
				xv: 0
			}]
		}, this.zt = function(zq) {
			var zs = new FileReader;
			zs.onload = zv, zs.readAsText(zq)
		}, this.a08 = function(a09) {
			this.dt = {}, this.dt.xp = a0A(a09.numberPlayers, 1, 512), this.dt.a0B = a0A(a09.modeID, 0, 1), this.dt.xJ = a0A(a09.mapID, 0, zy - 1), this.dt.xO = a0A(a09.seedMap, 0, 16383), this.dt.a04 = a0A(a09.seedSpawn, 0, 16383), this.dt.jP = a0C(a09.selectableSpawn, !1), this.dt.a06 = a0C(a09.selectableName, !1), this.dt.a03 = a0C(a09.selectableColor, !1), this.zu = this.dt.zu = a0D(a09.mapName, 1, 25, "Custom Map"), this.dt.mV = function(aH) {
				var a4, b3;
				if (!Array.isArray(aH) || aH.length < 1) return [];
				for (b3 = aH.length, a4 = 0; a4 < b3; a4++) aH[a4] = a0D(aH[a4], 0, 100, "");
				return aH
			}(a09.description), this.dt.hL = a0F(a09.playerX, this.dt.xp, 4096, 16), this.dt.hW = a0F(a09.playerY, this.dt.xp, 4096, 16), this.dt.a0G = a0F(a09.playerTeam, this.dt.xp, 8, 8), this.dt.du = a0F(a09.playerStrength, this.dt.xp, 5, 8), this.dt.yt = function(aH, b3) {
				var a4, hJ, qs;
				if (!Array.isArray(aH) || aH.length < 1) return null;
				for (hJ = new Array(b3), qs = aH.length, a4 = 0; a4 < b3; a4++) hJ[a4] = a0F(aH[a4 % qs], 3, 63, 8);
				return hJ
			}(a09.playerColor, this.dt.xp), this.dt.a07 = function(aH, b3) {
				var a4, hJ, qs;
				if (!Array.isArray(aH) || aH.length < 1) return null;
				for (hJ = new Array(b3), qs = aH.length, a4 = 0; a4 < b3; a4++) hJ[a4] = a0D(aH[a4 % qs], 3, 26, "Bot");
				return hJ
			}(a09.playerName, this.dt.xp), this.dt.a0J = "string" == typeof a09.mapBase64 ? a09.mapBase64 : "", this.dt.a06 = this.dt.a06 || !this.dt.a07, this.dt.jN = 0 === this.dt.a0B ? 7 : 2 === this.dt.a0B ? 9 : 6, this.dt.hL = this.dt.hW ? this.dt.hL : null
		}, this.lK = function() {
			! function(l) {
				var lv, u4, a0L = "data:image/png;base64,";
				if (l.length <= a0L.length) return;
				dr.dt.xJ = 0, xY(dr.dt.xO = 0, 0), l.substring(0, a0L.length) !== a0L && (l = a0L + l);
				return (lv = new Image).onload = function() {
					aZ = lv.width, aa = lv.height, 4096 < aZ || 4096 < aa || aZ < 10 || aa < 10 ? (xY(0, 0), alert("Image w & h must be between 10 and 4096.")) : (xJ = zy, xK = 0, hw.width = aZ, hw.height = aa, pw.drawImage(lv, 0, 0), u4 = pw.getImageData(0, 0, aZ, aa), xX = u4.data)
				}, lv.src = l, dr.dt.a0J = "", 1
			}(this.dt.a0J) && xY(this.dt.xJ, this.dt.xO)
		}, this.a0Q = function() {
			for (var max = 0, b3 = this.dt.xp, a4 = 0; a4 < b3; a4++) this.dt.a0G[a4] > max && (max = this.dt.a0G[a4]);
			return Math.max(0, max - 1)
		}
	}

	function kO() {
		var a0R, a0S, cV, cM, cN, id;

		function a0T(player) {
			return player < cq ? a0R * player : a0R * cq + a0S * (player - cq)
		}
		this.bp = function() {
			a0R = cq < 16 ? 12 : 8, a0S = 4;
			var b3 = a0T(b8);
			cV = new Uint8Array(b8), cM = new Uint16Array(b3), cN = new Uint32Array(b3), id = new Uint16Array(b3)
		}, this.zb = function(player) {
			cV[player] = 0
		}, this.zi = function(player, fW) {
			var dc, fW = function(player, fW) {
				var a4, qs = a0T(player);
				for (a4 = cV[player] - 1; 0 <= a4; a4--)
					if (0 === id[qs + a4] && cM[qs + a4] === fW) return a4;
				return cV[player]
			}(player, fW);
			fW !== cV[player] && (dc = cN[a0T(player) + fW], this.b2(player, fW), this.cQ(player, dc, b8))
		}, this.co = function(player, fW) {
			for (var qs = a0T(player), a4 = cV[player] - 1; 0 <= a4; a4--)
				if (0 === id[qs + a4] && cM[qs + a4] === fW) return !0;
			return !1
		}, this.dD = function(player) {
			return player < cq ? cV[player] < a0R : cV[player] < a0S
		}, this.af = function(player) {
			return cV[player]
		}, this.al = function(player, a4) {
			return cM[a0T(player) + a4]
		}, this.ag = function(player, a4) {
			return id[a0T(player) + a4]
		}, this.fX = function(player, fu) {
			for (var qs = a0T(player), a4 = cV[player] - 1; 0 <= a4; a4--)
				if (id[qs + a4] === fu) return a4;
			return -1
		}, this.am = function(player, a4) {
			return cN[a0T(player) + a4]
		}, this.bi = function(player, fW) {
			for (var qs = a0T(player), a4 = cV[player] - 1; 0 <= a4; a4--)
				if (0 === id[qs + a4] && cM[qs + a4] === fW) return cN[qs + a4];
			return 0
		}, this.zh = function(player) {
			for (var qs = a0T(player), aH = 0, a4 = cV[player] - 1; 0 <= a4; a4--) aH += cN[qs + a4];
			return aH
		}, this.a0V = function(player) {
			for (var qs = a0T(player), aH = 0, a4 = cV[player] - 1; 0 <= a4; a4--) 0 === id[qs + a4] && (aH += cN[qs + a4]);
			return aH
		}, this.zV = function(player) {
			for (var qs = a0T(player), n0 = 0, a4 = cV[player] - 1; 0 <= a4; a4--) 0 < id[qs + a4] && n0++;
			return n0
		}, this.bh = function(player, fW, dc) {
			for (var qs = a0T(player), a4 = cV[player] - 1; 0 <= a4; a4--) 0 === id[qs + a4] && cM[qs + a4] === fW && (cN[qs + a4] = dc)
		}, this.bT = function(player, a4, dc) {
			cN[a0T(player) + a4] = dc
		}, this.cQ = function(player, dc, fW) {
			var a4, qs = a0T(player);
			for (fW === aw && b0.b1[player < cq ? 6 : 5]++, a4 = cV[player] - 1; 0 <= a4; a4--)
				if (0 === id[qs + a4] && cM[qs + a4] === fW) return cN[qs + a4] += dc, void(cN[qs + a4] = cN[qs + a4] > jE ? jE : cN[qs + a4]);
			cM[qs + cV[player]] = fW, cN[qs + cV[player]] = dc, id[qs + cV[player]] = 0, cV[player]++, player < cq && (fW === aw ? e9.fm(player, 5) : player === aw && eA.mq(fW))
		}, this.uA = function(player, dc, fu) {
			var qs = a0T(player);
			fH[player] = 2, cM[qs + cV[player]] = 0, cN[qs + cV[player]] = dc, id[qs + cV[player]] = fu, cV[player]++
		}, this.b2 = function(player, bs) {
			var ca, qs;
			if (0 !== cV[player])
				for (qs = a0T(player), cV[player]--, ca = bs; ca < cV[player]; ca++) cM[qs + ca] = cM[qs + ca + 1], cN[qs + ca] = cN[qs + ca + 1], id[qs + ca] = id[qs + ca + 1]
		}, this.zd = function(player) {
			for (var ca, qs, zc = [], a4 = dY - 1; 0 <= a4; a4--)
				for (qs = a0T(dZ[a4]), ca = cV[dZ[a4]] - 1; 0 <= ca; ca--)
					if (0 === id[qs + ca] && cM[qs + ca] === player) {
						zc.push(dZ[a4]);
						break
					} return zc
		}
	}

	function kP() {
		var a0W, a0X, a0Y, a0Z, a0a, a0b;
		this.bp = function() {
			a0Y = a0W = 10, a0Z = a0X = 10
		}, this.a0c = function() {
			a0b = 512, a0a = new Uint16Array(a0b);
			for (var a4 = 0; a4 < a0b; a4++) a0a[a4] = 100 + bl(as(25600 * a4, a0b - 4), 9)
		}, this.sU = function() {
			return a0Z
		}, this.dF = function() {
			if (--a0Y <= 0 && (a0Y = a0W, function() {
					var a4, a0h, t = ax[aw];
					for (dx && !dA && 0 !== fH[0] && 0 === dy.dz[0].bD && (ax[0] += as(bU[0], 6)), a4 = dY - 1; 0 <= a4; a4--) a0h = as(ay.tn(dZ[a4]) * ax[dZ[a4]], 1e4), ax[dZ[a4]] += a0h < 1 ? 1 : a0h, ay.az(dZ[a4]);
					b0.b1[9] += ax[aw] - t
				}(), --a0Z <= 0)) {
				a0Z = a0X;
				for (var t = ax[aw], a4 = dY - 1; 0 <= a4; a4--) ax[dZ[a4]] += bU[dZ[a4]], ay.az(dZ[a4]);
				b0.b1[8] += ax[aw] - t
			}
		}, this.tn = function(player) {
			var fD = a0a[as((a0b - 1) * bU[player], jD)],
				a0g = (c4.dU() < 1920 && (fD = fD < (a0g = as(100 * (13440 - 6 * c4.dU()), 1920)) ? a0g : fD), this.dJ(player));
			return ax[player] > a0g && (fD -= as(2 * fD * (ax[player] - a0g), a0g)), fD < 0 ? 0 : 700 < fD ? 700 : fD
		}, this.dJ = function(player) {
			player = 100 * bU[player];
			return jF < player ? jF : player
		}, this.az = function(player) {
			var aH = bU[player] * jB;
			ax[player] = ax[player] > jE ? jE : ax[player] > aH ? aH : ax[player]
		}
	}

	function kQ() {
		var a0j, a0k, a0l, a0m, a0n, a0o, a0p, a0q, a0r, a0s, a0t, a0u, a0v, a0w, a0x, a0y, a0z, a10, a12, a13, a14, a15, a16, a1C, a1D, a11 = null,
			a18 = 0,
			a19 = new Float32Array(4),
			a1A = 0,
			a1B = !0;

		function a1F() {
			a11.width = gF, a11.height = cB, (a12 = a11.getContext("2d", {
				alpha: !0
			})).textAlign = cJ, a12.textBaseline = cI, a12.imageSmoothingEnabled = !0
		}

		function a1G() {
			var a4, a1K;
			for (cH.font = bt + Math.floor(100 * a0t) + bu, a1K = 80 / Math.floor(cH.measureText(eQ.gM(jE)).width), cH.font = bt + 100 + bu, a4 = b8 - 1; 0 <= a4; a4--) a0q[a4] = 100 / Math.floor(cH.measureText(gN[a4]).width), a0p[a4] = Math.min(a1K, a0q[a4])
		}

		function a1L(a4) {
			return !gJ.gK.gL || ax[a4] < 1e6 ? 1 : ax[a4] < 1e7 ? a19[0] : a19[Math.min(Math.floor(Math.log10(ax[a4])) - 6, 3)]
		}

		function a1J(lA) {
			a10 = !1, a0z = 1, a0x = a0y = 0, a1B ? (lA.textAlign = cJ, lA.textBaseline = cI) : lA.clearRect(0, 0, gF, cB);
			for (var gA, gB, a4, by, gC, f9 = gD / g8, fA = gE / g8, fB = (gF + gD) / g8, fC = (cB + gE) / g8, a1P = 0 !== fH[aw] && hy.lH(aw), ca = dY - 1; 0 <= ca; ca--) a4 = dZ[ca], (by = a0w * g8 * a1L(a4) * a0p[a4] * a0n[a4]) < a0v || a0r <= by || a0l[a4] + a0n[a4] > f9 && a0l[a4] < fB && a0m[a4] + a0o[a4] > fA && a0m[a4] < fC && (gA = gF * (a0l[a4] + a0n[a4] / 2 - f9) / (fB - f9), gB = cB * (a0m[a4] + a0o[a4] / 2 - fA) / (fC - fA) - .1 * by, lA.font = p1[fV[a4]] + by + bu, lA.fillStyle = function(by, a4) {
				if (a0s <= by && by < a0r) return dW.a1c[b5.r9[a4]] + a1Y(by).toFixed(3) + ")";
				return dW.a1d[b5.r9[a4]]
			}(by, a4), gJ.gK.gL ? lA.fillText(eQ.gM(ax[a4]), gA, gB) : a1R(a4, by, gA, gB, lA), a10 = !0, 0 < a14[a4] ? function(gA, gB, by, a4, lA) {
				0 === sV[a4] ? a5.oQ(a13[a4]) ? (function(gA, gB, by, player, mk, lA) {
					for (var m4 = .9 * by / a5.c1, hP = gB - .5 * m4 * a5.c1 - .05 * by, ne = (lA.globalAlpha = a1Y(by), a1L(player) * (gJ.gK.gL ? a1A : a0q[player])), hO = gA - .5 * by / ne - .4 * by - m4 * a5.c1, cm = 0; cm < 2; cm++) lA.setTransform(m4, 0, 0, m4, hO, hP), lA.drawImage(a5.l8[mk], 0, 0), hO = gA + .5 * by / ne + .4 * by;
					lA.globalAlpha = 1, lA.setTransform(1, 0, 0, 1, 0, 0)
				}(gA, gB, by, a4, a13[a4], lA), a1T(gA, gB, by, 0, 0, lA)) : a5.oP(a13[a4]) ? (a1b(gA, gB, by, a13[a4], 0, lA), a1T(gA, gB, by, 0, 1, lA)) : (a1b(gA, gB, by, a13[a4], 1, lA), a1T(gA, gB, by, 1, 0, lA)) : a1b(gA, gB, by, a13[a4], 0, lA)
			}(gA, gB, by, a4, lA) : 0 === sV[a4] && a1T(gA, gB, by, 0, 0, lA), a1P && (0 < a14[a4 + b8] || 0 < a14[a4 + 2 * b8] || 0 < a14[a4 + 3 * b8] || 0 < a14[a4 + 4 * b8]) && function(gA, gB, by, a4, lA) {
				var dV, n0 = -1;
				for (dV = 4; 1 <= dV; dV--) 0 < a14[a4 + dV * b8] && n0++;
				for (dV = 1; dV < 5; dV++) 0 < a14[a4 + dV * b8] && (! function(gA, gB, by, dV, a4, a1W, t, lA) {
					var m4 = .8 * by / a5.c1,
						gA = gA - .5 * m4 * a5.c1 - .534 * a1W * by,
						a1W = gB + 1.4 * m4 * a5.c1;
					lA.setTransform(m4, 0, 0, m4, gA, a1W), lA.globalAlpha = a1Y(by), lA.drawImage(1 === dV ? a5.l8[a13[a4 + b8]] : 2 === dV && t < 255 ? hy.l6[2] : hy.l5[dV + 3], 0, 0), lA.globalAlpha = 1, lA.setTransform(1, 0, 0, 1, 0, 0)
				}(gA, gB, by, dV, a4, n0, a14[a4 + dV * b8], lA), n0 -= 2)
			}(gA, gB, by, a4, lA), (gC = a0t * by) < a0v || (lA.font = bt + gC + bu, gJ.gK.gL ? a1R(a4, gC, gA, gB + .78 * by, lA) : lA.fillText(eQ.gM(ax[a4]), gA, gB + .78 * by)))
		}

		function a1R(a4, by, fL, fM, lA) {
			lA.fillText(gN[a4], fL, fM), a4 < cq && 2 !== fV[a4] || (a4 = by / a0q[a4], lA.fillRect(fL - .5 * a4, fM + .35 * by, a4, Math.max(1, .1 * by)))
		}

		function a1T(gA, gB, by, a1W, a1X, lA) {
			var m4 = .95 * by / a16,
				gA = gA - .5 * m4 * a15 + .8 * a1W * by,
				a1W = gB - 1.76 * m4 * a16 - .82 * a1X * by;
			lA.setTransform(m4, 0, 0, m4, gA, a1W), lA.globalAlpha = a1Y(by), lA.drawImage(bw.bz(4), 0, 0), lA.globalAlpha = 1, lA.setTransform(1, 0, 0, 1, 0, 0)
		}

		function a1b(gA, gB, by, mk, a1W, lA) {
			var m4 = 1.2 * by / a5.c1,
				gA = gA - .5 * m4 * a5.c1 - .8 * a1W * by,
				a1W = gB - 1.5 * m4 * a5.c1;
			lA.setTransform(m4, 0, 0, m4, gA, a1W), lA.globalAlpha = a1Y(by), lA.drawImage(a5.l8[mk], 0, 0), lA.globalAlpha = 1, lA.setTransform(1, 0, 0, 1, 0, 0)
		}

		function a1Y(by) {
			return a0s <= by && by < a0r ? 1 - (by - a0s) / (a0r - a0s) : 1
		}

		function a1n(ne, c1) {
			return 1 + Math.floor(a0u * ne * c1)
		}

		function a1k(a4) {
			for (var left = a0l[a4], ca = a0l[a4] - d0[a4] - 1; 0 <= ca; ca--)
				if (!a1q(a4, --left, a0m[a4], a0o[a4])) {
					left++;
					break
				} var a1r = a0l[a4];
			for (ca = cz[a4] - a0l[a4] - a0n[a4]; 0 <= ca; ca--)
				if (!a1q(a4, ++a1r + a0n[a4] - 1, a0m[a4], a0o[a4])) {
					a1r--;
					break
				} var fL = Math.floor((left + a1r) / 2),
				top = a0m[a4];
			for (ca = a0m[a4] - d3[a4] - 1; 0 <= ca; ca--)
				if (!a1s(a4, fL, --top, a0n[a4])) {
					top++;
					break
				} var bottom = a0m[a4];
			for (ca = d2[a4] - a0m[a4] - a0o[a4]; 0 <= ca; ca--)
				if (!a1s(a4, fL, ++bottom + a0o[a4] - 1, a0n[a4])) {
					bottom--;
					break
				} var fM = Math.floor((top + bottom) / 2);
			a1h(a4, fL, fM, a0n[a4], a0o[a4]) && (a0l[a4] = fL, a0m[a4] = fM)
		}

		function a1h(player, fL, fM, c1, cw) {
			bD = Math.floor(.2 * c1);
			for (var bD, dV = fL + c1 - 1; fL <= dV; dV--)
				if (!a1q(player, dV, fM, cw)) return;
			for (dV = fM + cw - 1 - (bD = (bD = Math.floor(.25 * cw)) < 1 ? 1 : bD); fM + bD <= dV; dV--)
				if (!a1s(player, fL, dV, c1)) return;
			return 1
		}

		function a1q(player, fL, fM, cw) {
			return b5.hq(player, 4 * (fM * aZ + fL)) && b5.hq(player, 4 * ((fM + cw - 1) * aZ + fL))
		}

		function a1s(player, fL, fM, c1) {
			return b5.hq(player, 4 * (fM * aZ + fL)) && b5.hq(player, 4 * (fM * aZ + fL + c1 - 1))
		}
		this.bp = function() {
			if (a10 = !1, a0w = .88, a0t = .5, a0u = 1.8, a0r = Math.floor(.5 * pW), a0s = Math.floor(.2 * a0r), a0v = gJ.gK.a1E < 4 ? 1 + gJ.gK.a1E : 2 * (gJ.gK.a1E - 1), a0k = a0j = 0, a0l = new Uint16Array(b8), a0m = new Uint16Array(b8), a0n = new Uint16Array(b8), a0o = new Uint16Array(b8), a0p = new Float32Array(b8), a0q = new Float32Array(b8), a13 = new Uint8Array(2 * b8), a14 = new Uint8Array(5 * b8), a1C = new Uint8Array(b8), a1D = new Uint8Array(b8), a1B || (a11 = a11 || document.createElement("canvas"), a1F()), a0y = a0x = 0, a0z = 1, gJ.gK.gL) {
				var a4, a1K;
				for (a1G(), cH.font = bt + Math.floor(100) + bu, a1K = 100 / Math.floor(cH.measureText("900 000").width), a4 = b8 - 1; 0 <= a4; a4--) a0p[a4] = Math.min(a1K, 2 * a0q[a4]);
				a1A = a1K, a19[0] = 100 / (a1K * Math.floor(cH.measureText("5 000 000").width)), a19[1] = 100 / (a1K * Math.floor(cH.measureText("50 000 000").width)), a19[2] = 100 / (a1K * Math.floor(cH.measureText("500 000 000").width)), a19[3] = 100 / (a1K * Math.floor(cH.measureText("1 000 000 000").width))
			} else a1G();
			! function() {
				var a4;
				for (a4 = b8 - 1; 0 <= a4; a4--) bU[a4] < 12 ? (a0l[a4] = d0[a4] + 1, a0m[a4] = d3[a4] + 1, a0n[a4] = 1, a0o[a4] = 1) : (a0l[a4] = d0[a4], a0m[a4] = d3[a4] + 1, a0n[a4] = 4, a0o[a4] = 2);
				if (fd)
					for (a4 = 0; a4 < cq; a4++) a0n[a4] = 0;
				a15 = bw.bz(4).width, a16 = bw.bz(4).height
			}()
		}, this.uC = function(bB, nH) {
			nH > 18 * bU[bB] ? (a1D[bB] = 6, b5.r9[bB] = 2 + b5.r9[bB] % 2) : (a1C[bB] = 4, (b5.r9[bB] < 2 || 3 < b5.r9[bB]) && (b5.r9[bB] = 6 + b5.r9[bB] % 2))
		}, this.uD = function(bB, nH) {
			nH > 6 * bU[bB] ? (a1D[bB] = 6, b5.r9[bB] = 4 + b5.r9[bB] % 2) : (a1C[bB] = 4, (b5.r9[bB] < 4 || 5 < b5.r9[bB]) && (b5.r9[bB] = 8 + b5.r9[bB] % 2))
		}, this.m0 = function() {
			a1B || (a1F(), a1J(a12))
		}, this.j8 = function() {
			for (var a4 = 0; a4 < cq; a4++) cz[a4] - d0[a4] != 3 || d2[a4] - d3[a4] != 3 ? (a0l[a4] = d0[a4] + (cz[a4] !== d0[a4] ? 1 : 0), a0m[a4] = d3[a4], a0n[a4] = 1, a0o[a4] = 1) : (a0l[a4] = d0[a4], a0m[a4] = d3[a4] + 1, a0n[a4] = 4, a0o[a4] = 2)
		}, this.n9 = function(player, bs, a1M) {
			if (0 !== fH[player] && (4 === bs || 2 !== fV[player])) {
				if (player = player + bs * b8, 0 === bs) return a13[player] === a1M && 0 < a14[player] ? void(a14[player] = 0) : (a13[player] = a1M, void(a14[player] = a5.oQ(a1M) ? 255 : 64));
				1 === bs ? (a14[player] = 64, a13[player] = a1M) : a14[player] = a1M
			}
		}, this.cG = function() {
			a1B ? a1J(cH) : a10 && (1 !== a0z ? (cH.imageSmoothingEnabled = !0, cH.setTransform(a0z, 0, 0, a0z, 0, 0), cH.drawImage(a11, -a0x / a0z, -a0y / a0z), cH.setTransform(1, 0, 0, 1, 0, 0)) : (cH.imageSmoothingEnabled = !1, cH.drawImage(a11, -a0x, -a0y)))
		}, this.rf = function(gw, gx) {
			a0x += gw, a0y += gx
		}, this.lr = function(gw, gx) {
			eA.rf(gw, gx)
		}, this.zoom = function(bn, c8, c9) {
			a0z *= bn, a0x = (a0x + c8) * bn - c8, a0y = (a0y + c9) * bn - c9
		}, this.ec = function(nT) {
			return !a1B && (nT ? ++a18 % gJ.t2[gJ.gK.a1O] == 0 : c4.dU() % gJ.t2[gJ.gK.a1O] == 0) && (a18 = 0, a1J(a12), !0)
		}, this.gH = function(a4) {
			return a1L(a4) * a0p[a4]
		}, this.dF = function() {
			4 <= ++a0k && ! function() {
				var a4, ca, cm;
				for (a0k = 0, cm = 4; 1 <= cm; cm--)
					for (ca = dY - 1; 0 <= ca; ca--) a4 = dZ[ca] + cm * b8, 0 < a14[a4] && a14[a4] < 255 && a14[a4]--;
				if (2 !== ed)
					for (ca = dY - 1; 0 <= ca; ca--) a4 = dZ[ca], 0 < a14[a4] && a14[a4] < 255 && a14[a4]--
			}();
			for (var b3 = Math.floor(.1 * dY), a4 = a0j + (b3 = dY < (b3 = b3 < 8 ? 8 : b3) ? dY : b3) - 1; a0j <= a4; a4--) ! function(a4) {
				var ne = a1L(a4) * a0p[a4];
				0 < a0n[a4] && a1h(a4, a0l[a4], a0m[a4], a0n[a4], a0o[a4]) ? ! function(a4) {
					for (var fL, fM, c1, cw, e1 = !1, cm = 0; cm < 8; cm++) {
						if (c1 = a0n[a4] + 2, cw = a0o[a4] + 2, c1 > cz[a4] - d0[a4] + 1 || cw > d2[a4] - d3[a4] + 1) return e1;
						if (fL = a0l[a4] - 1, fM = a0m[a4] - 1, !a1h(a4, fL, fM, c1, cw)) return e1;
						a0l[a4] = fL, a0m[a4] = fM, a0n[a4] = c1, a0o[a4] = cw, e1 = !0
					}
					return e1
				}(a4) && function(a4, ne) {
					for (var fL, fM, c1, cw, e1 = !1, a1o = a0n[a4], gy = 1 + Math.floor(.02 * a1o), cm = 1; cm < 5; cm++) {
						if ((c1 = a1o + cm * gy) > cz[a4] - d0[a4] + 1) return e1;
						if ((cw = a1n(ne, c1)) > d2[a4] - d3[a4] + 1) return e1;
						fL = d0[a4] + Math.floor(Math.random() * (cz[a4] - d0[a4] + 2 - c1)), fM = d3[a4] + Math.floor(Math.random() * (d2[a4] - d3[a4] + 2 - cw)), a1h(a4, fL, fM, c1, cw) && (a0l[a4] = fL, a0m[a4] = fM, a0n[a4] = c1, a0o[a4] = cw, e1 = !0)
					}
					return e1
				}(a4, ne) && a1k(a4) : ! function(a4, ne) {
					var cw, fL = a0l[a4] + 1,
						fM = a0m[a4] + 1,
						c1 = a0n[a4] - 2;
					for (;;) {
						if (c1 < 1) {
							a0n[a4] = 0;
							break
						}
						if (cw = a1n(ne, c1), a1h(a4, fL, fM, c1, cw)) return a0l[a4] = fL, a0m[a4] = fM, a0n[a4] = c1, a0o[a4] = cw, 1;
						fL++, fM++, c1 -= 2
					}
					return
				}(a4, ne) ? function(a4, ne) {
					var fL, fM, c1, cw, cm, h4, cd = cz[a4] - d0[a4] + 1,
						a1p = Math.floor(.02 * cd);
					for (h4 = -6 * (a1p = a1p < 1 ? 1 : a1p), cm = cd; h4 <= cm; cm -= a1p)
						if (cw = a1n(ne, c1 = 0 < cm ? cm : 1), fL = d0[a4] + Math.floor(Math.random() * (cz[a4] - d0[a4] + 2 - c1)), fM = d3[a4] + Math.floor(Math.random() * (d2[a4] - d3[a4] + 2 - cw)), a1h(a4, fL, fM, c1, cw)) return a0l[a4] = fL, a0m[a4] = fM, a0n[a4] = c1, a0o[a4] = cw
				}(a4, ne) : a1k(a4)
			}(dZ[a4 % dY]);
			a0j = (a0j + b3) % dY
		}, this.eN = function() {
			var a4, bB, xV, a1g;
			if (c4.dU() % 4 == 1)
				for (a4 = dY - 1; 0 <= a4; a4--) bB = dZ[a4], b5.r9[bB] < 2 || ((xV = Math.max(a1C[bB] - 1, 0)) === (a1g = Math.max(a1D[bB] - 1, 0)) ? 0 === xV && (b5.r9[bB] %= 2) : 0 === a1g && b5.r9[bB] < 6 && (b5.r9[bB] += 4), a1C[bB] = xV, a1D[bB] = a1g)
		}, this.mq = function(player) {
			var a4 = player + 2 * b8,
				t = a14[a4];
			return 0 < t && (e9.nF(50, player), a14[a4] = 0, 255 === t)
		}, this.lm = function(player) {
			return 255 === a14[player + 2 * b8]
		}
	}

	function kR() {
		var bo, a1t;
		this.bp = function() {
			bo = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
			var a4, ca, nM = ["K ", " Y", "E ", " Z", " z", " s", "S "],
				nQ = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
			for (a1t = "Infected Territory;Epidemic Enclave;Plague Province;Dead Man's Dominion;Decayed District;Desolation Domain;Hazardous Haven;Outbreak Outpost;Radiant Ruins;Forsaken Fortress;Contagion Colony;Parasitic Peninsula;Necrotic Nation;Abandoned Area;Pandemic Plains;Toxic Territory;Viral Village;Forbidden Frontier;Decay District;Blight Borough;Cursed Colony;Pox Province;Spore Sector;Affliction Area;Outlawed Oasis;Disease Delta;Blighted Base;Ravaged Region;Infestation Island;Mutant Metropolis;Festered Field;Post-Apocalyptic Province;Ruin Republic;Dreaded Dominion;Eerie Empire;Lost Lands;Stricken State;Ghost Grounds;Biohazard Borough;Z-Virus Zone;Pestilent Peninsula;Isolation Island;Miasma Metropolis;Ghoulish Grounds;Rotting Republic;Sickness State;Ravaging Realm;Withered World;Pandemonium Park;Ruinous Region;Influenza Isle;Morbid Municipality;Forsaken Federation;Baneful Borough;Dreadful Dominion;Nightmare Nation;Virus Vanguard;Infected Imperium;Toxic Town;Morose Metropolis;Netherland Nation;Endemic Empire;Tainted Territory;Ghastly Garrison;Plague Plaza;Apocalypse Archipelago;Contaminated Capital;Decaying Domain;Cataclysmic City;Graveyard Grove;Ghostly Grounds;Lethal Lands;Virulent Village;Wretched Realm;Zombified Zone;Fearful Frontier;Deceased District;Dystopian Division;Haunted Haven;Epidemic Empire;Cursed District;Decay Zone;Terminal Territory;Dreaded District;Apocalypse Zone;Shadow Territory;Lost District;Doom Zone;Ghost Territory;Forsaken District;Plague Zone;Outcast Territory;Ruin District;Anarchy Zone;Desolation Territory;Wraith District;Specter Zone;Unholy Territory;Silent District;Nightfall Zone;Fearful Territory;Bleak District;Savage Zone;Fallout Territory;Hollow District;Phantom Zone;Solitude Territory;Ravaged District;Nightmare Zone;Oblivion Territory;Grim District;Shrouded Zone;Nether Territory;Feral District;Haunted Zone;Despair Territory;Radiation Ravine;Toxic Terrain;Fallout Field;Contaminated Colony;Nuclear Nook;Isotope Isle;Gamma Grounds;Radon Region;Atomized Area;X-Ray Expanse;Plutonium Peninsula;Fission Flats;Decayed District;Half-Life Haven;Alpha Particles Acres;Radium Range;Strontium Stretch;Neutron Nation;Depleted Uranium Domain;Chernobyl Zone;Fallout Foothills;Rad Zone;Irradiated Island;Contamination Corridor;Meltdown Metropolis;Geiger Grove;Isotope Isthmus;Atomic Archipelago;Radioactive Realm;Uranium Uplands;Proton Province;Gamma Gorge;Mutagen Marshes;Neutrino Netherland;Ionizing Inlet;Radiation Ravaged Range;Quantum Quagmire;Particle Peninsula;Electron Enclave".split(";"), a4 = bo.length - 1; 0 <= a4; a4--)
				for (ca = nM.length - 1; 0 <= ca; ca--) bo[a4] = bo[a4].replace(nM[ca], nQ[ca])
		}, this.jX = function() {
			var a4;
			if (dr.ds && dr.dt.a07)
				for (a4 = cq; a4 < b8; a4++) gN[a4] = dr.dt.a07[a4 % hQ];
			else(9 === dv ? function() {
				var a4, fD = ce.random(),
					b3 = bo.length,
					qs = cq + e2.e3;
				for (a4 = qs - 1; cq <= a4; a4--) gN[a4] = bo[(a4 + fD) % b3];
				for (b3 = a1t.length, a4 = qs; a4 < b8; a4++) gN[a4] = a1t[a4 % b3]
			} : dx ? function() {
				var a4, fD = ce.random();
				for (a4 = cq; a4 < b8; a4++) gN[a4] = bo[(a4 + fD) % b8]
			} : function() {
				var a4, b3 = bo.length,
					fD = ce.random();
				for (a4 = cq; a4 < b8; a4++) gN[a4] = bo[(a4 + fD) % b3]
			})()
		}, this.jY = function() {
			var a4, b3, qs, fD;
			if (!dx) {
				for (nY = new Array(cq), b3 = cq, a4 = 0; a4 < b3; a4++) nY[a4] = gN[a4];
				if (gJ.gK.nX) {
					for (qs = bo.length, fD = ce.a1y(), a4 = 0; a4 < b3; a4++) gN[a4] = bo[(a4 + fD) % qs];
					gN[aw] = nY[aw]
				}
			}
		}
	}

	function kr() {
		this.a1z = [], this.a20 = [], this.bp = function() {
			this.a1z = [], this.a20 = []
		}, this.dF = function() {
			0 <= this.a1z.length && this.a21(this.a1z), 0 <= this.a20.length && this.a21(this.a20)
		}, this.a21 = function(hJ) {
			for (var cm = -1, a4 = hJ.length - 1; 0 <= a4; a4--)
				if (hJ[a4].gg--, hJ[a4].gg <= 0) {
					cm = a4;
					break
				} for (a4 = cm; 0 <= a4; a4--) hJ.shift()
		}, this.lR = function(id, iC, a22) {
			return this.a23(this.a1z, id, iC, a22)
		}, this.a24 = function(id, iC, a22) {
			return this.a23(this.a20, id, iC, a22)
		}, this.a23 = function(hJ, id, iC, a22) {
			return ! function(hJ, id, iC) {
				var a4, a1N;
				for (a4 = iC.length - 1; 0 <= a4; a4--)
					for (a1N = hJ.length - 1; 0 <= a1N; a1N--)
						if (hJ[a1N].player === iC[a4] && id === hJ[a1N].id) return 1;
				return
			}(hJ, id, iC) && (a22 && function(hJ, id, iC) {
				var a4;
				for (a4 = iC.length - 1; 0 <= a4; a4--) hJ.push({
					player: iC[a4],
					id: id,
					gg: 384
				})
			}(hJ, id, iC), !0)
		}
	}

	function jS(iC) {
		var a4;
		for (gN = new Array(b8), nY = gN, fH = new Uint8Array(b8), d0 = new Uint16Array(b8), d3 = new Uint16Array(b8), cz = new Uint16Array(b8), d2 = new Uint16Array(b8), bU = new Uint32Array(b8), he = new Uint32Array(b8), ax = new Uint32Array(b8), b4 = new Array(b8), bM = new Array(b8), bN = new Array(b8), bQ = new Array(b8), fV = new Uint8Array(b8), a4 = iC.length - 1; 0 <= a4; a4--) gN[a4] = iC[a4].name, fV[a4] = iC[a4].xv
	}

	function kp() {
		this.nm = 0, this.iC = null, this.bp = function() {
			this.nm = 0, this.iC = []
		}, this.fp = function(player) {
			this.iC.push(player), j0++, fV[player] = 2, player === aw && (eX.show(!1, !1), eB.ta()), eA.mq(player)
		}, this.fi = function(player) {
			var a4, iC;
			if (2 !== fV[player])
				for (a4 = (iC = this.iC).length - 1; 0 <= a4; a4--)
					if (iC[a4] === player) return void iC.splice(a4, 1)
		}, this.dF = function() {
			dx || (30 === this.nm && 2140 <= c4.dU() && this.a27(), this.nm = (this.nm + 1) % 60)
		}, this.a27 = function() {
			for (var iC = this.iC, a4 = iC.length - 1; 0 <= a4; a4--) ! function(player, r3) {
				!ae.dD(player) || (r3 = Math.max(Math.min(100, ax[player]), as(r3 * ax[player], 100))) < 100 || (0 === bM[player].length ? !dE.dF(player, 2) && dA && dI(player, r3, 0, 0) : (dA ? dT : db)(player, r3))
			}(iC[a4], 12)
		}
	}

	function kl() {
		var a29, a2B;
		this.wd = 5, this.we = this.wd - 1, this.vk = this.wd + this.we, this.vj = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a2A = null;

		function a2J(a4) {
			return a2B[a4].a2E && a29[a4].a2J()
		}

		function a2L(vn) {
			a2B[vn].gg = c4.gg, a2B[vn].a2F = !1
		}
		this.jg = 0, this.wJ = 0, this.bp = function() {
			this.a2A = new Array(this.wd);
			this.a2A[0] = "territorial.io";
			var a4, a2D = ce.a1y(0);
			for (ce.jR(0), a4 = 1; a4 < this.wd; a4++) this.a2A[a4] = m.id() + ".territorial.io";
			for (ce.jR(a2D), a29 = new Array(this.vk), a2B = new Array(this.vk), a4 = this.vk - 1; 0 <= a4; a4--) a2B[a4] = {
				a2E: !1,
				gg: 0,
				a2F: !1
			}
		}, this.n7 = function() {
			return this.wJ < this.wd ? this.wJ : this.wJ - this.we
		}, this.dF = function() {
			for (var a4 = this.vk - 1; 0 <= a4; a4--) this.vf(a4) && c4.gg > a2B[a4].gg + 15e3 && iv.a2G(a4, a2B[a4].a2F)
		}, this.rx = function(vn, a2H) {
			if (a2B[vn].a2E) {
				if (a29[vn].a2J()) return a29[vn].a2K(a2H), a29[vn].vf();
				a29[vn].lI()
			}
			return this.a2I(vn, a2H), !1
		}, this.a2I = function(vn, a2H) {
			a2B[vn].a2E = !0, a2L(vn), a29[vn] = new a2M, a29[vn].bp(vn, a2H)
		}, this.a2K = function(vn, a2H) {
			a2J(vn) && a29[vn].a2K(a2H)
		}, this.a2N = function(vn, a2H) {
			0 === a2H ? jk.rz() : a2H < 3 ? iv.ub(vn, a2H - 1) : 3 === a2H ? iv.xr(vn) : 4 === a2H ? jm.rz(vn) : 5 === a2H ? vn === this.jg && iv.a2O() : 6 === a2H ? iv.a2P(vn) : 7 === a2H && iv.yJ(vn)
		}, this.vf = function(a4) {
			return a2B[a4].a2E && a29[a4].vf()
		}, this.send = function(vn, wV) {
			a2L(vn), a29[vn].send(wV)
		}, this.pY = function(vn) {
			a2B[vn].a2F = !0
		}, this.close = function(vn, a2Q) {
			a2J(vn) && a29[vn].close(a2Q)
		}, this.a2R = function(vn, a2Q) {
			jn.vq(a2Q), a2J(vn) && a29[vn].close(a2Q)
		}, this.vs = function(a2Q) {
			for (var a4 = this.vk - 1; 0 <= a4; a4--) this.close(a4, a2Q)
		}, this.a2S = function(vn, a2Q) {
			for (var a4 = this.vk - 1; 0 <= a4; a4--) a4 !== vn && this.close(a4, a2Q)
		}, this.a2T = function(vn, pX) {
			a29[vn].lI(), jn.bp(vn, pX.code)
		}
	}

	function jZ() {
		for (dY = 0, a4 = b8 - 1; 0 <= a4; a4--) 0 !== fH[a4] && dY++;
		dZ = new Uint16Array(dY);
		for (var b3 = 0, a4 = 0; a4 < b8; a4++) 0 !== fH[a4] && (dZ[b3++] = a4)
	}

	function eL() {
		a2U(), fo()
	}

	function fo() {
		for (var a4 = dY - 1; 0 <= a4; a4--) 0 === fH[dZ[a4]] && a2V(a4)
	}

	function a2V(a4) {
		dY--;
		for (var ca = a4; ca < dY; ca++) dZ[ca] = dZ[ca + 1]
	}

	function a2U() {
		for (var cc, a4 = dY - 1; 0 <= a4; a4--) bU[dZ[a4]] <= as(he[dZ[a4]], 4) ? bU[dZ[a4]] <= 1e3 && (2 !== fH[dZ[a4]] || 0 === bU[dZ[a4]]) && fn(dZ[a4]) : bU[dZ[a4]] >= he[dZ[a4]] ? he[dZ[a4]] = bU[dZ[a4]] : (cc = as(he[dZ[a4]] - bU[dZ[a4]], 1e3), he[dZ[a4]] -= cc < 1 ? 1 : cc)
	}

	function ix() {
		for (var zO = 0, a4 = dY - 1; 0 <= a4; a4--) zO += ax[dZ[a4]];
		return zO % 4096
	}
	var a2a, a2b, i, h2, tb, hC, a5, b0, hz, w0, c4, dW, eU, cD, fj, w8, nh, uk, a2c, a2d, aZ, aa, hw, pw, xW, xX, xJ, xK, w3, a2Z = !1,
		a2e = 0,
		a2f = "",
		a2g = !1;

	function a2h() {
		a2d = 2, a2X = 2515, a2W = "1.85.1   8 Aug 2023", jz(), d8(), a2g = !0, e = "undefined" != typeof Android ? Android : null, 12 <= (d = e ? e.getVersion() : 0) && e.prepareAd("6685097465"), b = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (b = !0, window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 5907904081"), c = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
			username: "iOS User " + Math.floor(1e3 * Math.random()),
			id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
			zoom: !0,
			sound: !0,
			emojis: "0",
			colors: "0",
			password: "0",
			freeSpawn: !1,
			unlimitedTime: !1,
			alliances: !1
		}), e || b || (p7 += "_browser"), a2c = (new Date).getTime() % 1024, a2a = a2i(), f.bp(), w8 = new v4, gJ.bp(), ju.bp(), h(), p(), aD(), document.addEventListener ? document.addEventListener("contextmenu", function(pX) {
			pX.preventDefault()
		}, !1) : document.attachEvent("oncontextmenu", function() {
			window.event.returnValue = !1
		}), a2j(), document.addEventListener("keyup", a2k), document.addEventListener("keydown", a2l), document.addEventListener("visibilitychange", a2m), window.addEventListener("error", a2n, !0), tb = 10, xZ = new a2o, h2 = new a2p, hC = new uE, a5 = new nv, b0 = new a2q, hz = new a2r, w0 = new nb, (c4 = new a2s).jh(), c4.bp(), dW = new a2t, eU = new a2u, (uk = new bm).bp(), (cD = new uK).bp(), fj = new ig, nh = new ut, pG(), ce.bp(), ay.a0c(), jq.bp(), jU.bp(), aJ.bp(), jy.bp(), eD.bp(), jk.bp(), jW.bp(), pJ(), bw.bp(), c4.c5 = !0, setTimeout(function() {
			xY(2, 14071)
		}, 0)
	}

	function aI() {
		a2g || a2h()
	}

	function a2i() {
		try {
			return window.self !== window.top
		} catch (pX) {
			return !0
		}
	}

	function a2n(pX) {
		var l;
		a2Z || (a2Z = !0, pX.message ? (a2e = pX.lineno, a2f = pX.message, eD.rx(0, 6) && iv.a2P(0), zx(l = "[A_ERROR " + a2e + "][" + a2f + "]")) : (l = "[B_ERROR " + pX.type + "][" + (pX.srcElement || pX.target) + "]", console.log(l)))
	}

	function zx(l) {
		e ? e.showToast(l) : alert(l)
	}

	function a2l(pX) {
		"ArrowLeft" === pX.key ? gr.wR(3) : "ArrowUp" === pX.key ? gr.wR(0) : "ArrowRight" === pX.key ? gr.wR(1) : "ArrowDown" === pX.key ? gr.wR(2) : "a" === pX.key ? eS.rH(31 / 32) : "d" === pX.key ? eS.rH(32 / 31) : "s" === pX.key ? eS.rH(7 / 8) : "w" === pX.key ? eS.rH(8 / 7) : "1" === pX.key ? eS.rH(5 / 6) : "2" === pX.key ? eS.rH(1.2) : "c" === pX.key && 0 !== ed && hz.a2v()
	}

	function a2m() {
		"hidden" === document.visibilityState ? c4.a2w() : c4.yC()
	}

	function a2k(pX) {
		c4.gg < 400 || (8 !== aJ.nt() && aJ.v3(pX) ? c4.c5 = !0 : "Escape" === pX.key ? aJ.aK() : "ArrowLeft" === pX.key ? gr.a2x(3) : "ArrowUp" === pX.key ? gr.a2x(0) : "ArrowRight" === pX.key ? gr.a2x(1) : "ArrowDown" === pX.key ? gr.a2x(2) : "h" === pX.key && 1 <= ed && (gm = !gm, c4.c5 = !0))
	}

	function a2j() {
		a2Y = window.location.hostname, a2b = 0 <= a2Y.toLowerCase().indexOf("territorial.io")
	}

	function kS() {
		var a2y;
		this.bp = function() {
			a2y = [], 9 === dv && this.a2z()
		}, this.a2z = function() {
			var a4, a30, a31 = [8, 45, 55, 75, 137, 170, 313],
				a32 = [23, 300];
			for (this.e3 = 0, this.e4 = [0, 0, 0, 0, 0, 0], cq <= a31[0] ? (this.e3 = a32[0] - cq, this.e4[1] = a32[1] - as(a32[1] * cq, a31[0]), this.e4[0] = 512 - this.e4[1] - a32[0]) : cq <= a31[1] ? (this.e3 = a32[0] - a31[0] - as((a32[0] - a31[0]) * (cq - a31[0]), a31[1] - a31[0]), this.e4[0] = 512 - this.e3 - cq) : cq <= a31[2] ? (this.e4[0] = 512 - a31[1] - as((512 - a31[1]) * (cq - a31[1]), a31[2] - a31[1]), this.e4[1] = 512 - cq - this.e4[0]) : cq <= a31[3] ? (this.e4[1] = 512 - a31[2] - as((512 - a31[2]) * (cq - a31[2]), a31[3] - a31[2]), this.e4[2] = 512 - cq - this.e4[1]) : cq <= a31[4] ? (this.e4[2] = 512 - a31[3] - as((512 - a31[3]) * (cq - a31[3]), a31[4] - a31[3]), this.e4[3] = 512 - cq - this.e4[2]) : cq <= a31[5] ? (this.e4[3] = 512 - a31[4] - as((512 - a31[4]) * (cq - a31[4]), a31[5] - a31[4]), this.e4[4] = 512 - cq - this.e4[3]) : cq <= a31[6] ? (this.e4[4] = 512 - a31[5] - as((512 - a31[5]) * (cq - a31[5]), a31[6] - a31[5]), this.e4[5] = 512 - cq - this.e4[4]) : this.e4[5] = 512 - cq, a30 = this.e3, a4 = 0; a4 < 6; a4++) a30 += this.e4[a4];
			if (dq < a30) {
				for (a4 = this.e3 = 0; a4 < 5; a4++) this.e4[a4] = 0;
				this.e4[5] = dq
			}
		}, this.zl = function(player) {
			a2y.push({
				player: player,
				n0: 14 + ce.cf(20)
			})
		}, this.dF = function() {
			var a4;
			if (9 === dv)
				for (a4 = a2y.length - 1; 0 <= a4; a4--) --a2y[a4].n0 <= 0 && (eA.n9(a2y[a4].player, 0, 46), a2y.splice(a4))
		}
	}
	var xZ, hx, uJ, ja, jb, zy = 16;

	function xY(a34, xO) {
		var gg;
		((a34 %= zy) !== xJ || a36(xJ) && xO !== xK) && (gg = performance.now(), w3 = !1, xZ.xa(), ce.jR(a34), xK = xO, a36(xJ = a34) && (jq.bz(a34).a2D = xO), (a37(xJ) ? a38 : (a34 = jq.bz(xJ), aZ = a34.c1, aa = a34.cw, ce.jR(a34.a2D), jr.jX([aZ, aa, a34.gS, a34.gP]), a39(), jU.a3A(), jr.a3B(), a3C))(gg))
	}

	function a3C(gg) {
		var t = performance.now();
		tb = (tb = Math.floor(29 - (t - gg) / (33 * jq.bz(xJ).per))) < 0 ? 0 : 20 < tb ? 20 : tb
	}

	function a3E() {
		return 10
	}

	function a37(a4) {
		return a4 >= a3E()
	}

	function a36(a4) {
		return !(1 === a4 || a4 >= a3E())
	}

	function a3F(a4) {
		return 3 === a4 || 7 === a4 || 9 === a4 || a4 === zy
	}

	function a3G(a4) {
		return 2 === a4 || 7 === a4 || 9 === a4
	}

	function a2o() {
		function a3T() {
			xZ.dF()
		}

		function a3Z(bB, a3Y) {
			0 < a3Y && (xX[bB] += a3Y, xX[bB + 1] += a3Y, xX[bB + 2] += a3Y)
		}

		function lp(bB) {
			return xX[bB + 2] > xX[bB] && xX[bB + 2] > xX[bB + 1]
		}
		this.rs = -1, this.aA = 0, this.a3H = 0, this.a3I = 8, this.a3J = 32, this.a3K = 8, this.a3L = 32, this.a3M = [0, 0], this.r9 = [0, 0, 0, 0], this.a3N = null, this.a3O = !0, this.a3P = !1, this.xa = function() {
			-1 !== this.rs && clearTimeout(this.rs), this.rs = -1, this.a3N = null, jr.a3B()
		}, this.bp = function() {
			7 === aJ.nt() || this.a3P || (this.a3O = !0, this.aA = 0, this.a3H = 1, this.a3M = [jq.bz(xJ).a3Q[0], jq.bz(xJ).a3R[0]], this.r9 = [jq.bz(xJ).a3S[3], jq.bz(xJ).a3S[4], jq.bz(xJ).a3S[5], jq.bz(xJ).a3S[6]], this.a3I = jq.bz(xJ).a3S[7], this.a3J = jq.bz(xJ).a3S[8], this.a3K = jq.bz(xJ).a3S[9], this.a3L = jq.bz(xJ).a3S[10], this.a3O ? this.rs = setTimeout(a3T, 16) : this.dF())
		}, this.dF = function() {
			if (8 === aJ.nt() && eW.gh()) this.rs = setTimeout(a3T, 16);
			else {
				if (0 === this.aA) {
					var a2D = ce.a1y();
					if (ce.jR(jq.bz(xJ).a3S[2]), jr.jX([aZ, aa, jq.bz(xJ).a3S[0], jq.bz(xJ).a3S[1]]), ce.jR(a2D), this.a3N = jr.a3U(), this.aA++, this.a3O) return void(this.rs = setTimeout(a3T, 16))
				}
				for (var bB, a3V, a2D = this.a3O ? 10 : 1e6, a2D = aa - this.a3H - 1 < a2D ? aa - this.a3H - 1 : a2D, hb = this.a3H + a2D, fM = this.a3H; fM < hb; fM++)
					for (var fL = 1; fL < aZ - 1; fL++) lp(bB = 4 * (a3V = fL + fM * aZ)) ? this.a3W(bB, a3V, 1) : (this.a3W(bB, a3V, 0), function(fL, fM, bB) {
						return 1 < fL && lp(bB - 4) || fL < aZ - 2 && lp(bB + 4) || 1 < fM && lp(bB - 4 * aZ) || fM < aa - 2 && lp(bB + 4 * aZ)
					}(fL, fM, bB) && this.a3X(fL, fM));
				this.a3H = hb, this.a3H >= aa - 1 ? (pw.putImageData(xW, 0, 0, 1, 1, aZ - 2, aa - 2), c4.c5 = !0, this.xa()) : this.a3O && (this.rs = setTimeout(a3T, 16))
			}
		}, this.a3W = function(bB, a3V, bs) {
			a3Z(bB, Math.floor(this.a3M[bs] + this.r9[bs] * this.a3N[a3V] / 1e4) - xX[bB])
		}, this.a3a = function(bB, fD, a3b, bs, r9) {
			a3Z(bB, Math.floor(this.a3M[bs] + (1 - fD / a3b) * r9) - xX[bB])
		}, this.a3X = function(c8, c9) {
			for (var bB, fD, a3b, hG = c8 - this.a3J, hH = c9 - this.a3J, hc = c8 + this.a3J, hb = c9 + this.a3J, hG = hG < 1 ? 1 : hG, hc = aZ - 2 < hc ? aZ - 2 : hc, hb = aa - 2 < hb ? aa - 2 : hb, fM = hH < 1 ? 1 : hH; fM <= hb; fM++)
				for (var fL = hG; fL <= hc; fL++) lp(bB = 4 * (fL + fM * aZ)) ? (a3b = this.a3I + (this.a3J - this.a3I) * this.a3N[fL + aZ * fM] / 1e4, Math.abs(c8 - fL) > a3b || Math.abs(c9 - fM) > a3b || a3b <= (fD = Math.sqrt((c8 - fL) * (c8 - fL) + (c9 - fM) * (c9 - fM))) || this.a3a(bB, fD, a3b, 1, this.r9[3])) : (a3b = this.a3K + (this.a3L - this.a3K) * this.a3N[fL + aZ * fM] / 1e4, Math.abs(c8 - fL) > a3b || Math.abs(c9 - fM) > a3b || a3b <= (fD = Math.sqrt((c8 - fL) * (c8 - fL) + (c9 - fM) * (c9 - fM))) || this.a3a(bB, fD, a3b, 0, this.r9[2]))
		}
	}

	function a39() {
		2 === xJ ? a3c([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === xJ ? a3c([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === xJ ? a3c([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === xJ && a3c([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
	}

	function a3c(a3d, a3e, a3f, a3g, a3h) {
		for (var fL, fM, a3k, a3l, bn, a3m, a3i = a3d.length - 1, a3j = aZ + aa, b3 = (a3j *= a3j, a3f.length), a4 = b3 - 1; 0 <= a4; a4--) a3f[a4] *= a3f[a4];
		var a3n = new Array(b3),
			a3o = new Array(b3),
			a3p = new Array(b3),
			aH = jr.a3U();
		if (void 0 === a3h)
			for (a3h = new Array(b3), a4 = b3 - 1; 0 <= a4; a4--) a3h[a4] = 0;
		for (a4 = 1; a4 < b3; a4++) a3n[a4] = a3f[a4] - a3f[a4 - 1], a3o[a4] = a3g[a4] - a3g[a4 - 1], a3p[a4] = a3h[a4] - a3h[a4 - 1];
		for (fL = aZ - 1; 0 <= fL; fL--)
			for (fM = aa - 1; 0 <= fM; fM--) {
				for (a3k = a3j, a4 = a3i; 0 <= a4; a4--) a3k = (a3l = (fL - a3d[a4]) * (fL - a3d[a4]) + (fM - a3e[a4]) * (fM - a3e[a4])) < a3k ? a3l : a3k;
				for (bn = a3g[b3 - 1], a3m = a3h[b3 - 1], a4 = 1; a4 < b3; a4++)
					if (a3k < a3f[a4]) {
						bn = a3g[a4 - 1] + z2((a3k - a3f[a4 - 1]) * a3o[a4], a3n[a4]), a3m = a3h[a4 - 1] + z2((a3k - a3f[a4 - 1]) * a3p[a4], a3n[a4]);
						break
					} a3q(aZ * fM + fL, bn, a3m, aH)
			}
	}

	function a3q(bs, bn, a3m, aH) {
		bn < 500 ? aH[bs] = as(aH[bs] * bn * 2, 1e3) : 500 < bn && (aH[bs] += as(2 * (1e4 - aH[bs]) * (bn - 500), 1e3)), aH[bs] += as(a3m * (10 * bn - aH[bs]), 1e3)
	}

	function kT() {
		var a3r;
		this.nO = 0, this.nP = 0, this.nR = 0, this.nS = 0, this.bp = function() {
			(a3r = new Array(a3E()))[0] = {
				c1: [0, 5e3, 8e3, 1e4],
				fD: [220, 250, 255, 220],
				nB: [190, 220, 0, 0],
				cm: [170, 200, 0, 0]
			}, a3r[1] = {
				c1: [0, 4e3, 5e3, 6e3, 1e4],
				fD: [25, 0, 100, 0, 25],
				nB: [25, 0, 0, 0, 25],
				cm: [25, 0, 0, 0, 25]
			}, a3r[2] = {
				c1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
				fD: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
				nB: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
				cm: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
			}, a3r[3] = {
				c1: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
				fD: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
				nB: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
				cm: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
			}, a3r[4] = {
				c1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
				fD: [10, 10, 20, 10, 10, 170, 212],
				nB: [20, 20, 60, 100, 100, 110, 170],
				cm: [70, 70, 160, 30, 30, 60, 120]
			}, a3r[5] = {
				c1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
				fD: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
				nB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
				cm: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
			}, a3r[6] = {
				c1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
				fD: [10, 10, 60, 255, 255, 200, 200],
				nB: [10, 10, 60, 255, 255, 200, 200],
				cm: [80, 80, 255, 255, 255, 200, 200]
			}, a3r[7] = {
				c1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
				fD: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
				nB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
				cm: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
			}, a3r[8] = {
				c1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
				fD: [25, 30, 30, 30, 255, 255, 30, 40, 20],
				nB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
				cm: [60, 170, 170, 170, 235, 235, 30, 40, 40]
			}, a3r[9] = {
				c1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
				fD: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
				nB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
				cm: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
			}
		}, this.a3A = function() {
			var a4, ca, a3w, u4 = function() {
					(hw = document.createElement("canvas")).width = aZ, hw.height = aa;
					var u4 = (pw = hw.getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aZ, aa);
					return xX = u4.data, u4
				}(),
				c1 = a3r[xJ].c1,
				fD = a3r[xJ].fD,
				nB = a3r[xJ].nB,
				cm = a3r[xJ].cm,
				aH = jr.a3U(),
				b3 = c1.length - 2,
				a3x = new Array(1 + b3),
				a3y = new Array(1 + b3),
				a3z = new Array(1 + b3),
				a40 = new Array(1 + b3);
			for (ca = b3; 0 <= ca; ca--) a3x[ca] = c1[ca + 1] - c1[ca], a3y[ca] = fD[ca + 1] - fD[ca], a3z[ca] = nB[ca + 1] - nB[ca], a40[ca] = cm[ca + 1] - cm[ca];
			for (a4 = aZ * aa - 1; 0 <= a4; a4--)
				for (ca = b3; 0 <= ca; ca--)
					if (aH[a4] >= c1[ca]) {
						a3w = aH[a4] - c1[ca], xX[4 * a4] = fD[ca] + z2(a3y[ca] * a3w, a3x[ca]), xX[4 * a4 + 1] = nB[ca] + z2(a3z[ca] * a3w, a3x[ca]), xX[4 * a4 + 2] = cm[ca] + z2(a40[ca] * a3w, a3x[ca]), xX[4 * a4 + 3] = 255;
						break
					} pw.putImageData(u4, 0, 0), jq.a3u() && bw.bx() && jq.a3u() && (u4 = bw.lC("arena"), pw.save(), pw.globalAlpha = 1 === xJ ? .1 : 1, pw.imageSmoothingEnabled = !0, pw.scale(2.8, 2.8), pw.drawImage(u4, Math.floor((aZ / 2.8 - u4.width) / 2), Math.floor(.5 * aa / 2.8 - u4.height / 2)), pw.restore(), u4 = bw.lC("territorial.io"), pw.save(), pw.globalAlpha = 1 === xJ ? .1 : 1, pw.imageSmoothingEnabled = !0, pw.scale(.87, .87), pw.drawImage(u4, Math.floor(.745 * (aZ / .87 - u4.width)), Math.floor(.422 * aa / .87 - u4.height / 2)), pw.restore()), w3 = !0, c4.c5 = !0
		}, this.jV = function() {
			for (var bB, nP = 0, a3w = aa * aZ * 4, a43 = uJ, a44 = xX, a4 = aZ - 1; 0 <= a4; a4--) a43[4 * a4 + 2] = 3, a43[a3w - 4 * a4 - 2] = 3;
			for (a3w = 4 * aZ, a4 = aa - 1; 0 <= a4; a4--) a43[a4 * a3w + 2] = 3, a43[a4 * a3w + a3w - 2] = 3;
			for (a4 = aZ * aa - 1; 0 <= a4; a4--) 3 !== a43[2 + (bB = 4 * a4)] && (a44[2 + bB] > a44[1 + bB] && a44[2 + bB] > a44[bB] ? a43[2 + bB] = 2 : (a43[2 + bB] = 1, nP++));
			this.nO = (aZ - 2) * (aa - 2), this.nS = 0, a3F(xJ) && function() {
				var bB, a4, n0 = 0,
					a43 = uJ,
					a44 = xX;
				for (a4 = aZ * aa - 1; 0 <= a4; a4--) a44[bB = 4 * a4] === a44[1 + bB] && a44[bB] === a44[2 + bB] && 3 !== a43[2 + bB] && (n0++, a43[2 + bB] = 3);
				jU.nS = n0
			}(), this.nP = jD = nP - this.nS, this.nR = this.nO - this.nP - this.nS
		}
	}

	function a38(gg) {
		xJ === a3E() ? l = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : xJ === a3E() + 1 ? l = "AR56AKA999AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ADoET99AGCAUDAe8yNAUCA6Ed99AF7eVAKYAeCAUBGAEAU68AeB999AF57GerAUJI6999AFmBADHUUAoDAUGBAEIT99AFhAoCIyKB8AKFAy9yGAT99AFPJUKA8AKbAU9yQBqsAd99ACvI7BpgAyCAUCAoUX8AT99ACkAyII7BfgAedYAFLeBByC999AA99AUBA9A6H9A9AeBQ7X9A7AyBA7AoIAy86AeJBJ99AA9yOA7HeJRMVAKDAyNAUEAoDAKEA9AUHFACEyR999AA86CAPF8A8RqRAeFA8CoCAyIK8B5999AA8yXAeDAo56BB77M7AoGAUEAK8UDBeDA9AeBApUB5999AA68AoIDUEFoORfZBeCB6HeBC7AoIALPA7AUKAoB999AA59AeJDUDFeWQzKAUHA6AeeW6A8AeT999AA68DoDEedQBIA7AoEAUHA7CWmCd99AA67D6AUjDp6LIB7AUJA6B9YeTBAB999AARBAgDAEC7AeEDL6zJB7AUKBoDZKSA6A6999AAQBeaCoOC6Cz7zMDg7ULAoGAKG999AAMBeGAyNB9AoNAebB6R7LoBAUjceS97oLB6B9AyIBKSAUtA9SpQAKDA8AeQAeGcAT97ABAUKB7AyCBKGBKJBABAeEEoJSzTAKCA6A6BUGA5cKQ978AehA6A7A8DejBf8zeB6A9A7b6A5979BAeAeEAyHAydAeGC6Cf8UCA6MASBKIAKC999AC5yLByDBUCB9BKTA7AoaC8R6AUDAUDMoNBAM999ACoAoLBAQAehAyBAUJAyIA7AyXDV8BZBoMAUDAq88BnfBemAezAeKC9D8SzTBg6eBEyN9cBo7UECyjC9T6MKJc9AUSB69WB6A6AeRAKtBULAUCEeaAUBSKHAfaAp8UKL8CnLBACA6CyEByCBAFAeCA8CACDABByiRUNALdAV8eLL9CKEB5886BoDAeEA6ByHByFAoCAUMA7CUDAKCAeBAUCAyEAKCAUFA7D6R7BACfAOL7E688AMAKBBULBKGByGAeEAeJB8BUhAKrB6AUBA7P7AoBd7CpFAUNE8877AeBAUCAoEAeDB8A9A6AoEA7A6AeFAKJB9A7EKCEoCCzyd9CpDA8A7F8JKIAyD777A6AySA8ByJCALAKJBAUAUDAy8pwdoXK7H7I9BKBA6AeE766AeGCKIBoKCAHAoJBKBAUDAUFCK8VudUUKK88IeCAoTAUJ766EyEAUNBAHA8AyxIBvc9AKBB6H6AKaJe8UBA6C9AyCAUE7zBKCDKEAoMBAFBKFE7IVqAeCAUEcABAKRKe9y89DAFB6756ByDA8D9BAFE8IpqdAQJ9AKDJ6JoPAUGBoN7wBo57A8A6DUBBU88OW89B6KU9y99A6DoF7xBK8KDAeNAKFAeJJLrc6BfGJc5yPC8AqOOg86BVGAKCI7A7A68sB8AoGJABOfmdANK9I7A8Ay87AKQAvjDA67AyKBKBAziN5dKNLe8oEAUCALKAljDKkAyRA6AKHA9B7BeILflc7BzII7AyDAUCA6ALHA77YDehA9BeBAUOAyTBAMA6A8AUNIzkdAMJLCBUMAeRB9A6GAK7SDelA8BUPA7B7BALAyNAUOIpRAKFAUHdoLFKED6KUJB7AKSB9B9FAK7NDKFAyYA6AUEB7BAJB6A9BUFB6AUOIfPe8BU5eGDy99A8EAUCR68C8AyJBeBA8A9AKCBADA6BACAUEB6A9BKEB9AUPIfQAoHdyLHKCB7AKFJ8AK5yMCb6obAyUAyEAyLBAFAoNA6ByJBKECADAoEA6IpRAUJdUNFUMBKBBeDAz8876UXA6CyEAyDBKLCoEA7ByNAeUA9A8IpSAUHd6BA5eOA9AeIAKLS8E8Bu96CoDD9AeKBeWAoHByOAeTA8Be78MKDA7doLFePA9AUGAyKTApCKCAk8yXA7D8AeLB6B7A6AyQBeECyCBo78MoEAW9yMFUQA9AUIA9A9S6D9CACAeCAUCA867KWAypAeLB8ByGAoQBoDEy7zbd6By5UQA8AeLBAHSKtCeEBk69B8AosAeLB8BoGAUSByDEo7pfdeRFKQAyGAeGAKNA6SUQAKbCKFBUBAQ7AOA6F8B9AyBAeHA7ByRAerHeHAfWdoRFAPAyIAgKBeDC7D667UMBA5yUAyKA9BeTAUtAKHGoGA9L6d6AKCAUBBAvB6A6A8A7U8BKGA6A7AUCAKEAUsL6A9o6AVfAyVFAgBeQB6AK5o7eBAVHAeLd7AUCBAsCAGA8BCFBAWAe5pJBr98A6AUBO7FygByOAKGG7G8AKHKoGBA5oBNoCA8ALCBKqCeEB6AgHA7IAQAo87Br9yMAoDN9F7DAPBo7y77KoFBB87AKJApCBomCoFW7Ao8UIB9IADneeOA56DAPBo8K58A8A7KUFBB78AUGAoCAUDAUDAfBBUoCUGii7KfJ6AK6emC6B6BonAKqF8BADJ8BUEAKDSACAKBAKDAeDAUEAUIO8CUGi5uUEAKuIeCFKBBKnCUTB6AeCDKCD9GfIAUDTeBAeGAUWLUDDKWA6i7te67A7AezAKCAKGAyoGoTB7CKBAeeAokAUDFUHAVRAoBRoBAyCAobLyGC9CKGi8s9IUuAyGA6D9G6CAPD9AoBAUDA6AyqFKIA9Lf68AeKDLSA7C6CeFi9DoEA6A8no86EALAUIA6AeFA6B8GADAoKAeIBUdA8BeBAKBBKnFKLAeCAVKRAEAUBAUmAUBAoEK9AeCAoUCoEjKgA6AyYly9yUAUFC7AoEAoLB6F8B7AyCAKCAKFA9C8BALAKNDy5yLAfMRUHAUvLoPByUA5loHAoKC7k8J8ByFAoeAUEAeOB6D8AUSBoJAeBA8BKBAKUBUVAUDD7FUHA7K7RA6y6oFEeRBySA5myLDX57KoJHAUC8AeSBKNA8BeHAKQByLAUEAUFDACAy66Kp67AKEG7AKJFKIEeTBKSA6AyFl7BAji8K9A8HUSC6A9BeGAKDByHAKBBUFAyOBoJAUJDy7BFQ8AUHH7E8A7EyVBARB9l8A6D7h7MeCH7AUEA6CAJAoIAoJAUFBoEAUCBUEA6BeOCKDAobHBEQ8AKBAUBAKFIAuAyOAeTAoGC6A8ByKA6A5l6A6ENdVeEB6A7A9ByBB6A8BANAUIA9B8CyBAUZHVARU9o6KFA9AKEA8AefA6B8AyKAibggPAyBB7BeDAKbAUDAKLBeDA8A9BodAUEC6GVASADAy87CoHCoCAUFA6B6AehAoTAoMAicf8VoZAeGA6C7A6BUQAKHBAOCoGA8C6F9IyBA8AKCR8AKCAKIJKXA8B8BKHFyCB9AyMAYgf5VAgBUDAKVA9A6C7A6AUCByWA8AUBA6C7Fy87AUETeBAU9oUBAOJ6A7BACr7fWFCKCA9CATA9AeeA6CAUA9AUFAUhE9I7T8KeQBALJ9A8A9AYpe9U8BKJA7D6AUKAefA7CASA9BAjEo87UVEBoGBy99A8BADshFW9AywAofA6CKRBAKDysI5UpGBUFBVCA8uDBXUDE7AohAeXB7A8BUjEe85ULKBUEBVDA7uq97XoCE9AUgAUYD8D9D9IqCLKLA7A9KUIu5ef7oDE7Ao9oCBKmEAEAKkIWBH7AejBeFA8KKJu7AeDdACAL7AKE6AU97AKJD9A8AKmD7H9UU79AUhBoIAU9yCA7A8vADBC8p66A9FKBJ8AUGD9A9AykDo79Ue8KGC7B6KoFAoFvoDBW6yEBL6AOA8AfeA6A6AKDD8BeHA8AeVDo8AyAKaAVXIyICUHAUHK8BO9W57A7Bf5UgNUGAUBAKpC8AyRD8HyBAK5UECeEAKCMU8eOBeIA7AfQAY59AKBAKhY9BoBAUFPyCA6AKGB6NoHAKqDAGBymGyBA8FUCAUEA6AKEAUBAUCBLTJAPAoKBKB577AojYp89B9L9AUNAyCAUCEKaAKCA8BeoGeCAo5yKAoDAKUL7Jea59KFD6X8TeLAeFL9AoJAeGAoBEKZBAJAKCEU6UCAU57BKEC6LypBArCj96AyhX6TKIAUDNAEA6AoEE9C7A9A7E7Fo67BKCDLNEANEAW6AAoFAeWYL87A7AoDNANAyBAUdAoGAKBDUKA6E7Fe76D6LKoB6D9CaBByQYf8oIO7AoLC6EyKAKBAovFe7ylLemB6EAX6AB6BqoS9ApxAeNCUwBeCE8E8H7EBMD9B6EAJAoL598B9BqmCUBf7AoPCAzGKxHUrLAoB6EeIA6BF97CoIX8B8A6fyFB8B7ByBD8F8AeEEe78DpMEUOEoIBKE59AjA8Y9AKFf7A6CAQBACAeCAKCDy57AUCAKCEe79DVKAUBEeME6A96ED8AKCAW5rPA7CASA6BeiF8AKDEo8UbAUBK9E7BUzA96CdrHAKGA9CAmDe6AuIKaLevBU5oH6Ic7e7BoOAoJDoiF9E6H8C7LyuBU57A56KcrHBeOA6A9DyiF7E7I7BpSE6BQ76E8AMfeUTAUEA7BAFByCCeMAURF6E6I9BLPAUEEoL678EeIWNLCoFC6AeEAKVBoFBABAe58EU96ApSAKCEeN68UpAeCAp86AobfoWAocAeaByGA8GKrV8EyO68ovAWHgU8yPA6A7GemWArBu89E6AWDX7Ae8UlAeyByHAUBAK6okVyEAUrBk9UuAWAXoLHUnA6FABAoLA8AK6yiAKBV8EyPF9AkVAUJEyCT8XeIH6D8A7CKBC9AKFBU7KjV6E9By6AF559A7FeFA6YCUAoLA7H7D9A6BKCA8A6BKBCKLHUiVywB7GeD559Ay5gxWUGA8Ao8ApAKBAUMAeGBABAeBA7CUJHegPyCF6FKQGABAeC56AEFMxWoGAoGIK57AoFCoZAo7ofP6AK5y5URF9A756AFE9Y9WyOIA59AeHCzCDMLFeSF9A65rAeCAUMAouY9WeQIK6ACA8C6C9AU7KcVU5eUEUBByH5kBoKA6EWyWePIU7UaC9Ae7AcVe5UUEKEByG5iByJA7EWxWUMI6HUbKeaVo5UUD9A7B7AthB6A7BAnZABAK6eFO7By87HUdKeYVo5eUD9BAPAjhB6A7BAnZU6AJAoGAKBNeOI7HeiKAGAeNVy5eTEKKBeD5iB9AoLD8ZK58AoKBLkAy9K7olJ6AKJBWRFeTEKLBUB5jCACBUlY9F9AeNBWeHyjK8BWRFoSDACA9BPwDUmY9F7AyOA7AKDW9H6D6A6AVDA6S9AKeF6B8CUIBKJ5wDKZA8A5YKFAyJAKsA6BeQWy77DyGAVDA8S8AUcF9A7AKLAKBBKPBKI5vDURAUDBoDX6A8A6A8AUqAyPB8We78DyVAU88AeBAp88AKfF8B8AKBA8CUHAeCAZwDUQAoDBoCX7A6A6A7AeqAoKAeBAoCC7VA79DeWAU9eCWe58E7A9AZ5egBAFAKFAW7ooA6A9EAEAWCH9DyUA5f6F9Ej68DALc7D7A9AyxUe77D6B9A6f6CKBD7EZvA6B7DALc6DyKAozUe77D6CKFf8B9AKjC9BAE5wBeLAKDCyMcUkBADF5UK77D8B8A8f8B8AUiC65nBoBC7BeXBq8KiHUNAL8o76EARA9boBEUSAygCtnEUIDAOA6AW7UEAeGAKYHAEAUGAL8o7opB6BW7eCEKPA8C9CKDAjnEeCD6BoEAq7ACA8AeCCe7KFAeDAV8oCAU69E6A9AKBBrMB7A9C8CeBAtnIKOAyCcKCA6B6HyFAUDAV9A68E6A8AUBBg7AEEAPBAZC6AUD5nIKOAyBc8B6A6AK7KEAUDAV9A69E6AoRaABAyJEUNBUXCyFAjkIeOdoOA6Ao8V89HAtAUVZ7AUFA8EyJB6CUYAoI5gIUQdKOA7AK7yFAUDAL88HU68ZoDAyIE8AoSCoi5hIUQc9AoEAo8yHAKDAV88HU67ZyCA6A6HeWD55iH8CC87A7AKCA8A6HyFAUDAV88He68Z9A8HeWA8AeY5hH8C8b9A8A6AeBA7HyFAKDAf88He68ZKBAoBAUSFoDA6CUHAeOAoI5gH8C9byHA8BA78AeDAUDS8Ho66Z7AUBB9FeEA7CKHAeNA6A75fIAcbUJA8A8H9AKBAeBAUES9He68ZUBAoCAKRFeFA8CAHAUNA8A65eIUbbAJBABAUEIABAKCA9S6AoHGo7C58B6FAIA9CABAKUA9AtfIUca8A7ByBIyDAoDAWAGK69Z8B7E9A8BKUCFsIedaeIKoCAKIAMDF7GyCAKBAM58B6FAIBUTCFsIUgZ8A7K8AKCA7AWEFy67aARFeGBePAKCCFsIeiZUHLABAeBAoBAgFEKBBU67aACAKNFANA9B6AKBCPsIefAUCY9A8L6AUCAeBU6D7AeBAKKG8aeNFANA9ByY5sIofAKDY6A8L7AeCAUBU6D7AeMHKBAM58BK5oJA9AUBA9DFsIydYoDAeGMKDAqJDeBBe7g6ABAKBAKMFAIA6AKCAUCA6DZrI7C9YAIM6AyBAKBVerH6ZyBAUBAeOE7A8AyEAKCAUGDiOALaI8C9X7AeCApcAoDV6D9H9Z7AeBByuA7A6A6AeHDYNAfYJAdXoENyDAgSD6IM56AKEBywAyBAoCAyEAUCAKipUDMo9KdXUDAyBNKDAUBAWSAUDC7IWxAUKB6E8AyBAoCAyrpUDMe9edB9AWHAVpAeCAKDW7CA87YULAyQE8AoDAUGAUMAKepeDMKJAe8edCABT7A6OeBAUCA6W8B7JqmBUDA7AUJE7AyHAKCAKnp8AfVA9Ao8eeCABTeIOeBAUBA9W6BfBXoNBKKE8AyGAoaAoIp9ApVBACIoeC6AV8oDQMaBfEXeNA9BUvAyQAKPA9A8p8ApcJAZAKDVUBQKBAMZBpDXeNBAPEoGBoDBeKA7p9ApeI9Ch79W6By99XADAeOAyBAyOEoKA6AyNr8AzdAeBA6AKDAKMAe6AVU9AL5yCBqZBy96AyDWyRB6BerA9AoKA7sUGM9A9A7BKDGKTUeCP9A7A6AKBW7BzEW6B6B6BetCKBAKCsyGM9AeCAyHBUBGUTUKDP9AyIAyCOKFH6BzDW6B7ByPEAEAKWAYsAoCALiAoKBKBGUST9Ap59AyHAKBAoCOKHHoPKeCAgVB8ByPDoEAY7eFN6AeNA9AU6USTKCQ9AeIAKBAUDOKIHoPK9WASByPDACAO79A8PUFA6GKTS8AL7ADA9AKEOUJHePLMVB6A8AUBCAawoIP6AUGGURkADBVtA7HeBAyKLCXByICeZwyHP8AUGGUPkKCBftA7HUDAoKK9WoPA7CeCAeVwyHP7AoGGUMG8AW9eBBftA8HeEAUKK8WoQBAbByDAO8yGQADA7GKMG8AM9eBBUBALtA7HePK9WoPBKcBeEAY8eEQoDA7GKLkUBBzsA6HyPK8WURBKcBeEAY8UFQoDA7GeKkKCB6OUGHoPK9WUQBKcBeFAO8UDQ8AUHGoKNKBYzrA6HyNLCVBUNDKNw8Af7ABA7GoKNABYUCALrAKCAe76BLKWKLBefBs88Ap7ACA7GoJlpwAe77A9K9WUCAKGB6DAPwoIRADA7GoILyCAUBAKCZByAK78A8K8W8AoWCoRwKIRUEA7GoHlpxAK78AoDALDAUBAeEZKVByBAO8yCRyGA7GeFlzwAU77ApFA7Aq56CKJAoB66eGA7GeElfxAe8ABKUJA5ZAbA767AHA7GoBloEALrAf8UKA5ZAaA567yHA7reDA8OKDSUKA5ZARAKHA6676A7A8rKGA6AKBN9Af8AKA6ZAIAeDAeBBk77A8A8F9AX7AIAyBALlAL8KKA6ZAICu78A8A8F8AX7ALA5f6BKGZAEAUCC5679A8A8F6Ah7AMAg8osA5Y9Aeg68AIA8F6AX7UJAg8UuA8cQ8UHA9q9A9AeCAM78BoEC8BM75686A8BEbA9A6b8ByGCoKA8AM66689A8BEbA8AyCAM7yRA7CKLAyBZ9AeH689A8BKzAN76A7A7beUA7B9ByCA5Z6AyE69AIBObA9Aq7ALAyKA6B8Cg55699A8A6rUJAq68A9BKeCg577AA8A5roHAz7ADJUIBycCg587AA8A5roHAz67BK86AySC8CqwAeI7AA8A5roGAp67Be8oECAaC6AUCX97QA9AslAUFQoPIeECKdC7YHQBADrUDA8QoQIUDCAeC7YlPBKDrKIAf6eRIADBoEAedC7Y57OBeCrAKAL6KZHyCB7DecAUBYbOBeDq9A8Af58C7HyCB9AUCC8CyBAKCAMw7JBoCq9A8AV57C9KAcAUIAoDAUCAeCAoBAMx7GBoEq7A8AL56BoCB6J8E9AUEA6ZHFByEqz6oOAUSJ7E8AeEA7ZbDB6AsYQUOAKBAKSJ7E7AoEA7ZgBA5x6B7A5qf6AOAeUJ8CKBCeDA6A6Zp97A8F9AyDAYcB8A5qL6AEAUFBKQJ8AUCB6AehAg5z9yIF9BfJAUDAeMAW97B7A6qB67AKPAyHAU99AeBByDdf66AoTBA6AQDyEG8BeCAUDAq96B7AoBAsQS6AKJAo97AoDAyBAyDdz6UHB7BU57B9DyHGoFBKId7B8AiVT9AU96AyGA6Aq97QAHByQFoVD8Ae6eFf7B9AYUUALJAFAUGA7dz59BAHAoBB8FeVKeGf7CABEABl8TAGAURI6A7AKFA8dz59B6AoTFeWD6AU6yEf9GACl8S7B9A6Ay87A9A8d7P6B8AyRFUXC9AeDAKCAK6yEf9GACl7SyLAeKAeHI9AUDAUFd9HKDIARBAOE9C7C9AU7eEf8GKBl8SoLA6B8H6AeRey66A7IAQBUNE9C7C9AUDAK69ArSr8SyLA8B7HKBAUKBXDG8A6IKQBUCAyCAKDE9CKFAebAKEAK7KCf7CoCDUBmB8oLBAJAKHG9A9AKBBhFG8A7AeBH6B9B6AK5oUD6AUDAK7UBf7CoEC7AX8L8oBAKJBAKAKHGyKB5e7G9A7AUCAKBHyUA9A8FKUD6AeCAh89CyECyDmB8eJAUBBKKAKHGoIB6e9HAMHKBAUVA8BKxCAlAKDAX9AaAyXAX8L8yGByKAUEGyJBXOG8Be7KYAoQE7CUkAUCAN9AcAyWAN8L8yGByKAyCGUKA8AUBf6G9Bo7AXAoUEeTAeDDoCnecA7B9AX8B8yHByJGoBAKNA8gAzAKRBy68E9EeSEKBnUeA8BoBmf86A6BoKCyCD7ByIgKxA6BoPG8FUqB8rUeBKHAKDAN8f8yGBoKCeFD6ByIgUxA8BeOG8FeqB8rKfBeEAN86SyGBeEAUGByNDUTA6gowBAOBe67FoqB8rAfB8AUBmV8yHBeCAoFBUQDKWArYEyPBoOGy56EATq9DKTmf86A6CAFBKRDAXAW9UFC9EoQB6Be6o57D9B9q9DKUmL86A7CAEBKQDNRB8AoDA9C7A7A9B8B7B6GA59D8B9q7DeUl9S6A9B9AeLAoGAohfy6ULA6CARBoBAU5y6elB9pKBBodAUDCN77S7A8CABF9fo6ePAUVB7B8Fo6okCYIAoKDKZl6S7A9H9fy6enB6CA5U67DeWo8AoIDoWl8S7A9DKGENRGKhAKHB6CAyHAgC5ooIAejB8mL88A8DAHEXSGKeAeIByVE9HKgC5oKvB9mL87A8CoMEhTGKcAyIB6CUuHUhCsBE6AeCAeEA7mL88A8CeLErUGUbAyKByXEy7UhCiAE8AeKA5mL88A7CKME7f9GKcAyLByXEy7KiCUDAr9UyAeLAr8B88A6B6Byzf8GKcAyNByWEokAKiDyVAKGnU5UEBACl9S9AyQBe5rSGKdAoOCAREoYBeiDoVAKHnK5UFnB89AeSBK57f6GKeAeQB8B9EeWB9C9D7CABA6nA5eDnWMA7FXXF9DeCB7B7B8EyTCUcD8C7nA5eCnM7NZF6FyRB7E7ByZCypC8m8F8AX85arhFe6UPB6E8AUBA9DAUEecm8F7Ah8q6XjFKoAeXB6BUsAeCAKrAKBA7AUFEycm9FoGmW69g9E9EAFCeRBKaAKBAoJA9Kyai6AKrFyFmM66hexD8A8CoRA9CeEAKHAyNKeRAoCi7A6D8FyHl9aDnE9D9A8C7B6A7CeaK8B6jeHD6F6A8l8aDnE8EKHC7BACAyGB7AUEBeBAeBA9LANjUJDo57A9l6aNnE7EUHC7A9A6AeGB6AeDBfVB6jUJDo58BD7q6NmE7EeHC8A8A7AUHByTMKQjKJDo6AKlq59h9E6CKBCUHDKEA8AUIBoNAKEMKViyLDU6KMlg58iAtByDC8A6DUDB8ByRMKWieLBAFB7GoKlg57iAuBoFC6A7DUEB6AKCBoQMKWieLA8BAOGyKlMwAUHiKuByEC6A7DUGB7ByTL7CDtBKGByLGyKlMuAeHiKvB7AKbA7DeFB7BoTL8CXrBeDB6BK6yLk9Y7AKFAUBiKwEyGDoGB8BKQAoBL7ChjAUDByDB7BK6yKk9Y6AUFiowA8AKlAUlAyVBABAKPAUBL6C5hoTAeRBo6eKk9Y6AUFioxIyCCUKAUCB8LyaheTAKUBy6KJlCuAKGZABJywIeDCULAeDBpQC6hepBy6AKlCsAUGYoBKAvIoECeMAKEA9AKBAKCLyahonB7F9BD7CsAUFi8Eo8yDC6ByJAKBAUBLyahymB8F8BD7CsAeDi9Ee8eBAKDCUBA6AUDA7BABALSC6h6D7B9F7A9lKCAMoAoCjAqHAFAyFAKCC8A6AeFAUBBVPC6iABAKhB8FACAoJlqpAeCjAqG9B6DAJAoCB7LoaiUgAeBByyAKDBD7qpAUCaUCI7EU69BygA9B9AKCLoaiUIAedBU5UMlWpAeBjKqHKODeJCBQC5ieGAydBUzBX7CrAUBjUnH7BAjAyCAUUL9CNrA6BKXBopAKHBh69YX56D7GABCAJDoGCzTCDqAyOCUOD9AUGB5k8YX56AKCAoEC6F7A6CAHDoGCzUB9ioCByXBenAKGB6k9YD69CosAUDAUGA8AeBB7AyiAKBAybL8B9j8AKBCoND9AKDB8lCqk7CeeA7AoYAKDB8AolAobAKBBKEB7AKFAU78BKEAN57CyRD8AUBB9k9YX68BAmBeBC9J6A8A6BoFAKDIKFkedBymCX68Yh69A7DexJ7A8A8BKJs9DAPD8CX68Yh69AyfFU9UCAyGBAJBExDKPD6Ch68YN7UDDA5o9KCCeFBixDKPD6Cr68X7l6AKeFy9KCEYuDoPDyYk8YABAOBF6N5s6DyPDoZk7YN7KDCo6VhsykByeAKEC5k7X9lKFCK6y67AK6ssD7ByZA6AeVAKDk9XoCAN7UGCA6y66AoCAUvAUJsolBySD7AKDk8X5lyHA8AUHG7G7BKmA6BEsD7ByRD6AKBAKDk9Xr7oVAK7A7UJDeIBErD8BKVD6AeDk9X5le9LOA7BYrD8A7CoYAKIAUClqilo9VPAyNsonAoYCyDA6AeBlqel8JLSAKQsylAeYBeHA7A7AN8Mal8JBks8DyBCyMA9A8nMVmA89N7tA57A8AKCAyCAUBAUJnCUmA9BktU56A8A7A6AUHn5V6mA9Lkte56A7AeCAKHAUGn6Vh8U9UDAVfte5oDA9BADA5n8U9mU96Ni5y5eEA8BAFAh99U7mK99AKBNE56DUBB8A9AeKA7AYAU5mBDNE56DKDByKAoGAeBo9Ur79K7M7t8DABB7BUDAsOUh79LBZt9E8BUDAiOUX79LezAe69uAwBKEAYOUDlAKqMomA9G5uKqAKFAKBAKBA7qB98mLbDeNGs6U5UGqB96mfeC9By6i6ovAKCA6qB95mpgC6B6Gi6yxA6qB9r8phCyVF9t7AUHE7A7qB9h8zhCybFY59AyFEyHqKJAL8N8ziCycFO6oCAeuA6qAKAV79mzkCocFE67AKCE6A7p9A9A7Rr86N7CekCeDB6u8E8A7p9A9A7Rh87N8CenB6A8Bi7KvAsWA8A9RN86OyREULBKKvoxAOWA8A9RD87O8BotA6x8vKIA9RD87PAME7Ai98vUIA8RN87PUJ5wveHA9NyBAoBDD88PUH5vvyHBBdAKCAeCA7C6m8PeFP9AN88FUBqUHBBVAeCCKXm8f7AN87AeBvUHBBVC6A7AUOm8f7A7m6AeBu7A7BBBAKCAKTAKBCUEAyNm7W9AK8yKm8u9A8A9KKBAUBA6AUMCeCA7Bh87W9AK8yLm8u9A8A8JyCAUJAUEBAiBX86XACBKBHAOm6vKHAUBAy9yUA6AUBDoMm5XKCBKBG9B6m6vKHAKBA6JoUA6AeCDeLmqhAUKAK7KOm5veGA6AKBJefAKiBD66AKRXeCBABHKPmi7yFA6AKBJK69BD6oCB5XyDA8AU7UOm5veGAyBAK89HKKmClAeHAU7UPms7oFA8IeCAK7eKiKCD6X9AUHAK7oPmO76A6A7Ie7yLjABBKCBqoAUHAK7oPmi7oGA8IA77BNvAeMAKOYUCAyCHyPmUrAOXAKGA6A9H8H7BXvAeLAKNYyCAoCHyPmAtAOdA7A9H7H8BXwAKEAURY9AUDAy7ePl8v7A6BU7U8AMjeCBg5eDAUGHePl7vKEAUHBK7U8KLk8ZoKHeTli7UEAKHBK7U8KMk6ZyLHeTlY7eMBA7K8KNk5Z6BK7oTlO7eMBA7A8UNk5Z7BK7oTlE7oMBK68IUNk5Z7BU7oUB6Arvv7BALG8IoLkq59BU7oVByEi5v8AUBA7BK68IoLkg6AMH6CAKAKCA6is8KJBK66IyKA7Ah5W6KNHyYAeMiKuAYlA8BU6y8yKkM6eMH6D8iUtAOnA7BU6o86A9B6ANsayMHymii8yGBK66IyJkC66Be7ohAKFiO87AyKG7IyJByBig68Be7eCAKCAUaAKFiE88AyKG7I6A7kC68Be7eFAeYAUGiO86AyLGy88A6j9bANHeEAeXAUKh8w6AyNGe88A5kC7AOHeCAoWAoOEACdO86A6BU6K9KEj9bUNHeCAoVA6B9AeBB8AKIA6c8w7A7Bo58JeBkM7UOHeBAyUA6CyICg87BeCveHBy57K7AXubeNHeBAyTA7F7c6BUEvUHBy57K7AXubeNH8B9A8F7c6BKFvUHBy57K7AXtbyMH8B8A9F9ceMA5veGB6FzHAhtbyNH6B9BA59cKMA6voFB7FpIAXsb7BU77B7BU58b8ByGvyEB8Fi5g79BU76B6Be58b9BeHv7AyPFfJAXpcKOHyEAeEAKBBy58b8BeHv7A6ByzLACiC8UPHoCC8F7byPA7v8AyQFEzceQKy59bAPA8v9AyQE9tM8eRK8F5a9B6A8wAEB6E9tM8eRLK5g67B7A8wAEB7E8tC8oSLK5g6ySA8wAEB7E7I7AX6M8ySLK5q6oSA8wKBCAuIUOjq8yTLK5qtAKQCAHyetH9CDzc6B8LU5yEAWlAUKAKCCeFyotH6Crxc9B6Le6BPALWAUEAKBAUBC6A5yyrH6A7A7BXwdAQLe58LoEMKCAKjAjGEe7yGA7B6i5dUPLo5zLAKFApVAUBDyCy6Ee7oGA8B9iM9oOLozB8AU9yBAyFL8AKBD9APGEe7oDB6B6h8d6BfOFURAU88AKEAKBAUBAKBA6L7EUBy6Ee7eDCKOh6d7BVNFoPAe8yBAUBAoBAKML65xEe8KDBoOh5d7BVNFyOAe8oCAUBAUQJKBB8AKB55orIADB7BXhd8BVMF7BoEIKYJAFAUBBP57EewBKVAUXA9hM99BVLF8BeDH9C8I7A7AKDA756ArEoPE6BDed9BVKGAMAe78C9I6BUE56erEKSE6BeOAhKd9BVJGKLAo78DA8oNAj6etD8CAuB6BKCfW98BVIGoHA7H7DA8UPAj6etD8B9E8Brad9BVHGyFA8H8DA8AQAj6etD8B8FKCAKNgg98BfFIA77DA79B8Aj6KvD6B8F6BrWd7BfCAKCIA77DU77B8At59E8D6B7AUBFoPgW96BzAAoBH7H7Dy7yTAZ6AxDyQF6B8gM96B7J7Ie77D6Hj8UxDyQFyRgg96B8J6Ie7ynHKZAP57FAhB7FoFA7AUMANOd6B9Jy8e7oqG8B9A9557E9DURH9A8AKHeM96CA9o8e7AuG8B8BF58E8DURIKRd7d7CK9e8e69E8G7B7BP58E8DKSIUQd7d7CK9e8o68E8G7B6BP6AwDASIURd6d8CK9U8o67E8AUBGyQBP6UuC9B9IUSd6d7CK9e8o6yyAKBGoRBF6ouC6CA8eWdW97CK9K86GyyAKBGoRBF66EoaCA8KBAUWdM98CK87I9Go5o6oQBF67E7ByDAoRAKBI6CW9DAB9I6JA6o5o6yPA9568E9BUEAeRAUBFyCB7A6AoYA7Aq79eKTIy9A6e56GoQA7F9AtHE9AyeF6A8BoTAUDA7AKHA9b5eUSIo9K6U57GyRAo6AGAUCyewAKiFyKBeCBAFCKJb6eUSIe9U6A59G6H9A9y6IA58A9CyDCUIb7eeSIK9e59GA66H9A9zK7y59AoCAKaAhHeoSH6J7F8GK67H7BFLHy9eBe8eoTHo99F6Ge66H7BFMHsBe6B9HVAFy6o67H7BFMHYCe6B9HVAFo6y68H6BPNHECe6B9HVAFU67BeBFy7yLzy68O7AMDAKxe8B9HBCFA68BeCFy7oMz6G6oNICA6fIFA68BeCFy7oMz8GsBe8CK6BKFA67BoDF6HUM5VGEBfAUF7LeyG7BeEF7HKL5ZF7oNKCK5fRE8G8AUBA8A8F6HAL5aB9AUiPACZDKCA5fSEo7UCAKHA9F7G6AKDBFcB6A6C9PKBV6AKjfAUFfSEe7eCAUEBK59GoCAUJ5eBeJC8orLB9FfTEU79AULF9GyK5kA6BebAyCA8A9l9fUTFfTD9IUCBU59GoK556Fh76fUEAKOFfUD7J7GA6oJ557FLaAMxfoSFLXDy98GK6eJ558FBbAMwfyBAKPE9MyjJ8GU6UJ559FXiAKlf6AKBBywM6Dy98Ge6UI56A5XhAKlf9ByrNKiJ9GU6UI56A5XdAKngeNELhDo99GU6UJAKB558FLYAMsgoND6N8DfAGU6eBAKF56KyMoBY5g6BAiOKgKA6U6eBAeD56UxlNZBAiOKhJ9GU66At6ewlNaA9DfrDVAGU6oGAoC557E7lNbA8DLtDVAGU6oHAUE558EpZAMwg6A8C6O9DVAGe6eOAKBAoB556D7M6AMwg7A7Cp5UfKK6U6yDAeDAKCAKDAKC557D6l5g8A7CV5eeKe6K66AKFAUCAoDAP6KIAKXl5g9AyUP6DLCBKDE7GUEAoCAKCAUDL8AOwA6AUWlhfA6Bf6efHABDKIAyvGUFAeCAUBAeD57oWlrfAyMQofHABDKIAyvGoEBKD57oVlrgAoKQ6DK7ABDKJAowGeFA8AKCAj7KWlriAoIQ7DK7ABDUHAywGeFBeC57KVl5hyEAU5UBAUBL6DA7ABDUHA6E6GyEBeC57UTl6hy57A6LydHKBDABAKHBUoG6AeKAKFAKBAZ68B8G8ANHh6F7ApRC8HKBDUIBUnG7AUGAKDAUEA5568B7G6AoMAM95hp78C7HUBDUIBemGABB8AeDA6567AyBBK6yFA6AXAhp79C6HKBDeHB6D6GKBB9AUDA6567AoCBA6oFA7AXDAKDg6EUCN7Cy7KBDoGB7Dy8UCAeF568AeEA8GeFA8AXFg6EeEN6Cy7KBDoGB7Dy7UCByD569AUEA8GKFf8gorAzlCpDAKCAyTDo7eCBKBAUD57ABAyGGAHBABAKEeNdD6A8N7CpGAyUDU7oGBAE569AUEA6FyMA8BM98hAcAUCBLmCfGAyUDK7yGA7A757KBAoFFoNAyPd8hAVAUBB8N8CfGAoVDA6KBBoGA7AoCAP7ALE9AeBByCB7CUDb5g8B9CfnCVGAoVAKCCy6eBBoEAUBAeBAUE57eME7AoBByBB8D9AW6DcBKCAeZN9CVFAyYCo6oBBeFAKDAUBAoC57eME6CKBB8C8A6AoDaDdA8DVoCK7KBDeFCoXGyCBeCAKBAKDAUBAoD57UNEoWAKTAoHBeFA8Ag6NdA6DfoCLFAocBoDAK66AeNAKCAKBAeBAUFAZ7KOEoVAUfA9A8A8Ag6N67OUUKyEC6AKDBU69AeTAeBAUFAZ7KPEeVAegAyLA6Aq6X66OURK8AofBK68AeUAyGAKDAP69BorCAEE9bh6pqB7K9AehA9G8AUUA6AUCA6AP7ADAKKEKUA6E9AKBbN6frB6K9AehA8G8AKVA6AUEA8AP68AUCBAoCAGFq69kVsBoFAVDAegBA66AUVA6AUD58ULB7AUUCKFF6a7kVsBoHALBAyfA8G8AUVA6BKC576BAPA7ByXAo57a7kBsByGAo99AyfA8G7AUXAoMAj77A8BoKBUYAe58a8j9OyNA7Ao99AyCAKcA6G8AUaAUMAt77A8BAOBAZAU58a9j8O6BKJAy98A9C7Ao69AUbAKNAt77BKFA7AeHA8I6a9j8O7A9A9A7J7A9C7Ao68AUnA8576BeBA8A6A6A6I7a9j7O8A9A9A7J6BAcAU68AUnA9576AKBB9A8A6Ae88AyBa5j6O9A7BAIJyKC8AK68AUgAUGA858ASBAFAU87AUGar56PAGBAIJyLJ6AKgAoDBP79AUCBKNA6AK95ah56PUEBKJJyBAKJM7A6AUM58yIBVHaD5z5eCBUJJ8A8M7CF86A7BLJaD5V69BA9oBAeHMoX586A8BBJaD5V68BK98A7MeY587AKCAoLK9aNyQ9BK98A6MeDAKEAUP589AyKLC58AUBi9Q9BK99AzXAUCAKBAKEBt89AeNLC6DwRAMJ8AzXAKLBkGK9aNvRAMKAEMKCBKIAKE6HK8ahsRKMG6AKhA6L9AUKA9AUD6HK8a5iL7UMKAIJABD8A8AeC6JK9ahpReLKKKIoBAKCD8A8AoB6JLM6hnReKKeKIeFCyCBAIAoB6KLM6e76AKDAg5p7oKKoJIeHDyJ6NLg6e69B7ZB7yHK6BA8KID6A96MLq6o6oVY9RyGK8BK78A8D8A86NLeCAKFAUDAWyGeWY8R6AfKBU77A8AUBB6AUTAUBAkNMABA9Y9F9AKBCqudANHyLEKC6NNqvFydY5dKOHoPD7AaNN7Yy5UhYg6UECyPHKS6zN8YyfAKSDqqaeFCoQG9CawN9YyWAUBA7AKCBKlYW6eOB6By7AUAyB6rOCtB8B8A6ECpayOByQG9B96yOMuBoWAepByBWq67BoOB6GoCAKR65prYyKG9A7AKHAWXa7BoPB6GUV65psY6A6HUGAyCA5WC69BoOB6F9AKBCu5VtgyBAKBBqTbAOBeQF9C6E6AQFO5iWSbUNBeQF9CKzAQFO7iCRboMBoPC6AKfCa58O6iqMb6BeMByaAUeCa58O6igNb8BUMBobAKdCu57O7h6AUFVM8ANBAOF6CQ6Bwh6AUFVC8UNBANFyY657O9h6AKHU8coNBAMFyY657O9iqHcyOA9BU5oZ656PNrU6c7BoIBU5Uc65zzigFb9AKJBoIBUuDk5zzigEcACA8BoJBKtD565V5rpUq8eBA8ByIBKrD7F9AP88P7iWCdePA9BKqD8F7Aj86P8iMCd6BoCAKHA9EUlF8AZ88P7AKBh9UM98B7AKCAoJEAmF6AP9L58iB99eUSAyIDACA8D8FyB59B6hlT8eoQA8A7C8AoHD9FoC589QhkT7e6B8A7A6C8A8AeoD7AUNAj9B6XjT7d8AUHCKFAKBAKdBKCEAjAeNAeBAj8z6hjT6d9AeGCKlFoNAUSAeOAeBAj8f65hz95eKDA6CKKAKZFyLAyPAoOA758L66h7ThDAUGCeIAKZFABAyKBAJAoPA658B67h8TXFAKGCehFKNCyRAt8B67h9TNGAKHCUhFANC6B6A6579Q7AKBh6TNPCUBAKfE9BoCAeDAUDAeJB8A6578Q8gKBB6NeCFrQC6DAwBeCB7AyUAUCAZ78RNSAKSNAFFXSCoeE8BeCEUCz8AK6f7hgM9BAygAYDAvBeBEeCz8AK6V7oBANeM7BUDAKtgUVAyCCyvBUCEeCBeFx9AeCAK57SNaM7B6ErXCUfE6BoBEABAeBBoEyKCF9SNZM8Botf6AKICAEAUaE7BeBEADAKCCeExKCAUCFz8DZM8Bevg6B8DouBeBB6AeXAKCAKVA7w9AoHAKySADA5f7M8Beug7B9DeuBUDBUGCeCCKNA9AO7yDF8SKCA8fpdBetg9B9DoqBeFA6AUBAyCAKpAUBB65sSKDBNMM8BesgACA8CUdAUBEAOA6AoIEyCAKQ5sSKCBrKM9BKtgADA7CefD8ByHAoHAUCEeT5rSUBB6fBaBUsgUCA8CUgD7BySAUDCeCB8B85rUABANIMyLE5gUDA8CKIAKXD6B6B6DADCUNB9AZWUhFM7BKsgoCA8CUEAoWD6B7ByOAUPAKBAKMAKJBUJA6AeH5UUrEM6BAsh6CKEAyVD6B7BoOAyCAeVAeJBUMAeDA8z9UrEM6A9EhmCUCA6CUjB7BUwAUKBKSBArAi7CEe6MoNEDfAKGCUFAeWDyQBoYAKjA7AUBB6BtOAyBT9ezZBKoh9CUBAKEAUWD6ByPG8AUMB9zoCAV99AKBAeEd8MeCAoBAUBEDpC6AKECAkBoRGUCAeCBUYFeCt8T8AUBAKId6MeBE7h7AKGCyBAyFAeLDyOB8GKKA9C8FKBtyCAL98AKNAKBdf7DlAKGCyCAeGAoKDyOA9AoGEKBBoOA8DU5UBtp98AKSAKIcV69h8AKGCyCAeEAoOAeDCyPA8AyHDULBeOA6Do5eBtMccV67i6C6A9AeUA7AKRByIAoICKFAyPBKNAylFUBtCecL66i7CygA6AyOByJAeICAHAoBAKNBUFAKHAeoFKCs7XW8BEAK6DxCehAUJAKEBAOA9AeHCUGB6AoMAoBFywAOsX5cBDAK6DzCKxA7AKCB8AyDA7CUGAyBBKEBKEAK56xMmb9KUBF9jUVE9AyDAUSAyEA7CeDCACBAEAe56w9YC79KKCF8jeUE9AeFAKTAyFA7F8AeFF8EyBr8YW79KACF7joUE9AUaAoHA7AKBFyBA9F7EoCr7YW8A99AU57jyTH7AoHA8G7F7D7AKFAijYq8A98Ae56j6B8H7AoHA7G9F7D6AyBAijY6b8J8Ae55j8B7H7AyGAeEAU7U5oiAyBAijY7b8J7Ae5r6KPH7AoHAeCAo7o5ehAyCAOkY8b7J7Ae5r6UOH6AyIAKCAo78FAhAspY9b6J6Ao5X6oMH7AyLAo8AwDKFsW56a9J6Ao5UEAN6ALH7AyLAo8UuDAFsg58a8J6Ae5X66BA76A6BKFIUtA7AKWA6sg57a8J6Ae5X67A9H7AyNAU8ysCUCAKBAUHsq57a7J6Aezk8AUBAeBAU78AKQAK6yCB9E7A7AUBB8B8AYcZ7a7J6Aoyk9AKGALzAKIAeUE8A6AKCB7B8AiZZ9a8JoEFADAPiAeUE9BAOCADqq59a8JyDFKCAN7oJPKDCA5UIAKBA8CeDq6Z7a8JyDFKCAX7eMO7AoUFeKAyaAsaZ6a7J6AUzl7BptAeWFUqAibZ5a7J6AyxloRBUCNACCe5UqAsbZ5a7JyFFD7eSBKGM6AUYE7AKCEeEAeBqq5q68JyFFD7yXAUJAyFN9E7FoDqg5g68J6Aoyl7EVoE6FyCqq5W69J6Aeyl7EBBAKpE6FyCqg5W69J7AUxl8D6KoCEAvF6AYXZM69J7AUxmefKeDD6FY8CzbA96AewmyeHoDCyCD6DeBAUDByzAKKAORZC7A96AexnybGoEB7AKIAKkDoHByyAKLAYQY9bA97Aewn7Cy8yBA8AKkDUBAKLBUzAKJAiPY9bK97AUwoAXAUCBeCLKHAKCAUUByLFKDA8AiOY7bU97AUvo6B6AKGAeDA6AeBAKKAUMAUCAKCAKBAo7AHA7B7B7BK5UCA9AYPY6bU97Aeup8AoCAyDAeCAeCA6A6A7A7AUCAUCAUBAKLAo7ePB9BA5eCBABAoCo8Y6bU98AetqADAeCAoDAKFAUGAoQBoLHyPB8BK5oBBoCo9Y5bVvqKBA8AeCA8AKCA6BURBA78BySBK68AU6eBi5Yq7VwroHB7AUVA7IKPB8BK69AYIYq7LxryCEUHIyLCKLAKCB9AKtAYJYW7fxv6A6JyDCeNG6AOJYW7fxs8AoWA6MeNAyBFUCA6AYJYC7pRAKfsyICAGM6BKGAexAyEAOJX9b6L6AUes6A8B8A7M6By5yFpqmb6L6AedtAFB7A6M8BU6ACpqlb7L6AeetAFB6AzeBUGAY68X5b9L6AUftADB6AfnA8vqjb9L6AUhu7ALtAy6KCpMhcLPAUht7AL57Ae6UDo9XM8fPAUiueCPABGoDo9W9czOAehuUBK8ALJAUUAN88W8c6LoDDj7AD5UW6c7LoDDZ7KD5UW6c7LoDDZJAKDAe5oE5VWq88LoEDPDA8AeDAKBFKEF9AO6WXc8LoFDAQAO86A7A7AeyAo59AY6WWc8LoEDKQAO86A6A8AywAtXWM89LoEDPHAKJA8EoG5WWM88LoFDPRBUEAKDAUdA85WWC88LoEDUWAKaAO58AUFCACAecA75YV8c8LyEDUwAi56C9AKDC7A95XV8c7L7AegE7As5ojC7A95YVUBAg87L8AehE6As5ejC9A85ZVKCAM87L9AegE7A5tKjC9A95ZVM9BUAUgE7A5tAkC8BPZVC89MADDetA7s9DydBPZU9c9MKDDUuA7s9DUgBPaU8c9MUDDKsA9s8DegBPaU8c8MoCDUoAUBBEuDofBZaU8c8MoDDKoBitDyfBPbU8c8MoEDApBYdAUODyfBZaU9c7MoDDAqBYaAKBAoMDygBZbU8c6M7AUeEANqoJBAkDUM5bU7c7P9D9BsYBAJDyhBUCAjXU6c7P9EANqAPA9DeiB75YU5c7P9D9BsTB6A9DUiB95YUq87P9D8B5p9B6AUDAogDoVL9AODUq8z6AkB8p8F8DeVL9AOEUg8z59D6B9p6GKgCLTAiDC9AV7M8z59DoVpy6efCLTAeDAOAC8Af7C8z59DeSAKDpe66C9CVTAYHC6Ap69cp59DeTAKDpe67C8CZeCoGQ8cf58DAXAKCpo68C7CZfCyEQ8cV59C9CsRHAYCfVAOLCoEQ6cp57C7C7p7HUWCfVAYMCyCQ5cp56CyepUBAe7oVCVXAUBAYKCeBQ6cp5yaDEMH9B9CfXAYPS8cf5ybDEHAKDIKSCtpS6cf5edDEGAUEIUPCzaAOQSg8p5UdDEGAoDIyLC75rSW8pyDKdo6AyCI6BKb5tSC8pwDUeoyGAU87A9C85uR9cpuDefoy96A8C95uR9cfsDyfoo98A6DFuR9cfqD7DOEKABDfXAOXR7cppD8DOENjyRq8zoD9DOFNZzRg86N9D9DEGNP5p7C87N8EAeopi55f7C88N6EUdofj55f7C89NorC8ofl55V7C9BgEocoVlM6AYZRC9BeE6C7oflM7AOaQ9dLcE7C7oVn55f69dLbE9C6oLq5zQ9dVZFAZoLu5xQ8dVZFAZoBv5xQ7dfXFUZn8O95xQ7dpUFoYn6PtvQ6dzVFeYE9ANnQZuQ6d6L9FeZE8AXmQ55sQ6d6L9FeYE9AXjQ9IyCt7Q5d7L8FUZE9ANiRK8yDt6Qq98L9FAal7AeCRU86As5z6g99MAxC5l6SA86AoLAOqQXBL9E8C6D8AXiSe86AoJAYqQXBL9E8C6D8AhgSo86As5p6NCL8E7C6D9AhfSy87As5f6DDL8E6C7lL87I8AoLAOoQDEL8Eybk9TA88AyJAOoQNDL8Eobk8TU89A5s9QNEL7EobkeBAf9e9KDs9QDGL6EobkeBAV9o9KFs7P8e8L6EoakeCAV9o9UEs7P6fLPEoakeCAL9yCAPoP6fLQEeZkgF5lP6fLQEeZkgF5lO9AKGfLQEeZkgE5lOeFANTL6EoYkgE5lOXaL6EoXkqE5kOhaL6EoXkqE5lODcLyuCX6gF5mN8g9LyuCN6gI5kNoCANeLytCX6gI5jNriL6EoWkWJ5kNNkL6EoVkgL5iNDlLytCN6gM5hM9h9LevB9kqM5hM8iBME8B9kqM5hM6iVLFASkqN5gM5ipHFeRk5VtgMhtKy56B5k6VtgMhtKU6AKlMN5gMDwKK6eGlgO5eMNwJ9G7Ah7qO5eMXvJ8sUBAgN5eMNwJ8sUCAWN5fMDwJ7seBAgN5fMDxJ7s6VjfMNwJ8r9AKCAKBVjgMDxJ8sABAMP5gMDxJ8sCR5gMNwJ8sMQ5gMNxJ6sWQ5gMNxJ6sgO5hMNxJ6sgN5iMXxJssVthMhwJssVthMXyJisVtgMhyJYtVtgMhzJOtVthMX5U9EtVthMX5e89s5VtgMX5y87s7VjgMX56I6s7VZhMN57IsxVZhMD59IOzVPiL9kA8E5WK5jL8kU79tgJ5kL7kU78tqI5mL6kU77tqJ5mL5ko76tqI5nL5ko75t5U75oL5ko75t5U75nL5k6Hi56U65oLAEAN66HY56U75oLADAX66HY56U65pLADAX67HE57U55qLADAN68G9t9UtqK9AeCk9G8t9UtrK8AeBlA67uCD5sK7l6G5uMC5uK5l8Gi6WC5uK5l8GO6o7oML55vKr8A59uy7KQLjxKeCAN77F9uy68CBL5yKr79F8u6GycK55zKr79F7u7GUjKP5VDl9F6u7FosKF5fCmA55u8FUvJ855pCl9Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" : xJ === a3E() + 2 ? l = "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" : xJ === a3E() + 3 ? l = "AKVAGAL8jKGBKUU9D7Pe98B8L8jKGBKUVAkG9AofAUvJ8B8K7A8ArzAyKCWKC6AUGG9A7C7AKBAeuJ8B8K7A8ArzA6AKDAUBAUXU9CyDA6G9A6C8AytJ9B8K7A9AyDANuA9AKCAeWGACO6CyEA6G8AogAeuJ9ByBAVHBKEAUBjydFeHO9DU69Ao8K99BfMBKIh9AyRCU5oEP6C7G8Ay8A99BfNBKIh8A8CePVyZG8Ay8A99BLQBKIh6AyCAoVBqRCy67Ay8K98BBTA9A7hKKAeHB6B6V9Co66Ao8UYA9AKBGoJL8BKGheIAeIBeSWARAKGGyEIUVB6GeGMANA5hyFAUCAKGBUTWUPAUGGoEIUTB9GeDMUPArjAoDAKDAyMB9WUNAyFGeEIUQCf87B6A5hoDAeBAeFBUTWUNA8AU6eDIoPCV88B9AhiAKEAKEAoNB9WULBABGeDIoOCz86CKDhUCA8AoNB9WeKHoDIoNC7SoXArfAKJAeOB9WUJD7AKlAe8oMC9SeCAKXAhdAKJAeOCCVA9D6AekAo8eLDB87jeCA9AePB9WoHDyDD6AK8oMDV86CoCg7AUIAoQB8W8AejAojAK8oLDf87CoCAeCgKBA9AoRB8m6BehS8CoCAeChKDB9B7myODV89CoCAeDg9AeUB8meODf89CyBAUGg6AoVB7mUODf9KYAyDANaAoWB6mKNDz9UYA5g9AoWB7l9BojTUXA7g8AyWAyDA8l9BekTUXA5hAFAUCB9AoEA7l9BekTUXA5hAFAUCCADAoBAKHl6BUkTyVA6hKEAKEBoBAoCA7A7l6BUkF7AVlCAGhKEAKBAUBBoBBeHlyMD6EABB6AflAKBB9A5hKGAUBBoBBeHlyLD7F7AplCAGhAFAeBBoCBUIleLD7F8AzkCKFhKEAeDBKDBUIleLC9AyBGAGN6CAGhADAeEBKCBeGAKClUKC9G7A6N7CAJg7AeCA7A7AeNAyCAh7KJCyBAeNA6E8A8NyVA8g9AUCBAEAKPAoEAh7AIC6B7A6E8A8N6B9A9hoBAeFAoBByDA6AX7AHDKMA7E9A7N6B9A9h8AyUAUHAh69A6D9AoIE9A7N7B9A9h9AeUAUGAr68A6EKCA8FAHN8B9A7iADC8A5k7A6EKCA9E9A7N8CAHg7AKLAebA6k7A6FUxA8N8B9A8g6AUKAoaA7kyGFowA8AoDNKUA8AyCf9AKKAyYAeBA5koGFowB8M9CAIAoDf8AeLAeaA6koFFyxB7M9CKNf9AeLAoYA7koFFyxB8M9CKMf9AoKAeYA7hAGC9Ay5yMAKkB8M9AUDB6BXhAeYA7g7BAcAo5yNAUiB8N7B6BheAeXA8g8A9C7Ay5yNAUWAeJB8N7B6A9hoDCeIg9A7C8Ay5yCAeIAUUAoKA8AKBAKFN9B8A7hoCCoIhAGC8Ay5oBA6A7AeSAyKBABAzkCKGhyBCyIhKEC9Ay6AHA6BoHBAIAeFN6CAHhyDCeJkeFGAHA8BKIBKHAeFN7B9A7hyFCKJd8AK6oEGUGA9AyBAUKBKHAeFN8B8BDhA6B9BArAWzAe6eEGeGAKCCeMA6AeEOARBDiA6B9A9EoCZKCGeDGyJCUMAyCA6OARAKBA8hoHB8AoyAK6eBS8AK6eDG6A8CeMBLqB6BNiA7B7AoyAo56AKDAL89Ae6KCG7A8AeCB6BeIAKBOoQBDiA7B7AoyAy5oIS8Ae59Ae68BeHAUGBoHO8BeLhyHB6Ao5UDAUCE9BB87Ao58Ae69BUFAyEA8AUFA7O9BeKhyHB6Ae5oHE8BB87Ay56Ao7AgAeEAp5oMBNiA7B6Ae5yGE8BB8KCA8AK56Ae7KgA6AKFO7AUFBKMheHM8A9SUCGyDHeDAKCAUWBVvAeGA9AUBA9heHM8BB8UCGeEIKVBeCAVqAyGA8AUBAKBA7hoGM9AeBAz8eCGUEIAOAyBCBpA6A6A6BXkAzbBMvAo8KLC7OUHAyDB5h6AVdBWuAy8eDAeCC7OUICi67BWuAo9KBCzsA9B8vKMYyFL7OoKB6vyKYoEL7OoQBO7yLYeEL7OoUA7vyCAKIYUFL6O6CUEv8A9YKFL6O6CUEAeCnABIKDAUFYKFLzwCeCAeCnACIKBAoCYUEIKBDzwCeDAUCnAChKDIKBBKCCLxCoCAUCnADhACIKCA9AeVPAYAeBAX9AEg8AU8UCA6AyVPAZA5nKEg8AU8UBAyGCVyCoFnKGg6AU8KDAeICLzCUGnKDAoBgeDIKEAeHCL5UVAUCAX9KCA6AXVAe8KEAeICB5eTAeDAX89AoHANUAU8eFAUDAeBCB5oZAX89A6AyCf8AU8eKCz5oZAN9KGAKBAeBIyIWoCIoJCz5yZAN9ANI6BKGA7U7AK8oJCz56CyBnAMI7C5UyCIeJCp58CyBm9Be9AWUoCIeKCf59CoCm9BU5oDCyCA6CgEAK8eKCp59CoCm8BK5yECyEAoYUUBIeKCp6ASAKDAX89BK56AeaDgAAK8UMCp6ASAr9KBAUGI8Df98AU8UMCp6UQAh98Ae88Df98AK8UNB7AKFQikAe68Dz96AK8UNB7AeCQinAoCAU58AKDDz96AK8KNB7Q8sKHF6AeCD7TeCIUNB7Q8sUIFeDAelTUBD9AUpBoSQ8seJFAEAUnTABEADDyBAKRB8Q9soBAKFFAvS7AUpAeiB8B9RFAE8BAFRKBEeCDoSCB68yKxA8A6RKBIKPCL68yA5UBBB7UBIUOCV6tDA8Ae5V7KBIeOCV6tCA9AU5f7KBIeNCf6jCA8Ae5p7KBIeNCV6tCA7Ao5p7KBIeNCL66yAGAo56RKBIUOCL68x7A7Ae58RABIUOCB7Y9e7B68AU8ARCB6yCA8w7Hf67AK8ASCB65ZoBX8IB6oBIATB9Q5ZUDQ6AU69IV6UCH7CKUQq5eCQ6Ao66Ip6UBH7CUTQ5ZeCQyGGo8z6UBH7CeSQ5ZKDXolAevQUBH7CeRQ5Y8A6XemA6Ep6eBH8CoPQ5Y7A7XUkA9Ep6UCHocBUBAL66wykA8E6QKBH6C9BL67w6D6A7E8P8AU77C9BL67wykA7FU69AU8oBG9AUFAKBDABAUHQ7wokA6Fy6yHIKBHAEAUmAp67wokA7Fy6oLH7AK7AtAf68welA7Fy6eLH7AU7KtAV68wUlA7F6G7AU8KCHWOwekA8E6AoGG6AU8KBHqOwUkA9EyEA7O8AK75VsmAKqDyKAUEDyJA6O8AKRAK58VimAUpDyLAKJDAKA7O6AKRAe57VimAUoDyYCeQA7OoBB8Ae57VilAemDocCATAoBAVrAKSAe57VY78DodB9C6ApnAKTAo56VY78BKFB6DURDAEAyCBoIBoCJKBB9Ao5gPv7A9A8BojBogB8AKTAeMI6AKVAe5gPv6A8A9BomBKhAeGEy8oBCUEFMPv7A7BAMEUBEeEAUcAKDAUNIeBCUEFMOv8AoNBK89A8AUQAUDAeBAeNIUBCoDE9V5v9AUTAy9UGAUJAUFBePIABCyCE6V8yKCJ6AeEA6AyBB6B7H7AKaAUtV9599AUEA7CURH6AUaAUtV8577AeKAeBCAEAKQB8HyBC8AKtV8576A7A7DoKCK7UBC9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo" : xJ === a3E() + 4 ? l = "AKAAHHCBMP8LKDAerKyBsoVLL58LKCAetKeDseWK9QBOE6KeEsUWK9QLME8KKFsUVK9QfKE9KeCseUK7Q6LAx5wB9K6Q9K9FFvB9K6RLGFjtB9K7RVEFtsB8K8RfDFtsB8K8RpCFjtB8K9RfCFjtB7K9R8J8FjtB7LB8A9y5jtB7LB8U9e6FmB6LV8U9U6FmB6Lf8U9K6PlBzOSU9K6PlBoQAU96Se9U6KEAPfBoQAo9p8o9U6AEAZeBeUAK9p86JA685cBeUAU9f87I9HZYBUVAK9p88I8HjXBVQS8I9HPYBfPS8JK695YBVRS7JU685YBVSG8A7LU9K67GyGtoML9GUVA8Ae9U9U66GyGtoMMA56C8AyEJe9U6y6yGtoMGoDA6AKwFKnJo9U6y6yHteNGUEAoEE8E9EK9o9U6e66A8OeCe7BeqAKLAoCB6E7E6Ee9o9e6KRAKwA9OeEAKBeeOD8AoLCevEUuJo9e6AMBAtA9OoJd9BomAeNBACBesAUDDyyJU9e6AKBUtBBsA9d8BykAoNA9AePCUEAeFA7AUIC8FoHAK8e9o59A9BetBEzBykAeOC9CANAyCBUDAoPGABAo8e9o59A8BysBLaANXByjA6BKeB9CAVBe67IU9y59A6B7EUNL8BhSByiA7BKeB8CKYBA67IU96F8A6B7EyHMATfeKAoBDoJBKcB7CyWA8G8IU99FyGB7E6AzTA6AUQfAKAeBDyJBehA9C6J9IBAFyFB8E7ALWAoJBNKBKCAUhByDAeDDoFC9J9H7KU56AoTS6A7fALAUDDeJAUEAeDAUgAejJ8HzFF6AKBAKSS8A5fAQDeJAUEAeiAUpJ6AUFG8K6FyEB7S8A5fAQDoIAeDAUgA9BoBBeHAzCGzIFoEB8S9AhKB6DoJAUkB6A6AeLL7GfJFoEB9S9AXKB6DyoAUEAeBBoGAKLL7GVLFyCCFAB6DyyB6AeFAKDA6L7F8Lo5oCCi97B6DyeAUQDUGAyCLA5pRFoBCs96B6DydAyND8AKDAzLAKEEpUIE9yRDodAePQePA8B9Me8Y9URDorQ9A9BePM6IY9USDoqTyIM9Ii9KSDypUKBNA8i9KTDoohe8i9KUC9AUDD9doED7IE9UWC6AeCEC9oFD6GeBBACAi9eVC7AoCD9dyFD6FKCA9AKKx8CAcErBAUjFACA8AULx7B8DAriAxBeIx9B7AUBC8FrdE9BoFyKQAUCC8AeCE9g9E85VCAYAUHE8hAw5VCAYAUHDyHA5aoBG9E55VCKXAyEDyHAW68AK76D85UCKbAUDDyBAKGAW68Ao7el5UCKbAeEDyGAg67Ay7Ul5UBUBBKYAoEDyFAg68Ay6yCAem5UBUCBKYAeGDeFA5a7A6GAu5UBUCBKYAoFD6AKGa7A6F9E75UBeCB9B7AUIEC68Ay59E75UBeCBeDA7CenhUw5UCUDAeEA9CKmhKx5UCULA9CAmhA6ZICKNA8B9D8hK6PJCAQA8BUDAUkhe6PJBUCAySA7BeCAeWAeFAKDho6FKBUCAoVA6BUCAeWAeEAeDhe6FKBUDAoUAyNAeBCeDAyCAhhGPJBeCAoVAoMAoCCeCAyBArgGZJCAlAeECADAoCAXiGZJCAXA7A7AeEB9AoCKABX9F9zUVCUJAyEAeTAeCKKCX7GFMCKWA9AoGAUTAKFKACX7GFMCUVA9AoiJ8AglGZKCUVBADDyCAK9eEX8GjICUVBKCD9JUFX7G5y6CUWBABEA9eEX7G5y6CUXFU9UCXeCAU66y6CKRAoEFU9KBXo7PFCARAyDF5go7ZECASAeCF7go7tCCASGXXH7yATB9FeEA5X7AU8o77yAUB7EyBA9AeFXyEIo76yKUAoBAKBBK6MiAy8y76yKVAUEBK6CcBA87H5yUVAUEBK6CbBK86H6yUWAKFBA59W7BK87H6yUcBA59GUBQeMI7H6yUcAoCAo59GUBQeNI6H6yUcAUEAo59GKCQoNIy76yUcAUEAohAUaF9Af7AGIy76yUbAUGAehAKcF8Ap7AEI6H6yUjAU6o57Af7UCI7H6yUkAK6NYH6yUjAe59g6H5yUkAU59a7AK58H6yK98a6AK58H6yLEaKEFo76yLHZ9Ae5o76yKiAK7W58Ae5y76yKiAK7W58Ae5y76yK98AyEZ8Ao5o76yLBAeCAyDZKEFy75yLGAUGZeDFo75yLPZUDFo75yLVY6Ae5y7tBMKWA7V7Ay5e7tBMKVBCPAy5y7jAKoBB6CKNVUGF6HY99KeDByUB5VUGF6HFAKUEBoVB7VAGG7GE99KKFBoVB8VAFG9F8x9KAGByUCCHAy7K57x9J9A6B7B8CKoAyRALtAe7U57x9EKBF7AySB7CemA7ByCO6AK7e58x8D8Ay5yFCKPCokA8BoDWK57x8D8A7FeCC7AoCAKDAUZDeMBAGWK56x8D8A8IeBDogBoIA7WU55x8D8A8L9DAQA6A8We55x7D7BKCAzLC8DCaFi97D8B7LKbDCdD9AUKx7EoPK9CoeXUiA6APFE8B6K6B8DMkC8z7E8B9KoODqoB95WFUPK9AonYoO5XFUQPMyA55aFUPAeEO578K5UWO678A5UWO678A6oJO778A7ADO778CTC6Ab5gSC8AUEAltV8DyE7rV7D7AvqV7D7A67oTUCCemAbrS9AoY78f7UEA9A7C578f7KSC878f7ASDH8V6UFAKTDR8V6UZDR8V6UZDR8V6eYDR8V6eZC978f6eTAeDC978f6eTD578f6UTD678f6eRD778f66AeEA6D878gR78gQ78qQ78qQ78qQ78qR787Vl9CK79MI79qG79qE798UM58APpUC57AjpT8Z7A55pT6Z8A65rTg58A75qTfCAp5UH5pTfDAzyA75qTfDAyMAQ86TLWAQ86TBXAa8z9BXAk8z88MoE68z86MyE686SzZA5686SfaA6688R9M6A869B76M6A769V7pbA669p7fcA569z7VdAvAQ68mQSrP78rP78sP68rP78rP68sP68sPmvPmwPcxPS5yDApm86Vl866Nm68NZ8ABdLc58ABdpZ58ABdzY58ACd9L958ADd8L858UCd8L758eCd9L658eCezK58eDezI58oDeymAe66586AXFDyHAyBAUFFZ86AXIDKKAUKAoCEt88ANNCegEZ89AXNCKhEP9KBfyQD7EJIBonD89KBAqD7B7AS9oIE6DUSAc9yEFAeB9AdyC9B8AnzC6CAD9zBUEA7CeC95eJA6An99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ACeAT99AT99AT98Ad97Ax96Ax97AT99AABAT99AJ99AJ99AH6AC997Ax9yF99yE996A55lAO57A55lAY56A55lAY56A5bUBaoCt7Aq7UCaUEt7Aq7KDBUBY8A5t6Aq7KKAyFYyEt6Aq7KKAoHYoCt8A5a9BUBA97EAyhAMiClEA6DKCWoBAKf7EA7C9AgYDo5yF6sA6C7AqaDo5eH6qA8C6AqaDy5UH6qA9CyEW6D6FKC6wA8CyEW6D7FAG6sA8CyEWynFAG6rA8CyCW6EKzA56qA7CyDWKv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" : xJ === a3E() + 5 && (l = "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");
		for (var l, hJ = m.ib(l), a3Q = jq.bz(xJ).a3Q, a3R = jq.bz(xJ).a3R, b3 = (aZ = 1e3 * hJ[0] + hJ[1], aa = 1e3 * hJ[2] + hJ[3], (hw = document.createElement("canvas")).width = aZ, hw.height = aa, pw = hw.getContext("2d", {
				alpha: !1
			}), xW = pw.getImageData(0, 0, aZ, aa), xX = xW.data, hJ.length), lp = !0, bD = 0, a4 = 4; a4 < b3; a4++)
			if (lp) {
				for (; 0 < hJ[a4]--;) xX[bD] = a3R[0], xX[bD + 1] = a3R[1], xX[bD + 2] = a3R[2], xX[bD + 3] = 255, bD += 4;
				lp = !1
			} else {
				for (; 0 < hJ[a4]--;) xX[bD] = a3Q[0], xX[bD + 1] = a3Q[1], xX[bD + 2] = a3Q[2], xX[bD + 3] = 255, bD += 4;
				lp = !0
			} pw.putImageData(xW, 0, 0), w3 = !0, a3C(gg), xZ.bp(), c4.c5 = !0
	}

	function kU() {
		var a3r;
		this.bp = function() {
			(a3r = new Array(zy))[0] = {
				name: "beyaz Arena",
				c1: 230,
				cw: 230,
				gS: 1e3,
				gP: 2e3,
				a2D: 173,
				per: 1
			}, a3r[1] = {
				name: "siyah arena",
				c1: 800,
				cw: 800,
				gS: 100,
				gP: 50,
				a2D: 43,
				per: 1
			}, a3r[2] = {
				name: "ada",
				c1: 512,
				cw: 512,
				gS: 128,
				gP: 32,
				a2D: 0,
				per: 1.5
			}, a3r[3] = {
				name: "Mountains",
				c1: 960,
				cw: 960,
				gS: 60,
				gP: 8,
				a2D: 0,
				per: 1.2
			}, a3r[4] = {
				name: "çöl",
				c1: 900,
				cw: 900,
				gS: 100,
				gP: 5,
				a2D: 0,
				per: 1.2
			}, a3r[5] = {
				name: "kar",
				c1: 1e3,
				cw: 1e3,
				gS: 100,
				gP: 40,
				a2D: 0,
				per: 1.2
			}, a3r[6] = {
				name: "Sibirya",
				c1: 1e3,
				cw: 1e3,
				gS: 100,
				gP: 20,
				a2D: 0,
				per: 1.2
			}, a3r[7] = {
				name: "Cliffs",
				c1: 1024,
				cw: 1024,
				gS: 128,
				gP: 32,
				a2D: 0,
				per: 1.5
			}, a3r[8] = {
				name: "Pond",
				c1: 820,
				cw: 820,
				gS: 200,
				gP: 100,
				a2D: 0,
				per: 1.2
			}, a3r[9] = {
				name: "göl",
				c1: 1024,
				cw: 1024,
				gS: 128,
				gP: 32,
				a2D: 0,
				per: 1.5
			}, a3r[10] = {
				name: "Avrupa",
				a3Q: [140, 130, 120],
				a3R: [12, 12, 76],
				a3S: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
				per: 1
			}, a3r[11] = {
				name: "Dünya",
				a3Q: [165, 145, 125],
				a3R: [15, 15, 69],
				a3S: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
				per: 1
			}, a3r[12] = {
				name: "Kafkasya",
				a3Q: [140, 130, 120],
				a3R: [20, 20, 84],
				a3S: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
				per: 1
			}, a3r[13] = {
				name: "Amerika",
				a3Q: [120, 105, 92],
				a3R: [12, 12, 60],
				a3S: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
				per: 1
			}, a3r[14] = {
				name: "arap diyarı",
				a3Q: [140, 130, 120],
				a3R: [12, 12, 76],
				a3S: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
				per: 1
			}, a3r[15] = {
				name: "iskandinavya",
				a3Q: [140, 130, 120],
				a3R: [12, 12, 76],
				a3S: [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
				per: 1
			}
		}, this.a3u = function() {
			return 1 === xJ
		}, this.bz = function(a4) {
			return a3r[a4]
		}, this.nN = function() {
			return xJ === zy ? dr.zu : this.bz(xJ).name
		}
	}

	function jT() {
		(hx = void 0 === hx ? document.createElement("canvas") : hx).width = aZ, hx.height = aa, ja = hx.getContext("2d", {
			alpha: !0
		}), jb = ja.getImageData(0, 0, aZ, aa), uJ = jb.data
	}

	function kV() {
		var aH, c1, cw, max, a46, gP, a48, a49, a4A, a4B, a4C, a4D, a4E, a4F, a47 = 1e4;

		function a4N(a4M, gS, b3) {
			var a4;
			for (a48[0] = a4M, a4 = 1; a4 < b3; a4++) a48[a4] = a48[a4 - 1] + gS, gS = a48[a4] >= a47 ? (a48[a4] = a47 - 1, -gS) : a48[a4] < 0 ? (a48[a4] = 0, -gS) : (gS += 16384 <= ce.random() ? gP : -gP) < -a46 ? -a46 : a46 < gS ? a46 : gS
		}

		function a4P(fL, fM, a4Q, b3) {
			(a4Q ? function(fL, fM, b3) {
				var a4;
				for (a4 = 0; a4 < b3; a4++) aH[fM * c1 + fL + a4] = a48[a4]
			} : function(fL, fM, b3) {
				var a4;
				for (a4 = 0; a4 < b3; a4++) aH[fM * c1 + fL + a4 * c1] = a48[a4]
			})(fL, fM, b3)
		}

		function a4T(value, b3) {
			var a4, a1p, e1, cc = value - a48[b3 - 1];
			if (0 != cc) {
				for (a1p = 1 + as(Math.abs(cc), b3 - 1), a1p = cc < 0 ? -a1p : a1p, a48[b3 - 1] = value, e1 = (e1 = b3 - 1 - as(Math.abs(cc), Math.abs(a1p))) < 1 ? 1 : b3 - 2 < e1 ? b3 - 2 : e1, a4 = b3 - 2; e1 <= a4; a4--) a48[a4] += cc - (b3 - 1 - a4) * a1p;
				(cc < 0 ? function(b3) {
					var a4;
					for (a4 = b3 - 2; 1 <= a4; a4--) a48[a4] < 0 && (a48[a4] = -a48[a4] - 1)
				} : function(b3) {
					var a4;
					for (a4 = b3 - 2; 1 <= a4; a4--) a48[a4] >= a47 && (a48[a4] = 2 * a47 - a48[a4] - 1)
				})(b3)
			}
		}

		function a4W(a4X, a4Y, b3) {
			for (var a4 = 0; a4 < b3; a4++) a4X[a4] = a4Y[a4]
		}

		function a4Z(hJ) {
			for (var a4 = 0; a4 < hJ.length - 1; a4++) hJ[a4] = hJ[a4 + 1] - hJ[a4];
			hJ[hJ.length - 1] = hJ[hJ.length - 3]
		}

		function a4a(lM, f8, cT) {
			a49.push(lM), a4A.push(f8), a4B.push(cT)
		}
		this.jX = function(a4G) {
			! function(a4G) {
				var a4;
				for (c1 = a4G[0], cw = a4G[1], a46 = a4G[2], gP = a4G[3], aH = new Int16Array(c1 * cw), max = cw < c1 ? c1 : cw, a48 = new Int16Array(max), a49 = [], a4A = [], a4B = [], a4C = new Array(c1), a4D = new Array(cw), a4 = c1 - 1; 0 <= a4; a4--) a4C[a4] = !1;
				for (a4 = cw - 1; 0 <= a4; a4--) a4D[a4] = !1;
				a4E = new Int16Array(c1), a4F = new Int16Array(cw)
			}(a4G),
			function(b3) {
				var a4M = ce.random() % a47,
					gS = ce.random() % (2 * a46 + 1) - a46;
				a4N(a4M, gS, b3)
			}(max), a4W(a4F, a48, cw), a4P(0, 0, !0, c1);
			var fL, fM, a4G = aH[0],
				b3 = max,
				gS = ce.random() % (2 * a46 + 1) - a46;
			for (a4N(a4G, gS, b3), a4W(a4E, a48, c1), a4P(0, 0, !1, cw), a4Z(a4E), a4Z(a4F), a4N(aH[c1 - 1], a4E[c1 - 1], cw), a4P(c1 - 1, 0, !1, cw), a4N(aH[c1 * (cw - 1)], a4F[cw - 1], c1), a4T(aH[c1 * cw - 1], c1), a4P(0, cw - 1, !0, c1), a4C[c1 - 1] = a4C[0] = !0, a4D[cw - 1] = a4D[0] = !0, a4a(0, c1, !0), a4a(0, cw, !1), ! function() {
					var a4c, lM;
					for (;;) {
						if (a4c = function() {
								var a4, a4c = a49.length - 1;
								for (a4 = a4c - 1; 0 <= a4; a4--) a4A[a4] > a4A[a4c] && (a4c = a4);
								return a4c
							}(), a4A[a4c] < 5) return;
						lM = a49[a4c] + as(a4A[a4c], 2), (a4B[a4c] ? function(fL) {
							var b3, a4f, a4, vI = 0,
								a4g = 0;
							for (; a4g < cw - 1;) {
								for (a4 = vI + 1; a4 < cw; a4++)
									if (a4D[a4]) {
										a4g = a4;
										break
									} b3 = a4g - vI + 1, a4N(aH[fL + c1 * vI], 0 === vI ? a4E[fL] : a48[a4f - 1] - a48[a4f - 2], b3), a4T(aH[a4g * c1 + fL], b3), a4P(fL, vI, !1, b3), a4f = b3, vI = a4g
							}
							a4C[fL] = !0
						} : function(fM) {
							var b3, a4f, a4, vI = 0,
								a4g = 0;
							for (; a4g < c1 - 1;) {
								for (a4 = vI + 1; a4 < c1; a4++)
									if (a4C[a4]) {
										a4g = a4;
										break
									} b3 = a4g - vI + 1, a4N(aH[fM * c1 + vI], 0 === vI ? a4F[fM] : a48[a4f - 1] - a48[a4f - 2], b3), a4T(aH[fM * c1 + a4g], b3), a4P(vI, fM, !0, b3), a4f = b3, vI = a4g
							}
							a4D[fM] = !0
						})(lM), a4a(lM, a49[a4c] + a4A[a4c] - lM, a4B[a4c]), a4A[a4c] = lM - a49[a4c] + 1
					}
				}(), fL = 0; fL < c1; fL++)
				if (!a4C[fL])
					for (fM = 0; fM < cw; fM++) a4D[fM] || ! function(fL, fM) {
						var value = aH[fM * c1 + fL - 1] + aH[(fM - 1) * c1 + fL],
							ns = 2;
						a4C[fL + 1] && (ns++, value += aH[fM * c1 + fL + 1]);
						a4D[fM + 1] && (ns++, value += aH[(fM + 1) * c1 + fL]);
						aH[fM * c1 + fL] = as(value, ns)
					}(fL, fM)
		}, this.a3U = function() {
			return aH
		}, this.a3B = function() {
			aH = null
		}
	}

	function as(ca, cm) {
		return Math.floor(ca / cm + 1 / (2 * cm))
	}

	function z2(ca, cm) {
		return 0 <= ca ? as(ca, cm) : -as(-ca, cm)
	}

	function d5(aH) {
		return aH * aH
	}

	function mh(ca, cm) {
		return cm < ca ? ca : cm
	}

	function qz(ca, cm) {
		return ca < cm ? ca : cm
	}

	function tM(ca, aH, cm) {
		return aH < ca ? ca : cm < aH ? cm : aH
	}

	function a4i(aH, b3) {
		for (var dV = as(aH + 1, 2), a4 = 0; a4 < b3; a4++) dV = as(dV + as(aH, dV), 2);
		return dV
	}

	function bl(aH, b3) {
		return aH < 1 ? 0 : a4i(aH, b3)
	}

	function a4j(f9, fA, i8, nc, fB, fC, i9, nd) {
		return !(f9 + i8 <= fB || fA + nc <= fC || fB + i9 <= f9 || fC + nd <= fA)
	}

	function a4k(f9, fA, i8, nc, fB, fC, i9, nd) {
		return f9 <= fB && fA <= fC && fB + i9 <= f9 + i8 && fC + nd <= fA + nc
	}

	function kn() {
		this.yH = 0;
		var uL = -1,
			a4l = !1,
			i4 = 2,
			qP = [],
			a4m = 0;

		function pd(fL, fM, a4u, a4) {
			return 0 === a4 ? fL >= a4u.f9 && (0 === a4 || fM >= a4u.fA) && fM <= a4u.fA + a4u.nc : (fM -= a4 * (a4u.nc - i4), fL >= a4u.fB && fM >= a4u.fA && fM <= a4u.fA + a4u.nc)
		}

		function a4v() {
			var i8 = Math.floor((q ? .145 : .09) * bq),
				i9 = Math.floor(2 * i8),
				f8 = Math.floor(.065 * (q ? .53 : .36) * bq),
				fB = r - i9 - f8;
			return {
				f9: r - i8 - f8,
				fA: cA,
				i8: i8,
				nc: Math.floor(.35 * i8),
				fB: fB,
				i9: i9,
				rb: f8
			}
		}

		function vW(fL, fM, c1, cw, fD, nB, cm, a50, l, ne, a51) {
			ne = Math.floor(ne * cw);
			cH.font = bt + ne + bu, a50 && !a51 && (fD += 80, nB += 80, cm += 80), cH.fillStyle = "rgba(" + fD + "," + nB + "," + cm + ",0.6)", cH.fillRect(fL, fM, c1, cw), cH.fillStyle = cK, cH.fillRect(fL, fM, c1, i4), cH.fillRect(fL, fM + cw - i4, c1, i4), cH.fillRect(fL, fM, i4, cw), cH.fillRect(fL + c1 - i4, fM, i4, cw), a51 ? (cH.fillText(l, Math.floor(fL + c1 / 2), Math.floor(fM + cw / 3)), cH.fillText(a51, Math.floor(fL + c1 / 2), Math.floor(fM + 2 * cw / 3))) : cH.fillText(l, Math.floor(fL + c1 / 2), Math.floor(fM + cw / 2 + .1 * ne))
		}
		this.gK = null, this.t2 = new Uint8Array(4), this.bp = function() {
			this.a4n(), qP = [new Array(5), new Array(10), new Array(5)], this.t2[0] = 10, this.t2[1] = 5, this.t2[2] = 2, this.t2[3] = 1, qP[0][0] = {
				name: "daha fazla",
				id: 0,
				fD: 140,
				nB: 120,
				cm: 0
			}, qP[0][1] = {
				name: "Lobi 1",
				id: 1,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[0][2] = {
				name: "ayarlar",
				id: 2,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[0][3] = {
				name: "daha fazla bilgi",
				id: 3,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[0][4] = {
				name: a2W,
				id: 4,
				fD: 90,
				nB: 0,
				cm: 0
			}, qP[1][0] = qP[0][0], qP[1][1] = {
				name: "gizli ad",
				id: 1,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][2] = {
				name: "gizli link",
				id: 2,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][3] = {
				name: "pc deysen lazım olan buton",
				id: 3,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][4] = {
				name: "değiştir Name/Balance",
				id: 4,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][5] = {
				name: "Resolution",
				id: 5,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][6] = {
				name: "Country Minimum Font Size",
				id: 6,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][7] = {
				name: "Leaderboard Refresh Rate",
				id: 7,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][8] = {
				name: "ayarları sıfırla",
				id: 8,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[1][9] = {
				name: "geri",
				id: 9,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[2][0] = qP[0][0], qP[2][1] = {
				name: "öğretici",
				id: 1,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[2][2] = {
				name: "Player Listesi",
				id: 2,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[2][3] = {
				name: "Clan Listesi",
				id: 3,
				fD: 0,
				nB: 0,
				cm: 0
			}, qP[2][4] = {
				name: "Privacy Policy",
				id: 4,
				fD: 0,
				nB: 0,
				cm: 0
			}, !b && d < 5 && qP[2].push({
				name: "çerez Policy",
				id: 5,
				fD: 0,
				nB: 0,
				cm: 0
			}), 5 <= d && qP[2].push({
				name: "Consent Form",
				id: 7,
				fD: 0,
				nB: 0,
				cm: 0
			}), qP[2].push({
				name: "geri",
				id: 6,
				fD: 0,
				nB: 0,
				cm: 0
			}), this.a4o(), this.a4p()
		}, this.a4n = function() {
			this.gK = {
				nX: 0,
				a4q: 0,
				rU: 0,
				gL: 1,
				a4r: 2,
				a1E: 4,
				t3: 2,
				a1O: 2
			}
		}, this.a4p = function() {
			w8.v5[2] = w8.v5[3] = w8.v5[4] = !this.gK.a4q, qP[1][1].nB = this.gK.nX ? 130 : 0, qP[1][2].nB = this.gK.a4q ? 130 : 0, qP[1][3].nB = this.gK.rU ? 130 : 0, qP[1][4].nB = this.gK.gL ? 130 : 0, this.a4s(5), this.a4s(6), this.a4s(7)
		}, this.a4o = function() {
			var lw = v().split("");
			lw.length < 14 ? this.a4n() : (this.gK.nX = parseInt(lw[6]), this.gK.a4q = parseInt(lw[7]), this.gK.rU = parseInt(lw[8]), this.gK.gL = parseInt(lw[9]), this.gK.a4r = parseInt(lw[10]), this.gK.a1E = parseInt(lw[11]), this.gK.t3 = parseInt(lw[12]))
		}, this.vV = function() {
			var l = cC.mH[2].il.vT();
			a8((l += ~~this.gK.nX) + ~~this.gK.a4q + ~~this.gK.rU + ~~this.gK.gL + ~~this.gK.a4r + ~~this.gK.a1E + ~~this.gK.t3 + "0")
		}, this.a4s = function(a4) {
			5 === a4 ? qP[1][a4].name = "Resolution: " + eB.ms(100 * ju.a4t(), 1) : 6 === a4 ? qP[1][a4].name = "Country Minimum Font Size: " + (this.gK.a1E < 4 ? 1 + this.gK.a1E : 2 * (this.gK.a1E - 1)) : 7 === a4 && (qP[1][a4].name = "Leaderboard Refresh Rate: " + eB.ms(100 / this.t2[this.gK.t3], 1))
		}, this.c7 = function(fL, fM) {
			var a4, a4u, a4x;
			if (!(7 <= aJ.nt())) {
				if (a4u = a4v(), a4l) {
					for (a4 = 1; a4 < qP[a4m].length; a4++)
						if (pd(fL, fM, a4u, a4)) return a4x = qP[a4m][a4], 0 === a4m ? 1 === a4x.id ? (gJ.yH = (gJ.yH + 1) % 4, a4x.name = (gJ.yH % 2 ? "Proxy " : "Lobby ") + (1 + (gJ.yH >> 1)), c4.c5 = !0) : 2 === a4x.id ? (a4m = 1, c4.c5 = !0) : 3 === a4x.id && (a4m = 2, c4.c5 = !0) : 1 === a4m ? 1 === a4x.id ? (gJ.gK.nX = !gJ.gK.nX, a4x.nB = gJ.gK.nX ? 130 : 0, gJ.vV(), c4.c5 = !0) : 2 === a4x.id ? (gJ.gK.a4q = !gJ.gK.a4q, gJ.a4p(), gJ.vV(), c4.c5 = !0) : 3 === a4x.id ? (gJ.gK.rU = !gJ.gK.rU, a4x.nB = gJ.gK.rU ? 130 : 0, gJ.vV(), c4.c5 = !0) : 4 === a4x.id ? (gJ.gK.gL = !gJ.gK.gL, a4x.nB = gJ.gK.gL ? 130 : 0, gJ.vV(), c4.c5 = !0) : 5 === a4x.id ? (gJ.gK.a4r++, gJ.gK.a4r %= 8, gJ.a4s(a4x.id), gJ.vV(), ju.y4(), c4.c5 = !0) : 6 === a4x.id ? (gJ.gK.a1E++, gJ.gK.a1E %= 10, gJ.a4s(a4x.id), gJ.vV(), c4.c5 = !0) : 7 === a4x.id ? (gJ.gK.t3++, gJ.gK.t3 %= 4, gJ.a4s(a4x.id), gJ.vV(), c4.c5 = !0) : 8 === a4x.id ? (gJ.a4n(), gJ.a4p(), gJ.vV(), ju.y4(), c4.c5 = !0) : 9 === a4x.id && (a4m = 0, c4.c5 = !0) : 1 === a4x.id ? (nh.bp(p8, !0), nh.bp(p8, !1)) : 2 === a4x.id ? (nh.bp(p9[0], !0), nh.bp(p9[0], !1)) : 3 === a4x.id ? (nh.bp(p9[1], !0), nh.bp(p9[1], !1)) : 4 === a4x.id ? (nh.bp(p7, !0), nh.bp(p7, !1)) : 5 === a4x.id ? (nh.bp(ni, !0), nh.bp(ni, !1)) : 6 === a4x.id ? (a4m = 0, c4.c5 = !0) : 7 === a4x.id && e.setState(7), !0;
					return a4l = !1, !(c4.c5 = !0)
				}
				return pd(fL, fM, a4u, 0) ? (a4l = !(a4m = 0), c4.c5 = !0) : !!(16 <= d && (a4u.f9 = r - 2 * a4u.i8 - a4u.rb, a4u.fA = 2 * a4u.fA + a4u.nc, a4u.i8 *= 2, a4u.nc *= 2, pd(fL, fM, a4u, .001))) && (e.setState(14), !0)
			}
		}, this.lr = function(fL, fM) {
			var a4, a4u, a4y, h4;
			if (!(7 <= aJ.nt())) {
				for (a4u = a4v(), a4y = uL, h4 = a4l ? 0 === a4m ? qP[a4m].length - 1 : qP[a4m].length : 1, uL = -1, a4 = 0; a4 < h4; a4++)
					if (pd(fL, fM, a4u, a4)) {
						uL = a4;
						break
					} a4y !== uL && (c4.c5 = !0)
			}
		}, this.cG = function() {
			var a4, h4, a4u;
			if (!(7 <= aJ.nt()))
				if (a4u = a4v(), cH.textAlign = cJ, cH.textBaseline = cI, vW(a4u.f9, a4u.fA, a4u.i8, a4u.nc, qP[a4m][0].fD, qP[a4m][0].nB, qP[a4m][0].cm, 0 === uL, qP[a4m][0].name, .6), a4l)
					for (h4 = qP[a4m].length, a4 = 1; a4 < h4; a4++) vW(a4u.fB, a4u.fA + a4 * a4u.nc - a4 * i4, a4u.i9, a4u.nc, qP[a4m][a4].fD, qP[a4m][a4].nB, qP[a4m][a4].cm, uL === a4, qP[a4m][a4].name, function(a4x, a4z, oH) {
						if (a4x.name.length <= oH) return a4z;
						return a4z / (1 + (a4x.name.length - oH) / oH)
					}(qP[a4m][a4], .45, 24));
				else 16 <= d && vW(r - 2 * a4u.i8 - a4u.rb, 2 * a4u.fA + a4u.nc, 2 * a4u.i8, 2 * a4u.nc, 55, 0, 0, 0 === uL, "Reload", .26, "(daha iyi oyun)")
		}
	}

	function kW() {
		var rs, a52, a53, a54, a2E = !1;

		function a55() {
			a2E = !0, rs = -1, a52 = new Array(4);
			for (var a4 = 3; 0 <= a4; a4--) a52[a4] = !1;
			var a56 = Math.floor(1 + .02 * pW);
			a53 = new Array(4), (a54 = new Array(4))[1] = a54[3] = a53[0] = a53[2] = 0, a54[0] = a53[3] = -a56, a53[1] = a54[2] = a56
		}

		function a57() {
			if (-1 !== rs)
				if (0 !== ed && eW.h4()) {
					for (var a58 = !1, a4 = 3; 0 <= a4; a4--) a52[a4] && (a58 = !0, gD += a53[a4], gE += a54[a4], eA.lr(a53[a4], a54[a4]), gn.rX());
					a58 ? c4.c5 = !0 : gr.gs()
				} else gr.gs()
		}
		this.wR = function(bs) {
			0 !== ed && eW.h4() && (a2E || a55(), a52[bs] = !0, -1 === rs) && (rs = setInterval(a57, 20), a57())
		}, this.a2x = function(bs) {
			if (0 !== ed && (a2E || a55(), a52[bs] = !1, -1 !== rs)) {
				for (var a58 = !1, a4 = 3; 0 <= a4; a4--) a58 = a58 || a52[a4];
				a58 || this.gs()
			}
		}, this.gs = function() {
			if (a2E && -1 !== rs) {
				for (var a4 = 3; 0 <= a4; a4--) a52[a4] = !1;
				clearInterval(rs), rs = -1
			}
		}
	}

	function kX() {
		var a5A;

		function a5F(f9, fA, fB, fC) {
			return Math.abs(fB - f9) + Math.abs(fC - fA)
		}
		this.f2 = function() {
			return a5A
		}, this.co = function(player, a5B) {
			var a4;
			if (0 !== bN[player].length && b5.b6(a5B) && (b5.bG(a5B) || b5.bF(a5B) !== player))
				for (a4 = 21; 0 <= a4; a4--)
					if (function(a5A, a5B) {
							var a5E, a4, hG = b5.gG(a5A),
								hH = b5.cF(a5A),
								hc = b5.gG(a5B),
								hb = b5.cF(a5B),
								a56 = a5F(hG, hH, hc, hb);
							if (!(a56 < 2))
								for (a5E = a5A, a4 = 0; a4 < a56; a4++)
									if (Math.abs(hc - b5.gG(a5E)) >= Math.abs(hb - b5.cF(a5E)) ? a5E += aV[hG < hc ? 1 : 3] : a5E += aV[hH < hb ? 2 : 0], !b5.lp(a5E)) return !!b5.b6(a5E) && !(0 === a4 || a4 + 20 < a56);
							return
						}(a5A = 21 === a4 ? function(border, a5B) {
							for (var a56, hc = b5.gG(a5B), hb = b5.cF(a5B), bs = 0, min = a5F(hc, hb, b5.gG(border[0]), b5.cF(border[0])), a4 = border.length - 1; 1 <= a4; a4--)(a56 = a5F(hc, hb, b5.gG(border[a4]), b5.cF(border[a4]))) < min && (min = a56, bs = a4);
							return border[bs]
						}(bN[player], a5B) : bN[player][as(a4 * bN[player].length, 21)], a5B)) return !0;
			return !1
		}
	}

	function a2u() {
		var a5G = !1,
			nm = 0,
			c1 = 0,
			i8 = 0,
			lv = null,
			i1 = null,
			a30 = null;

		function a5I() {
			for (var x7, a5K = 0, b3 = 0, dV = Math.floor(c1 / 2), fD = Math.floor(i8 / 2), x6 = 1.5 * Math.PI, a4 = jH; 0 <= a4; a4--) b3 += a30[a4], 0 === a30[a4] && a5K++;
			if (a5G = !1, i1.clearRect(0, 0, c1, c1), i1.fillStyle = i2, i1.fillRect(0, 0, c1, c1), i1.fillStyle = oW, i1.fillRect(0, 0, c1, 2), i1.fillRect(0, 0, 2, c1), i1.fillRect(c1 - 2, 0, 2, c1), i1.fillRect(0, c1 - 2, c1, 2), 0 < b3)
				if (a5K === jH) {
					for (a4 = jH; 0 <= a4; a4--)
						if (0 < a30[a4]) {
							! function(a4, dV, fD) {
								i1.fillStyle = dW.xB[dW.ir[a4]], i1.beginPath(), i1.arc(dV, dV, fD, 0, 2 * Math.PI), i1.fill()
							}(a4, dV, fD);
							break
						}
				} else {
					for (a4 = 0; a4 <= jH; a4++) 0 < a30[a4] && (! function(a4, dV, fD, x6, x7) {
						i1.fillStyle = dW.xB[dW.ir[a4]], i1.beginPath(), i1.arc(dV, dV, fD, x6, x7), i1.lineTo(dV, dV), i1.fill()
					}(a4, dV, fD, x6, x7 = x6 + 2 * Math.PI * a30[a4] / b3), 0 !== a4 && x9(dV, fD, x6), x6 = x7);
					x9(dV, fD, 1.5 * Math.PI)
				}!
			function(dV, fD) {
				i1.beginPath(), i1.arc(dV, dV, fD, 0, 2 * Math.PI), i1.stroke()
			}(dV, fD)
		}

		function x9(dV, fD, xC) {
			i1.beginPath(), i1.moveTo(dV, dV), i1.lineTo(dV + Math.cos(xC) * fD, dV + Math.cos(xC + 1.5 * Math.PI) * fD), i1.stroke()
		}
		this.bp = function() {
			if (dA) {
				var a4;
				for (nm = 0, a30 = new Uint32Array(jH + 1), a4 = jH; 0 <= a4; a4--) a30[a4] = 0;
				for (a4 = dY - 1; 0 <= a4; a4--) a30[dW.dX[dZ[a4]]] += 1;
				this.m0()
			} else a30 = i1 = lv = null
		}, this.qf = function() {
			return c1
		}, this.m0 = function() {
			dA && (c1 = Math.floor(.18 * pW), c1 += c1 % 2, i8 = Math.floor(7 * c1 / 8), (lv = lv || document.createElement("canvas")).width = c1, lv.height = c1, (i1 = lv.getContext("2d", {
				alpha: !0
			})).lineWidth = 2, i1.strokeStyle = cK, a5I())
		}, this.r0 = function() {
			return a30[this.n3()]
		}, this.ip = function() {
			return nm = 31, this.dF(), this.n3()
		}, this.n3 = function() {
			for (var ii = 0, a4 = jH; 0 < a4; a4--) a30[a4] > a30[ii] && (ii = a4);
			return ii
		}, this.dF = function() {
			if (dA && 32 <= ++nm) {
				var a4;
				for (nm = 0, a4 = jH; 0 <= a4; a4--) a30[a4] = 0;
				for (a4 = dY - 1; 0 <= a4; a4--) a30[dW.dX[dZ[a4]]] += bU[dZ[a4]];
				a5G = !0
			}
		}, this.bv = function() {
			dA && a5G && a5I()
		}, this.cG = function() {
			dA && cH.drawImage(lv, mA, qg + 2 * mA)
		}
	}

	function kY() {
		var a5M, hJ;
		this.bp = function() {
			for (var a4 = (hJ = new Uint16Array(101)).length - 1; 0 <= a4; a4--) hJ[a4] = as(32768 * a4, 100);
			this.jR(0)
		}, this.value = function(bB) {
			return hJ[bB]
		}, this.a1y = function() {
			return as(a5M - 1, 2)
		}, this.jR = function(a2D) {
			a5M = 2 * a2D % 32768 + 1
		}, this.random = function() {
			return a5M = 167 * a5M % 32768
		}, this.cf = function(er) {
			return as(er * this.random(), 32768)
		}, this.dP = function(bB) {
			return 0 !== bB && this.random() < this.value(bB)
		}
	}

	function kf() {
		var dV, h4, nT = !1;

		function a5O() {
			(500 <= h4 || 5 < dV) && m0()
		}

		function m0() {
			dV = 0, h4 += h4 < 700 ? 200 : 0, bw.bx() && (a5N() || nT) && (nT = !1, pH(), uk.bp(), jl.bp(), jo.m0(), w8.bp(), jm.m0(), jk.m0(), jj.m0(), w0.m0(), cD.m0(), a5.bp(), 1 <= ed ? (eM.m0(!1), eP.m0(), eB.m0(), gn.m0(), eS.m0(), e9.m0(), fr.m0(), eT.m0(), eQ.m0(), c2.m0(), hy.l4(), hz.m0(), eA.m0(), eX.m0(), eU.m0(), gn.rX()) : (0 === aJ.nt() ? jo.cE(0, !0) : 2 === aJ.nt() ? dy.m0() : 3 === aJ.nt() && jn.m0(), aJ.w4(), aJ.w9()), c4.c5 = !0)
		}

		function a5P(aH) {
			return aH && 128 < aH ? Math.floor(aH) : 128
		}

		function a5N() {
			var i8, nc, i9, nd;
			return 5 <= d ? function() {
				var i8, nc, cw, c1 = a5P(document.documentElement.clientWidth);
				cw = window.visualViewport ? a5P(window.visualViewport.height) : a5P(document.documentElement.clientHeight);
				if (pa = 1, c1 === gF && cw === cB) return;
				pW = qz(r = gF = c1, s = cB = cw), bq = as(s + r, 2), i8 = e.loadNumber(23), nc = e.loadNumber(24), i8 < c1 && (i8 = c1, e.saveNumber(23, i8));
				nc < cw && (nc = cw, e.saveNumber(24, nc));
				c1 = pK.width, cw = pK.height, c1 < i8 && (c1 = i8, pK.width = i8);
				cw < nc && (cw = nc, pK.height = nc);
				return pK.style.width = c1 + "px", pK.style.height = cw + "px", 1
			}() : (ju.a4t(), i8 = a5P(document.documentElement.clientWidth), nc = window.visualViewport ? a5P(window.visualViewport.height) : a5P(document.documentElement.clientHeight), i9 = Math.floor(.5 + pa * i8), nd = Math.floor(.5 + pa * nc), (i9 !== gF || nd !== cB) && (gF = r = i9, cB = s = nd, pW = qz(r, s), bq = as(s + r, 2), pK.width = i9, pK.height = nd, pK.style.width = i8 + "px", pK.style.height = nc + "px", 1))
		}
		this.bp = function() {
			h4 = 100, r = s = pW = gF = cB = bq = 0, pa = dV = 1, pK = document.getElementById("canvasA"), (cH = pK.getContext("2d", {
				alpha: !1
			})).imageSmoothingEnabled = !1, a5N(), window.addEventListener("resize", a5O)
		}, this.dF = function() {
			jx.dF(), ++dV >= h4 && m0()
		}, this.y4 = function() {
			nT = !0, 500 <= h4 && m0()
		}, this.a4t = function() {
			var a4, a5Q = window.devicePixelRatio || 1;
			return 5 <= d ? 1 / a5Q : (a4 = gJ.gK.a4r, (pa = a4 < 3 ? .5 + .25 * a4 : (.5 + .125 * (a4 - 3)) * a5Q) / a5Q)
		}
	}

	function kZ() {
		var player, cN, nZ, a5S, f9, fA, fB, fC, bs, a5T, id;

		function a5Z() {
			var cM;
			if (b5.bG(nZ)) cM = b8;
			else {
				if ((cM = b5.bF(nZ)) === player) return void a5b(!0);
				if (!ch(player, cM)) return function(cM) {
					var max = bU[cM] * jB - ax[cM];
					max <= 0 || (cN -= max = max < cN ? max : cN, player === aw && (e9.nG(max, 0, cM), b0.b1[16] += max), cM === aw && (e9.nK(max, player), b0.b1[10] += max), ax[cM] += max, eA.uD(cM, max))
				}(cM), void a5b(!0)
			}
			player === aw && (b0.b1[13] += cN), eK.av(player, id), ae.b2(player, a5T), b4[player].push(a5S), ae.cQ(player, cN, cM), au.cR(player, !0)
		}

		function a5b(a5e) {
			eK.av(player, id), ae.b2(player, a5T), a5e && (ax[player] += cN)
		}

		function a5V() {
			b5.z8(nZ, player) && b5.zA(nZ)
		}

		function a5U(a4, fu, ex, cd, h4) {
			if (bs = a4, id = fu, player = ex, f9 = b5.gG(cd), fA = b5.cF(cd), fB = b5.gG(h4), fC = b5.cF(h4), a5S = nZ = b5.f3(f9, fA), -1 !== (a5T = ae.fX(player, id))) return cN = ae.am(player, a5T), 1;
			a5V(), eK.av(player, id)
		}
		this.dF = function(a4, id, ex, cd, h4) {
			a5U(a4, id, ex, cd, h4) && (a5V(), function() {
				var a5f = as(cN, 128);
				cN -= a5f = a5f < 1 ? 1 : a5f, player === aw && (b0.b1[15] += a5f);
				if (cN <= at) return player === aw && (b0.b1[15] += cN), void a5b(!1);
				return ae.bT(player, a5T, cN), 1
			}()) && (a4 = b5.f3(f9, fA), nZ = Math.abs(fB - f9) >= Math.abs(fC - fA) ? a4 + aV[f9 < fB ? 1 : 3] : a4 + aV[fA < fC ? 2 : 0], f9 = b5.gG(nZ), fA = b5.cF(nZ), eK.g1(bs, nZ), ! function() {
				if (b5.b6(nZ)) return;
				return 1
			}() ? a5Z() : b5.lp(nZ) && b5.zD(nZ, player))
		}, this.g5 = function(ex, cd) {
			player = ex, nZ = b5.f3(b5.gG(cd), b5.cF(cd)), a5V()
		}
	}

	function ka() {
		var a5g, a5h, lp, a5i;
		this.bp = function() {
			var a4, fL, fM, xu, a5j, c1, cw, i1, u4, u5, aH, bB, d4, ca, a5m;
			if (function() {
					if (lp = !0, a5i = "rgb(" + xX[0] + "," + xX[1] + "," + xX[2] + ")", a3G(xJ)) return 1;
					return lp = !1, 0
				}()) a5h = null;
			else {
				for (a5g = as(96, 4), a5j = 1 === xJ ? (xu = 0, 160) : (xu = 128, 32), a5i = "rgb(" + xu + "," + xu + "," + xu + ")", a5h = new Array(4), a4 = 3; 0 <= a4; a4--) {
					if (a5h[a4] = document.createElement("canvas"), c1 = a4 % 2 == 0 ? aZ : a5g, cw = a4 % 2 == 0 ? a5g : aa + 2 * a5g, a5h[a4].width = c1, a5h[a4].height = cw, u5 = (u4 = (i1 = a5h[a4].getContext("2d", {
							alpha: !1
						})).getImageData(0, 0, c1, cw)).data, a4 % 2 == 0)
						for (fM = a5g - 1; 0 <= fM; fM--)
							for (aH = a5j + Math.floor((fM + 1) * (xu - a5j) / (a5g + 1)), fL = c1 - 1; 0 <= fL; fL--) u5[bB = 4 * ((0 === a4 ? a5g - fM - 1 : fM) * c1 + fL)] = aH, u5[bB + 1] = aH, u5[bB + 2] = aH, u5[bB + 3] = 255;
					else {
						for (fL = a5g - 1; 0 <= fL; fL--)
							for (aH = a5j + Math.floor((fL + 1) * (xu - a5j) / (a5g + 1)), fM = cw - 1 - a5g; a5g <= fM; fM--) u5[bB = 4 * (fM * c1 + (3 === a4 ? a5g - fL - 1 : fL))] = aH, u5[bB + 1] = aH, u5[bB + 2] = aH, u5[bB + 3] = 255;
						for (ca = 1; 0 <= ca; ca--)
							for (fL = a5g - 1; 0 <= fL; fL--)
								for (fM = a5g - 1; 0 <= fM; fM--) d4 = (Math.pow(fL * fL + fM * fM, .5) + 1) / (a5g + 1), aH = a5j + Math.floor((1 < d4 ? 1 : d4) * (xu - a5j)), u5[bB = 4 * ((0 === ca ? a5g - fM - 1 : fM + ca * (cw - a5g)) * c1 + (1 === a4 ? fL : a5g - fL - 1))] = aH, u5[bB + 1] = aH, u5[bB + 2] = aH, u5[bB + 3] = 255
					}
					i1.putImageData(u4, 0, 0)
				}
				a5m = a5j, pw.fillStyle = "rgb(" + a5m + "," + a5m + "," + a5m + ")", pw.fillRect(0, 0, aZ, 1), pw.fillRect(0, aa - 1, aZ, 1), pw.fillRect(0, 0, 1, aa), pw.fillRect(aZ - 1, 0, 1, aa)
			}
		}, this.hv = function() {
			var ca = lp ? 0 : -a5g;
			a4k(ca, ca, aZ - 2 * ca, aa - 2 * ca, h2.a5n, h2.a5o, h2.a5p, h2.a5q) || (cH.fillStyle = a5i, cH.fillRect(0, 0, gF, cB))
		}, this.cG = function() {
			lp || (a4j(0, -a5g, aZ, a5g, h2.a5n, h2.a5o, h2.a5p, h2.a5q) && cH.drawImage(a5h[0], h2.a5r, h2.a5s - a5g), a4j(aZ, -a5g, a5g, aa + 2 * a5g, h2.a5n, h2.a5o, h2.a5p, h2.a5q) && cH.drawImage(a5h[1], h2.a5r + aZ, h2.a5s - a5g), a4j(0, aa, aZ, a5g, h2.a5n, h2.a5o, h2.a5p, h2.a5q) && cH.drawImage(a5h[2], h2.a5r, h2.a5s + aa), a4j(-a5g, -a5g, a5g, aa + 2 * a5g, h2.a5n, h2.a5o, h2.a5p, h2.a5q) && cH.drawImage(a5h[3], h2.a5r - a5g, h2.a5s - a5g))
		}
	}

	function a2M() {
		var vn, a2H, n1, hJ, zs, a5t;

		function a5y() {}

		function a2N() {
			eD.a2N(vn, a2H)
		}

		function a60(pX) {
			1 === ++n1 ? zs.readAsArrayBuffer(pX.data) : hJ.push(pX.data)
		}

		function a5v() {
			n1--, jt.a62(vn, new Uint8Array(zs.result)), 0 < n1 && (zs.readAsArrayBuffer(hJ[0]), hJ.shift())
		}

		function a61() {}

		function a2T(pX) {
			eD.a2T(vn, pX)
		}
		this.bp = function(bs, a5u) {
			vn = bs, a2H = a5u, n1 = 0, hJ = [], (zs = new FileReader).addEventListener("loadend", a5v);
			bs = pF[0];
			vn < eD.wd ? bs += eD.a2A[vn] + pF[1 + a2d] : bs += eD.a2A[0] + "/i" + (1 + a2d) + (vn - eD.we) + "/", (a5t = new WebSocket(bs)).onopen = a2N, a5t.onmessage = a60, a5t.onclose = a2T, a5t.onerror = a61
		}, this.a5x = function() {
			return a5t.readyState === a5t.CONNECTING
		}, this.vf = function() {
			return a5t.readyState === a5t.OPEN
		}, this.a2J = function() {
			return this.a5x() || this.vf()
		}, this.a2K = function(a5u) {
			a2H = a5u
		}, this.send = function(wV) {
			this.vf() && a5t.send(wV)
		}, this.close = function(a2Q) {
			this.a2J() && (a5t.close(a2Q), this.lI())
		}, this.lI = function() {
			a5t.onopen = a5y, a5t.onmessage = a5y, a5t.onclose = a5y, a5t.onerror = a5y, zs.removeEventListener("loadend", a5v)
		}
	}

	function a2q() {
		this.cV = 501, this.a63 = new Uint32Array(this.cV), this.sL = new Uint32Array(this.cV), this.tm = new Uint16Array(this.cV), this.m9 = 0, this.a64 = 1, this.dV = 0, this.max = [0, 0, 0], this.b1 = 0, this.a65 = ["Ortalama Saldırı Gücü", "Saldırı Sayısı", "Gönderilen Gemiler", "Botlar Tarafından Fethedilen", "İnsanlar Tarafından Fethedilen", "Botlar Tarafından Saldırı", "İnsanlar Tarafından Saldırı", "Toprak Kaybı", "Toprak Geliri", "Faiz Geliri", "Alınan Destek", "Toplam Gelir", "Komuta Maliyetleri", "Saldırı Kayıpları", "Savunma Kayıpları", "Gönderi Kayıpları", "Gönderilen Destek", "Toplam Giderler"], this.bp = function() {
			this.m9 = 0, this.a64 = 1, this.dV = 0, this.a66(), this.a67()
		}, this.dF = function() {
			0 < this.dV-- || this.a68()
		}, this.a68 = function() {
			0 !== fH[aw] && (this.a63[this.m9] = bU[aw], this.sL[this.m9] = ax[aw], this.tm[this.m9] = ay.tn(aw), this.a69(this.m9), this.m9++, this.m9 === this.cV && this.a6A(), this.dV = this.a64 - 1, hz.bv())
		}, this.a6A = function() {
			this.a66(), this.a69(0), this.m9 = 1 + as(this.cV, 2);
			for (var a4 = 1; a4 < this.m9; a4++) this.a63[a4] = this.a63[2 * a4], this.sL[a4] = this.sL[2 * a4], this.tm[a4] = this.tm[2 * a4], this.a69(a4);
			this.a64 *= 2
		}, this.a66 = function() {
			this.max[0] = this.max[1] = this.max[2] = 0
		}, this.a67 = function() {
			this.b1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}, this.a69 = function(a4) {
			this.max[0] = this.a63[a4] > this.max[0] ? this.a63[a4] : this.max[0], this.max[1] = this.sL[a4] > this.max[1] ? this.sL[a4] : this.max[1], this.max[2] = this.tm[a4] > this.max[2] ? this.tm[a4] : this.max[2]
		}
	}

	function a2r() {
		this.c1 = 0, this.cw = 0, this.i8 = 0, this.i9 = 0, this.uo = 0, this.up = 0, this.nc = 0, this.nd = 0, this.xl = 0, this.a6B = 0, this.a6C = 0, this.qW = 0, this.bs = 0, this.lw = ["alan", "asker", "Interest", "numara"], this.lF = !1, this.a6D = -1, this.a6E = !1, this.a6F = [0, 0], this.bp = function() {
			this.lF = !1, this.a6D = -1, this.a6E = !1, this.m0()
		}, this.m0 = function() {
			this.c1 = r < 1.618 * s ? r : 1.618 * s;
			var bD = q && r < s ? 1 : q ? .8 : r < s ? .65 : .5;
			this.c1 = Math.floor(bD * this.c1), this.qW = Math.floor(1 + .006 * this.c1), this.c1 -= q && r < s ? 2 * mA + this.qW : 0, this.cw = Math.floor(this.c1 / 1.618), this.i8 = Math.floor(1 + .02 * this.c1), this.i9 = Math.floor(1 + .04 * this.c1), this.nc = this.i9, this.nd = Math.floor(1 + .075 * this.c1), this.a6B = Math.floor(this.c1 * (q ? .03 : .029)), this.a6B = Math.max(this.a6B, 4), this.a6C = Math.floor(.035 * this.c1), this.a6C = Math.max(this.a6C, 4), this.xl = this.cw - 2 * this.nc - this.nd, this.lF && this.a6G()
		}, this.c7 = function(c8, c9) {
			var hP, hO;
			return !!this.lF && (hO = c8, hP = c9, c8 -= as(gF - this.c1, 2), c9 -= as(cB - this.cw, 2), c8 < 0 || c9 < 0 || c8 >= this.c1 || c9 >= this.cw ? 1 < fr.c7(hO, hP) || this.lI() : c9 < this.cw - this.nd ? (this.a6E = !0, this.a6D = (c8 - 2 * this.i8 - this.uo) / this.up) : (hO = (hO = Math.floor(c8 / (this.c1 / this.lw.length))) < 0 ? 0 : hO >= this.lw.length ? this.lw.length - 1 : hO) !== this.bs && (this.bs = hO, this.a6G(), c4.c5 = !0), !0)
		}, this.a2v = function() {
			var ld = Math.floor((this.a6F[0] + gD) / g8),
				le = Math.floor((this.a6F[1] + gE) / g8);
			ld < 1 || le < 1 || aZ - 1 <= ld || aa - 1 <= le || console.log(ld + " " + le)
		}, this.lr = function(c8, c9) {
			return this.a6F[0] = c8, this.a6F[1] = c9, !(!this.lF || !this.a6E || (c8 -= as(gF - this.c1, 2), c9 = this.a6D, this.a6D = (c8 - 2 * this.i8 - this.uo) / this.up, (0 <= this.a6D && this.a6D <= 1 || 0 <= c9 && c9 <= 1) && (c4.c5 = !0), 0))
		}, this.pj = function() {
			this.a6E && (this.a6E = !1)
		}, this.m5 = function() {
			this.lF ? this.lI() : this.show()
		}, this.show = function() {
			b0.m9 < 2 || (this.lF = !0, this.a6G())
		}, this.lI = function() {
			this.lF = !1, this.a6D = -1
		}, this.a6G = function() {
			this.bs < 2 ? this.uo = c2.measureText(eQ.gM(b0.max[this.bs]), this.a6B + bu) : 2 === this.bs && (this.uo = c2.measureText(eB.ms(6, 2), this.a6B + bu)), this.up = this.c1 - 2 * this.i8 - this.uo - this.i9
		}, this.bv = function() {
			this.lF && this.a6G()
		}, this.cG = function() {
			this.lF && this.nj()
		}, this.nj = function() {
			var fL = as(gF - this.c1, 2),
				fM = as(cB - this.cw, 2);
			cH.setTransform(1, 0, 0, 1, fL, fM), cH.fillStyle = i2, cH.fillRect(0, 0, this.c1, this.cw), this.a6H(), cH.strokeRect(0, 0, this.c1, this.cw), cH.textAlign = oy, cH.font = this.a6B + bu, 0 === this.bs ? this.a6I(b0.a63, fL, fM) : 1 === this.bs ? this.a6I(b0.sL, fL, fM) : 2 === this.bs ? this.a6J(fL, fM) : 3 === this.bs && (this.a6K(fL, fM), this.a6L(fL, fM)), cH.setTransform(1, 0, 0, 1, 0, 0)
		}, this.a6H = function() {
			var a4, t;
			for (cH.lineWidth = this.qW, cH.textBaseline = cI, cH.textAlign = cJ, cH.strokeStyle = cK, cH.font = bt + this.a6C + bu, t = this.c1 / this.lw.length, cH.fillStyle = ob, cH.fillRect(this.bs * t, this.cw - this.nd, t, this.nd), cH.fillStyle = cK, cH.fillRect(0, this.cw - this.nd - .5 * this.qW, this.c1, this.qW), a4 = 1; a4 <= 3; a4++) cH.fillRect(a4 * t, this.cw - this.nd, this.qW, this.nd);
			for (a4 = this.lw.length - 1; 0 <= a4; a4--) cH.fillText(this.lw[a4], (a4 + .5) * t, this.cw - .46 * this.nd)
		}, this.a6I = function(hJ, fL, fM) {
			var qs = b0.max[this.bs],
				bn = (cH.setTransform(1, 0, 0, 1, fL + 2 * this.i8 + this.uo, fM + this.nc), cH.lineWidth = 2, this.xl / Math.sqrt(qs));
			cH.beginPath(), cH.moveTo(this.up, this.xl - bn * Math.sqrt(hJ[b0.m9 - 1]));
			for (var a4 = b0.m9 - 2; 0 <= a4; a4--) cH.lineTo(a4 * this.up / (b0.m9 - 1), this.xl - bn * Math.sqrt(hJ[a4]));
			cH.stroke();
			fL = this.mE(hJ, bn, .5);
			fL < .95 && cH.fillText(eQ.gM(qs), -this.i8, 0), .05 < Math.abs(fL - .5) && cH.fillText(eQ.gM(Math.floor(qs / 4)), -this.i8, Math.floor(this.xl / 2)), .05 < fL && cH.fillText("0", -this.i8, this.xl)
		}, this.a6J = function(fL, fM) {
			cH.setTransform(1, 0, 0, 1, fL + 2 * this.i8 + this.uo, fM + this.nc), cH.lineWidth = 2;
			var bn = this.xl / b0.max[this.bs];
			cH.beginPath(), cH.moveTo(this.up, this.xl - bn * b0.tm[b0.m9 - 1]);
			for (var a4 = b0.m9 - 2; 0 <= a4; a4--) cH.lineTo(a4 * this.up / (b0.m9 - 1), this.xl - bn * b0.tm[a4]);
			cH.stroke();
			fL = this.mE(b0.tm, bn, 1), fM = b0.max[this.bs] / 100;
			fL < .95 && cH.fillText(eB.ms(fM, 2), -this.i8, 0), .05 < Math.abs(fL - .5) && cH.fillText(eB.ms(fM / 2, 2), -this.i8, Math.floor(this.xl / 2)), .05 < fL && cH.fillText(eB.ms(0, 2), -this.i8, this.xl)
		}, this.a6K = function(fL, fM) {
			cH.setTransform(1, 0, 0, 1, fL + .34 * this.c1, fM + 2 * this.nc), cH.textAlign = oy;
			for (var tA = this.cw - 4 * this.nc - this.nd, a4 = 7; 0 <= a4; a4--) cH.fillText(b0.a65[a4], 0, a4 * tA / 7);
			cH.setTransform(1, 0, 0, 1, fL + .39 * this.c1, fM + 2 * this.nc), cH.textAlign = mm;
			fL = b0.b1[1];
			for (cH.fillText(eB.ms(b0.b1[0] / (10 * (fL < 1 ? 1 : fL)), 1), 0, 0), a4 = 6; 1 <= a4; a4--) cH.fillText(b0.b1[a4].toString(), 0, a4 * tA / 7);
			cH.fillText(eB.ms(100 * (1 - bU[aw] / b0.b1[7]), 0), 0, tA)
		}, this.a6L = function(fL, fM) {
			cH.setTransform(1, 0, 0, 1, fL + .79 * this.c1, fM + 2 * this.nc), cH.textAlign = oy;
			var a4, tA = this.cw - 4 * this.nc - this.nd;
			for (cH.fillStyle = oY, a4 = 2; 0 <= a4; a4--) cH.fillText(b0.a65[a4 + 8], 0, a4 * tA / 9);
			for (cH.fillStyle = oX, cH.fillText(b0.a65[11], 0, 3 * tA / 9), cH.fillStyle = oo, a4 = 8; 4 <= a4; a4--) cH.fillText(b0.a65[a4 + 8], 0, a4 * tA / 9);
			cH.fillStyle = on, cH.fillText(b0.a65[17], 0, 9 * tA / 9), cH.fillStyle = oY;
			var a6M = eQ.gM(b0.b1[8] + b0.b1[9] + b0.b1[10] + b0.b1[11]),
				a6N = cH.measureText(a6M).width,
				fL = (cH.setTransform(1, 0, 0, 1, fL + .83 * this.c1 + a6N, fM + 2 * this.nc), cH.fillText(eQ.gM(b0.b1[8]), 0, 0), cH.fillText(eQ.gM(b0.b1[9]), 0, tA / 9), cH.fillText(eQ.gM(b0.b1[10]), 0, 2 * tA / 9), cH.fillStyle = oX, cH.fillText(a6M, 0, 3 * tA / 9), cH.fillStyle = oo, b0.b1[13] - ae.a0V(aw)),
				a6N = (cH.fillText(eQ.gM(b0.b1[12]), 0, 4 * tA / 9), cH.fillText(eQ.gM(fL), 0, 5 * tA / 9), cH.fillText(eQ.gM(b0.b1[14]), 0, 6 * tA / 9), cH.fillText(eQ.gM(b0.b1[15]), 0, 7 * tA / 9), cH.fillText(eQ.gM(b0.b1[16]), 0, 8 * tA / 9), b0.b1[12] + fL + b0.b1[14] + b0.b1[15] + b0.b1[16] + b0.b1[17]);
			cH.fillStyle = on, cH.fillText(eQ.gM(a6N), 0, tA), cH.fillStyle = cK
		}, this.mE = function(hJ, bn, rr) {
			var a4, pX, a3w;
			return this.a6D < 0 || 1 < this.a6D ? .25 : (a4 = this.a6D * (b0.m9 - 1), a3w = hJ[pX = Math.floor(a4)], a3w += (a4 - pX) * (hJ[pX < b0.m9 - 1 ? pX + 1 : pX] - a3w), cH.strokeStyle = os, .04 < this.a6D && this.a6R(0, this.xl - bn * Math.pow(a3w, rr), a4 * this.up / (b0.m9 - 1), this.xl - bn * Math.pow(a3w, rr)), .04 < a3w / b0.max[this.bs] && this.a6R(a4 * this.up / (b0.m9 - 1), this.xl, a4 * this.up / (b0.m9 - 1), this.xl - bn * Math.pow(a3w, rr)), cH.fillStyle = oj, cH.beginPath(), cH.arc(a4 * this.up / (b0.m9 - 1), this.xl - bn * Math.pow(a3w, rr), 4, 0, 2 * Math.PI), cH.fill(), hJ = this.a6D * c4.to(), hJ = 0 === fH[aw] ? Math.floor(hJ * eX.tu) : Math.floor(hJ * c4.dU()), cH.fillStyle = cK, cH.fillText(1 === rr ? eB.ms(a3w / 100, 2) : eQ.gM(Math.floor(a3w)), -this.i8, this.xl - bn * Math.pow(a3w, rr)), cH.textAlign = cJ, cH.fillText(eB.sU(hJ), a4 * this.up / (b0.m9 - 1), this.xl + this.a6B - (q ? 2 : 0)), cH.textAlign = oy, bn * Math.pow(a3w, rr) / this.xl)
		}, this.a6R = function(f9, fA, fB, fC) {
			cH.beginPath(), cH.moveTo(f9, fA), cH.lineTo(fB, fC), cH.stroke()
		}
	}

	function a2t() {
		this.xB = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.t9 = [cK, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", cK, "rgb(170,170,170)"], this.a6S = [cK, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cK, gI], this.a6T = [gI, cK, cK, cK, gI, gI, gI, gI, cK];
		var xS, a6Y, a6U = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
			a6V = (this.a1c = ["rgba(" + a6U[0] + ",", "rgba(" + a6U[1] + ",", "rgba(" + a6U[2] + ",", "rgba(" + a6U[3] + ",", "rgba(" + a6U[4] + ",", "rgba(" + a6U[5] + ",", "rgba(" + a6U[6] + ",", "rgba(" + a6U[7] + ",", "rgba(" + a6U[8] + ",", "rgba(" + a6U[9] + ","], this.a1d = ["rgb(" + a6U[0] + ")", "rgb(" + a6U[1] + ")", "rgb(" + a6U[2] + ")", "rgb(" + a6U[3] + ")", "rgb(" + a6U[4] + ")", "rgb(" + a6U[5] + ")", "rgb(" + a6U[6] + ")", "rgb(" + a6U[7] + ")", "rgb(" + a6U[8] + ")", "rgb(" + a6U[9] + ")"], this.bo = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.u2 = [
				[255, 255, 255, 180],
				[255, 0, 0, 180],
				[0, 255, 0, 180],
				[50, 50, 255, 180],
				[255, 255, 0, 180],
				[255, 0, 255, 180],
				[0, 255, 255, 180],
				[255, 255, 255, 180],
				[0, 0, 0, 180]
			], [
				[255, 255, 255],
				[255, 0, 0],
				[0, 255, 0],
				[0, 0, 255],
				[255, 255, 0],
				[255, 0, 255],
				[0, 255, 255],
				[255, 255, 255],
				[0, 0, 0]
			]),
			xE = (this.ir = [0, 1, 2, 3, 4, 5, 6, 7, 8], "[");
		this.bp = function(iC) {
			this.dX = new Uint8Array(b8), this.a6Z(), dA && (dr.ds && dr.dt.a0G ? this.yu() : 9 === dv ? this.a6a() : this.dF(iC))
		}, this.yu = function() {
			var a4, b3 = hQ;
			for (this.ir = [0, 1, 2, 3, 4, 5, 6, 7, 8], a4 = 0; a4 < b3; a4++) this.dX[a4] = dr.dt.a0G[a4]
		}, this.a6Z = function() {
			for (var a4 = this.ir.length - 1; 0 <= a4; a4--) this.ir[a4] = a4;
			xS = [], a6Y = []
		}, this.a6a = function() {
			for (var a4 = cq + e2.e3 - 1; 0 <= a4; a4--) this.dX[a4] = 1;
			for (a4 = cq + e2.e3; a4 < b8; a4++) this.dX[a4] = 2;
			this.ir[1] = 7, this.ir[2] = 8
		}, this.dF = function(iC) {
			var xV = new Uint8Array(cq),
				a1g = new Uint8Array(cq),
				a6b = new Uint16Array(8),
				a6c = new Uint16Array(this.ir.length);
			this.a6d(iC, xV, a1g, a6b), this.ys(a6b), dx || this.a6e(a6c, xV, a1g), this.a6f(xV, a1g, a6c), dx ? this.a6g() : this.a6h()
		}, this.a6d = function(iC, xV, a1g, a6i) {
			for (var cm, pX, a6j, b3 = this.ir.length - 1, hJ = new Uint16Array(b3), a4 = cq - 1; 0 <= a4; a4--) {
				for (cm = b3; 1 <= cm; cm--) hJ[cm - 1] = Math.abs(4 * iC[a4].xu[0] - a6V[cm][0]) + Math.abs(4 * iC[a4].xu[1] - a6V[cm][1]) + Math.abs(4 * iC[a4].xu[2] - a6V[cm][2]);
				for (a6j = 768, cm = b3 - 1; 0 <= cm; cm--) hJ[pX = (cm + a4) % b3] < a6j && (a6j = hJ[pX], xV[a4] = pX);
				for (a6i[xV[a4]] += 4, a6j = 768, cm = b3 - 1; 0 <= cm; cm--) hJ[pX = (cm + a4) % b3] < a6j && pX !== xV[a4] && (a6j = hJ[pX], a1g[a4] = pX);
				a6i[a1g[a4]]++
			}
		}, this.ys = function(a6i) {
			for (var cm, m6, b3 = this.ir.length - 1, a4 = b3; 0 <= a4; a4--) this.ir[a4] = a4;
			for (a4 = b3 - 1; 0 <= a4; a4--) a6i[a4]++;
			for (a4 = 1; a4 <= b3; a4++) {
				for (m6 = 0, cm = 1; cm < b3; cm++) a6i[cm] > a6i[m6] && (m6 = cm);
				a6i[m6] = 0, this.ir[a4] = m6 + 1
			}
		}, this.a6e = function(a6c, xV, a1g) {
			var a4, cm, a6k, dV, bD, pX, gy, nB, a6l = this.ir.length - 1,
				a6m = new Uint16Array(a6l),
				a6n = [],
				a6o = 0;
			loop: for (a4 = cq - 1; 0 <= a4; a4--)
				if (null !== (a6k = function(a4) {
						var a6q, a6r;
						return (a6q = nY[a4].indexOf(xE)) < 0 || !(1 < (a6r = nY[a4].indexOf("]")) - a6q && a6r - a6q <= 8) ? null : nY[a4].substring(a6q + 1, a6r).toUpperCase().trim()
					}(a4))) {
					for (cm = xS.length - 1; 0 <= cm; cm--)
						if (a6k === xS[cm]) {
							a6Y[cm].push(a4);
							continue loop
						} xS.push(a6k), a6n.push(!1), a6Y.push([]), a6Y[xS.length - 1].push(a4)
				}
			for (cm = xS.length - 1; 0 <= cm; cm--) a6o = Math.max(a6o, a6Y[cm].length);
			for (; 2 < jH && a6o > as(cq, jH);) jH--;
			for (cm = xS.length - 1; 0 <= cm; cm--) {
				for (bD = -1, dV = xS.length - 1; 0 <= dV; dV--) !a6n[dV] && (-1 === bD || a6Y[dV].length > a6Y[bD].length) && (bD = dV);
				for (dV = a6l - 1; 0 <= dV; dV--) a6m[dV] = 1;
				for (dV = a6Y[bD].length - 1; 0 <= dV; dV--) a6m[xV[a6Y[bD][dV]]] += 3, a6m[a1g[a6Y[bD][dV]]]++;
				for (a4 = a6l - 1; 0 <= a4; a4--) {
					for (pX = bD % a6l, dV = a6l - 1; 0 <= dV; dV--) a6m[dV] > a6m[pX] && (pX = dV);
					for (gy = -1, dV = jH; 0 < dV; dV--)
						if (this.ir[dV] === pX + 1) {
							gy = dV;
							break
						} if (a6m[pX] = 0, -1 !== gy) {
						for (nB = 0, dV = jH; 0 < dV; dV--) a6c[gy] > a6c[dV] && nB++;
						if (nB !== jH - 1) {
							for (dV = a6Y[bD].length - 1; 0 <= dV; dV--) a6c[gy]++, this.dX[a6Y[bD][dV]] = gy;
							break
						}
					}
				}
				a6n[bD] = !0
			}
		}, this.a6f = function(xV, a1g, a6c) {
			for (var a4, a3i, b3 = this.ir.length - 1, border = as(cq, jH), a6s = (0 < cq % jH && border++, new Uint8Array(1 + b3)), cm = b3; 1 <= cm; cm--) a6s[this.ir[cm]] = cm;
			for (a4 = 0; a4 < cq; a4++) a3i = a6s[xV[a4] + 1], 0 === this.dX[a4] && a3i <= jH && a6c[a3i] < border && (a6c[a3i]++, this.dX[a4] = a3i);
			for (a4 = 0; a4 < cq; a4++) a3i = a6s[a1g[a4] + 1], 0 === this.dX[a4] && a3i <= jH && a6c[a3i] < border && (a6c[a3i]++, this.dX[a4] = a3i);
			for (cm = jH; 1 <= cm; cm--)
				for (a4 = cq - 1; 0 <= a4 && !(a6c[cm] >= border); a4--) 0 === this.dX[a4] && (a6c[cm]++, this.dX[a4] = cm)
		}, this.a6g = function() {
			var a4, ca, a6i = new Uint16Array(jH);
			for (a6i[jH - 1] = b8, a4 = jH - 2; 0 <= a4; a4--) a6i[a4] = dy.dz[a4].n0;
			for (a6i[0]--, ca = 0 === a6i[0] ? 1 : 0, a4 = cq; a4 < b8; a4++) this.dX[a4] = ca + 1, a6i[ca]--, a6i[ca] <= 0 && ca++
		}, this.a6h = function() {
			for (var a4 = cq; a4 < b8; a4++) this.dX[a4] = 1 + a4 % jH
		}, this.iq = function(a6t) {
			if (dx) return [512, ""];
			for (var a4, m6 = -1, a6u = -1, cm = xS.length - 1; 0 <= cm; cm--)
				for (a4 = a6Y[cm].length - 1; 0 <= a4 && this.ir[this.dX[a6Y[cm][a4]]] === a6t; a4--)(-1 === m6 || sV[a6Y[cm][a4]] < sV[m6]) && (m6 = a6Y[cm][a4], a6u = cm);
			return -1 === m6 || 0 === fH[m6] ? [512, ""] : [m6, xS[a6u]]
		}
	}

	function bV() {
		for (var fL, fM, a4 = aQ - 1; 0 <= a4; a4--) fL = as(aS[a4], 4) % aZ, fM = as(aS[a4], 4 * aZ), d0[aM] = d0[aM] > fL ? fL : d0[aM], d3[aM] = d3[aM] > fM ? fM : d3[aM], cz[aM] = cz[aM] < fL ? fL : cz[aM], d2[aM] = d2[aM] < fM ? fM : d2[aM]
	}

	function aj() {
		var bD, bB, a4, b3 = b4[aM].length;
		loop: for (a4 = b3 - 1; 0 <= a4; a4--) {
			for (bD = 3; 0 <= bD; bD--)
				if (bB = b4[aM][a4] + aV[bD], b5.bG(bB) || b5.bE(bB) && b5.bF(bB) !== aM) {
					b5.cW(b4[aM][a4], aM);
					continue loop
				} b4[aM][a4] = b4[aM][b3 - 1], b4[aM].pop(), b3--
		}
	}

	function ak() {
		var bD, bB, a6v, a6w, b3 = bM[aM].length;
		loop: for (var a4 = b3 - 1; 0 <= a4; a4--) {
			for (a6v = a6w = !1, bD = 3; 0 <= bD; bD--) {
				if (bB = bM[aM][a4] + aV[bD], b5.z4(bB, aM)) continue loop;
				a6v = a6v || b5.lp(bB), a6w = a6w || b5.z3(bB)
			}
			a6v ? bN[aM].push(bM[aM][a4]) : a6w ? bQ[aM].push(bM[aM][a4]) : b5.hi(bM[aM][a4], aM), bM[aM][a4] = bM[aM][b3 - 1], bM[aM].pop(), b3--
		}
	}

	function bK() {
		bU[aP] -= aQ
	}

	function bL(border) {
		for (var b3 = border.length, a4 = b3 - 1; 0 <= a4; a4--) b5.hq(aP, border[a4]) || (border[a4] = border[b3 - 1], border.pop(), b3--)
	}

	function bO(border) {
		for (var b3 = border.length, a4 = b3 - 1; 0 <= a4; a4--) !b5.hq(aP, border[a4]) && b5.b6(border[a4]) && (border[a4] = border[b3 - 1], border.pop(), b3--)
	}

	function bP(border) {
		for (var bD, bB, b3 = border.length, a4 = b3 - 1; 0 <= a4; a4--)
			for (bD = 3; 0 <= bD; bD--)
				if (bB = border[a4] + aV[bD], b5.z4(bB, aP)) {
					bM[aP].push(border[a4]), border[a4] = border[b3 - 1], border.pop(), b3--;
					break
				}
	}

	function bR() {
		for (var bD, bB, a4 = aQ - 1; 0 <= a4; a4--)
			for (bD = 3; 0 <= bD; bD--) bB = aS[a4] + aV[bD], b5.z5(aP, bB) && b5.z6(bB) && (bM[aP].push(bB), b5.b7(bB, aP))
	}

	function bS() {
		var fL, fM;
		loop: for (; d3[aP] < d2[aP];) {
			for (fL = cz[aP]; fL >= d0[aP]; fL--)
				if (b5.hq(aP, 4 * (d3[aP] * aZ + fL))) break loop;
			d3[aP]++
		}
		loop: for (; d3[aP] < d2[aP];) {
			for (fL = cz[aP]; fL >= d0[aP]; fL--)
				if (b5.hq(aP, 4 * (d2[aP] * aZ + fL))) break loop;
			d2[aP]--
		}
		loop: for (; d0[aP] < cz[aP];) {
			for (fM = d2[aP]; fM >= d3[aP]; fM--)
				if (b5.hq(aP, 4 * (fM * aZ + d0[aP]))) break loop;
			d0[aP]++
		}
		loop: for (; d0[aP] < cz[aP];) {
			for (fM = d2[aP]; fM >= d3[aP]; fM--)
				if (b5.hq(aP, 4 * (fM * aZ + cz[aP]))) break loop;
			cz[aP]--
		}
	}

	function ch(player, cM) {
		return 0 === dW.dX[player] || dW.dX[player] !== dW.dX[cM]
	}

	function lk(player, cM) {
		for (var pX, a6x = ae.af(player), a4 = 0; a4 < a6x; a4++)
			if (0 === ae.ag(player, a4))
				if ((pX = ae.al(player, a4)) === b8) {
					if (cM === b8) return !1;
					if (lj(cM)) return !0
				} else if (cM === b8) {
			if (lj(pX)) return !0
		} else if (lo(cM, pX)) return !0;
		return !1
	}

	function lj(player) {
		for (var a4, bC, b3 = bM[player].length, bD = 3; 0 <= bD; bD--)
			for (bC = aV[bD], a4 = 0; a4 < b3; a4++)
				if (b5.bG(bM[player][a4] + bC)) return !0;
		return !1
	}

	function lo(a6y, a6z) {
		var a4, t, bD, bC, bB, a70 = bM[a6y].length,
			a71 = bM[a6z].length;
		for (a71 < a70 && (t = a6y, a6y = a6z, a6z = t, t = a70, a70 = a71, 0), bD = 3; 0 <= bD; bD--)
			for (bC = aV[bD], a4 = 0; a4 < a70; a4++)
				if (bB = bM[a6y][a4] + bC, b5.bE(bB) && b5.bF(bB) === a6z) return !0;
		return !1
	}

	function a2s() {
		function a76() {
			c4.gg = performance.now(), c4.a72(), window.requestAnimationFrame(a76)
		}

		function a77() {
			var t = performance.now();
			c4.gg + 1500 < t && (c4.gg = t, c4.a72())
		}
		this.c5 = !1, this.a72 = null, this.a73 = null, this.a74 = null, this.gg = 0, this.a75 = -1, this.bp = function() {
			window.requestAnimationFrame(a76), this.gg = performance.now()
		}, this.a2w = function() {
			1 !== ed || !dx || fr.lz || fd || fr.m5(), -1 === this.a75 && (this.a75 = setInterval(a77, 2e3))
		}, this.yC = function() {
			this.c5 = !0, -1 !== this.a75 && (clearInterval(this.a75), this.a75 = -1)
		}, this.jh = function() {
			this.a72 = this.a78, this.a73 = null, this.c5 = !0
		}, this.jc = function() {
			this.a73 = new a79, this.a72 = this.a7A
		}, this.jd = function() {
			this.a74 = new a7B, this.a74.bp(), this.a72 = this.a7C
		}, this.a78 = function() {
			jj.dF(), jm.dF(), ju.dF(), eD.dF(), eZ.wf(), cD.dF(), this.c5 && (this.c5 = !1, aJ.cG())
		}, this.a7A = function() {
			this.a73.dF()
		}, this.a7C = function() {
			this.a74.dF()
		}, this.dU = function() {
			return (dx ? this.a73 : this.a74).wc
		}, this.to = function() {
			return 56
		}
	}

	function a79() {
		this.gg = c4.gg, this.a64 = 56, this.bs = 0, this.wc = 0, this.a7D = !1, this.dF = function() {
			ju.dF(), fd ? ee() : 0 === this.bs ? c4.gg >= this.gg && (this.gg += this.a64 * Math.floor(1 + (c4.gg - this.gg) / this.a64), 2 === ed || fr.lz ? e8() : (eE(), this.wc++, hC.uH()), this.bs++) : ((fr.lz ? ee : (c4.c5 = !0, eb))(), this.bs = 0), eV(), c4.c5 && (c4.c5 = !1, ht())
		}
	}

	function a7B() {
		var df;
		this.gg = c4.gg, this.a64 = 56, this.bs = 0, this.wc = 0, this.wb = 0, this.a7E = null, this.a7F = 7, this.nn = 0, this.bp = function() {
			this.wb = 0, this.a7E = [], this.bs = 0, this.wc = 0, df = 0
		}, this.a7G = function(wV) {
			if (fd) this.tp(wV);
			else if (this.a7E.push(wV), 2 === ed) {
				for (var a4 = 0; a4 < this.a7E.length; a4++) jt.a7H(this.a7E[a4], df), df = (df + 1) % 8;
				this.a7E = []
			}
		}, this.tp = function(wV) {
			jt.a7H(wV, df), df = (df + 1) % 8, eB.tp(this.wb), this.wb === jJ ? (fe.dF(), this.wb = 0, this.bs = 0, this.wc = 0, this.gg = c4.gg) : (this.wb++, eA.j8(), eA.ec(!0), hC.uH())
		}, this.dF = function() {
			ju.dF(), fd ? (c4.c5 = eB.tp(-1) || c4.c5, ee()) : (0 !== this.bs || c4.gg >= this.gg && (this.gg += this.a64 * Math.floor(1 + (c4.gg - this.gg) / this.a64), 2 === ed ? e8() : this.a7I(), this.bs++, 27 < c4.gg - this.nn)) && this.a7J(), eV(), c4.c5 && (c4.c5 = !1, ht()), this.nn = c4.gg
		}, this.a7J = function() {
			c4.c5 = !0, eb(), this.bs = 0
		}, this.a7I = function() {
			if (this.wc !== 7 * this.wb) eE(), this.wc++, hC.uH();
			else {
				for (var a7K = !1; this.a7L() && (a7K = !0, eE(), this.wc++, 0 < this.a7E.length);)
					for (var a4 = this.a7F - 2; 0 <= a4; a4--) eE(), this.wc++;
				a7K ? hC.uH() : (e8(), hC.jA())
			}
		}, this.a7L = function() {
			return 0 < this.a7E.length && (this.wb++, jt.a7H(this.a7E[0], df), df = (df + 1) % 8, this.a7E.shift(), !0)
		}
	}

	function ko() {
		var ga = 0,
			a7M = !0;

		function a7O(l) {
			8 !== aJ.nt() || 2 !== fV[aw] && (0 !== fH[aw] || fd) || e9.n5(l)
		}
		this.dF = function() {
			var t, nq;
			c4.gg > ga && (ga = c4.gg + 2500, t = new Date, nq = t.getUTCSeconds(), a7M ? nq < 45 && (a7M = !1) : nq < 45 || -1 !== c4.a75 || (a7M = !0, (nq = t.getUTCMinutes() + 1) % 15 == 0 && a7O(30 === nq ? "Upcoming Battle Royale Contest!" : "Upcoming Alliance Contest!")))
		}
	}

	function kb() {
		var f9, fA, fB, fC;

		function a7Q() {
			return Math.pow(Math.pow(fB - f9, 2) + Math.pow(fC - fA, 2), .5)
		}

		function a7P(pX) {
			f9 = pa * pX.touches[0].clientX, fA = pa * pX.touches[0].clientY, fB = pa * pX.touches[1].clientX, fC = pa * pX.touches[1].clientY
		}
		this.pb = function(pX) {
			return 1 < pX.touches.length && (a7P(pX), hy.lI(), !0)
		}, this.pg = function(pX) {
			var a3k, rR, rT;
			return 0 !== ed && 1 < pX.touches.length && (eW.h4() && (a3k = a7Q(), a7P(pX), pX = a7Q(), rR = Math.floor((f9 + fB) / 2), rT = Math.floor((fA + fC) / 2), gn.rY(rR, rT, pX / a3k), c4.c5 = !0), !0)
		}
	}

	function kc() {
		var cV, cd;

		function a7Z(a7r, wV) {
			for (var hJ = new Array(a7r), a4 = 0; a4 < a7r; a4++) hJ[a4] = a7S(wV, 10);
			return m.iY(hJ)
		}

		function a7S(a7s, b3) {
			for (var ns = 0, a4 = cd; a4 < cd + b3; a4++) ns |= (a7s[as(a4, 8)] >> 7 - a4 % 8 & 1) << cd + b3 - a4 - 1;
			return cd += b3, ns
		}
		this.a62 = function(vn, wV) {
			var a7R;
			(cd = 0) === (cV = wV.length) ? eD.a2R(vn, 3205): 0 === (a7R = a7S(wV, 1)) ? function(vn, wV) {
				var a7V = a7S(wV, 2);
				0 === a7V ? (0 === a7S(wV, 1) ? function(vn, wV) {
					var a4;
					if (0 === vn && 8 !== aJ.nt() && !(cV < 4)) {
						uk.br(0, a7Z(a7S(wV, 5), wV)), uk.br(1, "[" + a7Z(a7S(wV, 3), wV) + "]");
						var a7a = a7S(wV, 12),
							a7b = a7S(wV, 6),
							hJ = new Array(a7a);
						for (a4 = 0; a4 < a7a; a4++) hJ[a4] = a7S(wV, a7b);
						jk.s1(hJ)
					}
				} : function(vn, wV) {
					var a4;
					if (8 !== aJ.nt())
						if (cV < 3) eD.a2R(vn, 3208);
						else {
							var a7c, iG, vn = a7S(wV, 1),
								position = a7S(wV, 16),
								ns = a7S(wV, 4),
								hJ = [];
							for (a4 = 0; a4 < ns; a4++) iG = a7S(wV, 14), a7c = a7S(wV, 5), a7c = a7Z(a7c, wV), hJ.push({
								name: a7c,
								iG: iG
							});
							0 === vn ? cD.ud(0, hJ, 10, 1, .36, .55, position) : cD.ud(1, hJ, 100, 2, .47, .5, position)
						}
				})(vn, wV) : 1 === a7V ? function(vn, wV) {
					var a4, ca, xR, xS, a7d, a7e;
					if (vn !== eD.wJ) eD.close(vn, 3239);
					else if (6 === aJ.nt() && jv.bp(), 7 !== aJ.nt()) eD.close(vn, 3251);
					else {
						var wx = [0, 0, 0, 0],
							a7f = a7S(wV, 6);
						for (a4 = 0; a4 < 4; a4++) wx[a4] = a7S(wV, a7f);
						var a7g = a7S(wV, 4),
							a7h = [];
						for (a4 = 0; a4 < a7g; a4++) {
							for (a7h.push({
									id: a7S(wV, 5),
									jN: a7S(wV, 4),
									xM: 1 === a7S(wV, 1),
									xJ: a7S(wV, 6),
									xK: a7S(wV, 14),
									xP: a7S(wV, a7f),
									xQ: a7S(wV, 9) + 1,
									vw: a7S(wV, 10)
								}), xR = a7S(wV, 3), xS = new Array(xR), ca = 0; ca < xR; ca++) a7d = a7S(wV, 9) + 1, a7e = a7Z(a7S(wV, 3), wV), xS[ca] = ("" === a7e ? "other: " : "[" + a7e + "]: ") + a7d;
							a7h[a4].xR = xR, a7h[a4].xS = xS
						}
						jv.ul(wx, a7h)
					}
				}(vn, wV) : 2 !== a7V && 3 !== a7V || eZ.bp(wV)
			}(vn, wV) : 1 === a7R && function(vn, wV) {
				var a4y = aJ.nt();
				8 !== a4y ? 10 === a4y && eD.a2R(vn, 3243) : vn !== eD.jg ? eD.a2R(vn, 3244) : 0 === a7S(wV, 1) ? c4.a74.a7G(wV) : function(wV) {
					var a7n = a7S(wV, 2);
					(0 === a7n ? function(wV) {
						var mx;
						3 !== cV ? eD.a2R(eD.jg, 3230) : (mx = a7S(wV, 9), wV = a7S(wV, 7), 0 !== fH[mx] && 0 !== fH[aw] && (wV %= a5.a6, e9.mw(mx, aw, wV), eA.n9(mx, 1, wV)))
					} : 1 === a7n ? function(wV) {
						2 !== cV ? eD.a2R(eD.jg, 3235) : (wV = a7S(wV, 9), 0 !== fH[wV] && 0 !== fH[aw] && eR.a24(0, [wV], !0) && e9.la(wV, 1))
					} : function(wV) {
						var mx;
						3 !== cV ? eD.a2R(eD.jg, 3236) : (mx = a7S(wV, 9), wV = a7S(wV, 9), 0 !== fH[mx] && 0 !== fH[wV] && 0 !== fH[aw] && eR.a24(1, [mx], !0) && (eA.n9(mx, 3, 96), eA.n9(wV, 4, 96), e9.nC(mx, wV)))
					})(wV)
				}(wV)
			}(vn, wV)
		}, this.wg = function(wV) {
			cd = 1, cV = wV.length, (2 === a7S(wV, 2) ? function(wV) {
				cd += 20;
				for (var xv, xu, name, wU = a7S(wV, 9), jL = a7S(wV, 14), jN = a7S(wV, 4), xM = 1 === a7S(wV, 1), xN = a7S(wV, 6), xO = a7S(wV, 14), a7l = a7S(wV, 9) + 1, iC = [], a4 = 0; a4 < a7l; a4++) xv = a7S(wV, 1), xu = [a7S(wV, 6), a7S(wV, 6), a7S(wV, 6)], name = a7Z(a7S(wV, 5), wV), iC.push({
					name: name,
					xu: xu,
					xv: xv
				});
				aJ.w2(), xY(xN, xO), 1 === iC.length && dy.xn(jN);
				jK(jL, wU, iC, jN, xM)
			} : function(wV) {
				cd += 20;
				for (var xv, xu, iG, name, wU = a7S(wV, 1), jL = a7S(wV, 14), jN = a7S(wV, 4), xM = 1 === a7S(wV, 1), xN = a7S(wV, 6), xO = a7S(wV, 14), iC = [], a4 = 0; a4 < 2; a4++) xv = a7S(wV, 1), xu = [a7S(wV, 6), a7S(wV, 6), a7S(wV, 6)], iG = a7S(wV, 14), name = a7Z(a7S(wV, 5), wV), iC.push({
					name: name,
					xu: xu,
					iG: iG,
					xv: xv
				});
				aJ.w2(), xY(xN, xO), jK(jL, wU, iC, jN, xM)
			})(wV)
		}, this.wZ = function(wV) {
			cd = 1, cV = wV.length;
			var a7V = a7S(wV, 2),
				a7k = a7S(wV, 10);
			return eD.wJ > eD.we && (a7k += eD.we), eD.wJ === a7k ? (eD.jg = a7k, !1) : (eD.close(eD.wJ, 3247), eD.jg = a7k, eZ.wT = a7S(wV, 10), eZ.wU = a7S(wV, 2 === a7V ? 9 : 1), eD.rx(a7k, 5) && iv.a2O(), !0)
		}, this.a7H = function(wV, df) {
			cd = 2;
			var id, player, r3, cM, fL, fM, h4 = 8 * wV.length;
			if (a7S(wV, 3) !== df) eD.a2R(eD.jg, 3248);
			else
				for (; cd + 8 <= h4;) id = a7S(wV, 3), player = a7S(wV, 9), 0 === id ? (r3 = a7S(wV, 10), cM = a7S(wV, 9), eG.fa(player, r3, cM = cM === player ? b8 : cM)) : 1 === id ? (r3 = a7S(wV, 10), fL = a7S(wV, 11), fM = a7S(wV, 11), eG.fc(player, r3, fL, fM)) : 2 === id ? (cM = a7S(wV, 9), eG.ff(player, cM = cM === player ? b8 : cM)) : 3 === id ? eG.fi(player) : 4 === id ? (fL = a7S(wV, 7), eA.n9(player, 0, fL)) : 5 === id ? eG.fq(player) : 6 === id ? eG.fh(player, a7S(wV, 1)) : 7 === id && eG.fg(player, 1 + a7S(wV, 11))
		}
	}

	function a2p() {
		this.a5r = 0, this.a5s = 0, this.a5n = 0, this.a5o = 0, this.a5p = 0, this.a5q = 0, this.uI = [0, 0, 0, 0], this.h3 = function() {
			this.a5r = gn.gG(), this.a5s = gn.cF(), this.a5n = -this.a5r, this.a5o = -this.a5s, this.a5p = gF / g8, this.a5q = cB / g8, this.uI[0] = Math.floor(this.a5n), this.uI[1] = Math.floor(this.a5o), this.uI[2] = Math.floor(this.uI[0] + this.a5p + 1), this.uI[3] = Math.floor(this.uI[1] + this.a5q + 1), hC.uF = !0
		}
	}

	function kd() {
		var qS, ga;
		this.bp = function() {
			qS = 1, ga = 0
		}, this.dF = function() {
			0 < qS && (ga = 0 === ga ? c4.gg + 16 : ga, qS = (qS -= .001 * (c4.gg - ga)) < 0 ? 0 : qS, ga = c4.gg, c4.c5 = !0)
		}, this.cG = function() {
			0 < qS && (cH.fillStyle = "rgba(0,0,0," + qS + ")", cH.fillRect(0, 0, gF, cB))
		}
	}

	function ki() {
		function a7w(a34, fL, fM, c1, cw) {
			zy <= a34 || (xJ === a34 && (cH.fillStyle = oV, cH.fillRect(fL, fM, c1, cw), cH.fillStyle = cK), cH.strokeRect(fL, fM, c1, cw), cH.fillText(jq.bz(a34).name, Math.floor(fL + .5 * c1), Math.floor(fM + .55 * cw)))
		}
		this.lF = !1, this.xm = [0, 0, 0, 0], this.show = function() {
			this.lF = !0, this.m0(), c4.c5 = !0
		}, this.m0 = function() {
			var a70 = as(zy + zy % 2, 2),
				a70 = s - a70 * cA;
			this.xm[2] = q ? Math.floor(.75 * pW) : Math.floor(.5 * pW), this.xm[3] = Math.floor(1.2 * this.xm[2]), this.xm[3] > a70 && (this.xm[3] = a70, this.xm[2] = Math.floor(a70 / 1.2)), this.xm[0] = Math.floor((r - this.xm[2]) / 2), this.xm[1] = Math.floor((s - this.xm[3]) / 2)
		}, this.lr = function(fL, fM) {
			return !(fL < this.xm[0] || fM < this.xm[1] || fL > this.xm[0] + this.xm[2] || fM > this.xm[1] + this.xm[3])
		}, this.c7 = function(fL, fM) {
			var nc, a70 = as(zy + zy % 2, 2);
			return c4.c5 = !0, fL < this.xm[0] || fM < this.xm[1] || fL > this.xm[0] + this.xm[2] || fM > this.xm[1] + this.xm[3] ? !(this.lF = !1) : (nc = Math.floor(.13 * this.xm[3]), fM < this.xm[1] + nc ? fL > this.xm[0] + this.xm[2] - 1.2 * nc && (this.lF = !1) : (fM = (fM = Math.floor(a70 * (fM - this.xm[1] - nc) / (this.xm[3] - nc))) < 0 ? 0 : a70 - 1 < fM ? a70 - 1 : fM, fL > this.xm[0] + this.xm[2] / 2 && (fM += a70), zy <= fM || xY(fM, Math.floor(16384 * Math.random()))), !0)
		}, this.cG = function() {
			var a4, fA, nc = Math.floor(.13 * this.xm[3]),
				a70 = as(zy + zy % 2, 2),
				nd = (this.xm[3] - nc - (a70 + 1) * cA) / a70,
				i8 = Math.floor((this.xm[2] - 3 * cA) / 2);
			for (cH.lineWidth = 2, cH.textAlign = cJ, cH.textBaseline = cI, cH.font = bt + Math.floor(.48 * nd) + bu, cH.fillStyle = i2, cH.fillRect(this.xm[0], this.xm[1], this.xm[2], this.xm[3]), cH.fillStyle = oV, cH.fillRect(this.xm[0], this.xm[1], this.xm[2], nc), cH.strokeStyle = cK, cH.strokeRect(this.xm[0], this.xm[1], this.xm[2], this.xm[3]), cH.fillStyle = cK, a4 = a70 - 1; 0 <= a4; a4--) fA = Math.floor(this.xm[1] + nc + cA + a4 * (nd + cA)), a7w(a4, this.xm[0] + cA, fA, i8, nd), a7w(a4 + a70, this.xm[0] + i8 + 2 * cA, fA, i8, nd);
			fr.mE(Math.floor(this.xm[0] + this.xm[2] - .8 * nc), Math.floor(this.xm[1] + .25 * nc), Math.floor(.5 * nc)), cH.setTransform(1, 0, 0, 1, 0, 0)
		}
	}

	function ke() {
		var cd;

		function a7z(wV) {
			var k = j(),
				a81 = Math.floor(k / 16777216);
			a7x(wV, 24, a81), a7x(wV, 24, k - 16777216 * a81)
		}

		function a80(wV) {
			a7x(wV, 14, a2X), a7x(wV, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), a7x(wV, 1, a2b ? 1 : 0), a7x(wV, 1, a2a ? 1 : 0), a7x(wV, 5, (new Date).getHours() % 24)
		}

		function a7y(a85) {
			return as(a85, 8) + (0 < a85 % 8 ? 1 : 0)
		}

		function a7x(a7s, b3, ns) {
			for (var cm, a4 = cd; a4 < cd + b3; a4++) a7s[cm = as(a4, 8)] = (ns >> b3 - (a4 - cd + 1) & 1) << 7 - a4 % 8 | a7s[cm];
			cd += b3
		}
		this.s0 = function() {
			var wV = new Uint8Array(3);
			a7x(wV, 1, cd = 0), a7x(wV, 3, 0), a7x(wV, 14, a2X), eD.send(0, wV)
		}, this.vl = function(vn) {
			var hJ = m.iX(ji.xt()),
				n0 = hJ.length,
				wV = new Uint8Array(a7y(105 + 10 * n0)),
				xu = (a7x(wV, 1, cd = 0), a7x(wV, 3, 1), a7x(wV, 10, a2c), cC.mH[2].il.vS());
			a7x(wV, 6, xu[0]), a7x(wV, 6, xu[1]), a7x(wV, 6, xu[2]), a7z(wV), a80(wV);
			for (var a4 = 0; a4 < n0; a4++) a7x(wV, 10, hJ[a4]);
			eD.wJ = vn, eD.send(vn, wV)
		}, this.ub = function(vn, id) {
			var wV = new Uint8Array(5);
			a7x(wV, 1, cd = 0), a7x(wV, 3, 7), a7x(wV, 3, 0), a7x(wV, 14, a2X), a7x(wV, 1, id), a7x(wV, 16, Math.abs(4096 + cD.position[id] + cD.ua[id]) % 65536), eD.send(vn, wV)
		}, this.a2P = function(vn) {
			var a4, wV = new Uint8Array(100),
				hJ = (a7x(wV, 1, cd = 0), a7x(wV, 3, 7), a7x(wV, 3, 1), a7x(wV, 14, a2e), m.iX(a2f)),
				n0 = qz(hJ.length, 77);
			for (a7x(wV, 7, n0), a4 = 0; a4 < n0; a4++) a7x(wV, 10, hJ[a4]);
			eD.send(vn, wV)
		}, this.yJ = function(vn) {
			var a4, pX;
			if (!(ji.y9 + 7e3 > c4.gg)) {
				ji.y9 = c4.gg;
				var wV = new Uint8Array(17);
				for (a7x(wV, 1, cd = 0), a7x(wV, 3, 7), a7x(wV, 3, 2), a7z(wV), pX = mh(ji.y8.length - 20, 0), a4 = ji.y8.length - 1; pX <= a4; a4--) a7x(wV, 4, Math.abs(ji.y8.charCodeAt(a4) - 48) % 10);
				eD.send(vn, wV)
			}
		}, this.a2G = function(vn, a2F) {
			var wV = new Uint8Array(1);
			a7x(wV, 1, cd = 0), a7x(wV, 3, 5), a7x(wV, 1, a2F ? 1 : 0), eD.send(vn, wV)
		}, this.xc = function(xL) {
			var wV = new Uint8Array(1);
			a7x(wV, 1, cd = 0), a7x(wV, 3, 2), a7x(wV, 4, xL), eD.send(eD.wJ, wV)
		}, this.a2O = function() {
			var wV = new Uint8Array(7);
			a7x(wV, 1, cd = 0), a7x(wV, 3, 6), a7x(wV, 8, eD.n7()), a7x(wV, 10, eZ.wT), a7x(wV, 9, eZ.wU), a7x(wV, 10, a2c), a7x(wV, 14, a2X), eD.send(eD.jg, wV)
		}, this.lW = function(r3, cM) {
			var wV = new Uint8Array(3);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 0), a7x(wV, 10, r3), a7x(wV, 9, cM), eD.send(eD.jg, wV)
		}, this.lY = function(r3, fL, fM) {
			var wV = new Uint8Array(5);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 1), a7x(wV, 10, r3), a7x(wV, 11, fL), a7x(wV, 11, fM), eD.send(eD.jg, wV)
		}, this.qJ = function(cM) {
			var wV = new Uint8Array(2);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 2), a7x(wV, 1, 0), a7x(wV, 9, cM), eD.send(eD.jg, wV)
		}, this.qK = function(id) {
			var wV = new Uint8Array(2);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 2), a7x(wV, 1, 1), a7x(wV, 11, id - 1), eD.send(eD.jg, wV)
		}, this.iw = function(zO, ij) {
			var wV = new Uint8Array(4);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 3), a7x(wV, 12, zO), a7x(wV, 10, ij), eD.send(eD.jg, wV)
		}, this.m8 = function() {
			var wV = new Uint8Array(1);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 4), eD.send(eD.jg, wV)
		}, this.oN = function(bs) {
			var wV = new Uint8Array(2);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 5), a7x(wV, 7, bs), eD.send(eD.jg, wV)
		}, this.oO = function(a82, a83) {
			e9.mw(aw, a83, a82);
			var wV = new Uint8Array(3);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 6), a7x(wV, 2, 0), a7x(wV, 9, a83), a7x(wV, 7, a82), eD.send(eD.jg, wV)
		}, this.lb = function(my) {
			var wV = new Uint8Array(2);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 6), a7x(wV, 2, 1), a7x(wV, 9, my), eD.send(eD.jg, wV)
		}, this.lT = function(a84, target) {
			var a4, b3 = a84.length,
				wV = new Uint8Array(a7y(15 + 9 * b3));
			for (cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 6), a7x(wV, 2, 2), a7x(wV, 9, target), a4 = 0; a4 < b3; a4++) a7x(wV, 9, a84[a4]);
			eD.send(eD.jg, wV)
		}, this.qu = function(qt) {
			var wV = new Uint8Array(1);
			cd = 0, a7x(wV, 1, 1), a7x(wV, 3, 7), a7x(wV, 1, qt ? 1 : 0), eD.send(eD.jg, wV)
		}, this.xr = function(vn) {
			var wV = new Uint8Array(4);
			a7x(wV, 1, cd = 0), a7x(wV, 3, 3), a80(wV), eD.send(vn, wV)
		}
	}
	setTimeout(aI, 1e4);
 </script>