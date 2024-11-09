<template>
    <div class="my-container">
      <v-row>    
        <v-col sm="10" md="8" offset-md="2" offset-sm="1">
          <div class="search-box">
            <v-row>    
              <v-col sm="5">
                <v-text-field
                  label="เลขที่เอกสารนำส่ง"
                  placeholder="เลขที่เอกสารนำส่ง"
                  variant="outlined"
                  hide-details="auto"
                ></v-text-field>
              </v-col>   
              <v-col sm="5">
                <v-text-field
                  label="วันที่ผ่านรายการ"
                  placeholder="วันที่ผ่านรายการ"
                  variant="outlined"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn 
                  color="primary"
                  prepend-icon="mdi mdi-magnify"
                  height="56"
                  width="100%"
                >ค้นหา</v-btn>
              </v-col>
            </v-row>
            <v-row>    
              <v-col sm="10">
                <v-text-field
                  label="ชื่อหน่วยงาน"
                  placeholder="ชื่อหน่วยงาน"
                  variant="outlined"
                  hide-details="auto"
                ></v-text-field>
              </v-col>   
              <v-col>
                <v-switch label="ภาษีสรรพสามิต" color="success"></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-col>        
      </v-row>
      <v-row>
        <v-col sm="12">
          <div class="search-box">
            <v-data-table :items="items"></v-data-table>
          </div>
        </v-col>
      </v-row>
      
    </div>
</template>

<script lang='ts' setup>

// import { defineComponent } from 'vue'
import { ref } from 'vue'
import _default from 'vuetify/util/colors';
const items = [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    }
  ]
const find = ref(50)
const increment = () =>{
  find.value--
}


</script>
<style scoped>
.my-container{
  min-block-size: 100vh;
  min-block-size: 100dvh;
  
}
.search-box{
  
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}
</style>