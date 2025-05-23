<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Item extends Model
{
    protected $fillable = [
    'title',
    'status',
    'category',
    'price',
    'expiry_date',
    'location',
    'user_id',
    'content',
    'pictures'
];

    public function comments() :HasMany
    {
        return $this->hasMany(Comment::class);
    }
    public function attachments() :HasMany
    {
        return $this->hasMany(Attachment::class);
    }


}
