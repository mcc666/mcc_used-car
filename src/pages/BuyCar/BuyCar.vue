<template>
    <div>
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="输入车辆的品牌或者名称"
        style="width:100%;height:10%">
      </mt-search>
      <mt-button type="default">10-20w</mt-button>
      <mt-button type="default">20-35w</mt-button>
      <mt-button type="default">100w</mt-button>
      <mt-button type="default">suv</mt-button>
      <mt-button type="default">轿车</mt-button>
      <mt-button type="default">跑车</mt-button>
      <mt-button type="default">国产车</mt-button>
      <mt-button type="default">日系车</mt-button>
      <mt-index-list >
        <mt-index-section v-for="(val, index) in letterArr" :key="index"  :index="val">
          <mt-cell v-for="(carBrands,i) in carBrandArr[index]" :key="i" :title="carBrands"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<script>

    export default {
      data(){
        return {
          value:"",
          letterArr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
            "R","S","T","U","V","W","X","Y","Z"],
          carBrandArr:[
            ["奥迪","阿斯顿.马丁","阿尔法.罗密欧","爱康尼克"],
            ["奔驰","宝马","本田","别克","比亚迪"],
            ["长安","长城","车驰汽车","Cupra"],
            ["大众","道奇","DS","东南","东风"],
            ["Elemental"],
            ["丰田","福特","法拉利","福田"],
            ["广汽","GMC","国金汽车","光岗"],
            ["哈弗","红旗","海马","华泰"],
            ["Icona","Inferno","Italdesign"],
            ["吉利汽车","Jeep","捷豹","江淮","捷达","江铃"],
            ["凯迪拉克","凯翼","开瑞"],
            ["雷克萨斯","路虎","领克","雷诺","劳斯莱斯","兰博基尼","铃木"],
            ["马自达","名爵","玛莎拉蒂","摩根"],
            ["哪吒汽车","纳智捷"],
            ["讴歌","欧拉"],
            ["帕加尼","佩琪奥","Puritalia"],
            ["起亚","奇瑞","前途"],
            ["瑞驰","如虎","Rezvani"],
            ["斯柯达","三菱","上汽"],
            ["腾势","特斯拉","天际汽车","塔塔","天美"],
            ["Ultima","Uniti"],
            ["Venturi","vinfast","VanTas"],
            ["沃尔沃","五菱汽车","五十铃"],
            ["雪佛兰","现代","雪铁龙"],
            ["英菲尼迪","一汽","野马汽车"],
            ["众泰","中华","中兴"],
          ]
        }
      },
      computed:{

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
