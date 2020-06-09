<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryRecipe extends Model
{
    protected $fillable = [
        'category_id',
        'recipe_id',
    ];

    public function Recipe()
    {
        return $this->belongsto('App\Recipe');
    }
}
