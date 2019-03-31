document.getElementById('sub').onclick = calc;


function calc () {
	
			var a, a1, b, b1, c, d, e, f, g, i, j, h, k, l, m, n, o;
			a = document.getElementById("he").value; //высота
				if (a<1300||a>3200) {
				alert("Минимальная высота конструкции 1300мм, максимальная высота 3200мм, измените габариты конструкции");
				throw "stop";
				}
				
			b = document.getElementById("wi").value; // ширина
				if (b>6445) {
				alert("Максимальная ширина конструкции не должна превышать 6445мм, измените габариты конструкции");
				throw "stop";
				}
			
			c = document.getElementById("pi").value; // кол-во конструкций
			
			d = document.getElementById("mo").value; // цена стеклопакета за 1 м.кв.
			
			e = a*b/1000000;						 // площадь одной конструкции
			
			console.log("площадь одной конструкции:" + e);
			
			a1 = a - 87;
			console.log("высота створки:" + a1.toFixed(0));
				
			var col = document.getElementsByName("color");
			
				for ( var i=0; i<col.length; i++) {

					if (document.getElementById("white").checked) {
						
			var t = document.getElementsByName("type");
			
				for ( var i=0; i<t.length; i++) {

					if (document.getElementById("one").checked) {
																
				b1 = b/2 + 54;
				console.log("ширина створки:" + b1.toFixed(0)); 
				
					if (b1<720) {
					alert("Ширина створки меньше допустимой, минимальная ширина створки 720мм, измените габариты конструкции");
					throw "stop";
					}
					
				o = a1/b1;
				
					if (o>2.5) {
				alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
				throw "stop";
					}
					
				if(1.9<=e&&e<3) {
					f = 38602;
				}
				else if(3<=e&&e<4) {
					f = 29504;
				}
				else if(4<=e&&e<5) {
					f = 22553;
				}
				else if(5<=e&&e<6) {
					f = 20015;
				}
				else if(6<=e&&e<7) {
					f = 16936;
				}
				else if(7<=e&&e<8) {
					f = 14597;
				}
				else if(8<=e&&e<9) {
					f = 12918;
				}
				else if(9<=e&&e<10) {
					f = 12055;
				}				
				else if(10<=e&&e<11) {
					f = 10929;
				}
				else if(11<=e&&e<12) {
					f = 10727;
				}
				else if(12<=e&&e<13) {
					f = 9953;
				}
				else if(13<=e&&e<14) {
					f = 9270;
				}
				else if(14<=e&&e<15) {
					f = 8670;
				}
				else if(15<=e&&e<16) {
					f = 8405;
				}
				else if(16<=e&&e<17) {
					f = 7930;
				}
				else if(17<=e&&e<18) {
					f = 7601;
				}
				else if(18<=e&&e<19) {
					f = 7233;
				}
				else if(19<=e&&e<20) {
					f = 6957;
				}
				else {
					f = 6653;
				}	
				
			}
					else if (document.getElementById("two").checked) {
										
				b1 = b/2 + 9.5;
					console.log("ширина створки:" + b1.toFixed(0));
					if (b1<720) {
					alert("Ширина створки меньше допустимой, измените габариты конструкции");
				throw "stop";
				}
				
				o = a1/b1;
					if (o>2.5) {
					alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
					throw "stop";
				}	
				
				if(1.9<=e&&e<3) {
					f = 51731;
				}
									
				else if(3<=e&&e<4) {
					f = 37973;
				}
				else if(4<=e&&e<5) {
					f = 29090;
				}
				else if(5<=e&&e<6) {
					f = 25216;
				}
				else if(6<=e&&e<7) {
					f = 21472;
				}
				else if(7<=e&&e<8) {
					f = 18594;
				}
				else if(8<=e&&e<9) {
					f = 16818;
				}
				else if(9<=e&&e<10) {
					f = 15700;
				}				
				else if(10<=e&&e<11) {
					f = 14505;
				}
				else if(11<=e&&e<12) {
					f = 14351;
				}
				else if(12<=e&&e<13) {
					f = 13300;
				}
				else if(13<=e&&e<14) {
					f = 12401;
				}
				else if(14<=e&&e<15) {
					f = 11602;
				}
				else if(15<=e&&e<16) {
					f = 11417;
				}
				else if(16<=e&&e<17) {
					f = 10773;
				}
				else if(17<=e&&e<18) {
					f = 10295;
				}
				else if(18<=e&&e<19) {
					f = 9752;
				}
				else if(19<=e&&e<20) {
					f = 9383;
				}
				else {
					f = 8978;
				}
					} else if (document.getElementById("tree").checked) {
							
						b1 = b/4 + 280/4;
					console.log("ширина створки:" + b1.toFixed(0));
					if (b1<720) {
					alert("Ширина створки меньше допустимой, измените габариты конструкции");
					throw "stop";
					}
						o = a1/b1;
					if (o>2.5) {
					alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
					throw "stop";
					}	
			
				if(4<=e&&e<5) {
					f = 31063;
				}
				else if(5<=e&&e<6) {
					f = 25287;
				}
				else if(6<=e&&e<7) {
					f = 21248;
				}
				else if(7<=e&&e<8) {
					f = 18750;
				}
				else if(8<=e&&e<9) {
					f = 16818;
				}
				else if(9<=e&&e<10) {
					f = 15727;
				}				
				else if(10<=e&&e<11) {
					f = 15440;
				}
				else if(11<=e&&e<12) {
					f = 14117;
				}
				else if(12<=e&&e<13) {
					f = 13052;
				}
				else if(13<=e&&e<14) {
					f = 12114;
				}
				else if(14<=e&&e<15) {
					f = 11419;
				}
				else if(15<=e&&e<16) {
					f = 10626;
				}
				else if(16<=e&&e<17) {
					f = 10149;
				}
				else if(17<=e&&e<18) {
					f = 9647;
				}
				else if(18<=e&&e<19) {
					f = 9400;
				}
				else if(19<=e&&e<20) {
					f = 8931;
				}
				else {
					f = 8560;
				}
					} else if (document.getElementById("four").checked) {
						
					b1 = b/4 + 280/4;
					console.log("ширина створки:" + b1.toFixed(0));
					if (b1<720) {
					alert("Ширина створки меньше допустимой, измените габариты конструкции");
					throw "stop";
				}
					o = a1/b1;
					if (o>2.5) {
					alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
					throw "stop";
				}	
				if(4<=e&&e<5) {
					f = 31114;
				}
				else if(5<=e&&e<6) {
					f = 25355;
				}
				else if(6<=e&&e<7) {
					f = 21679;
				}
				else if(7<=e&&e<8) {
					f = 18715;
				}
				else if(8<=e&&e<9) {
					f = 16492;
				}
				else if(9<=e&&e<10) {
					f = 15852;
				}				
				else if(10<=e&&e<11) {
					f = 15553;
				}
				else if(11<=e&&e<12) {
					f = 14221;
				}
				else if(12<=e&&e<13) {
					f = 13052;
				}
				else if(13<=e&&e<14) {
					f = 12156;
				}
				else if(14<=e&&e<15) {
					f = 11458;
				}
				else if(15<=e&&e<16) {
					f = 10687;
				}
				else if(16<=e&&e<17) {
					f = 10245;
				}
				else if(17<=e&&e<18) {
					f = 9691;
				}
				else if(18<=e&&e<19) {
					f = 9652;
				}
				else if(19<=e&&e<20) {
					f = 9171;
				}
				else {
					f = 8783;
				}
					}
				}
			
		      
			}
			 if (document.getElementById("gray").checked) {
				var t = document.getElementsByName("type");
				for ( var i=0; i<t.length; i++) {
					
					if (document.getElementById("one").checked) {
												
					b1 = b/2 + 54;
					console.log("ширина створки:" + b1.toFixed(0)); 
						if (b1<720) {
					alert("Ширина створки меньше допустимой, минимальная ширина створки 720мм, измените габариты конструкции");
					throw "stop";
					}
					o = a1/b1;
					if (o>2.5) {
				alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
				throw "stop";
				}		
				if(1.9<=e&&e<3) {
					f = 40237;
				}
						
				else if(3<=e&&e<4) {
					f = 30782;
				}
				else if(4<=e&&e<5) {
					f = 23512;
				}
				else if(5<=e&&e<6) {
					f = 20886;
				}
				else if(6<=e&&e<7) {
					f = 17679;
				}
				else if(7<=e&&e<8) {
					f = 15234;
				}
				else if(8<=e&&e<9) {
					f = 13450;
				}
				else if(9<=e&&e<10) {
					f = 12550;
				}				
				else if(10<=e&&e<11) {
					f = 11375;
				}
				else if(11<=e&&e<12) {
					f = 11194;
				}
				else if(12<=e&&e<13) {
					f = 10383;
				}
				else if(13<=e&&e<14) {
					f = 9666;
				}
				else if(14<=e&&e<15) {
					f = 9037;
				}
				else if(15<=e&&e<16) {
					f = 8749;
				}
				else if(16<=e&&e<17) {
					f = 8252;
				}
				else if(17<=e&&e<18) {
					f = 7905;
				}
				else if(18<=e&&e<19) {
					f = 7520;
				}
				else if(19<=e&&e<20) {
					f = 7228;
				}
				else {
					f = 6911;
				}	
				
					} else if (document.getElementById("two").checked) {
						b1 = b/2 + 9.5;
					console.log("ширина створки:" + b1.toFixed(0));
					
					if (b1<720) {
					alert("Ширина створки меньше допустимой, измените габариты конструкции");
				throw "stop";
				}
					o = a1/b1;
					if (o>2.5) {
					alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
					throw "stop";
				}	
				if(1.9<=e&&e<3) {
					f = 53370;
				}
				
				else if(3<=e&&e<4) {
					f = 39254;
				}
				else if(4<=e&&e<5) {
					f = 30051;
				}
				else if(5<=e&&e<6) {
					f = 26100;
				}
				else if(6<=e&&e<7) {
					f = 22064;
				}
				else if(7<=e&&e<8) {
					f = 19218;
				}
				else if(8<=e&&e<9) {
					f = 16987;
				}
				else if(9<=e&&e<10) {
					f = 16197;
				}				
				else if(10<=e&&e<11) {
					f = 14984;
				}
				else if(11<=e&&e<12) {
					f = 14898;
				}
				else if(12<=e&&e<13) {
					f = 13803;
				}
				else if(13<=e&&e<14) {
					f = 12865;
				}
				else if(14<=e&&e<15) {
					f = 12033;
				}
				else if(15<=e&&e<16) {
					f = 11820;
				}
				else if(16<=e&&e<17) {
					f = 11150;
				}
				else if(17<=e&&e<18) {
					f = 10650;
				}
				else if(18<=e&&e<19) {
					f = 10087;
				}
				else if(19<=e&&e<20) {
					f = 9700;
				}
				else {
					f = 9279;
				}
					} 
					else if (document.getElementById("tree").checked) {
					
					b1 = b/4 + 280/4;
					console.log("ширина створки:" + b1.toFixed(0));
					
					if (b1<720) {
					alert("Ширина створки меньше допустимой, измените габариты конструкции");
				throw "stop";
				}
					o = a1/b1;
					if (o>2.5) {
					alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
					throw "stop";
				}	
					if(4<=e&&e<5) {
					f = 32169;
				}
				else if(5<=e&&e<6) {
					f = 26172;
				}
				else if(6<=e&&e<7) {
					f = 21986;
				}
				else if(7<=e&&e<8) {
					f = 19386;
				}
				else if(8<=e&&e<9) {
					f = 17078;
				}
				else if(9<=e&&e<10) {
					f = 16286;
				}				
				else if(10<=e&&e<11) {
					f = 16010;
				}
				else if(11<=e&&e<12) {
					f = 14635;
				}
				else if(12<=e&&e<13) {
					f = 13529;
				}
				else if(13<=e&&e<14) {
					f = 12554;
				}
				else if(14<=e&&e<15) {
					f = 11828;
				}
				else if(15<=e&&e<16) {
					f = 11007;
				}
				else if(16<=e&&e<17) {
					f = 10507;
				}
				else if(17<=e&&e<18) {
					f = 9974;
				}
				else if(18<=e&&e<19) {
					f = 9718;
				}
				else if(19<=e&&e<20) {
					f = 9234;
				}
				else {
					f = 8847;
				}
					} 
					
					else if (document.getElementById("four").checked) {
						
					b1 = b/4 + 280/4;
					console.log("ширина створки:" + b1.toFixed(0));
					
					if (b1<720) {
					alert("Ширина створки меньше допустимой, измените габариты конструкции");
				throw "stop";
				}
					o = a1/b1;
					if (o>2.5) {
					alert("соотношение высоты к ширине створок не должно превышать 2,5, измените габариты конструкции");
					throw "stop";
					
					if(4<=e&&e<5) {
					f = 32221;
				}
				else if(5<=e&&e<6) {
					f = 26247;
				}
				else if(6<=e&&e<7) {
					f = 22048;
				}
				else if(7<=e&&e<8) {
					f = 19352;
				}
				else if(8<=e&&e<9) {
					f = 16522;
				}
				else if(9<=e&&e<10) {
					f = 16415;
				}				
				else if(10<=e&&e<11) {
					f = 16126;
				}
				else if(11<=e&&e<12) {
					f = 14742;
				}
				else if(12<=e&&e<13) {
					f = 13575;
				}
				else if(13<=e&&e<14) {
					f = 12596;
				}
				else if(14<=e&&e<15) {
					f = 11868;
				}
				else if(15<=e&&e<16) {
					f = 11069;
				}
				else if(16<=e&&e<17) {
					f = 10604;
				}
				else if(17<=e&&e<18) {
					f = 10029;
				}
				else if(18<=e&&e<19) {
					f = 9972;
				}
				else if(19<=e&&e<20) {
					f = 9474;
				}
				else {
					f = 9071;
				}
					}
				}
			
				}
			 }
				}
			g = e*c;								 // площадь всего
		console.log("Площадь всего:" + g);
			i = d*g;								 // цена стеклопакетов всего
		console.log("цена стеклопакетов всего:" + i);
			j = f*g;								 // цена без СП
		console.log("цена без СП:" + j);
			h = j+i;								 // цена с СП
		console.log("цена c СП:" + h);
			k = j + (j/100*10);
		
			l = k+i;
			
			var element = document.querySelector("input[type=checkbox]");
			

			if (element.checked&&document.getElementById("dl").checked) {
				console.log("цена материалов с покраской:" + k);
				m = l + (l/100*60);
			}		
			else if (element.checked&&document.getElementById("rtag").checked) {
					console.log("цена материалов с покраской:" + k);
					n = l + (g * 650);
					m = n + (n/100*80);
				}
			else if (element.checked&&document.getElementById("rros").checked) {
					console.log("цена материалов с покраской:" + k);
					n = l + (g * 650) + 2000;
					m = n + (n/100*80);
				}
			else if (element.checked&&document.getElementById("rkras").checked) {
					console.log("цена материалов с покраской:" + k);
					n = l + (g * 650) + 8500;
					m = n + (n/100*80);
				}
			else if (document.getElementById("dl").checked) {
					m = h + (h/100*60);
				}
			else if (document.getElementById("rtag").checked) {
					n = h + (g * 650);
					m = n + (n/100*80);
				}
			else if (document.getElementById("rros").checked) {
					n = h + (g * 650) + 2000;
					m = n + (n/100*80);
				}
			else if (document.getElementById("rkras").checked) {
					n = h + (g * 650) + 8500;
					m = n + (n/100*80);
				}
			
			
			
				
			result.innerHTML = m.toFixed(2);
						
}
