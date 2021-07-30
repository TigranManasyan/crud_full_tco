<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
       for($i = 1; $i <= 50;$i++) {
            DB::table('posts')->insert([
                'title' => 'Post N ' . $i,
                'author' => 'John Smith',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.',
                'created_at' => NOW(),
                'updated_at' => NOW(),
            ]);

       }
    }
}
