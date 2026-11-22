import{readFileSync as R,readdirSync as d,mkdirSync as m,writeFileSync as w}from'node:fs';
process.umask(18);
const T=`!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%"%`;
function run(p,g){
const D=new Int32Array(576);let s=0,c=0;
const o=new Uint8Array(65536);let l=0,i=0,pc=0,n=0;
const e=x=>[o.subarray(0,l),x];
for(;;){
if(n==1e6)return e(10);
if(pc<0||pc>=p.length)return e(9);
const op=p[pc],v=T.charCodeAt(op)-33;
if(op>83||v<0)return e(5);
const im=v>>4,po=v>>2&3,pu=v&3;
if(pc+im>=p.length)return e(9);
n++;const x=pc+1+im;
if(s<po)return e(2);
if(s-po+pu>256)return e(3);
pc=x;
if(op==0)return e(0);
if(op==1){D[s++]=p[x-1]<<24>>24;continue}
if(op==2){D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;continue}
if(op==3){s--;continue}
if(op==4){D[s]=D[s-1];s++;continue}
if(op==5){const t=D[s-1];D[s-1]=D[s-2];D[s-2]=t;continue}
if(op==6){D[s]=D[s-2];s++;continue}
if(op==7){const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;continue}
if(op==23||op==27){D[s-1]=op==23?-D[s-1]|0:~D[s-1];continue}
if(op>15&&op<35){
const b=D[s-1],a=D[s-2];let r;
if(op==16)r=a+b|0;
else if(op==17)r=a-b|0;
else if(op==18)r=Math.imul(a,b);
else if(op==19){if(!b)return e(4);r=a==(-2)**31&&b==-1?a:a/b|0}
else if(op==20){if(!b)return e(4);r=b==-1?0:a%b|0}
else if(op==21){if(!b)return e(4);r=(a>>>0)/(b>>>0)|0}
else if(op==22){if(!b)return e(4);r=(a>>>0)%(b>>>0)|0}
else if(op==24)r=a&b;
else if(op==25)r=a|b;
else if(op==26)r=a^b;
else if(op==28)r=a<<(b&31);
else if(op==29)r=a>>(b&31);
else if(op==30)r=a>>>(b&31)|0;
else if(op==32)r=a==b?1:0;
else if(op==33)r=a<b?1:0;
else r=(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=r;continue}
if(op>47&&op<51){
if(op==48||(op==49)==(D[--s]==0))pc=x+((p[x-2]|p[x-1]<<8)<<16>>16);continue}
if(op==51){
if(c==64)return e(7);
D[256+c++]=x;pc=p[x-2]|p[x-1]<<8;continue}
if(op==52){
if(!c)return e(8);
pc=D[256+--c];continue}
if(op==64){
const a=D[s-1];
if(a>>>0>255)return e(6);
D[s-1]=D[320+a];continue}
if(op==65){
const a=D[s-1],v=D[s-2];
if(a>>>0>255)return e(6);
s-=2;D[320+a]=v;continue}
if(op==80){
const t=''+D[s-1];
if(l+t.length>65536)return e(11);
s--;o.set(Buffer.from(t),l);l+=t.length;continue}
if(op==81){
if(l>65535)return e(11);
o[l++]=D[--s]&255;continue}
if(op==82){D[s++]=i<g.length?g[i++]:-1;continue}
if(op==83)return e(D[--s]&255);
}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of d(I).sort()){const a=I+'/'+id,b=O+'/'+id,r=run(R(a+'/program.bin'),R(a+'/input.bin'));m(b,{recursive:!0});w(b+'/stdout.bin',r[0]);w(b+'/exit.txt',r[1]+'\n')}
