export class ResourceModel {
    constructor({
        creators,
        description,
        subject,
        platform,
        format,
        createdAt,
        updatedAt,
        price,
        difficulty,
        avgRating,
        totalRatings,
        hours,
        pages,
        tags
    }) {
        this.creators = creators ?? [this.platform]
        this.description = description
        this.subject = subject
        this.platform = platform
        this.format = format
        this.createdAt = createdAt ?? Date.now()
        this.updatedAt = updatedAt ?? Date.now()
        this.dateAdded = Date.now()
        this.price = price
        this.difficulty = difficulty ?? "Unknown"
        this.avgRating = avgRating ?? 0
        this.totalRatings = totalRatings ?? 0 
        this.hours = hours
        this.pages = pages
        this.tags = tags
    }

    // Use to get plain javascript object
    valueOf() {
        return {
            creators: this.creators,
            description: this.description,
            subject: this.subject,
            platform: this.platform,
            format: this.format,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            dateAdded: this.dateAdded,
            price: this.price,
            difficulty: this.difficulty,
            avgRating: this.avgRating,
            totalRatings: this.totalRatings,
            hours: this.hours,
            pages: this.pages,
            tags: this.tags,
        }
    }
}